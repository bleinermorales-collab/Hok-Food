## BetPredict AI - App de Predicciones

### Estructura de páginas
1. **Dashboard** - Resumen de predicciones del día, estadísticas de aciertos
2. **Fútbol** - Predicciones de partidos con análisis de IA (ligas principales)
3. **Slots** - Análisis de patrones y estrategias para tragamonedas
4. **Historial** - Registro de predicciones pasadas y porcentaje de aciertos
5. **Perfil** - Configuración del usuario

### Funcionalidades
- **Predicciones con IA**: Edge function usando Lovable AI para generar predicciones basadas en datos
- **Análisis de partidos de fútbol**: Probabilidades, estadísticas, recomendaciones
- **Análisis de slots**: Patrones, RTP, estrategias de apuestas
- **Historial de predicciones**: Tracking de aciertos/fallos
- **Diseño minimalista**: Limpio, enfocado en datos, dark mode sutil

### Stack técnico
- React + Tailwind (minimalista)
- Lovable Cloud (backend + IA)
- Edge function para predicciones con Lovable AI Gateway
- Base de datos para historial de predicciones

### Pasos
1. Limpiar proyecto actual y configurar nuevo tema minimalista
2. Crear todas las páginas y componentes UI
3. Habilitar Lovable Cloud
4. Crear edge function de predicciones con IA
5. Conectar frontend con backend