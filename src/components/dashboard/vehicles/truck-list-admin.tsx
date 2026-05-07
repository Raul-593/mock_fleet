'use client'

import { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/src/components/ui/table'
import { Button } from '@/src/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/src/components/ui/dialog'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'

type Truck = {
    id: string
    plate_number: string
    status: string
}

export default function TruckListAdmin({ trucks }: { trucks: Truck[] }) {
    const [editingTruck, setEditingTruck] = useState<Truck | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleEdit = (truck: Truck) => setEditingTruck(truck)
    const handleClose = () => setEditingTruck(null)

    return (
        <div className="relative">
            <div className="max-h-[400px] overflow-y-auto w-full">
                <Table>
                    <TableHeader className="sticky top-0 bg-background z-10 w-full">
                        <TableRow>
                            <TableHead>Matrícula</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {trucks.length > 0 ? (
                            trucks.map((truck) => (
                                <TableRow key={truck.id}>
                                    <TableCell className="font-medium">{truck.plate_number}</TableCell>
                                    <TableCell>
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${truck.status === 'available' ? 'bg-green-100 text-green-800' :
                                                truck.status === 'in_route' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {truck.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm" onClick={() => handleEdit(truck)}>
                                            Editar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                                    No hay camiones registrados.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <Dialog open={!!editingTruck} onOpenChange={(open) => !open && handleClose()}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Editar Camión</DialogTitle>
                        <DialogDescription>Modifica la información del camión.</DialogDescription>
                    </DialogHeader>
                    {editingTruck && (
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="plate_number">Matrícula</Label>
                                <Input id="plate_number" name="plate_number" defaultValue={editingTruck.plate_number} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="status">Estado</Label>
                                <select
                                    id="status"
                                    name="status"
                                    defaultValue={editingTruck.status}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                >
                                    <option value="available">Disponible (Available)</option>
                                    <option value="in_route">En Ruta (In Route)</option>
                                    <option value="maintenance">Mantenimiento (Maintenance)</option>
                                </select>
                            </div>
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={handleClose}>Cancelar</Button>
                                <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Guardando...' : 'Guardar Cambios'}</Button>
                            </DialogFooter>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
