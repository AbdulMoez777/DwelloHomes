import React from 'react';
import { CheckCircle2, Mail} from 'lucide-react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

function Footer() {
  return (
    <div className="w-full">
      
      
          {/* TOP SECTION: Contact & Newsletter */}
      <section className="bg-white py-24 px-6 flex flex-col items-center justify-center text-center" id="contact">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B1B12] leading-tight mb-6">
          Do You Have Any Questions? <br /> Get Help From Us
        </h2>

        {/* Feature Checks */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-[#2B1B12] font-bold text-sm mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-[#2B1B12]" />
            <span>Chat live with our support team</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-[#2B1B12]" />
            <span>Browse our FAQ</span>
          </div>
        </div>

        {/* Email Input Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg">
          <div className="relative flex-1 w-full">
            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2B1B12]" />
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              className="w-full bg-[#E4D1C6] text-[#2B1B12] placeholder-[#2B1B12] font-semibold text-sm rounded-lg py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#2B1B12] transition-shadow"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-[#2B1B12] hover:bg-[#3e2c22] text-white px-8 py-3 rounded-lg font-bold text-sm transition-colors whitespace-nowrap"
          >
            Submit
          </button>
        </form>

      </section>

      {/* =========================================
          BOTTOM SECTION: Main Footer Links
          ========================================= */}
      <footer className="bg-[#DDC7BB] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          
          {/* Column 1: Brand Info */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            <h3 className="text-2xl font-extrabold text-[#2B1B12] tracking-tight flex items-center">
               Dwello
            </h3>
            <p className="text-[#2B1B12] font-bold text-sm leading-relaxed max-w-xs opacity-90">
              Bringing you closer to your dream home, one click at a time.
            </p>
          </div>

          {/* Column 2: Links Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* About */}
            <div className="flex flex-col gap-4">
              <h4 className="font-extrabold text-[#2B1B12] text-lg">About</h4>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Our Story</a>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Careers</a>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Our Team</a>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Resources</a>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <h4 className="font-extrabold text-[#2B1B12] text-lg">Support</h4>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">FAQ</a>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Contact Us</a>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Help Center</a>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Terms of Service</a>
            </div>

            {/* Find Us */}
            <div className="flex flex-col gap-4">
              <h4 className="font-extrabold text-[#2B1B12] text-lg">Find Us</h4>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Events</a>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Locations</a>
              <a href="#" className="text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">Newsletter</a>
            </div>

            {/* Our Social */}
            <div className="flex flex-col gap-4">
              <h4 className="font-extrabold text-[#2B1B12] text-lg">Our Social</h4>
              <a href="#" className="flex items-center gap-2 text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">
                <FiInstagram size={18} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">
                <FiFacebook size={18} /> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-[#2B1B12] font-bold text-sm hover:text-gray-600 transition-colors">
                <FiTwitter size={18} /> Twitter (X)
              </a>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}

export default Footer;