import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import PharmacyRegistrationPage from "./pages/PharmacyRegistrationPage";
import DrugRegistrationPage from "./pages/DrugRegistrationPage";
import DrugListPage from "./pages/DrugListPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import UserListPage from "./pages/UserListPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/novafarmacia" element={<PharmacyRegistrationPage />} />
        <Route path="/novomedicamento" element={<DrugRegistrationPage />} />
        <Route path="/listamedicamentos" element={<DrugListPage />} />
        <Route path="/novousuario" element={<UserRegistrationPage />} />
        <Route path="/listausuarios" element={<UserListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
