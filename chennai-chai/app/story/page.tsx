'use client';
import { MapPin, Heart, Leaf, Users, Zap } from 'lucide-react';

const TIMELINE = [
  {
    year: 'Fall 2025',
    title: 'The First Cup',
    desc: "Deepesh Kumar arrives at IIT Chicago for his Master's in Computer Science. Homesick for Chennai, he brews his mother's masala chai in his dorm room — and his floor-mates can't stop asking for more.",
  },
  {
    year: 'Winter 2025',
    title: 'A Tiny Stall',
    desc: "With a thermos, some spices, and a folding table, Deepesh starts selling chai at the Student Center for $2 a cup. Word spreads fast. The line grows longer every morning.",
  },
  {
    year: 'Spring 2026',
    title: 'Chennai Chai is Born',
    desc: "Officially registered as a student venture. Deepesh expands the menu — Classic Madras Chai, Masala, Rose Cardamom, Cold Brew. The name Chennai Chai is etched on the first batch of paper cups.",
  },
  {
    year: 'Feb 2026',
    title: 'Building the Future',
    desc: "Now serving hundreds of cups weekly. The website goes live. The team grows. The chai gets even better. The dream of bringing South Indian culture to Chicago's South Side is very much alive.",
  },
];

const VALUES = [
  { icon: <Heart size={24} className="text-[#FF6F00]" />, title: 'Authenticity', desc: 'Every recipe is true to its roots — no corners cut, no flavors compromised.' },
  { icon: <Users size={24} className="text-[#FF6F00]" />, title: 'Community', desc: 'Chai is for everyone. We build connections over every cup we serve.' },
  { icon: <Leaf size={24} className="text-[#FF6F00]" />, title: 'Sustainability', desc: 'Compostable cups, zero single-use plastic, locally sourced milk.' },
  { icon: <Zap size={24} className="text-[#FF6F00]" />, title: 'Hustle', desc: 'Student energy, startup spirit — we show up every day because we love what we do.' },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#FDF6EC]">
      <div
        className="pt-32 pb-20 px-4 text-center grain-overlay relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0A00 0%, #3d1a00 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#FF6F00]/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-[#5C3317]/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[#FDF6EC] mb-6 leading-tight">
            From a Dorm Room<br/>in Chicago to<br/><span className="text-[#FF6F00]">Every Cup.</span>
          </h1>
          <p className="text-[#FDF6EC]/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Bringing the warmth of South Indian chai culture to IIT Chicago — one authentic cup at a time.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-4">The Founder</p>
              <h2 className="font-display text-4xl font-bold text-[#1A0A00] mb-6">Deepesh Kumar</h2>
              <div className="space-y-4 text-[#5C3317]/80 leading-relaxed">
                <p>
                  Growing up in Chennai, chai was never just a drink — it was the punctuation between every moment.
                  Morning alarm, afternoon break, late-night study session. Every feeling had its chai.
                </p>
                <p>
                  When Deepesh landed in Chicago in August 2025 to pursue his Master&apos;s in Computer Science at IIT,
                  the city was electric — but something was missing. That thick, cardamom-kissed, perfectly sweetened
                  South Indian chai that no café in the city could quite replicate.
                </p>
                <p>
                  So he made it himself. And then shared it. And then couldn&apos;t stop.
                </p>
                <p className="text-[#FF6F00] font-display font-semibold italic text-lg">
                  &quot;Chai isn&apos;t just a product. It&apos;s a piece of home I carry everywhere I go.&quot;
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#1A0A00] rounded-3xl p-8 text-center">
                <div className="w-28 h-28 bg-[#FF6F00]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="20" r="12" stroke="#FF6F00" strokeWidth="2" fill="none"/>
                    <path d="M8 48 Q8 36 28 36 Q48 36 48 48" stroke="#FF6F00" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FDF6EC] mb-1">Deepesh Kumar</h3>
                <p className="text-[#FF6F00] font-semibold text-sm mb-4">Founder & Head Chai Maker</p>
                <div className="space-y-2 text-sm text-[#FDF6EC]/60">
                  <p className="flex items-center justify-center gap-2"><MapPin size={14} className="text-[#FF6F00]" /> Chennai, Tamil Nadu → Chicago, IL</p>
                  <p>MS Computer Science, 2025–2027</p>
                  <p>Illinois Institute of Technology</p>
                </div>
                <div className="mt-5 pt-5 border-t border-[#5C3317]/30">
                  <p className="text-xs text-[#FDF6EC]/40 mb-2">Fun Fact</p>
                  <p className="text-sm text-[#FDF6EC]/70 italic">Can brew the perfect cup of Madras chai in under 8 minutes — blindfolded.</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF6F00]/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FDF6EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-3">How It Happened</p>
            <h2 className="font-display text-4xl font-bold text-[#1A0A00]">The Chennai Chai Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#FF6F00]/20 hidden sm:block" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-6 sm:gap-10">
                  <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6F00] rounded-full flex items-center justify-center text-white font-bold text-xs text-center leading-tight z-10 flex-shrink-0">
                      {i + 1}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#5C3317]/10 flex-1">
                    <span className="text-[#FF6F00] font-bold text-sm uppercase tracking-wide">{item.year}</span>
                    <h3 className="font-display text-xl font-bold text-[#1A0A00] mt-1 mb-3">{item.title}</h3>
                    <p className="text-[#5C3317]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 grain-overlay"
        style={{ background: 'linear-gradient(135deg, #1A0A00 0%, #2d1200 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-4">The Journey</p>
          <h2 className="font-display text-4xl font-bold text-[#FDF6EC] mb-12">
            Chennai <span className="text-[#FF6F00]">→</span> Chicago
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#FF6F00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={36} className="text-[#FF6F00]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#FDF6EC]">Chennai</h3>
              <p className="text-[#FDF6EC]/50 text-sm mt-1">Tamil Nadu, India</p>
              <p className="text-[#FDF6EC]/70 text-xs mt-2">Where the recipes were born</p>
            </div>
            <div className="flex sm:flex-col items-center gap-2">
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#FF6F00]' : 'bg-[#FF6F00]/30'}`} />
                ))}
              </div>
              <div className="text-[#FF6F00] font-bold text-2xl sm:rotate-90">→</div>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#FF6F00]/30' : 'bg-[#FF6F00]'}`} />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#FF6F00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 4 L22 14 L33 14 L24 21 L27 32 L18 26 L9 32 L12 21 L3 14 L14 14 Z" stroke="#FF6F00" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#FDF6EC]">Chicago</h3>
              <p className="text-[#FDF6EC]/50 text-sm mt-1">Illinois, USA</p>
              <p className="text-[#FDF6EC]/70 text-xs mt-2">Where the story continues</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FDF6EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl font-bold text-[#1A0A00]">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-[#5C3317]/10 group">
                <div className="w-12 h-12 bg-[#FF6F00]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6F00]/20 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[#1A0A00] mb-2">{v.title}</h3>
                <p className="text-[#5C3317]/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FF6F00] grain-overlay">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            &quot;Bringing the warmth of South Indian chai culture to IIT Chicago.&quot;
          </h2>
          <p className="text-white/80 text-lg mb-8">
            One cup. One story. One city at a time.
          </p>
          <a
            href="/order"
            className="inline-block bg-white text-[#FF6F00] font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Order Your Cup
          </a>
        </div>
      </section>
    </div>
  );
}
