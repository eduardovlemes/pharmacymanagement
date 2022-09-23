import "./App.css";
import { LoginAuthProvider } from "./components/LoginAuthContext/LoginAuthContext";
import Router from "./routes";

function App() {
  return (
    <>
      <LoginAuthProvider>
        <Router />
      </LoginAuthProvider>
    </>
  );
}

export default App;
