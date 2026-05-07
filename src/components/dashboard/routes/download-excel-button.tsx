'use client'

import { Button } from '@/src/components/ui/button'
import { Download } from 'lucide-react'


export default function DownloadExcelButton({ assignments }: { assignments: any[] }) {
    const exportToExcel = () => {
        if (!assignments || assignments.length === 0) {
            alert('No hay datos para exportar')
            return
        }

        const formatDate = (dateString: string) => {
            if (!dateString) return '-'
            return new Date(dateString).toLocaleString('es-MX', {
                dateStyle: 'short',
                timeStyle: 'short',
            })
        }

        const dataToExport = assignments.map(a => ({
            'Ruta': a.company_routes?.name || '-',
            'Camión': a.trucks?.plate_number || '-',
            'Remolque': a.trailer?.id_number || '-',
            'Conductor': a.drivers?.first_name || '-',
            'Fecha de Carga': formatDate(a.carga_time),
            'Salida Programada': formatDate(a.departure_datetime),
            'Llegada Estimada': formatDate(a.arrival_datetime),
            'Folio': a.folio || '-',
            'Estado': a.status
        }))

    }

    return (
        <Button onClick={exportToExcel} variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Descargar Excel
        </Button>
    )
}