import { Outlet } from "react-router-dom"

import Sidebar from "@/components/Sidebar"

const AppLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-muted">
      <Sidebar />

      <main className="flex-1">
        <div className="p-6">
          <div className="min-h-[calc(100vh-48px)] rounded-[14px] border border-border bg-background shadow-sm">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppLayout