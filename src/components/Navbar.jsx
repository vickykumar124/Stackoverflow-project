import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SearchDropdown from "./SearchDropdown";
import { searchData } from "../Data/searchData";

export default function Navbar() {
  const { user, logout } = useAuth();

  const [openProducts, setOpenProducts] = useState(false);
  const [activeProduct, setActiveProduct] = useState("internal");

  // 🔍 SEARCH STATE (MISSING PART)
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="w-full h-[58px] border-b flex items-center px-6 bg-white sticky top-0 z-50">

      {/* LEFT */}
      <div className="flex items-center gap-6 relative">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[#f48024] text-xl font-bold">≡</span>
          <img src="/logo.png" alt="logo" className="h-6 w-24" />
        </Link>

        <div className="hidden md:flex items-center gap-5 text-sm text-gray-700">
          <Link to="/about" className="hover:text-black">About</Link>

          {/* PRODUCTS */}
          <div className="relative">
            <button onClick={() => setOpenProducts(!openProducts)}>
              Products
            </button>

            {openProducts && (
              <div className="absolute top-full left-0 mt-3 w-[520px] bg-white border rounded-xl shadow-xl z-50 flex">
                <div className="w-48 border-r p-3 space-y-1">
                  {["internal", "data", "blog", "ads"].map((key) => (
                    <div
                      key={key}
                      onMouseEnter={() => setActiveProduct(key)}
                      className={`p-2 rounded cursor-pointer ${
                        activeProduct === key
                          ? "bg-orange-100"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {key.toUpperCase()}
                    </div>
                  ))}
                </div>

                <div className="flex-1 p-4">
                  <h3 className="font-bold text-lg">{activeProduct}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Product description here
                  </p>
                </div>
              </div>
            )}
          </div>

          <Link to="/teams" className="hover:text-black">
            For Teams
          </Link>
        </div>
      </div>

      {/* 🔍 SEARCH (NOW WORKING) */}
      <div className="flex-1 mx-6 hidden md:block relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSearch(true)}
          onBlur={() => setTimeout(() => setShowSearch(false), 200)}
          placeholder="Search..."
          className="w-full pl-10 pr-3 py-2 border rounded-md text-sm outline-none focus:border-blue-500"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>

        {showSearch && query && (
          <SearchDropdown query={query} data={searchData} />
        )}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2">
        {!user ? (
          <>
            <Link to="/login">
              <button className="px-4 py-1.5 border rounded text-sm">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-1.5 bg-blue-500 text-white rounded text-sm">
                Sign up
              </button>
            </Link>
          </>
        ) : (
          <>
            <span className="text-sm">{user.name}</span>
            <button
              onClick={logout}
              className="border px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
