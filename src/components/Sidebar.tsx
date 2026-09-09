import {
  ChevronDown,
  Receipt,
  ScrollText,
  FileText,
  SlidersHorizontal,
  FileCog,
  Package,
  FolderTree,
  Tags,
  Ruler,
  Users,
  Building2,
  Landmark,
  FileCheck2,
  GitBranch,
  Warehouse,
  Store,
  BadgeDollarSign,
  UserCog,
} from "lucide-react"

import { NavLink } from "react-router-dom"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const menuGroups = [
  {
    label: "Ventas",
    icon: Receipt,
    children: [
      {
        label: "Ventas",
        icon: Receipt,
        path: "/ventas",
      },
      {
        label: "Cotizaciones",
        icon: ScrollText,
        path: "/ventas/cotizaciones",
      },
      {
        label: "Notas Crédito",
        icon: FileText,
        path: "/ventas/notas-credito",
      },
      {
        label: "Tipos de Documentos",
        icon: FileCog,
        path: "/ventas/tipos-documentos",
      },
      {
        label: "Parámetros de Venta",
        icon: SlidersHorizontal,
        path: "/ventas/parametros",
      },
    ],
  },

  {
    label: "Productos",
    icon: Package,
    children: [
      {
        label: "Categorías",
        icon: FolderTree,
        path: "/productos/categorias",
      },
      {
        label: "Listas de precios",
        icon: Tags,
        path: "/productos/listas-precios",
      },
      {
        label: "Unidades de medida",
        icon: Ruler,
        path: "/productos/unidades-medida",
      },
    ],
  },

  {
    label: "Directorio",
    icon: Users,
    children: [
      {
        label: "Terceros",
        icon: Users,
        path: "/directorio/terceros",
      },
    ],
  },

  {
    label: "Empresa",
    icon: Building2,
    children: [
      {
        label: "Empresas",
        icon: Building2,
        path: "/empresa/empresas",
      },
      {
        label: "Actividades ICA",
        icon: Landmark,
        path: "/empresa/actividades-ica",
      },
      {
        label: "Resoluciones",
        icon: FileCheck2,
        path: "/empresa/resoluciones",
      },
      {
        label: "Sucursales",
        icon: GitBranch,
        path: "/empresa/sucursales",
      },
      {
        label: "Almacenes y Bodegas",
        icon: Warehouse,
        path: "/empresa/almacenes-bodegas",
      },
      {
        label: "Puntos de venta",
        icon: Store,
        path: "/empresa/puntos-venta",
      },
      {
        label: "Vendedores",
        icon: BadgeDollarSign,
        path: "/empresa/vendedores",
      },
      {
        label: "Usuarios",
        icon: UserCog,
        path: "/empresa/usuarios",
      },
    ],
  },
]

const Sidebar = () => {
  return (
    <aside className="w-[280px] shrink-0 border-r border-border bg-background">
      {/* Logo */}
      <div className="flex h-16 items-center px-4">
        <div className="flex w-full items-center gap-2 rounded-md p-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-sm font-semibold">A</span>
          </div>

          <h2 className="text-[18px] font-semibold leading-7">
            Astil
          </h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 p-2">
        {menuGroups.map((group) => {
          const GroupIcon = group.icon

          return (
            <Collapsible
              key={group.label}
              defaultOpen
            >
              <CollapsibleTrigger
                render={
                  <button
                    type="button"
                    className="group flex h-9 w-full items-center gap-2 rounded-lg px-2 text-left text-sm font-medium hover:bg-muted"
                  />
                }
              >
                <GroupIcon className="size-4 shrink-0" />

                <span className="flex-1">
                  {group.label}
                </span>

                <ChevronDown
                  className="
                    size-4 shrink-0 text-muted-foreground
                    transition-transform duration-200
                    group-data-[panel-open]:rotate-180
                  "
                />
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="ml-4 border-l border-border py-1 pl-2">
                  {group.children.map((child) => {
                    const Icon = child.icon

                    return (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          [
                            "flex min-h-9 w-full items-center gap-2 rounded-md px-2 py-2",
                            "text-sm transition-colors",
                            isActive
                              ? "bg-muted font-medium text-foreground"
                              : "text-foreground/80 hover:bg-muted hover:text-foreground",
                          ].join(" ")
                        }
                      >
                        <Icon className="size-4 shrink-0" />

                        <span className="flex-1">
                          {child.label}
                        </span>
                      </NavLink>
                    )
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar