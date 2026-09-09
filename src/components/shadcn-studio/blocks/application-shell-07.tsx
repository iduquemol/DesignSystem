"use client"

import * as React from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
  FileText,
  Receipt,
  ScrollText,
  Settings,
  Building2,
  Sparkles,
  Package,
  FolderTree,
  LayoutGrid,
  Boxes,
  Users,
  Truck,
  BadgeCheck,
} from "lucide-react"
import Categorias from "@/components/categorias"

const ApplicationShell07 = () => {
  const [activeComponent, setActiveComponent] = React.useState("")
  const handleItemClick = (label: string) => {
    console.log("Clicked:", label)
    if (label === "Categorías") {
      setActiveComponent("categorias")
    }
  }



  const documentItems = [
    { label: "Facturas de venta", icon: Receipt },
    { label: "Cotizaciones", icon: ScrollText },
    { label: "Notas crédito", icon: FileText },
  ]

  const dataGroups = [
    {
      label: "Productos",
      icon: Package,
      children: [
        { label: "Categorías", icon: FolderTree },
        { label: "Catálogo", icon: LayoutGrid },
        { label: "Inventario", icon: Boxes },
      ],
    },
    {
      label: "Directorio",
      icon: Users,
      children: [
        { label: "Clientes", icon: Users },
        { label: "Proveedores", icon: Truck },
        { label: "Empleados", icon: BadgeCheck },
      ],
    },
  ]

  const accountItems = [
    { label: "Empresa", icon: Building2 },
    { label: "Configuración", icon: Settings },
    { label: "Servicios de Astil", icon: Sparkles },
  ]

  return (
    <div className="flex min-h-screen w-full bg-muted">
      <aside className="w-[280px] border-r border-border bg-background">
        <div className="flex h-16 items-center px-4">
          <div className="flex w-full items-center gap-2 rounded-md p-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-sm font-semibold">A</span>
            </div>
            <h2 className="text-[18px] font-semibold leading-7 text-sidebar-foreground">
              Astil
            </h2>
          </div>
        </div>

        <nav className="flex flex-col">
          <div className="flex flex-col gap-1 p-2">
            <div className="px-2 py-2 text-xs font-medium text-sidebar-foreground/70">
              Documentos
            </div>
            <div className="flex flex-col gap-1">
              {documentItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleItemClick(item.label)}
                    className="flex h-9 w-full items-center gap-2 rounded-lg px-2 text-left text-sm text-sidebar-foreground hover:bg-muted"
                  >
                    <Icon className="size-4" />
                    <span className="flex-1">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-1 p-2">
            <div className="px-2 py-2 text-xs font-medium text-sidebar-foreground/70">
              Datos
            </div>

            <div className="flex flex-col gap-1">
              {dataGroups.map((group) => {
                const GroupIcon = group.icon
                return (
                  <Collapsible key={group.label} defaultOpen={false}>
                    <CollapsibleTrigger
                      render={
                        <button
                          type="button"
                          onClick={() => handleItemClick(group.label)}
                          className="flex h-9 w-full items-center gap-2 rounded-lg px-2 text-left text-sm text-sidebar-foreground hover:bg-muted"
                        />
                      }
                    >
                      <GroupIcon className="size-4" />
                      <span className="flex-1">{group.label}</span>
                      <ChevronDown className="size-4 text-muted-foreground" />
                    </CollapsibleTrigger>

                    <CollapsibleContent className="flex overflow-hidden transition-all duration-300 h-(--collapsible-panel-height) data-starting-style:h-0 data-ending-style:h-0">
                      <div className="flex w-full flex-col gap-1 rounded-md px-3 py-2">
                        {group.children.map((child) => (
                          <button
                            key={child.label}
                            type="button"
                            onClick={() => handleItemClick(child.label)}
                            className="flex h-9 w-full items-center rounded-md px-2 text-left text-sm text-sidebar-foreground hover:bg-muted"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-1 p-2">
            <div className="px-2 py-2 text-xs font-medium text-sidebar-foreground/70">
              Cuenta
            </div>
            <div className="flex flex-col gap-1">
              {accountItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleItemClick(item.label)}
                    className="flex h-9 w-full items-center gap-2 rounded-lg px-2 text-left text-sm text-sidebar-foreground hover:bg-muted"
                  >
                    <Icon className="size-4" />
                    <span className="flex-1">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </nav>
      </aside>

      <main className="flex-1">
        <div className="p-6">
          <Card className="rounded-[14px] shadow-sm">
            <CardContent>
              <div className="relative min-h-[984px] w-full overflow-hidden rounded-[14px] border border-border bg-background">
                
                {activeComponent === "categorias" ? (
                  <Categorias />
                ) : (
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">
                      Application Shell
                    </h1>
                  </div>
                )}

              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default ApplicationShell07