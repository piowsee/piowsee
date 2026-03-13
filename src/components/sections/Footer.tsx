import * as React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg
              width="100"
              height="32"
              viewBox="0 0 100 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <circle cx="16" cy="16" r="14" stroke="#00AA13" strokeWidth="4" />
              <circle cx="16" cy="16" r="6" fill="#00AA13" />
              <text
                x="38"
                y="22"
                fontFamily="inherit"
                fontWeight="bold"
                fontSize="22"
                fill="currentColor"
                letterSpacing="-0.5"
              >
                gojek
              </text>
            </svg>
          </Link>

          {/* Apps Download / Location Box */}
           <div className="flex items-center gap-4">
              <Link href="#" className="bg-zinc-800 hover:bg-zinc-700 py-3 px-6 rounded-full flex items-center font-bold text-sm transition-colors text-white">
                 <Globe className="w-5 h-5 mr-3" />
                 Singapore
              </Link>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
           {/* Column 1: Company */}
           <div className="space-y-4">
              <h4 className="font-bold text-lg mb-6 tracking-wide">Company</h4>
              <ul className="space-y-4">
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">About Us</Link></li>
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Driver-Partner Resources</Link></li>
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Blog</Link></li>
              </ul>
           </div>
           
           {/* Column 2: Join Us/Support */}
           <div className="space-y-4">
              <h4 className="font-bold text-lg mb-6 tracking-wide">Join Us</h4>
              <ul className="space-y-4">
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Drive with Gojek</Link></li>
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Help Centre</Link></li>
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Contact Us</Link></li>
              </ul>
           </div>

           {/* Column 3: Legal */}
           <div className="space-y-4">
              <h4 className="font-bold text-lg mb-6 tracking-wide">Legal</h4>
              <ul className="space-y-4">
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Terms & Conditions</Link></li>
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Privacy Notice</Link></li>
              </ul>
           </div>
           
           {/* Column 4: App Store Badges */}
           <div className="space-y-4">
             <h4 className="font-bold text-lg mb-6 tracking-wide">Download the app</h4>
             <div className="flex flex-col gap-4">
               <div className="w-36 h-12 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-sm font-bold text-white hover:bg-zinc-700 cursor-pointer">
                 App Store
               </div>
               <div className="w-36 h-12 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-sm font-bold text-white hover:bg-zinc-700 cursor-pointer">
                 Google Play
               </div>
             </div>
           </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 mt-12 text-sm text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Gojek Singapore Pte Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
