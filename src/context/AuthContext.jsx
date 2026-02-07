// import { createContext, useState, useContext } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);


//   const login = (email) => {
//     setUser({ name: "Vicky Kumar", email });
//   };

 
//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }


// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user"))
//   );

//   function signup(name, email) {
//     const userData = { name, email };
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   }

//   function login(email) {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser?.email === email) {
//       setUser(savedUser);
//       return true;
//     }
//     return false;
//   }

//   function logout() {
//     localStorage.removeItem("user");
//     setUser(null);
//   }

//   return (
//     <AuthContext.Provider value={{ user, signup, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);



import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  function signup(name, email) {
    const userData = { name, email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }

  function login(email) {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.email === email) {
      setUser(savedUser);
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
