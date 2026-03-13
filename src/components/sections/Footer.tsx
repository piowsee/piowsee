import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-16 pb-8">
      <div className="max-w-5xl mx-auto pl-8 pr-4 md:pl-16 md:pr-6 lg:pl-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/piowsee-logo.svg"
              alt="piowsee logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="ml-3 text-white font-bold text-2xl tracking-tighter">
              piowsee
            </span>
          </Link>

          {/* Apps Download / Location Box */}
           <div className="flex items-center gap-4">
              <Link href="#" className="bg-zinc-800 hover:bg-zinc-700 py-3 px-6 rounded-full flex items-center font-bold text-sm transition-colors text-white">
                 <Globe className="w-5 h-5 mr-3" />
                 Indonesia
              </Link>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
           {/* Column 1: Platform */}
           <div className="space-y-3">
              <h4 className="font-bold text-lg mb-4 tracking-wide">Platform</h4>
              <ul className="space-y-4">
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">pocv</Link></li>
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Pesan AI</Link></li>
              </ul>
           </div>
           
           {/* Column 2: Services */}
           <div className="space-y-3">
              <h4 className="font-bold text-lg mb-4 tracking-wide">Services</h4>
              <ul className="space-y-3">
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">AI Integration</Link></li>
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Web Applications</Link></li>
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Data Systems</Link></li>
              </ul>
           </div>

           {/* Column 3: Legal */}
           <div className="space-y-3">
              <h4 className="font-bold text-lg mb-4 tracking-wide">Legal</h4>
              <ul className="space-y-3">
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Privacy Policy</Link></li>
                 <li><Link href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Terms of Service</Link></li>
              </ul>
           </div>

        </div>

        <div className="border-t border-zinc-800 pt-6 mt-10 text-sm text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} piowsee. Engineered in Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
