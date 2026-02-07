
// import { NavLink } from "react-router-dom";

// import {
//   FaHome,
//   FaQuestionCircle,
//   FaRobot,
//   FaTags,
//   FaMountain,
//   FaComments,
//   FaFileAlt,
//   FaUsers,
//   FaBuilding,
//   FaPlus
// } from "react-icons/fa";

// export default function Sidebar() {
//   return (
//     // <aside className="w-64 min-h-screen border-r px-3 py-4 text-sm bg-white">
//     <aside className="w-64 h-screen border-r px-3 py-4 text-sm bg-white overflow-y-auto custom-scroll">


   

  
//       <div className="space-y-2 text-gray-700">

//      <NavLink
//   to="/"
//   end
//   className={({ isActive }) =>
//     `flex items-center gap-3 px-2 py-2 rounded cursor-pointer ${
//       isActive
//         ? "bg-gray-100 font-semibold text-black"
//         : "hover:bg-gray-100"
//     }`
//   }
// >
//   <FaHome /> <span>Home</span>
// </NavLink>


//       <NavLink
//   to="/questions"
//   className={({ isActive }) =>
//     `flex items-center gap-3 px-2 py-2 rounded cursor-pointer ${
//       isActive
//         ? "bg-gray-100 font-semibold text-black"
//         : "hover:bg-gray-100"
//     }`
//   }
// >
//   <FaQuestionCircle /> <span>Questions</span>
// </NavLink>

//         <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
//           <FaRobot className="text-purple-600" /> <span>AI Assist</span>
//         </div>

//         <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
//           <FaTags /> <span>Tags</span>
//         </div>

//         <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
//           <FaMountain /> <span>Challenges</span>
//         </div>

//         <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
//           <FaComments className="text-blue-600" /> <span>Chat</span>
//         </div>

//         <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
//           <FaFileAlt /> <span>Articles</span>
//         </div>

//         <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
//           <FaUsers /> <span>Users</span>
//         </div>

//         <div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
//           <FaBuilding /> <span>Companies</span>
//         </div>

//       </div>

//       <div className="mt-6 text-gray-600">
//         <div className="flex items-center justify-between mb-2 font-semibold text-sm">
//           <span>COLLECTIVES</span>
//           <FaPlus />
//         </div>

//         <p className="text-xs leading-5">
//           Communities for your favorite technologies.
//           <br />
//           <span className="text-blue-600 cursor-pointer">
//             Explore all Collectives
//           </span>
//         </p>
//       </div>

//       {/* ✅ STACK INTERNAL */}
//       <div className="mt-6 text-gray-600">
//         <p className="font-semibold mb-2 text-sm">STACK INTERNAL</p>
//         <p className="text-xs leading-5">
//           Stack Overflow for Teams is now called{" "}
//           <span className="font-semibold">Stack Internal</span>.
//           Bring the best of human thought and AI automation together at work.
//         </p>

//         <button className="mt-3 w-full bg-blue-400 text-white py-2 rounded">
//           Try for free
//         </button>
//          <button className="mt-3 w-full bg-gray-900 text-white py-2 rounded">
//           Learn more
//         </button>
//       </div>

//     </aside>
//   );
// }


import { NavLink } from "react-router-dom";
import {
  Home,
  HelpCircle,
  Sparkles,
  Tag,
  Mountain,
  MessageCircle,
  FileText,
  Users,
  Building2,
  Plus,
} from "lucide-react";

const linkBase =
  "flex items-center gap-3 px-3 py-2 rounded-md text-sm";
const activeLink =
  "bg-gray-100 font-semibold text-black";
const normalLink =
  "text-gray-600 hover:bg-gray-100 hover:text-black";

export default function Sidebar() {
  return (
    <aside className="w-52 border-r min-h-screen px-2 py-4 sticky top-[58px]">
      
   
      <NavLink
        to="/Home"
        end
        className={({ isActive }) =>
          `${linkBase} ${isActive ? activeLink : normalLink}`
        }
      >
        <Home size={16} />
        Home
      </NavLink>
      
<NavLink
  to="/questions"
  className={({ isActive }) =>
    `${linkBase} ${isActive ? activeLink : normalLink}`
  }
>
  <HelpCircle size={16} />
  Questions
</NavLink>



      <NavLink
  to="/ai-assist"
  className={({ isActive }) =>
    `${linkBase} ${isActive ? activeLink : normalLink}`
  }
>
  <Sparkles size={16} className="text-purple-500" />
  AI Assist
</NavLink>


    <NavLink to="/tags" className={normalLink + " " + linkBase}>
  <Tag size={16} />
  Tags
</NavLink>

      <NavLink to="/challenges" className={normalLink + " " + linkBase}>
        <Mountain size={16} />
        Challenges
      </NavLink>

      <NavLink to="/chat" className={normalLink + " " + linkBase}>
        <MessageCircle size={16} />
        Chat
      </NavLink>

      <NavLink to="/articles" className={normalLink + " " + linkBase}>
        <FileText size={16} />
        Articles
      </NavLink>

      <NavLink to="/users" className={normalLink + " " + linkBase}>
        <Users size={16} />
        Users
      </NavLink>

      <NavLink to="/companies" className={normalLink + " " + linkBase}>
        <Building2 size={16} />
        Companies
      </NavLink>

      
      <div className="mt-6 px-3">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>COLLECTIVES</span>
          <Plus size={14} className="cursor-pointer" />
        </div>

        <p className="text-xs text-gray-500 leading-5">
          Communities for your favorite technologies
        </p>

        <button className="text-xs text-blue-600 mt-2 hover:underline">
          Explore all Collectives
        </button>
      </div>
    </aside>
  );
}
