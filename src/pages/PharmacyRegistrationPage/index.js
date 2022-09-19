import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import PharmacyForm from "../../components/PharmacyForm/PharmacyForm";

export default function PharmacyRegistrationPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <PharmacyForm />
    </>
  );
}
