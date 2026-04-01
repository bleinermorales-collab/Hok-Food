import AppLayout from '@/components/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockStats } from '@/data/mock';
import { User } from 'lucide-react';

const Profile = () => {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-lg">
        <div>
          <h1 className="text-2xl font-bold text-foreground">👤 Perfil</h1>
          <p className="text-sm text-muted-foreground mt-1">Configuración de tu cuenta</p>
        </div>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Usuario Demo</p>
                <p className="text-sm text-muted-foreground">demo@betpredict.ai</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-base">Rendimiento</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Tasa de acierto</span><span className="font-medium text-foreground">{mockStats.winRate}%</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Total predicciones</span><span className="font-medium text-foreground">{mockStats.totalPredictions}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Ganancia total</span><span className="font-medium text-primary">${mockStats.totalProfit.toLocaleString()}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Mejor racha</span><span className="font-medium text-foreground">{mockStats.streak} victorias</span></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-base">Configuración</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><label className="text-sm text-muted-foreground mb-1.5 block">Nombre</label><Input defaultValue="Usuario Demo" /></div>
            <div><label className="text-sm text-muted-foreground mb-1.5 block">Email</label><Input defaultValue="demo@betpredict.ai" type="email" /></div>
            <Button className="w-full">Guardar cambios</Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Profile;
