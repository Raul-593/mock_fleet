import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import TruckListAdmin from '@/src/components/dashboard/vehicles/truck-list-admin'
import TrailerListAdmin from '@/src/components/dashboard/vehicles/trailer-list-admin'
import DriverListAdmin from '@/src/components/dashboard/vehicles/driver-list-admin'

// 🔹 MOCK DATA

const trucks = [
    { id: 't1', plate_number: 'ABC-1234', status: 'available' },
    { id: 't2', plate_number: 'DEF-5678', status: 'in_route' },
    { id: 't3', plate_number: 'GHI-9012', status: 'maintenance' },
    { id: 't4', plate_number: 'JKL-3456', status: 'available' },
]

const trailers = [
    { id: 'tr1', id_number: 'TRL-001', status: 'available' },
    { id: 'tr2', id_number: 'TRL-002', status: 'in_route' },
    { id: 'tr3', id_number: 'TRL-003', status: 'maintenance' },
]

const driversData = [
    { id: 'd1', first_name: 'Carlos', last_name: 'Mendoza', status: 'available' },
    { id: 'd2', first_name: 'Luis', last_name: 'Ramirez', status: 'in_route' },
    { id: 'd3', first_name: 'Jorge', last_name: 'Castro', status: 'available' },
    { id: 'd4', first_name: 'Pedro', last_name: 'Vera', status: 'unavailable' },
]

export default async function VehiclesPage() {

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Gestión de Vehículos y Personal</h1>
            </div>

            <div className="flex flex-col gap-6">
                
                {/* Driver Card */}
                <Card className="flex flex-col max-h-[500px]">
                    <CardHeader className="shrink-0">
                        <CardTitle>Conductores</CardTitle>
                        <CardDescription>
                            Gestión del personal operativo y su disponibilidad.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden p-0 px-6 pb-6">
                        <DriverListAdmin drivers={driversData} />
                    </CardContent>
                </Card>

                {/* Truck Card */}
                <Card className="flex flex-col max-h-[500px]">
                    <CardHeader className="shrink-0">
                        <CardTitle>Flota de Camiones</CardTitle>
                        <CardDescription>
                            Gestiona los vehículos tractores y su estado actual.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden p-0 px-6 pb-6">
                        <TruckListAdmin trucks={trucks} />
                    </CardContent>
                </Card>

                {/* Trailer Card */}
                <Card className="flex flex-col max-h-[500px]">
                    <CardHeader className="shrink-0">
                        <CardTitle>Remolques</CardTitle>
                        <CardDescription>
                            Registro de remolques y capacidad de carga.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden p-0 px-6 pb-6">
                        <TrailerListAdmin trailers={trailers} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
