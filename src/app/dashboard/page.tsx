import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Truck, AlertTriangle, CheckCircle2, Navigation, User } from 'lucide-react'
import RouteAssignmentForm from '@/src/components/dashboard/route-assignment-form'
import RouteCalendar from '@/src/components/dashboard/route-calendar'

// Utilidad para contar estados
const countByStatus = (items: { status: string | null }[] | null, statusVal: string) => {
    if (!items) return 0
    return items.filter(
        (i) => i.status?.toLowerCase() === statusVal.toLowerCase()
    ).length
}

export default async function DashboardPage() {

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

    const routes = [
        {
            id: 'r1',
            name: 'Guayaquil - Quito',
            origin: 'Guayaquil',
            destination: 'Quito',
            distance_km: 420,
            standard_duration_minutes: 480,
            tanquear: true,
            active: true
        },
        {
            id: 'r2',
            name: 'Guayaquil - Cuenca',
            origin: 'Guayaquil',
            destination: 'Cuenca',
            distance_km: 200,
            standard_duration_minutes: 240,
            tanquear: false,
            active: true
        }
    ]

    const assignments = [
    // HOY
    {
        id: 'a1',
        folio: 'F-001',
        status: 'loading',
        carga_time: '2026-05-05T06:00:00',
        departure_datetime: '2026-05-05T08:00:00',
        arrival_datetime: '2026-05-05T16:00:00',
        company_routes: {
            name: 'Guayaquil - Quito',
            origin: 'Guayaquil',
            destination: 'Quito',
            tanquear: true
        },
        trucks: { plate_number: 'ABC-1234' },
        trailer: { id_number: 'TRL-001' },
        driver: { first_name: 'Carlos', last_name: 'Mendoza' }
    },
    {
        id: 'a2',
        folio: 'F-002',
        status: 'in_progress',
        carga_time: '2026-05-05T05:00:00',
        departure_datetime: '2026-05-05T06:00:00',
        arrival_datetime: '2026-05-05T14:00:00',
        company_routes: {
            name: 'Guayaquil - Cuenca',
            origin: 'Guayaquil',
            destination: 'Cuenca',
            tanquear: false
        },
        trucks: { plate_number: 'DEF-5678' },
        trailer: { id_number: 'TRL-002' },
        driver: { first_name: 'Luis', last_name: 'Ramirez' }
    },
    {
        id: 'a3',
        folio: 'F-003',
        status: 'scheduled',
        carga_time: '2026-05-05T15:00:00',
        departure_datetime: '2026-05-05T17:00:00',
        arrival_datetime: '2026-05-06T01:00:00',
        company_routes: {
            name: 'Guayaquil - Quito',
            origin: 'Guayaquil',
            destination: 'Quito',
            tanquear: true
        },
        trucks: { plate_number: 'JKL-3456' },
        trailer: { id_number: 'TRL-001' },
        driver: { first_name: 'Jorge', last_name: 'Castro' }
    },

    // MAÑANA
    {
        id: 'a4',
        folio: 'F-004',
        status: 'scheduled',
        carga_time: '2026-05-06T06:00:00',
        departure_datetime: '2026-05-06T08:00:00',
        arrival_datetime: '2026-05-06T16:00:00',
        company_routes: {
            name: 'Guayaquil - Cuenca',
            origin: 'Guayaquil',
            destination: 'Cuenca',
            tanquear: false
        },
        trucks: { plate_number: 'ABC-1234' },
        trailer: { id_number: 'TRL-002' },
        driver: { first_name: 'Carlos', last_name: 'Mendoza' }
    },
    {
        id: 'a5',
        folio: 'F-005',
        status: 'scheduled',
        carga_time: '2026-05-06T10:00:00',
        departure_datetime: '2026-05-06T12:00:00',
        arrival_datetime: '2026-05-06T20:00:00',
        company_routes: {
            name: 'Guayaquil - Quito',
            origin: 'Guayaquil',
            destination: 'Quito',
            tanquear: true
        },
        trucks: { plate_number: 'DEF-5678' },
        trailer: { id_number: 'TRL-003' },
        driver: { first_name: 'Luis', last_name: 'Ramirez' }
    },

    // PASADO MAÑANA
    {
        id: 'a6',
        folio: 'F-006',
        status: 'scheduled',
        carga_time: '2026-05-07T07:00:00',
        departure_datetime: '2026-05-07T09:00:00',
        arrival_datetime: '2026-05-07T17:00:00',
        company_routes: {
            name: 'Guayaquil - Quito',
            origin: 'Guayaquil',
            destination: 'Quito',
            tanquear: true
        },
        trucks: { plate_number: 'JKL-3456' },
        trailer: { id_number: 'TRL-001' },
        driver: { first_name: 'Jorge', last_name: 'Castro' }
    },
    {
        id: 'a7',
        folio: 'F-007',
        status: 'scheduled',
        carga_time: '2026-05-07T13:00:00',
        departure_datetime: '2026-05-07T15:00:00',
        arrival_datetime: '2026-05-07T22:00:00',
        company_routes: {
            name: 'Guayaquil - Cuenca',
            origin: 'Guayaquil',
            destination: 'Cuenca',
            tanquear: false
        },
        trucks: { plate_number: 'ABC-1234' },
        trailer: { id_number: 'TRL-002' },
        driver: { first_name: 'Carlos', last_name: 'Mendoza' }
    }
]

    const drivers = driversData.map(d => ({
        id: d.id,
        name: `${d.first_name} ${d.last_name || ''}`.trim(),
        status: d.status
    }))

    // 🔹 FILTROS
    const availableTrucks = trucks.filter((t: any) => t.status === 'available')
    const availableTrailers = trailers.filter((t: any) => t.status === 'available')
    const availableDrivers = drivers.filter((d: any) => d.status === 'available')
    const activeRoutes = routes

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
                <p className="text-muted-foreground mt-1">
                    Métricas principales del sistema de gestión de flota.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                
                {/* TRUCKS */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                            <CardTitle>Estado de Camiones</CardTitle>
                            <CardDescription>Resumen de unidades tractoras</CardDescription>
                        </div>
                        <Truck className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold mb-4">
                            {trucks.length} <span className="text-sm text-muted-foreground">Total</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                            <div>
                                <CheckCircle2 className="mx-auto mb-1 text-green-500" />
                                {countByStatus(trucks, 'available')}
                                <div>Disponibles</div>
                            </div>
                            <div>
                                <Navigation className="mx-auto mb-1 text-blue-500" />
                                {countByStatus(trucks, 'in_route')}
                                <div>En Ruta</div>
                            </div>
                            <div>
                                <AlertTriangle className="mx-auto mb-1 text-yellow-500" />
                                {countByStatus(trucks, 'maintenance')}
                                <div>Taller</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* TRAILERS */}
                <Card>
                    <CardHeader>
                        <CardTitle>Remolques</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold mb-4">{trailers.length}</div>
                        {countByStatus(trailers, 'available')} disponibles
                    </CardContent>
                </Card>

                {/* DRIVERS */}
                <Card>
                    <CardHeader>
                        <CardTitle>Conductores</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold mb-4">{drivers.length}</div>
                        {countByStatus(drivers, 'available')} disponibles
                    </CardContent>
                </Card>
            </div>

            {/* CALENDAR */}
            <RouteCalendar assignments={assignments} />

            {/* FORM */}
            <RouteAssignmentForm
                routes={activeRoutes}
                trucks={availableTrucks}
                trailers={availableTrailers}
                drivers={availableDrivers}
            />
        </div>
    )
}