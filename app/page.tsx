"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import CountUp from "react-countup";

// --- VARIANTS UNTUK ANIMASI ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const scaleUpItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function HazraDigitalAgency() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animasi Scroll Progress Bar di atas layar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const services = [
    {
      slug: "website-development",
      title: "Website Development",
      desc: "Modern, responsive, and high-performance websites for businesses and UMKM.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      slug: "branding-design",
      title: "Branding Design",
      desc: "Professional logo, identity system, and visual branding.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      ),
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      desc: "SEO, advertising, and social media growth strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.625c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 18.75v-5.625zM9.75 8.625c0-.621.504-1.125 1.125-1.125h-2.25c.621 0 1.125.504 1.125 1.125v10.125c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h-2.25C20.496 3 21 3.504 21 4.125v14.625c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      slug: "ai-automation",
      title: "AI Automation",
      desc: "Smart automation and AI integration for modern business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m1.5 7.5H3m7.5 5.25V19.5m7.5-3.75H21m-3-7.5H21M15.75 3v1.5M12 7.5h.008v.008H12V7.5Zm0 3h.008v.008H12v-.008Zm0 3h.008v.008H12v-.008Zm3-3h.008v.008H15V10.5Zm0 3h.008v.008H15v-.008Zm-6 0h.008v.008H9v-.008Zm0-3h.008v.008H9V10.5ZM6.75 6.75h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V9a2.25 2.25 0 012.25-2.25z" />
        </svg>
      ),
    },
  ];

  const portfolioItems = [
    { 
      slug: "company-profile-website", 
      type: "Website Development", 
      title: "Company Profile Website", 
      desc: "Modern responsive website for business branding.", 
      color: "from-blue-500 to-cyan-500", 
      text: "text-blue-400" 
    },
    { 
      slug: "mobile-app-interface", 
      type: "UI/UX Design", 
      title: "Mobile App Interface", 
      desc: "Clean modern interface designed for better user experience.", 
      color: "from-purple-500 to-pink-500", 
      text: "text-purple-400" 
    },
    { 
      slug: "creative-brand-identity", 
      type: "Digital Branding", 
      title: "Creative Brand Identity", 
      desc: "Professional branding and visual identity for modern businesses.", 
      color: "from-cyan-500 to-blue-500", 
      text: "text-cyan-400" 
    }
  ];

  const pricing = [
    {
      title: "Basic",
      price: "Rp999K",
      features: ["Landing Page", "Responsive Design", "Basic SEO"],
    },
    {
      title: "Professional",
      price: "Rp2.5JT",
      features: ["Company Profile", "Premium UI", "SEO Optimization"],
    },
    {
      title: "Premium",
      price: "Custom",
      features: ["Full Custom Website", "AI Automation", "Priority Support"],
    },
  ];

  return (
    <>
      {/* Scroll Progress Bar Animasi */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 origin-left z-[9999]"
      />

      <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Glow Effects */}
        <motion.div 
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-purple-500/30 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none"
        />

        {/* Navbar */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="w-full flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black/30 backdrop-blur-md fixed top-0 z-50"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.img
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              src="/logo.png.png"
              alt="Hazra Logo"
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-white">
              Hazra <span className="text-blue-500">Digital Agency</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <motion.a
                key={item}
                whileHover={{ y: -3, color: "#60A5FA" }}
                href={`#${item.toLowerCase()}`}
                className="transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Bagian Kanan Navbar (Desktop): Ditambahkan Instagram berdampingan dengan WhatsApp */}
          <div className="hidden md:flex items-center gap-4">
            {/* Tombol Instagram Baru */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/username_anda"
              target="_blank"
              className="p-3 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 rounded-full text-white cursor-pointer flex items-center justify-center shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </motion.a>

            {/* WhatsApp Button Navbar Asli Anda */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6285658323189"
              target="_blank"
              className="bg-blue-500 px-6 py-3 rounded-full text-white font-semibold cursor-pointer"
            >
              WhatsApp
            </motion.a>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[88px] left-0 w-full bg-[#0b1120]/95 backdrop-blur-xl border-t border-white/10 z-40 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 py-10 text-white text-lg font-medium">
              {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 transition"
                >
                  {item}
                </a>
              ))}
              {/* Opsi Sosial Media Tambahan pada Mobile */}
              <div className="flex gap-4 mt-2">
                <a href="https://instagram.com/HAZRA_DIGITALAGENCY" target="_blank" className="text-pink-400 font-bold">Instagram</a>
                <span className="text-white/20">|</span>
                <a href="https://wa.me/6285658323189" target="_blank" className="text-blue-400 font-bold">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Hero Section */}
        <section id="home" className="max-w-7xl mx-auto px-6 pt-40 pb-28 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm mb-6">
              Modern Digital Solutions
            </motion.div>

            <motion.h2 variants={fadeUpItem} className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              We Build
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}Digital Experiences
              </span>
            </motion.h2>

            <motion.p variants={fadeUpItem} className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Hazra Digital Agency helps businesses and UMKM grow through
              modern websites, branding, and digital strategies.
            </motion.p>

            <motion.div variants={fadeUpItem} className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6285658323189?text=Halo%20Hazra%20Digital%20Agency,%20saya%20tertarik%20untuk%20memulai%20project%20baru."
                target="_blank"
                className="bg-blue-500 px-7 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/30 text-center flex items-center justify-center cursor-pointer text-white"
              >
                Start Project
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }} 
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="border border-white/20 px-7 py-4 rounded-2xl font-semibold text-white hover:border-blue-400 hover:text-blue-400 transition-colors text-center flex items-center justify-center cursor-pointer"
              >
                View Portfolio
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:-translate-y-3 transition duration-500 backdrop-blur-sm"
          >
            <div className="grid gap-5">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 h-48 flex items-end text-3xl font-bold relative overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                Modern UI/UX
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white/5 rounded-3xl p-6 border border-white/10 text-center">
                  <h3 className="text-4xl font-bold text-blue-400">
                    <CountUp end={50} duration={3} enableScrollSpy scrollSpyOnce />+
                  </h3>
                  <p className="text-gray-400 mt-2">Projects</p>
                </div>

                <div className="bg-white/5 rounded-3xl p-6 border border-white/10 text-center">
                  <h3 className="text-4xl font-bold text-purple-400">
                    <CountUp end={24} duration={3} enableScrollSpy scrollSpyOnce />/7
                  </h3>
                  <p className="text-gray-400 mt-2">Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpItem} className="text-center mb-16">
              <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-4">Our Services</p>
              <h2 className="text-4xl lg:text-5xl font-bold">Powerful Digital Solutions</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link href={`/services/${service.slug}`} key={index} className="block group cursor-pointer">
                  <motion.div
                    variants={fadeUpItem}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm h-full"
                  >
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 mb-6 flex items-center justify-center text-2xl"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                    
                    <div className="mt-6 text-sm text-blue-400 font-semibold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Pelajari Selengkapnya <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpItem} className="text-center mb-16">
              <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">Portfolio</p>
              <h2 className="text-4xl lg:text-5xl font-bold">Our Recent Projects</h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Link href={`/portfolio/${item.slug}`} key={index} className="block group cursor-pointer">
                  <motion.div 
                    variants={scaleUpItem}
                    whileHover={{ y: -15, scale: 1.02 }}
                    className="group bg-white/5 border border-white/10 rounded-[32px] overflow-hidden h-full transition-all duration-300 hover:border-blue-500/40"
                  >
                    <div className={`h-60 bg-gradient-to-r ${item.color} relative overflow-hidden`}>
                      <motion.div 
                        className="absolute inset-0 bg-black/20" 
                        initial={{ opacity: 0 }} 
                        whileHover={{ opacity: 1 }} 
                      />
                    </div>
                    <div className="p-8">
                      <p className={`${item.text} text-sm mb-3 font-medium`}>{item.type}</p>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                      
                      <div className="text-sm text-blue-400 font-semibold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Lihat Detail Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpItem} className="text-center mb-16">
              <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">Pricing</p>
              <h2 className="text-4xl lg:text-5xl font-bold">Flexible Packages</h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  variants={fadeUpItem}
                  whileHover={{ scale: 1.03, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  key={index}
                  className={`bg-white/5 border ${index === 1 ? 'border-blue-500/50 relative' : 'border-white/10'} rounded-[32px] p-10 backdrop-blur-sm`}
                >
                  {index === 1 && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-3xl font-bold mb-4">{plan.title}</h3>
                  <p className="text-5xl font-black text-blue-400 mb-8">{plan.price}</p>
                  <div className="space-y-4 mb-10 text-gray-300">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-blue-500">✔</span> {feature}
                      </div>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    select-none
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/6285658323189"
                    target="_blank"
                    className={`block text-center transition px-6 py-4 rounded-2xl font-semibold cursor-pointer ${index === 1 ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                  >
                    Choose Package
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section id="contact" className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="rounded-[40px] bg-gradient-to-r from-blue-600 to-purple-600 p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight relative z-10">
              Ready To Grow <br /> Your Business?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 relative z-10">
              Let’s build a modern digital presence for your business.
            </p>
            
            {/* Ditambahkan flex container agar tombol WhatsApp & Instagram rapi berdampingan */}
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6285658323189"
                target="_blank"
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold cursor-pointer"
              >
                Contact WhatsApp
              </motion.a>

              {/* Tombol Instagram Baru */}
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/username_anda"
                target="_blank"
                className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold cursor-pointer shadow-lg shadow-pink-500/20"
              >
                Follow Instagram
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-10 px-6 relative z-10"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold">
              Hazra <span className="text-blue-400">Digital Agency</span>
            </h3>
            <p className="text-gray-500 mt-2">Modern solutions for modern business.</p>
          </div>
        </motion.footer>

        {/* FLOATING BUTTON DOCK (KANAN BAWAH): Menggabungkan Instagram Baru & WhatsApp Lama Anda */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
          {/* Floating Instagram */}
          <motion.a
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            href="https://instagram.com/username_anda"
            target="_blank"
            className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
          </motion.a>

          {/* Floating WhatsApp Asli Anda */}
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            href="https://wa.me/6285658323189"
            target="_blank"
            className="bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl shadow-green-500/30 flex items-center gap-2 group cursor-pointer"
          >
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.435-5.125-3.736-6.56-6.56l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
              </svg>
            </motion.div>
            <span className="font-bold hidden md:block">WhatsApp Us</span>
          </motion.a>
        </div>

      </div>
    </>
  );
}