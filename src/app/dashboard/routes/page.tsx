import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card'
import RouteListAdmin from '@/src/components/dashboard/routes/route-list-admin'
import RouteAssignmentsAdmin from '@/src/components/dashboard/routes/route-assignments-admin'


// Mock Data para rutas
const routes = [
    { id: 'r1', name: 'Ruta 1', origin: 'Guayaquil', destination: 'Quito', distance_km: 420, standard_duration_minutes: 480, tanquear: true, active: true },
    { id: 'r2', name: 'Ruta 2', origin: 'Guayaquil', destination: 'Cuenca', distance_km: 200, standard_duration_minutes: 240, tanquear: false, active: true },
    { id: 'r3', name: 'Ruta 3', origin: 'Quito', destination: 'Guayaquil', distance_km: 420, standard_duration_minutes: 480, tanquear: true, active: false },
]

const assignments = [
    { id: 'a1', route_id: 'r1', truck_id: 't1', trailer_id: 'tr1', driver_id: 'd1' },
    { id: 'a2', route_id: 'r2', truck_id: 't2', trailer_id: 'tr2', driver_id: 'd2' },
    { id: 'a3', route_id: 'r3', truck_id: 't3', trailer_id: 'tr3', driver_id: 'd3' },
]
export default async function RoutesPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Gestión de Rutas</h1>
            </div>

            <div className="flex flex-col gap-6">
                {/* 1st Card: Rutas Registradas */}
                <Card className="flex flex-col max-h-[500px]">
                    <CardHeader className="shrink-0">
                        <CardTitle>Registro de Rutas</CardTitle>
                        <CardDescription>Visualización y edición de rutas registradas para la compañía.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden p-0 px-6 pb-6">
                      <RouteListAdmin routes={routes}/>
                    </CardContent>
                </Card>

                {/* 2nd Card: Asignaciones de Rutas */}
                <Card className="flex flex-col max-h-[500px]">
                    <CardHeader className="flex flex-row items-center justify-between shrink-0">
                        <div className="space-y-1">
                            <CardTitle>Asignaciones de Rutas</CardTitle>
                            <CardDescription>Visualización, edición y eliminación de asignaciones de ruta.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden p-0 px-6 pb-6">
                        <RouteAssignmentsAdmin assignments={assignments} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
