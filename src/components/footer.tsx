import React from 'react';
import { Mail, Phone, Youtube, Linkedin, User, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <section className="min-h-screen w-full bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* THANK YOU Text */}
        <h1 className="text-[80px] sm:text-[120px] font-bold text-yellow-400 mb-20">
          THANK<br />YOU
        </h1>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <span className="text-lg">Lokesh Verma</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg">editorlv05@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-lg">+91 9109985907</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-lg">Lokesh Verma</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <Youtube className="w-5 h-5" />
              </div>
              <span className="text-lg">@editor.lv_05</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-lg">editor_lv_05</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}