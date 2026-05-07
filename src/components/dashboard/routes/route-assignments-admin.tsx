'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/src/components/ui/table'
import { Button } from '@/src/components/ui/button'
import { deleteRouteAssignment } from '@/src/app/dashboard/actions'
import { Trash2 } from 'lucide-react'

type Assignment = {
    id: string
    route_id: string
    truck_id: string
    trailer_id: string
    driver_id: string
}

export default function RouteAssignmentsAdmin({ assignments }: { assignments: Assignment[] }) {
    const [isDeleting, setIsDeleting] = useState<string | null>(null)

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de que deseas eliminar esta asignación?')) return

        setIsDeleting(id)
        const res = await deleteRouteAssignment(id)
        setIsDeleting(null)

        if (res?.success) {
            toast.success('Asignación eliminada correctamente')
        } else {
            toast.error('Error al eliminar la asignación')
        }
    }

    return (
        <div className="relative">
            <div className="max-h-[400px] overflow-y-auto w-full">
                <Table>
                    <TableHeader className="sticky top-0 bg-background z-10 w-full">
                        <TableRow>
                            <TableHead>ID Asignación</TableHead>
                            <TableHead>Ruta</TableHead>
                            <TableHead>Camión</TableHead>
                            <TableHead>Remolque</TableHead>
                            <TableHead>Conductor</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {assignments && assignments.length > 0 ? (
                            assignments.map((a) => (
                                <TableRow key={a.id}>
                                    <TableCell className="font-mono text-xs">{a.id}</TableCell>
                                    <TableCell>{a.route_id}</TableCell>
                                    <TableCell>{a.truck_id}</TableCell>
                                    <TableCell>{a.trailer_id}</TableCell>
                                    <TableCell>{a.driver_id}</TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleDelete(a.id)}
                                            disabled={isDeleting === a.id}
                                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                                    No hay asignaciones registradas.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
