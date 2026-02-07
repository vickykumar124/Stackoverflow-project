// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   function handleLogin() {
//     if (!email || !password) {
//      alert("Enter email & password");
//       return;
//     }

//     alert("Login Successful!");
//     navigate("/");
//   }

//   return (
//     <div className="w-full flex justify-center mt-20">
//       <div className="w-[350px] p-6 border rounded shadow-sm bg-white">

//         <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border px-3 py-2 rounded mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password" 
//           className="w-full border px-3 py-2 rounded mb-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-400 text-white py-2 rounded"
//         >
//           Login
//         </button>

//         <p className="text-center text-sm mt-3">
//           Don't have an account?
//           <Link to="/signup" className="text-blue-400 ml-1">
//             Sign up
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// }









import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    login(email); // fake login
    navigate("/");
  }

  function socialLogin(provider) {
    login(`${provider}@demo.com`);
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

     
      <div className="w-[350px] space-y-3 mb-6">
        
        <button
          onClick={() => socialLogin("google")}
          className="w-full border  bg-gray-300 py-2 rounded flex justify-center gap-2">
              <img
    src="/google.png.png"
    alt="Google"
    className="h-5 w-5"
  />
        
           Log in with Google
        </button>

    

        {/* <button
          onClick={() => socialLogin("facebook")}
          className="w-full bg-blue-700 text-white py-2 rounded flex justify-center gap-2"
        >
          🔵 Log in with Facebook
        </button> */}
      </div>

      <div className="w-[350px] p-6 bg-gray-200 border rounded shadow">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        {/* <label className="text-sm font-semibold">Email</label> */}
        <input
          type="email"
          Placeholder="Email..."
          className="w-full border px-3 py-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* <label className="text-sm font-semibold">Password</label> */}
        <input
          type="password"
          Placeholder="Password..."
          className="w-full border px-3 py-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Log in
        </button>
      </div>

      <Link
        to="/signup"
        className="mt-4 text-sm text-blue-500 hover:underline"
      >
        Don’t have an account? Sign up
      </Link>
    </div>
  );
}
