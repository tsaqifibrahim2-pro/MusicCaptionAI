import React, { useState, useEffect } from 'react';
import { 
  Music, Send, Image, FileAudio, Mic, Heart, MessageCircle, Share2, 
  Copy, RefreshCw, Plus, Search, Settings, LogOut, User, Menu, X,
  Check, AlertCircle, TrendingUp, Users, Video, Sparkles, MessageSquare,
  Zap, ChevronRight, Clock, MoreVertical, Star, Crown, Award, Play,
  CreditCard, HelpCircle, Instagram, Twitter, Youtube, TikTok, ArrowLeft,
  Filter, Bell, Eye, EyeOff, Phone, Download, Upload, Sticker, Smile,
  Home, Sparkles as Spark
} from 'lucide-react';

// ========================================
// MOCK DATA & CONSTANTS
// ========================================

const GENRES = ['Pop', 'R&B', 'Hip-Hop', 'Indie', 'Jazz', 'Electronic', 'Folk', 'Rock', 'Classical', 'Dangdut', 'Koplo'];
const MOODS = ['Bahagia', 'Melankolis', 'Energetik', 'Romantis', 'Motivasi', 'Santai', 'Sedih', 'Nostalgik', 'Dramatis', 'Inspiratif'];

const DUMMY_VIDEO_FEED = [
  { id: 1, name: 'Ahmad Dani', avatar: 'AD', title: 'Senja di Pantai', genre: 'Indie', gradient: 'video-gradient-1', likes: 1240, comments: 89, shares: 45 },
  { id: 2, name: 'Nisa Kayla', avatar: 'NK', title: 'Cinta Pertama', genre: 'Pop', gradient: 'video-gradient-2', likes: 2560, comments: 156, shares: 78 },
  { id: 3, name: 'Rizky Febian', avatar: 'RF', title: 'Duka', genre: 'R&B', gradient: 'video-gradient-3', likes: 890, comments: 45, shares: 23 },
  { id: 4, name: 'Isyana Saraswati', avatar: 'IS', title: 'Nyaman', genre: 'Jazz', gradient: 'video-gradient-4', likes: 3400, comments: 234, shares: 112 },
  { id: 5, name: 'Tulus', avatar: 'TL', title: 'Jatuh Cinta', genre: 'Pop', gradient: 'video-gradient-5', likes: 1890, comments: 123, shares: 67 },
];

const DUMMY_TESTIMONI = [
  { id: 1, name: 'Afgan', role: 'Penyanyi Pop', text: 'MusicCaption AI membantu saya menemukan caption yang pas untuk lagu. Sangat membantu!' },
  { id: 2, name: 'Raisa', role: 'Musisi', text: 'Tool yang luar biasa! Sekarang semakin mudah mempromisasi musik di social media.' },
  { id: 3, name: 'Tulus', role: 'Indie Artist', text: 'AI Inspiration-nya benar-benar gives saya ide baru untuk buat lagu. Recommend!' },
];

const DUMMY_DM = [
  { id: 1, name: 'Isyana Saraswati', avatar: 'IS', lastMessage: 'Kita Kollab bareng ya! 🎵', time: '2m', unread: 2, online: true },
  { id: 2, name: 'Nisa Kayla', avatar: 'NK', lastMessage: 'Lagu barunya bagus banget', time: '1j', unread: 0, online: false },
];

const DUMMY_GRUP = [
  { id: 1, name: 'Kolaborasi Indie Jakarta', avatar: 'KI', lastMessage: 'Rizky: Siapa yang mau collab minggu ini?', time: '5m', unread: 5, members: 12, isGrup: true },
  { id: 2, name: 'Tim Produksi Dangdut', avatar: 'TD', lastMessage: 'Admin: Studio sudah ready', time: '30m', unread: 1, members: 8, isGrup: true },
];

const GLOBAL_GRUP = [
  { id: 1, name: 'Vibes Bahagia & Sad Indonesia', avatar: 'VB', type: 1, description: 'Untuk berbagi lagu dengan nuansa bahagia atau sedih', members: 245, isExclusive: false },
  { id: 2, name: 'Romance Music Corner', avatar: 'RM', type: 2, description: 'Untuk berbagi lagu bertema cinta', members: 189, isExclusive: false },
  { id: 3, name: 'Creator Hub Indonesia', avatar: 'CH', type: 3, description: 'Khusus untuk konten kreator musik aktif', members: 87, isExclusive: true },
  { id: 4, name: 'Musik Motivasi Nusantara', avatar: 'MM', type: 4, description: 'Untuk berbagi lagu motivasi', members: 312, isExclusive: false },
];

const PAKET = [
  { id: 'gratis', name: 'GRATIS', price: 0, generate: 3, upload: 3, inspirasi: 3, ads: true, badge: 'gratis', features: ['3x generate/bulan', '3x upload video', '3x AI Inspirasi', 'DM & Grup Chat unlimited', 'Buat grup gratis', 'Ada iklan'] },
  { id: 'standard', name: 'STANDARD', price: 30000, generate: 50, upload: 50, inspirasi: 50, ads: false, badge: 'standard', features: ['50x generate caption', '50x upload video', '50x AI Inspirasi', 'DM & Grup Chat unlimited', 'Buat grup gratis', 'Tanpa iklan'] },
  { id: 'pro', name: 'PRO', price: 50000, generate: 200, upload: 200, inspirasi: 'unlimited', ads: false, badge: 'pro', popular: true, features: ['200x generate caption', '200x upload video', 'AI Inspirasi unlimited', 'DM & Grup Chat unlimited', 'Badge Pro di profil', 'Prioritas lebih cepat', 'Tanpa iklan'] },
  { id: 'ultra', name: 'ULTRA PRO', price: 99000, generate: 'unlimited', upload: 'unlimited', inspirasi: 'unlimited', ads: false, badge: 'ultra', features: ['Unlimited semua', 'Caption eksklusif YouTube & Twitter/X', 'Custom tone caption', 'Badge Ultra Pro', 'Support prioritas'] },
];

// ========================================
// UI COMPONENTS
// ========================================

const Toast = ({ message, type, onClose }) => {
  useEffect(() => { const timer = setTimeout(onClose, 3000); return () => clearTimeout(timer); }, [onClose]);
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className={`glass-card rounded-full px-6 py-3 flex items-center gap-2 ${type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
        {type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

const Button = ({ children, onClick, variant = 'primary', size = 'md', disabled, className, icon: Icon }) => {
  const variants = { primary: "bg-[#7C3AED] hover:bg-[#6d28d9] text-white glow-violet-sm", secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20", ghost: "bg-transparent hover:bg-white/10 text-white/80", danger: "bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30" };
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-5 py-2.5 text-base", lg: "px-6 py-3 text-lg" };
  return <button onClick={onClick} disabled={disabled} className={`font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>{Icon && <Icon size={size === 'sm' ? 16 : 20} />}{children}</button>;
};

const Input = ({ label, type = 'text', placeholder, value, onChange, icon: Icon, options, onSelect, isSelect }) => (
  <div className="w-full">{label && <label className="block text-sm text-white/60 mb-2">{label}</label>}<div className="relative">{Icon && <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />}{isSelect ? <select value={value} onChange={onSelect} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 text-white focus:outline-none focus:border-[#7C3AED] appearance-none">{options?.map((opt) => <option key={opt} value={opt} className="bg-[#0a0a0a]">{opt}</option>)}</select> : <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7C3AED]" />}</div></div>
);

const Chip = ({ children, selected, onClick }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selected ? 'bg-[#7C3AED] text-white glow-violet-sm' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}>{children}</button>
);

const Card = ({ children, className, onClick, glow }) => (
  <div onClick={onClick} className={`glass-card rounded-2xl p-5 ${glow ? 'glow-violet' : ''} ${onClick ? 'cursor-pointer hover:bg-white/05' : ''} ${className}`}>{children}</div>
);

const Badge = ({ children, type }) => <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${type === 'pro' ? 'bg-[#7C3AED]/20 text-[#a78bfa]' : type === 'ultra' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-green-500/20 text-green-300'}`}>{children}</span>;

const Spinner = ({ size = 'md' }) => <div className={`${size === 'sm' ? 'w-4 h-4' : 'w-8 h-8'} border-2 border-white/20 border-t-[#7C3AED] rounded-full animate-spin`} />;

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-lg glass-card rounded-2xl p-6 animate-bounce-in max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4"><h3 className="font-display text-xl font-bold">{title}</h3><button onClick={onClose}><X size={20} /></button></div>
        {children}
      </div>
    </div>
  );
};

const Avatar = ({ name, size = 'md' }) => {
  const initials = name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';
  return <div className={`${size === 'sm' ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm'} bg-[#7C3AED] rounded-full flex items-center justify-center font-medium`}>{initials.slice(0, 2)}</div>;
};

const ProgressBar = ({ value, max, label }) => (
  <div className="w-full"><div className="flex justify-between text-sm mb-1"><span className="text-white/60">{label}</span><span className="text-white">{value}/{max}</span></div><div className="w-full bg-white/10 rounded-full h-2"><div className="h-full bg-gradient-to-r from-[#7C3AED] to-[#a78bfa] rounded-full" style={{ width: `${Math.min((value/max)*100, 100)}%` }} /></div></div>
);

// ========================================
// PAGE COMPONENTS
// ========================================

const LandingPage = ({ onNavigate, onLogin }) => {
  const [heroText, setHeroText] = useState('Instagram');
  const texts = ['Instagram', 'TikTok', 'YouTube', 'Twitter/X'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % texts.length), 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { setHeroText(texts[currentIndex]); }, [currentIndex]);

  return (
    <div className="min-h-screen gradient-bg">
      <div className="grain-overlay" />
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7C3AED] rounded-xl flex items-center justify-center glow-violet-sm"><Music size={22} className="text-white" /></div>
            <span className="font-display text-xl font-bold">MusicCaption<span className="text-[#7C3AED]">AI</span></span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" onClick={() => onNavigate('login')}>Masuk</Button>
            <Button size="sm" onClick={() => onNavigate('login')}>Mulai Gratis</Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-10 px-5 max-w-6xl mx-auto">
        <section className="text-center py-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Ubah Musikmu Jadi Caption <span className="text-gradient">{heroText}</span>
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">Caption & hashtag bertenaga AI untuk musisi Indonesia</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => onNavigate('login')}>Mulai Gratis</Button>
            <Button variant="secondary" size="lg" onClick={() => {}}>Lihat Cara Kerjanya</Button>
          </div>
        </section>

        <section className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{icon: Zap, title: 'Generator Caption', desc: 'Buat caption viral'}, {icon: Video, title: 'Feed Video', desc: 'Share karya musik'}, {icon: Spark, title: 'AI Inspirasi', desc: 'Dapat ide kreatif'}, {icon: MessageSquare, title: 'DM & Grup', desc: 'Komonitas musisi'}].map((item, i) => (
            <Card key={i} glow>
              <item.icon size={32} className="text-[#7C3AED] mb-3" />
              <h3 className="font-display text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </Card>
          ))}
        </section>

        <section className="py-12">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Apa Kata Musisi</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {DUMMY_TESTIMONI.map((item) => (
              <Card key={item.id}>
                <p className="text-white/80 mb-4">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <Avatar name={item.name} size="sm" />
                  <div><p className="font-medium text-sm">{item.name}</p><p className="text-xs text-white/60">{item.role}</p></div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer
