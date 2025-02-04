import { cookies } from 'next/headers'
import { MainSidebar } from "@/components/main-sidebar"
import { EntityForm } from "@/components/entity-form"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Toaster } from "sonner"

export default function Home() {
  const userSession = cookies().get('user_session')
  const userData = userSession ? JSON.parse(userSession.value) : null

  return (
    <div className="flex min-h-screen min-w-full">
      <MainSidebar />
      <SidebarInset className="w-full">
        <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
          <SidebarTrigger />
          <div>
            <h1 className="text-lg font-semibold">Sistema Integrado de Planificación e Inversión Pública</h1>
            <p className="text-sm text-muted-foreground">Módulo de Planificación</p>
          </div>
        </header>
        <main className="flex-1 p-6 w-full">
          {userData ? (
            <EntityForm userRucEntidad={userData.rucEntidad} />
          ) : (
            <div>Error: No se encontró información del usuario</div>
          )}
        </main>
        
      </SidebarInset>
      
      <Toaster />
    </div>
  )
}

