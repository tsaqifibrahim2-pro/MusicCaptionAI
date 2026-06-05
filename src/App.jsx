import React, { useState, useEffect } from 'react';
import { 
  Music, Send, Image, FileAudio, Mic, Heart, MessageCircle, Share2, 
  Copy, RefreshCw, Plus, Search, Settings, LogOut, User, Menu, X,
  Check, AlertCircle, TrendingUp, Users, Video, Sparkles, MessageSquare,
  Zap, ChevronRight, Clock, MoreVertical, Star, Crown, Award, Play,
  CreditCard, HelpCircle, Instagram, Twitter, Youtube, TikTok, ArrowLeft,
  Filter, Bell, Eye, EyeOff, Phone, Download, Upload, Sticker, Smile
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
  { id: 2, name: 'Raisa', role: 'Musisi', text: 'Tool yang luar biasa! Sekarang semakin mudah seringk untuk share musik di social media.' },
  { id: 3, name: 'Tulus', role: 'Indie Artist', text: 'AI Inspiration nya benar-benar give saya ide baru untuk buat lagu. Recommend!' },
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
  { id: 2, name: 'Romance Music Corner', avatar: 'RM', type: 2, description: 'Untuk berbagi lagu bertema cinta dan romantis', members: 189, isExclusive: false },
  { id: 3, name: 'Creator Hub Indonesia', avatar: 'CH', type: 3, description: 'Khusus untuk konten kreator musik aktif', members: 87, isExclusive: true },
  { id: 4, name: 'Musik Motivasi Nusantara', avatar: 'MM', type: 4, description: 'Untuk berbagi lagu dengan tema motivasi dan semangat', members: 312, isExclusive: false },
];

const PAKET = [
  { 
    id: 'gratis', 
    name: 'GRATIS', 
    price: 0, 
    generate: 3, 
    upload: 3, 
    inspirasi: 3, 
    ads: true,
    badge: 'Gratis',
    features: ['3x generate/bulan', '3x upload video', '3x AI Inspirasi', 'DM & Grup Chat unlimited', 'Buat grup gratis', 'Ada iklan']
  },
  { 
    id: 'standard', 
    name: 'STANDARD', 
    price: 30000, 
    generate: 50, 
    upload: 50, 
    inspirasi: 50, 
    ads: false,
    badge: 'Standard',
    features: ['50x generate caption', '50x upload video', '50x AI Inspirasi', 'DM & Grup Chat unlimited', 'Buat grup gratis', 'Tanpa iklan']
  },
  { 
    id: 'pro', 
    name: 'PRO', 
    price: 50000, 
    generate: 200, 
    upload: 200, 
    inspirasi: 'unlimited', 
    ads: false,
    badge: 'Pro',
    popular: true,
    features: ['200x generate caption', '200x upload video', 'AI Inspirasi unlimited', 'DM & Grup Chat unlimited', 'Buat grup gratis', 'Badge Pro di profil', 'Prioritas hasil lebih cepat', 'Tanpa iklan']
  },
  { 
    id: 'ultra', 
    name: 'ULTRA PRO', 
    price: 99000, 
    generate: 'unlimited', 
    upload: 'unlimited', 
    inspirasi: 'unlimited', 
    ads: false,
    badge: 'Ultra Pro',
    features: ['Unlimited generate caption', 'Unlimited upload video', 'AI Inspirasi unlimited', 'DM & Grup Chat unlimited', 'Buat grup gratis', 'Caption eksklusif YouTube & Twitter/X', 'Custom tone/gaya caption', 'Badge Ultra Pro di profil', 'Support prioritas', 'Tanpa iklan']
  },
];

// ========================================
// UI COMPONENTS
// ========================================

// Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className={`glass-card rounded-full px-6 py-3 flex items-center gap-2 ${type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
        {type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

// Button Component
const Button = ({ children, onClick, variant = 'primary', size = 'md', disabled, className, icon: Icon }) => {
  const baseClasses = "font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#7C3AED] hover:bg-[#6d28d9] text-white glow-violet-sm",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
    ghost: "bg-transparent hover:bg-white/10 text-white/80",
    danger: "bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/30",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : 20} />}
      {children}
    </button>
  );
};

// Input Component
const Input = ({ label, type = 'text', placeholder, value, onChange, icon: Icon, error, options, onSelect, isSelect }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm text-white/60 mb-2">{label}</label>}
      <div className="relative">
        {Icon && <Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />}
        {isSelect ? (
          <select
            value={value}
            onChange={onSelect}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 text-white focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none"
            style={{ backgroundImage: 'none' }}
          >
            <option value="" className="bg-[#0a0a0a]">{placeholder}</option>
            {options?.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0a0a0a]">{opt}</option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 ${Icon ? 'pl-12' : ''} text-white placeholder-white/30 focus:outline-none focus:border-[#7C3AED] transition-colors`}
          />
        )}
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

// Chip Component
const Chip = ({ children, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        selected 
          ? 'bg-[#7C3AED] text-white glow-violet-sm' 
          : 'bg-white/10 text-white/60 hover:bg-white/20'
      }`}
    >
      {children}
    </button>
  );
};

// Card Component
const Card = ({ children, className, onClick, glow }) => {
  return (
    <div 
      onClick={onClick}
      className={`glass-card rounded-2xl p-5 ${glow ? 'glow-violet' : ''} ${onClick ? 'cursor-pointer hover:bg-white/05 transition-all' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// Badge Component
const Badge = ({ children, type }) => {
  const colors = {
    free: 'bg-gray-500/20 text-gray-300',
    standard: 'bg-blue-500/20 text-blue-300',
    pro: 'bg-[#7C3AED]/20 text-[#a78bfa]',
    ultra: 'bg-yellow-500/20 text-yellow-300',
    gratis: 'bg-green-500/20 text-green-300',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[type] || colors.free}`}>
      {children}
    </span>
  );
};

// Loading Spinner
const Spinner = ({ size = 'md' }) => {
  const sizes = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' };
  return (
    <div className={`${sizes[size]} border-2 border-white/20 border-t-[#7C3AED] rounded-full animate-spin`} />
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;
  const sizes = { sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl' };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full ${sizes[size]} glass-card rounded-2xl p-6 animate-bounce-in max-h-[90vh] overflow-auto`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-xl font-bold">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

// Avatar Component
const Avatar = ({ name, size = 'md' }) => {
  const initials = name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';
  const sizes = { sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-12 h-12 text-base', xl: 'w-16 h-16 text-lg' };
  return (
    <div className={`${sizes[size]} bg-[#7C3AED] rounded-full flex items-center justify-center font-medium`}>
      {initials.slice(0, 2)}
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ value, max, label }) => {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-white/60">{label}</span>
        <span className="text-white">{value}/{max}</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#7C3AED] to-[#a78bfa] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// ========================================
// PAGE COMPONENTS
// ========================================

// Landing Page
const LandingPage = ({ onNavigate, onLogin }) => {
  const [heroText, setHeroText] = useState('Instagram');
  const texts = ['Instagram', 'TikTok', 'YouTube', 'Twitter/X'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()
