"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

// Data detail teks untuk setiap layanan
const detailServices: Record<string, { title: string; fullDesc: string; features: string[]; color: string }> = {
  "website-development": {
    title: "Website Development",
    fullDesc: "Kami membangun website yang tidak hanya cantik secara visual, tetapi juga super cepat, responsif di HP/Tablet, aman, dan dioptimalkan agar mudah ditemukan di Google (SEO Friendly). Cocok untuk Landing Page produk, website Company Profile perusahaan, maupun e-commerce.",
    features: ["Custom UI/UX Design", "Integrasi WhatsApp Chat", "Kecepatan Server Maksimal", "Setup Google SEO Dasar"],
    color: "from-blue-600 to-cyan-500",
  },
  "branding-design": {
    title: "Branding Design",
    fullDesc: "Identitas visual adalah wajah dari bisnis Anda. Kami membantu merancang logo profesional, filosofi warna, tipografi, hingga panduan brand (Brand Guidelines) yang membuat bisnis Anda terlihat terpercaya dan melekat di ingatan calon pelanggan.",
    features: ["Desain Logo Eksklusif", "Kartu Nama & Kop Surat", "Palet Warna Brand", "Social Media Kit Template"],
    color: "from-purple-600 to-pink-500",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    fullDesc: "Dapatkan lebih banyak penjualan dan eksposur lewat strategi pemasaran digital yang tepat sasaran. Kami mengelola iklan digital (Facebook Ads, Google Ads, TikTok Ads) serta optimisasi konten media sosial Anda untuk meningkatkan konversi penjualan.",
    features: ["Riset Target Audiens", "Manajemen Iklan Paid Ads", "Laporan Performa Bulanan", "Copywriting yang Menjual"],
    color: "from-cyan-600 to-blue-500",
  },
  "ai-automation": {
    title: "AI Automation",
    fullDesc: "Efisiensikan operasional bisnis Anda dengan teknologi masa depan. Kami mengintegrasikan sistem otomatisasi cerdas berbasis AI untuk membalas chat pelanggan otomatis 24/7, mengelola data penjualan, hingga otomatisasi tugas harian yang repetitif.",
    features: ["Smart AI Chatbot Integration", "Otomatisasi Workflow Kerja", "Sinkronisasi Data Otomatis", "Hemat Waktu & Biaya Operasional"],
    color: "from-indigo-600 to-purple-500",
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const data = detailServices[id];

  // Jika halaman diakses dengan id yang salah
  if (!data) {
    return (
      <div className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Layanan Tidak Ditemukan</h1>
        <Link href="/" className="text-blue-400 hover:underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* Tombol Kembali */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 group transition-colors cursor-pointer">
          <span>←</span> Kembali ke Beranda
        </Link>

        {/* Konten Utama */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className={`text-4xl lg:text-6xl font-black mb-6 bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
            {data.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            {data.fullDesc}
          </p>
        </motion.div>

        {/* Fitur */}
        <h2 className="text-2xl font-bold mb-6">Apa Saja yang Anda Dapatkan?</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {data.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
              <span className="text-emerald-400 font-bold">✔</span>
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>

        {/* Kotak Hubungi */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] text-center">
          <h3 className="text-xl font-bold mb-3">Tertarik dengan Layanan Ini?</h3>
          <p className="text-gray-400 mb-6">Konsultasikan kebutuhan bisnis Anda bersama Hazra Digital Agency secara gratis.</p>
          <a
            href={`https://wa.me/6285658323189?text=Halo%20Hazra%20Digital%20Agency,%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(data.title)}.`}
            target="_blank"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-transform hover:scale-105"
          >
            Konsultasi Lewat WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}