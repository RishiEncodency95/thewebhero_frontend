import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Topbar() {
  return (
    <div className="bg-slate-900 text-slate-300 py-2 px-4 md:px-8 text-sm hidden lg:flex justify-between items-center border-b border-slate-800">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Mail size={16} className="text-blue-500" />
          <span>hello@thewebhero.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={16} className="text-blue-500" />
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={16} className="text-blue-500" />
          <span>Jaipur, Rajasthan, India</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="mr-2 text-slate-400 font-medium">Follow Us:</span>
        <a href="#" className="text-[#0a66c2] hover:scale-110 hover:brightness-125 transition-all drop-shadow-sm"><FaLinkedin size={16} /></a>
        <a href="#" className="text-[#1DA1F2] hover:scale-110 hover:brightness-125 transition-all drop-shadow-sm"><FaTwitter size={16} /></a>
        <a href="#" className="text-[#1877F2] hover:scale-110 hover:brightness-125 transition-all drop-shadow-sm"><FaFacebook size={16} /></a>
        <a href="#" className="text-[#E4405F] hover:scale-110 hover:brightness-125 transition-all drop-shadow-sm"><FaInstagram size={16} /></a>
      </div>
    </div>
  );
}
