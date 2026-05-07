export const trucks = [
  { id: 't1', plate_number: 'ABC-1234', status: 'available' },
  { id: 't2', plate_number: 'DEF-5678', status: 'in_route' },
  { id: 't3', plate_number: 'GHI-9012', status: 'maintenance' },
  { id: 't4', plate_number: 'JKL-3456', status: 'available' },
]

export const trailers = [
  { id: 'tr1', id_number: 'TRL-001', status: 'available' },
  { id: 'tr2', id_number: 'TRL-002', status: 'in_route' },
  { id: 'tr3', id_number: 'TRL-003', status: 'maintenance' },
]

export const drivers = [
  { id: 'd1', first_name: 'Carlos', last_name: 'Mendoza', status: 'available' },
  { id: 'd2', first_name: 'Luis', last_name: 'Ramirez', status: 'in_route' },
  { id: 'd3', first_name: 'Jorge', last_name: 'Castro', status: 'available' },
  { id: 'd4', first_name: 'Pedro', last_name: 'Vera', status: 'unavailable' },
]

export const routes = [
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

export const assignments = [
  {
    id: 'a1',
    folio: 'F-001',
    status: 'scheduled',
    carga_time: '2026-05-05T08:00:00',
    departure_datetime: '2026-05-05T10:00:00',
    arrival_datetime: '2026-05-05T18:00:00',
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
    carga_time: '2026-05-05T06:00:00',
    departure_datetime: '2026-05-05T07:00:00',
    arrival_datetime: '2026-05-05T15:00:00',
    company_routes: {
      name: 'Guayaquil - Cuenca',
      origin: 'Guayaquil',
      destination: 'Cuenca',
      tanquear: false
    },
    trucks: { plate_number: 'DEF-5678' },
    trailer: { id_number: 'TRL-002' },
    driver: { first_name: 'Luis', last_name: 'Ramirez' }
  }
]