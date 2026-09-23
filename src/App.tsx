import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Almacenamiento from "./pages/Almacenamiento";
import NotasPrivadas from "./pages/NotasPrivadas";
import Notificaciones from "./pages/Notificaciones";
import Overview from "./pages/Overview";
import PanelUX from "./pages/PanelUX";
import PostgreSQL from "./pages/PostgreSQL";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout title="📊 Dashboard Administrativo" subtitle="Homelab | Infraestructura en Tiempo Real">
            <Overview />
          </Layout>
        }
      />
      <Route
        path="/panel-ux"
        element={
          <Layout title="Panel UX & Analytics" subtitle="Homelab | Consumo y rendimiento">
            <PanelUX />
          </Layout>
        }
      />
      <Route
        path="/bases-postgresql"
        element={
          <Layout title="Bases PostgreSQL" subtitle="Homelab | Clústeres de base de datos">
            <PostgreSQL />
          </Layout>
        }
      />
      <Route
        path="/almacenamiento"
        element={
          <Layout title="Almacenamiento & Discos" subtitle="Homelab | Pools ZFS">
            <Almacenamiento />
          </Layout>
        }
      />
      <Route
        path="/notificaciones"
        element={
          <Layout title="Centro de Notificaciones" subtitle="Homelab | Alertas del sistema">
            <Notificaciones />
          </Layout>
        }
      />
      <Route
        path="/notas-privadas"
        element={
          <Layout title="Notas Privadas" subtitle="Homelab | Base de conocimiento">
            <NotasPrivadas />
          </Layout>
        }
      />
    </Routes>
  );
}
