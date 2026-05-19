"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

// Kamus Data Detail Proyek Portfolio
const detailPortfolio = {
  "company-profile-website": {
    title: "Company Profile Website",
    client: "Hazra Corp Industries",
    category: "Website Development",
    date: "Februari 2026",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    desc: "Sebuah website profil perusahaan berskala profesional yang dirancang untuk meningkatkan kredibilitas bisnis di era digital. Dilengkapi dengan animasi modern, performa super cepat, dan desain yang sepenuhnya responsive di semua perangkat.",
    features: ["Optimasi SEO Tingkat Tinggi", "Skema Warna Dark Mode Premium", "Formulir Kontak Terintegrasi Email", "Sistem Keamanan SSL & Proteksi DDoS"]
  },
  "mobile-app-interface": {
    title: "Mobile App Interface",
    client: "Startup Fintech Nusantara",
    category: "UI/UX Design",
    date: "Januari 2026",
    tech: ["Figma", "Adobe Illustrator", "Prototyping"],
    desc: "Desain antarmuka aplikasi mobile keuangan (Fintech) yang mengutamakan kemudahan navigasi (user-friendly) serta estetika visual yang bersih dan modern guna meningkatkan kenyamanan pengguna bertransaksi.",
    features: ["User Flow Transaksi yang Ringkas", "Komponen Desain Konsisten & Reusable", "Aksesibilitas Kontras Warna Tinggi", "Micro-interactions Prototype"]
  },
  "creative-brand-identity": {
    title: "Creative Brand Identity",
    client: "Kopi Hazra & Co",
    category: "Digital Branding",
    date: "Maret 2026",
    tech: ["Brand Strategy", "Logo Design", "Guidelines Book"],
    desc: "Pengembangan identitas visual menyeluruh mulai dari filosofi logo, pemilihan palet warna khas, hingga tipografi perusahaan demi menciptakan citra brand yang kuat, unik, dan mudah diingat oleh target pasar.",
    features: ["Master Logo File (Vector/HD)", "Brand Guidelines Book (PDF)", "Desain Mockup Merchandise & Seragam", "Aset Grafis Sosial Media Kit"]
  }
};

export default function PortfolioDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  // Mencocokkan data berdasarkan apa yang diklik user
  const project = detailPortfolio[id as keyof typeof detailPortfolio];

  // Jika data tidak cocok atau salah ketik alamat url
  if (!project) {
    return (
      <div className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold mb-4">Project Tidak Ditemukan</h2>
        <Link href="/" className="bg-blue-500 px-6 py-3 rounded-xl font-semibold">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden font-sans">
      {/* Background Garis Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        {/* Tombol Kembali ke Halaman Utama */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition mb-12 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Kembali ke Beranda
        </Link>

        {/* Judul Proyek */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-blue-400 font-medium tracking-wider text-sm uppercase mb-3">{project.category}</p>
          <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">{project.title}</h1>
        </motion.div>

        {/* Kotak Informasi Detail */}
        <div className="grid md:grid-cols-3 gap-12 mt-8">
          {/* Kolom Kiri: Tentang & Fitur */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Tentang Project</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.desc}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Fitur & Keunggulan</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-500 mt-1">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolom Kanan: Nama Klien, Tanggal, dan WhatsApp */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm space-y-4">
              <div>
                <p className="text-sm text-gray-500 font-semibold">CLIENT</p>
                <p className="text-white font-medium text-lg">{project.client}</p>
              </div>
              <hr className="border-white/10" />
              <div>
                <p className="text-sm text-gray-500 font-semibold">TANGGAL SELESAI</p>
                <p className="text-white font-medium text-lg">{project.date}</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
              <p className="text-sm text-gray-500 font-semibold mb-3">TEKNOLOGI / TOOLS</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, index) => (
                  <span key={index} className="bg-blue-500/10 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-xl text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Kontak WhatsApp Otomatis */}
            <Link 
              href={`https://wa.me/6285658323189?text=Halo%20Hazra%20Digital%20Agency,%20saya%20tertarik%20membuat%20project%20seperti%20${encodeURIComponent(project.title)}`}
              target="_blank"
              className="block text-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-4 rounded-2xl font-bold text-white shadow-lg transition duration-300"
            >
              Buat Project Seperti Ini
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}