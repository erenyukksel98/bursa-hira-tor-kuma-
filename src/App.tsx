/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingBag, Menu, ArrowRight, Instagram, Facebook, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

// --- Mock Data ---

const PRODUCTS = [
  { id: 1, name: 'DESENLİ MULTİ ŞİFON', price: 90.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/1ccf884d-788c-45d2-ae45-300793081573/1080/img-4485.webp', badge: 'YENİ' },
  { id: 2, name: 'LİLA RENK EKOSE GOFRE', price: 70.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/058394a4-ebed-49f4-9ccb-f839a000843d/1080/img-4471.webp' },
  { id: 3, name: '100% PAMUK KETEN', price: 65.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/3d83c823-b54b-4285-a967-269e46b4cfa5/1080/img-4508.webp', badge: 'POPÜLER' },
  { id: 4, name: 'MODAL CUPRA', price: 80.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/1f1bbbf0-eef4-45b8-9a2b-d457e9b30c6a/1080/img-4754.webp' },
  { id: 5, name: 'JAKARLI SATEN', price: 120.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/6bbbb4e9-230b-4b3d-a2d0-15a789a8ebad/1080/img-4779.webp' },
  { id: 6, name: 'ÇİZGİLİ FLOŞ VİSKON', price: 95.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/2e75e8a6-8787-45fb-82cc-7107be33fe44/1080/img-4498.webp' },
  { id: 7, name: 'ÇİFT EN VİSKON', price: 90.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/e4c8afbe-1618-4c51-a6fc-b1adfbf235e3/image_1080.webp', badge: 'İNDİRİM' },
  { id: 8, name: 'TEK EN VİSKON', price: 60.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/2defccc9-9e50-4f8c-bc1d-5441c5a8f8a6/image_1080.webp' },
  { id: 9, name: 'ÇİFT EN KETEN', price: 110.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/796c3f1f-7ab7-43cc-8c9f-9b028b3b1c86/image_1080.webp' },
  { id: 10, name: 'DESENLİ ÇİFT EN MÜSLİN', price: 85.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/61d694d2-6562-4d55-b429-467859e550bf/image_1080.webp' },
  { id: 11, name: 'SANDY KUMAŞ', price: 75.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/0ce6536d-4836-413f-b0ab-99f3225d7f03/image_1080.webp' },
  { id: 12, name: 'ŞIK DESENLİ SANDY', price: 85.00, image: 'https://cdn.myikas.com/images/3caa805d-0e55-4190-bbba-97f734abf9c2/b2707233-0e72-456d-895b-2d40c922583f/image_1080.webp' },
];

const CATEGORIES = [
  { name: 'Desenli Müslin', count: 2 },
  { name: 'Gofre', count: 1 },
  { name: 'Jakarlı Saten', count: 2 },
  { name: 'Keten', count: 3 },
  { name: 'Kumaş', count: 75 },
  { name: 'Modal Cupra', count: 1 },
  { name: 'Multi Şifon', count: 1 },
  { name: 'Müslin Kumaş', count: 5 },
  { name: 'Sandy Kumaş', count: 2 },
  { name: 'Tek En Viskon', count: 50 },
  { name: 'Çift En Viskon', count: 15 },
];

// --- Components ---

function Navbar({ onOpenLogin }: { onOpenLogin: () => void }) {
  return (
    <nav className="fixed w-full z-50 mix-blend-difference text-white p-4 md:p-6">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="hover:text-accent transition-colors">
            <Menu className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
        
        {/* Logo Area */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-transparent flex items-center justify-center overflow-hidden shadow-lg">
             <img src="https://res.cloudinary.com/dfh3j0oat/image/upload/f_auto,q_auto/v1/logo_exkwb2" alt="Bursa Hira Tor Kumaş Logo" className="w-full h-full object-cover scale-[1.08] object-center" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={onOpenLogin}
            className="flex items-center gap-2 hover:text-accent transition-colors group"
          >
            <span className="font-display text-lg hidden md:block">GİRİŞ</span>
            <User className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
          </button>
          <button className="flex items-center gap-2 hover:text-accent transition-colors group">
            <span className="font-display text-lg hidden md:block">SEPET</span>
            <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-bg border border-accent/30 p-8 z-[70] shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-text/50 hover:text-accent transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="font-display text-4xl text-accent mb-2">GİRİŞ YAP</h2>
              <p className="font-sans text-sm text-text/70 font-light">Bursa Hira Tor Kumaş hesabınıza erişin.</p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-sans text-xs tracking-widest text-text/50 mb-2 uppercase">E-Posta</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-text focus:outline-none focus:border-accent transition-colors font-light"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label className="block font-sans text-xs tracking-widest text-text/50 mb-2 uppercase">Şifre</label>
                <input 
                  type="password" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-text focus:outline-none focus:border-accent transition-colors font-light"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <label className="flex items-center gap-2 text-sm text-text/70 cursor-pointer">
                  <input type="checkbox" className="accent-accent" />
                  <span className="font-light">Beni Hatırla</span>
                </label>
                <a href="#" className="text-sm text-accent hover:text-white transition-colors font-light">Şifremi Unuttum</a>
              </div>
              <button className="w-full bg-accent text-bg font-display text-xl py-4 mt-4 hover:bg-white transition-colors">
                GİRİŞ YAP
              </button>
              <p className="text-center text-sm text-text/50 font-light mt-4">
                Hesabınız yok mu? <a href="#" className="text-accent hover:text-white transition-colors">Kayıt Olun</a>
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    "https://res.cloudinary.com/dfh3j0oat/video/upload/v1/fabric_w4eo6j.mp4", 
    "https://res.cloudinary.com/dfh3j0oat/video/upload/v1/fabric_3_jhmdyj.mp4"
  ];
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    isTransitioning.current = false;
    const timeouts: NodeJS.Timeout[] = [];

    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === currentVideoIndex) {
        vid.play().catch(() => {});
      } else {
        // Pause the inactive video after the fade transition completes
        const timeoutId = setTimeout(() => {
          if (vid) {
            vid.pause();
            vid.currentTime = 0;
          }
        }, 1000);
        timeouts.push(timeoutId);
      }
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [currentVideoIndex]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>, idx: number) => {
    const vid = e.currentTarget;
    // Start transition 1 second before the video ends
    if (idx === currentVideoIndex && !isTransitioning.current && vid.duration > 0 && vid.duration - vid.currentTime <= 1.0) {
      isTransitioning.current = true;
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-bg">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden group">
        {videos.map((src, idx) => (
          <video 
            key={src}
            ref={(el) => { videoRefs.current[idx] = el; }}
            autoPlay={idx === 0}
            muted 
            playsInline 
            onTimeUpdate={(e) => handleTimeUpdate(e, idx)}
            className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover grayscale group-hover:grayscale-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentVideoIndex ? 'opacity-50 z-10' : 'opacity-0 z-0'
            }`}
            src={src}
          />
        ))}
        {/* Gradient overlay to blend the video into the black background seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg z-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-bg/80 z-20 pointer-events-none"></div>
      </div>

      {/* Massive Typography */}
      <div className="z-10 flex flex-col items-center pointer-events-none">
        <motion.div animate={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] leading-[0.8] text-white font-display text-center mix-blend-difference"
          >
            BURSA'NIN
          </motion.h1>
        </motion.div>
        <motion.div animate={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-[16vw] leading-[0.8] text-accent font-display text-center"
          >
            DOKUSU
          </motion.h1>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center z-20"
      >
        <span className="font-sans text-xs tracking-[0.3em] text-text/50 uppercase mb-4">Aşağı Kaydır</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-16 bg-accent"
        />
      </motion.div>
    </section>
  );
}

function Marquee() {
  const text = " %100 DOĞAL İÇERİK • BURSA ÜRETİMİ • HIZLI KARGO • ";
  return (
    <div className="bg-accent text-bg py-6 overflow-hidden border-y-4 border-bg transform -rotate-2 scale-105 z-20 relative">
      <div className="animate-marquee">
        <div className="flex whitespace-nowrap font-display text-5xl md:text-7xl tracking-wider">
          {text}{text}{text}{text}
        </div>
      </div>
    </div>
  );
}

function Categories() {
  return (
    <section className="py-32 px-4 md:px-12 bg-bg relative z-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-text/20 pb-8">
          <h2 className="text-6xl md:text-8xl font-display text-text leading-none">KATEGORİLER</h2>
          <span className="text-accent font-sans text-xl mt-4 md:mt-0 tracking-widest">/ {CATEGORIES.length} SEÇENEK</span>
        </div>
        
        <div className="flex flex-wrap gap-4 md:gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.a 
              key={idx}
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-accent)", color: "var(--color-bg)" }}
              className="group flex items-center gap-4 px-6 py-4 border-2 border-text/20 rounded-full bg-transparent text-text transition-colors duration-300"
            >
              <span className="font-display text-2xl md:text-3xl uppercase tracking-wide">{cat.name}</span>
              <span className="font-sans text-sm bg-text/10 group-hover:bg-bg/10 px-3 py-1 rounded-full">
                {cat.count}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="py-24 px-4 md:px-12 bg-text text-bg">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-6xl md:text-8xl font-display leading-none text-bg">KOLEKSİYON</h2>
          <button className="hidden md:flex items-center gap-2 font-display text-3xl hover:text-accent transition-colors">
            TÜMÜNÜ GÖR <ArrowRight className="w-8 h-8" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 mb-4">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-accent text-bg font-display text-sm md:text-base px-3 py-1 transform -rotate-3">
                    {product.badge}
                  </div>
                )}
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-display text-3xl text-accent transform translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                    İNCELE
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col justify-between items-start border-t-4 border-bg pt-3">
                <h3 className="font-display text-2xl md:text-3xl uppercase leading-none group-hover:text-accent transition-colors mb-2">
                  {product.name}
                </h3>
                <span className="font-display text-xl md:text-2xl">
                  ₺{product.price.toFixed(2)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center md:hidden">
          <button className="flex items-center gap-2 font-display text-3xl text-accent hover:text-bg transition-colors border-b-4 border-accent pb-1">
            TÜMÜNÜ GÖR <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bg text-text pt-32 pb-12 px-4 md:px-12 border-t border-text/10 overflow-hidden relative">
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="font-display text-5xl md:text-7xl mb-8 text-accent">BİZE ULAŞIN</h3>
            <p className="font-sans text-xl md:text-2xl font-light max-w-md mb-12">
              Bursa'nın köklü tekstil geleneğini modern tasarımlarla buluşturuyoruz.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-16 h-16 rounded-full border-2 border-text/20 flex items-center justify-center hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="w-16 h-16 rounded-full border-2 border-text/20 flex items-center justify-center hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300">
                <Facebook className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-display text-2xl tracking-wider">
            <div className="flex flex-col gap-4">
              <span className="text-text/50 text-sm font-sans tracking-widest mb-2">İLETİŞİM</span>
              <a href="#" className="hover:text-accent transition-colors">0 507 265 51 45</a>
              <a href="#" className="hover:text-accent transition-colors">INFO@HIRATOR.COM</a>
              <p className="mt-4 leading-snug">ANADOLU MAH.<br/>BURSA, TÜRKİYE</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-text/50 text-sm font-sans tracking-widest mb-2">MENÜ</span>
              <a href="#" className="hover:text-accent transition-colors">KOLEKSİYON</a>
              <a href="#" className="hover:text-accent transition-colors">HAKKIMIZDA</a>
              <a href="#" className="hover:text-accent transition-colors">S.S.S.</a>
            </div>
          </div>
        </div>
        
        {/* Massive Background Text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none flex justify-center">
          <span className="font-display text-[25vw] leading-none whitespace-nowrap">
            HİRA TOR
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center font-sans text-sm text-text/40 border-t border-text/10 pt-8">
          <p>&copy; {new Date().getFullYear()} BURSA HİRA TOR KUMAŞ.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-text transition-colors">GİZLİLİK</a>
            <a href="#" className="hover:text-text transition-colors">ÇEREZLER</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-bg">
      <Navbar onOpenLogin={() => setIsLoginOpen(true)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

