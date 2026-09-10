import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import AppLayout from "@/components/layout/AppLayout"

// Ventas
import Ventas from "@/pages/ventas/Ventas"
import Cotizaciones from "@/pages/ventas/Cotizaciones"
import NotasCredito from "@/pages/ventas/NotasCredito"
import TiposDocumentos from "@/pages/ventas/TiposDocumentos"
import ParametrosVenta from "@/pages/ventas/ParametrosVenta"

// Productos
import Categorias from "@/pages/productos/Categorias"
import ListasPrecios from "@/pages/productos/ListasPrecios"
import UnidadesMedida from "@/pages/productos/UnidadesMedida"

// Directorio
import Terceros from "@/pages/directorio/Terceros"

// Empresa
import Empresas from "@/pages/empresa/Empresas"
import ActividadesICA from "@/pages/empresa/ActividadesICA"
import Resoluciones from "@/pages/empresa/Resoluciones"
import Sucursales from "@/pages/empresa/Sucursales"
import AlmacenesBodegas from "@/pages/empresa/AlmacenesBodegas"
import PuntosVenta from "@/pages/empresa/PuntosVenta"
import Vendedores from "@/pages/empresa/Vendedores"
import Usuarios from "@/pages/empresa/Usuarios"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* Default route */}
          <Route
            index
            element={
              <Navigate
                to="/ventas"
                replace
              />
            }
          />

          {/* Ventas */}
          <Route
            path="/ventas"
            element={<Ventas />}
          />

          <Route
            path="/ventas/cotizaciones"
            element={<Cotizaciones />}
          />

          <Route
            path="/ventas/notas-credito"
            element={<NotasCredito />}
          />

          <Route
            path="/ventas/tipos-documentos"
            element={<TiposDocumentos />}
          />

          <Route
            path="/ventas/parametros"
            element={<ParametrosVenta />}
          />

          {/* Productos */}
          <Route
            path="/productos/categorias"
            element={<Categorias />}
          />

          <Route
            path="/productos/listas-precios"
            element={<ListasPrecios />}
          />

          <Route
            path="/productos/unidades-medida"
            element={<UnidadesMedida />}
          />

          {/* Directorio */}
          <Route
            path="/directorio/terceros"
            element={<Terceros />}
          />

          {/* Empresa */}
          <Route
            path="/empresa/empresas"
            element={<Empresas />}
          />

          <Route
            path="/empresa/actividades-ica"
            element={<ActividadesICA />}
          />

          <Route
            path="/empresa/resoluciones"
            element={<Resoluciones />}
          />

          <Route
            path="/empresa/sucursales"
            element={<Sucursales />}
          />

          <Route
            path="/empresa/almacenes-bodegas"
            element={<AlmacenesBodegas />}
          />

          <Route
            path="/empresa/puntos-venta"
            element={<PuntosVenta />}
          />

          <Route
            path="/empresa/vendedores"
            element={<Vendedores />}
          />

          <Route
            path="/empresa/usuarios"
            element={<Usuarios />}
          />

          {/* Catch-all */}
          <Route
            path="*"
            element={
              <Navigate
                to="/ventas"
                replace
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}