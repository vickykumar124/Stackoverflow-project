


import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [password, setPassword] = useState("");
const [email, setEmail] = useState("");

  function handleSignup() {
    if (!email || !password) {
      alert("Fill all details");
      return;
    }
    // alert("Account created!");
  }
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-[350px] p-6 border rounded shadow-sm bg-white">

        <h1 className="text-2xl font-bold mb-4 text-center">Sign up</h1>

       
      <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-3"
        />

       <button
          onClick={handleSignup}
          className="w-full bg-blue-400 rounded mb-3 text-white p-2"
        >
          Create Account
        </button>


          <p className="text-center mt-3">
          Already have an account?
          <Link to="/login" className="text-blue-400 ml-1">
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
}

