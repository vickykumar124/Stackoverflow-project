import { Link } from "react-router-dom";
import { useState } from "react";
import ResourcesDropdown from "./resources/ResourcesDropdown";

export default function BusinessNavbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="w-full h-16 bg-[#1f1f1f] text-white flex items-center px-6 relative">

      <div className="flex items-center gap-8 text-sm font-medium">
        <Link to="/business" className="flex items-center gap-2">
          <span className="text-orange-400 font-bold">
            Stack Overflow
          </span>
          <span className="text-xs text-gray-300">
            Business
          </span>
        </Link>

        <Link to="/stack-internal" className="hover:text-orange-400">
          Stack Internal
        </Link>

        <Link to="/stack-ads" className="hover:text-orange-400">
          Stack Ads
        </Link>
      </div>


      <div className="ml-auto flex items-center gap-6 text-sm relative">

      
        <div
          className="cursor-pointer text-gray-300 hover:text-white"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Resources ▾

          {open && <ResourcesDropdown />}
        </div>

        <button className="bg-[#f48024] text-black px-4 py-2 rounded-full font-semibold">
          Talk to an expert
        </button>
      </div>

    </nav>
  );
}
