import { useState, useEffect} from "react";
import StayUpdatedModal from "./StayUpdatedModal";

export default function Footer() {
  const [open, setOpen] = useState(false);
  
 useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);



  return (
    <><footer className="bg-[#1f1f1f] text-gray-400 text-sm border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">

          <div>
            <h2 className="text-xl font-bold mb-2">Stay updated</h2>
            <p className="text-gray-600 mb-4">
              Subscribe to receive Stack Overflow Business content.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-black text-white rounded-2xl px-4 py-2"
            >
              Receive updates
            </button>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Our Stack</h3>
            <ul className="space-y-1 text-white-700">
              <li className="font-medium ">Stack Internal</li>
              <li>Features</li>
              <li>Customers</li>
              <li>Security</li>
              <li>Pricing</li>
              <li>Stack Data Licensing</li>
              <li>Stack Advertising</li>
              <li>Partnerships</li>
              <li>Services</li>
              <li>Stack Overflow</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>Leadership</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Social Impact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>Contact</li>
              <li>Help</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Elsewhere</h3>
            <ul className="space-y-1">
              <li>Blog</li>
              <li>Podcast</li>
              <li>Newsletter</li>
            </ul>
          </div>

        </div>
      </footer>

  
      {open && <StayUpdatedModal onClose={() => setOpen(false)} />}
    </>
  );
}
