import { MobileNav } from '@/src/components/dashboard/mobile-nav'
import { Toaster } from 'sonner'
import Link from 'next/link'
import { Car, Map, LayoutDashboard, Settings, User } from 'lucide-react'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Mock user for presentation
    const user = { email: 'admin@fleetmaster.com' }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/20">
            {/* Desktop Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background md:flex">
                <div className="flex h-16 items-center border-b px-6">
                    <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <Car className="h-6 w-6 text-primary" />
                        <span>Fleet Master</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-6">
                    <nav className="grid items-start px-4 text-sm font-medium gap-1">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted font-semibold bg-muted/50"
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link
                            href="/dashboard/vehicles"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                        >
                            <Car className="h-4 w-4" />
                            Vehículos
                        </Link>
                        <Link
                            href="/dashboard/routes"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                        >
                            <Map className="h-4 w-4" />
                            Rutas
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-4 border-t">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/50">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-xs font-bold truncate">Admin presentación</span>
                            <span className="text-[10px] text-muted-foreground truncate">{user.email}</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex flex-col md:pl-64">
                {/* Header for Mobile */}
                <MobileNav email={user.email} />

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-8">
                    <div className="mx-auto max-w-7xl w-full">
                        {children}
                    </div>
                </main>
            </div>
            
            {/* Toast Notifications */}
            <Toaster position="top-right" richColors />
        </div>
    )
}
