import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import PharmacyRegistrationPage from "./pages/PharmacyRegistrationPage";
import DrugRegistrationPage from "./pages/DrugRegistrationPage";
import DrugListPage from "./pages/DrugListPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import UserListPage from "./pages/UserListPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Navigate replace to="/" />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/novafarmacia" element={<PharmacyRegistrationPage />} />
        <Route path="/novomedicamento" element={<DrugRegistrationPage />} />
        <Route path="/listamedicamentos" element={<DrugListPage />} />
        <Route path="/novousuario" element={<UserRegistrationPage />} />
        <Route path="/listausuarios" element={<UserListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
