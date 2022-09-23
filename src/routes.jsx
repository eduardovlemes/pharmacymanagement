import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import PharmacyRegistrationPage from "./pages/PharmacyRegistrationPage";
import DrugRegistrationPage from "./pages/DrugRegistrationPage";
import DrugListPage from "./pages/DrugListPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import UserListPage from "./pages/UserListPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useLoginAuth } from "./components/LoginAuthContext/LoginAuthContext";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

export default function Router() {
  const { authenticated } = useLoginAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Navigate replace to="/" />} />
        <Route path="/novousuario" element={<UserRegistrationPage />} />
        <Route element={<PrivateRoute authenticated={authenticated} />}>
          <Route path="/mapa" element={<MapPage />} />
          <Route path="/novafarmacia" element={<PharmacyRegistrationPage />} />
          <Route path="/novomedicamento" element={<DrugRegistrationPage />} />
          <Route path="/listamedicamentos" element={<DrugListPage />} />
          <Route path="/listausuarios" element={<UserListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
