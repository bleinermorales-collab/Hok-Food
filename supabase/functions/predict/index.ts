import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { type, context } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    let systemPrompt = "";
    let userPrompt = "";

    if (type === "football") {
      systemPrompt = `Eres un analista deportivo experto en fútbol. Genera predicciones basadas en análisis táctico, forma reciente, historial de enfrentamientos y cuotas. DEBES responder SOLO con un JSON válido con esta estructura exacta:
{
  "result": "home" | "draw" | "away",
  "confidence": number (0-100),
  "analysis": "string con análisis detallado en español, 2-3 oraciones",
  "suggestedBet": "string con la apuesta sugerida en español",
  "expectedGoals": { "home": number, "away": number }
}`;
      userPrompt = `Analiza este partido y genera una predicción:
- ${context.homeTeam} vs ${context.awayTeam}
- Liga: ${context.league}
- Cuotas: Local ${context.homeOdds} | Empate ${context.drawOdds} | Visitante ${context.awayOdds}`;
    } else if (type === "slots") {
      systemPrompt = `Eres un experto en análisis de tragamonedas y gestión de bankroll. Genera estrategias basadas en RTP, volatilidad y matemáticas del juego. DEBES responder SOLO con un JSON válido con esta estructura exacta:
{
  "strategy": "string con nombre de la estrategia en español",
  "riskLevel": "bajo" | "medio" | "alto",
  "suggestedBet": number,
  "analysis": "string con análisis en español, 2-3 oraciones",
  "tips": ["tip1 en español", "tip2", "tip3"]
}`;
      userPrompt = `Analiza esta tragamonedas y genera una estrategia:
- Nombre: ${context.name}
- Proveedor: ${context.provider}
- RTP: ${context.rtp}%
- Volatilidad: ${context.volatility}
- Apuesta mínima: $${context.minBet} | Máxima: $${context.maxBet}`;
    } else {
      return new Response(JSON.stringify({ error: "Tipo de predicción no válido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Límite de solicitudes excedido, intenta más tarde." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos agotados." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    // Extract JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No valid JSON in AI response");

    const prediction = JSON.parse(jsonMatch[0]);

    return new Response(JSON.stringify({ prediction }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("predict error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Error desconocido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
