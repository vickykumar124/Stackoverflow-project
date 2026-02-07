import { Link } from "react-router-dom";

export default function ResourcesDropdown() {
  return (
    <div className="absolute right-0 mt-4 w-[360px]   hover:bg-white text-black rounded-xl shadow-xl border p-6 z-50">

      <div className="grid grid-cols-2 gap-6">

      
        <div>
          <h4 className="font-semibold mb-3">Learn</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/stack-internal" className="text-blue-600 hover:underline">
                → Stack Internal
              </Link>
            </li>
            <li>
              <Link to="/stack-ads" className="text-blue-600 hover:underline">
                → Stack Ads
              </Link>
            </li>
            <li className="text-gray-700 cursor-pointer hover:underline">
              Blog
            </li>
            <li className="text-gray-700 cursor-pointer hover:underline">
              Research insights
            </li>
          </ul>
        </div>

     
        <div>
          <h4 className="font-semibold mb-3">Support</h4>

          <ul className="space-y-2 text-sm">
            <li className="text-blue-600 cursor-pointer hover:underline">
              Stack Internal Help
            </li>
            <li className="text-blue-600 cursor-pointer hover:underline">
              Legal policies
            </li>
          </ul>
        </div>

      </div>

      
      <div className="mt-6 bg-slate-100 p-3 rounded-lg text-sm">
        💡 <strong>Pro tip:</strong> Explore Stack Internal to reduce repeated questions by 40%.
      </div>
    </div>
  );
}
