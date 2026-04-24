/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Euro, 
  Utensils, 
  FlaskConical, 
  Trophy, 
  Palette, 
  ChefHat, 
  Sprout, 
  Music,
  Mail, 
  AlertCircle,
  Sun,
  MapPin,
  Send,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';

const QuickFact = ({ icon: Icon, title, desc, highlight = false }: any) => (
  <motion.div 
    className={`bento-card p-6 flex flex-col items-center text-center gap-3 ${highlight ? 'bg-[#FFEDD5]' : 'bg-white'}`}
  >
    <div className={`p-4 border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#1E293B] ${highlight ? 'bg-white text-orange-600' : 'bg-[#DBEAFE] text-blue-900'}`}>
      <Icon size={32} strokeWidth={2.5} />
    </div>
    <div>
      <h3 className="font-black text-lg text-slate-900 uppercase tracking-tight">{title}</h3>
      <p className="font-bold text-slate-600 text-sm mt-1">{desc}</p>
    </div>
  </motion.div>
);

const ActivityCard = ({ icon: Icon, title, color }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      className="bento-card p-6 flex flex-col items-center justify-center gap-4 aspect-square cursor-pointer transition-colors"
      style={{ backgroundColor: color }}
    >
      <Icon size={48} strokeWidth={2.5} className="text-slate-900" />
      <h3 className="font-black text-sm md:text-xl text-slate-900 uppercase tracking-tighter">{title}</h3>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans selection:bg-[#FEF08A] selection:text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#A61414] border-b-4 border-slate-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <img src="/kildlogotop.png" alt="Kids Inc Logo" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:camps@kidsinc.ie" className="hidden md:flex items-center gap-2 text-white font-bold uppercase text-sm hover:underline">
              <Mail size={18} strokeWidth={2.5} />
              camps@kidsinc.ie
            </a>
            <a href="#enroll" className="bento-button bg-[#DBEAFE] text-blue-900 px-6 py-2.5 text-sm inline-block">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-28 pb-12">
        {/* Hero Section */}
        <section className="px-6 max-w-7xl mx-auto mb-6">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bento-card-large bg-[#FEF08A] relative z-10 flex flex-col items-start text-left p-10 md:p-16 overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-[0.08] font-black text-[12rem] leading-none uppercase select-none text-slate-900 pointer-events-none hidden md:block">CAMP</div>
                
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white border-2 border-red-500 text-red-600 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest mb-8 shadow-[2px_2px_0px_#EF4444]"
              >
                <AlertCircle size={16} strokeWidth={3} />
                Early Bird Deadline: 30th April
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-black text-5xl md:text-6xl lg:text-6xl text-slate-900 tracking-tighter leading-tight uppercase relative z-20"
              >
                Join us for <br/><span className="text-[#0F172B] bg-[#FEF08A] px-2 inline-block mt-2">Summer Camp!</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-slate-800 max-w-xl font-bold relative z-20"
              >
                Join us for an unforgettable summer packed with multi-activities, delicious food, and endless fun for children from junior infants to 6th class.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-6 relative z-20"
              >
                <a href="#enroll" className="bento-button bg-slate-900 text-white px-8 py-4 text-lg flex items-center justify-center gap-2">
                  Enroll Your Child
                </a>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 bento-card-large p-0 overflow-hidden relative min-h-[400px] lg:min-h-full">
              <img 
                src="/kidssoccer.jpg" 
                alt="Kids playing soccer" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quick Facts Grid */}
        <section id="details" className="px-6 max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickFact icon={Calendar} title="29 Jun - 7 Aug" desc="6 weeks of summer fun" />
            <QuickFact icon={Clock} title="8:30am - 6:00pm" desc="Full day of activities" />
            <QuickFact icon={Users} title="Junior to 6th Class" desc="Perfect for primary ages" />
            <QuickFact icon={Euro} title="NCS Approved" desc="€2.14 hourly discount available" highlight={true} />
          </div>
        </section>

        {/* Activities Section */}
        <section className="px-6 max-w-6xl mx-auto mb-12">
          <div className="bento-card-large bg-[#FCE7F3] p-10 md:p-16">
            <div className="text-center mb-12">
              <h2 className="font-black text-4xl md:text-5xl text-slate-900 mb-4 uppercase tracking-tighter">Multi-Activity Magic</h2>
              <p className="text-lg text-slate-800 font-bold max-w-2xl mx-auto">Every day is a new adventure! Our carefully balanced program ensures kids stay engaged, learn new skills, and have a blast.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              <ActivityCard icon={FlaskConical} title="STEM" color="#DBEAFE" />
              <ActivityCard icon={Trophy} title="Sports" color="#FFEDD5" />
              <ActivityCard icon={Palette} title="Arts" color="#FCE7F3" />
              <ActivityCard icon={ChefHat} title="Cooking" color="#FEF08A" />
              <ActivityCard icon={Sprout} title="Gardening" color="#DCFCE7" />
              <ActivityCard icon={Music} title="Music" color="#E9D5FF" />
            </div>
          </div>
        </section>

        {/* Food & Pricing row grid */}
        <section className="px-6 max-w-6xl mx-auto mb-12 grid md:grid-cols-12 gap-6">
          {/* Food Selection */}
          <div className="md:col-span-8 bento-card-large bg-[#DCFCE7] p-8 md:p-12 overflow-hidden relative">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h2 className="font-black text-4xl mb-6 text-slate-900 uppercase tracking-tighter">Fuel for Fun!</h2>
                <p className="text-slate-800 text-lg mb-8 font-bold leading-relaxed max-w-xl">
                  We believe active kids need great nutrition. That's why we provide fresh, delicious, and balanced meals prepared daily. No need to pack a lunchbox!
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-white border-2 border-slate-900 shadow-[2px_2px_0px_#1E293B] p-4 rounded-2xl">
                  <div className="bg-green-100 p-2 rounded-xl border-2 border-slate-900">
                    <Utensils className="text-green-600" size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg uppercase tracking-tighter">1 Hot Meal</h4>
                    <p className="text-slate-600 font-bold text-xs uppercase tracking-wider">Fresh Daily</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white border-2 border-slate-900 shadow-[2px_2px_0px_#1E293B] p-4 rounded-2xl">
                  <div className="bg-orange-100 p-2 rounded-xl border-2 border-slate-900">
                    <Sun className="text-orange-500" size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg uppercase tracking-tighter">2 Snacks</h4>
                    <p className="text-slate-600 font-bold text-xs uppercase tracking-wider">Energy Boosts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Guarantee Note */}
          <div className="md:col-span-4 bento-card-large bg-white p-8 flex flex-col justify-center text-center">
            <div className="w-16 h-16 bg-[#FEF08A] rounded-full border-4 border-slate-900 flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_#1E293B]">
              <Euro className="text-orange-600" size={32} strokeWidth={3} /> 
            </div>
            <h3 className="font-black text-2xl text-slate-900 mb-4 uppercase tracking-tighter">
              Transparent Pricing
            </h3>
            <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6">
              Prices vary by location. However, all our camps are eligible for the <strong className="text-slate-900">National Childcare Scheme (NCS)</strong>.
            </p>
            <div className="bg-green-100 border-2 border-slate-900 rounded-xl p-3 shadow-[2px_2px_0px_#1E293B]">
              <span className="block text-xs font-black uppercase text-green-800 tracking-widest mb-1">NCS Discount</span>
              <span className="block font-black text-xl text-green-700">-€2.14 / hr</span>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="enroll" className="px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 bento-card-large p-0 overflow-hidden relative min-h-[400px] lg:min-h-full">
              <img 
                src="/kidsplay.png" 
                alt="Kids playing and having fun" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="lg:col-span-8 bento-card-large bg-white p-10 md:p-16 relative overflow-hidden flex flex-col items-center text-center">
              {/* Decorative background element */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#DBEAFE] rounded-full mix-blend-multiply opacity-50 z-0 pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#FEF08A] rounded-full mix-blend-multiply opacity-50 z-0 pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="font-black text-4xl md:text-5xl text-slate-900 uppercase tracking-tighter mb-4">Ready for Summer?</h2>
                <p className="font-bold text-slate-600 text-lg md:text-xl max-w-xl mx-auto mb-10">
                  Secure your child's spot today and give them a summer filled with fun, learning, and new friends.
                </p>

                <a 
                  href="https://tinyurl.com/kidsincsummercamp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto bento-button bg-slate-900 text-white px-12 py-5 text-xl inline-flex items-center justify-center gap-2"
                >
                  Book Now
                </a>
                <p className="text-center text-xs font-black uppercase tracking-widest text-red-500 mt-6">
                  Deadline: 30th April
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 text-center border-t-8 border-slate-950 font-bold">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 text-white mb-8">
            <img src="/kildlogo.png" alt="Kids Inc Logo" className="h-16 w-auto object-contain" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-10">
            <a href="mailto:camps@kidsinc.ie" className="flex items-center gap-2 bg-slate-800 px-5 py-3 rounded-xl text-white hover:bg-slate-700 transition-colors border-2 border-slate-700 text-sm tracking-widest uppercase">
              <Mail size={18} strokeWidth={2.5} />
              camps@kidsinc.ie
            </a>
            <div className="flex items-center gap-2 text-slate-300 text-sm tracking-widest uppercase bg-slate-800/50 px-5 py-3 border-2 border-slate-800 rounded-xl">
              <MapPin size={18} strokeWidth={2.5} />
              Multiple Locations across Ireland
            </div>
          </div>
          
          <p className="text-slate-500 uppercase text-xs tracking-widest">&copy; {new Date().getFullYear()} Kids Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
