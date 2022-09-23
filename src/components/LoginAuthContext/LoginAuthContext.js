import { createContext, useContext, useState } from "react";

const LoginAuthContext = createContext();

function LoginAuthProvider({ children }) {
  const [authenticated, setAuthenticates] = useState(false);

  return (
    <LoginAuthContext.Provider
      value={{
        authenticated,
        changeTo: (item) => {
          setAuthenticates(item);
        },
      }}
    >
      {children}
    </LoginAuthContext.Provider>
  );
}

function useLoginAuth() {
  return useContext(LoginAuthContext);
}

export { LoginAuthProvider, useLoginAuth };
