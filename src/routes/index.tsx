import { useEffect } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, DetalhesDePessoas, ListagemDePessoas } from "../pages";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página inicial',
        icon: "home",
        path: "/pagina-inicial"
      },
      {
        label: 'Cidades',
        icon: "people",
        path: "/pessoas"
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Dashboard />
        }
      />

      <Route
        path="/pessoas"
        element={
          <ListagemDePessoas />
        }
      />

      <Route
        path="/pessoas/detalhe/:id"
        element={
          <DetalhesDePessoas />
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
