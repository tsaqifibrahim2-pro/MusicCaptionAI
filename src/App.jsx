import React, { useState, useEffect, useRef } from 'react';
import {
  Music, Home, Zap, Play, MessageCircle, CreditCard,
  Sparkles, Heart, Share2, Copy, Check, X, LogOut,
  Shield, Hash, RefreshCw, ChevronRight, ArrowLeft,
  Send, Star, AlertCircle, User, Upload, Trash2, MessageSquare
} from 'lucide-react';

const GENRES = ['Pop', 'R&B', 'Hip-Hop', 'Indie', 'Jazz', 'Electronic', 'Folk', 'Rock', 'Classical', 'Dangdut', 'Koplo', 'Reggae', 'Country', 'Metal', 'Punk', 'Soul', 'Funk', 'Disco', 'House', 'Techno', 'Dubstep', 'Trap', 'K-Pop', 'Anime OST', 'Lo-Fi', 'Ambient', 'Synthwave', 'Afrobeat', 'Bollywood', 'Salsa'];
const MOODS = ['Bahagia', 'Melankolis', 'Energetik', 'Romantis', 'Motivasi', 'Santai', 'Sedih', 'Nostalgik'];

const STYLES = ['Melankolis', 'Energetik', 'Romantis', 'Motivasi', 'Santai', 'Sedih', 'Nostalgik', 'Marah', 'Ceria', 'Tenang', 'Misterius', 'Heroik', 'Sederhana', 'Kompleks', 'Modern', 'Klasik', 'Jazzy', 'Bluesy', 'Groovy', 'Ethereal', 'Dark', 'Bright', 'Calm', 'Intense', 'Playful', 'Serious', 'Hopeful', 'Despair', 'Funky', 'Smooth'];

const AI_CHARACTERS = [
  { id: 'ai-1', name: 'Alex', emoji: '🤖' },
  { id: 'ai-2', name: 'Ryan', emoji: '🧠' },
  { id: 'ai-3', name: 'Chris', emoji: '⚡' },
  { id: 'ai-4', name: 'Jordan', emoji: '🌐' },
  { id: 'ai-5', name: 'Morgan', emoji: '💻' },
];

const CARTOON_CHARACTERS = [
  { id: 'cartoon-1', name: 'Luna', emoji: '🌙' },
  { id: 'cartoon-2', name: 'Sakura', emoji: '🌸' },
  { id: 'cartoon-3', name: 'Mia', emoji: '✨' },
  { id: 'cartoon-4', name: 'Bella', emoji: '💎' },
  { id: 'cartoon-5', name: 'Sofia', emoji: '🎀' },
];

const FEED_POSTS = [
  { id: 1, user: 'Rina Kusuma', handle: '@rinakusuma', caption: '🎵 Single terbaru sudah rilis! #musikindonesia', likes: 284, comments: 42 },
  { id: 2, user: 'Dimas Pratama', handle: '@dimaspratama', caption: 'Latihan gitar acoustic 🎸 #acoustic', likes: 156, comments: 28 },
  { id: 3, user: 'Studio Nada', handle: '@studionada', caption: 'Behind the scenes! 🎙️✨ #studio', likes: 521, comments: 89 },
];

const PACKAGES = [
  { id: 'gratis', name: 'Gratis', price: 0, gen: '3', features: ['3 generate/bulan (Email)', 'DM & Grup unlimited', 'Ada iklan'] },
  { id: 'standard', name: 'Standard', price: 30000, gen: '50', features: ['50 generate/bulan', 'DM & Grup unlimited', 'Tanpa iklan'] },
  { id: 'pro', name: 'Pro', price: 50000, gen: '200', popular: true, features: ['200 generate/bulan', 'Inspirasi unlimited', 'Badge Pro', 'Tanpa iklan'] },
  { id: 'ultra', name: 'Ultra Pro', price: 99000, gen: '∞', features: ['Unlimited semua', 'Caption eksklusif YouTube & Twitter/X', 'Badge Ultra Pro', 'Support prioritas'] },
];

function Avatar({ name, size = 36 }) {
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase();
  return (
    <div style={{ width: size, height: size, background: '#7C3AED' }} className="rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
      {initials.slice(0, 2)}
    </div>
  );
}

function Toast({ toasts }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map(t => (
        <div key={t.id} className="bg-green-900/50 backdrop-blur px-4 py-3 rounded-xl flex items-center gap-2 text-sm text-green-300 border border-green-700">
          <Check size={16} /> {t.msg}
        </div>
      ))}
    </div>
  );
}

function LandingPage({ onNavigate }) {
  const [heroIdx, setHeroIdx] = useState(0);
  const platforms = ['Instagram', 'TikTok', 'YouTube'];

  useEffect(() => {
    const timer = setInterval(() => setHeroIdx(i => (i + 1) % platforms.length), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <nav className="glass-card fixed top-0 w-full z-50 px-4 py-4 border-b border-purple-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center glow-violet-sm">
            <Music size={20} className="text-white" />
          </div>
          <span className="font-bold text-white text-lg">MusicCaption<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI</span></span>
        </div>
        <button onClick={() => onNavigate('login')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition">Mulai Gratis</button>
      </nav>

      <div className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Ubah Musikmu Jadi<br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Caption Viral</span>
        </h1>
        <p className="text-xl text-gray-300 mb-4">di <span className="text-purple-400 font-bold">{platforms[heroIdx]}</span></p>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Caption & hashtag bertenaga AI untuk musisi Indonesia</p>
        <button onClick={() => onNavigate('login')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition">Mulai Gratis</button>
      </div>

      <footer className="px-4 py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © 2026 MusicCaptionAI. Untuk Musisi Indonesia.
      </footer>
    </div>
  );
}

function LoginPage({ onDemoUser, onDemoAdmin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showGooglePicker, setShowGooglePicker] = useState(false);
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  const handleLogin = () => {
    if (!form.email.trim()) { alert('Email harus diisi!'); return; }
    if (!form.password.trim()) { alert('Password harus diisi!'); return; }
    onDemoUser();
  };

  const handleGoogleLogin = () => {
    onDemoUser();
  };

  const handleAdminClick = () => {
    setShowAdminPassword(true);
  };

  const verifyAdminPassword = () => {
    if (adminPassword === 'admin123') {
      onDemoAdmin();
      setShowAdminPassword(false);
      setAdminPassword('');
    } else {
      alert('Password admin salah!');
      setAdminPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center glow-violet">
            <Music size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">MusicCaption<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI</span></h1>
          <p className="text-gray-400 text-sm mt-2">Platform caption & hashtag untuk musisi</p>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-purple-500/20">
          <input type="email" placeholder="musisi@email.com" className="w-full glass-card px-4 py-3 rounded-lg text-white placeholder-gray-600 border border-purple-500/20 mb-3 outline-none focus:border-purple-500" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <input type="password" placeholder="••••••••" className="w-full glass-card px-4 py-3 rounded-lg text-white placeholder-gray-600 border border-purple-500/20 mb-4 outline-none focus:border-purple-500" value={form.password} onChange={e => setForm({...form, password: e.target.value})} onKeyDown={e => e.key === 'Enter' && handleLogin()} />
          <button onClick={handleLogin} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-bold mb-4 transition">
            Masuk
          </button>

          <button onClick={handleGoogleLogin} className="w-full glass-card-hover border border-purple-500/20 text-white py-3 rounded-lg font-bold mb-4 transition">
            🔐 Masuk dengan Google (10x/bulan)
          </button>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-500 text-xs">atau</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          <button onClick={handleAdminClick} className="w-full glass-card-hover py-2.5 rounded-lg text-xs text-gray-300 font-bold border border-purple-500/20">⚙️ Khusus Admin (Google)</button>
        </div>

        {showAdminPassword && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="glass-card rounded-2xl p-6 border border-purple-500/20 w-full max-w-sm">
              <p className="text-white font-bold mb-4">🔐 Masuk Admin</p>
              <p className="text-xs text-gray-400 mb-4">Akun: musisi@gmail.com</p>
              <input type="password" placeholder="Password admin..." className="w-full glass-card px-4 py-3 rounded-lg text-white border border-purple-500/20 mb-4 outline-none focus:border-purple-500" value={adminPassword} onChange={e => setAdminPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && verifyAdminPassword()} />
              <button onClick={verifyAdminPassword} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-bold mb-2 text-sm">Masuk</button>
              <button onClick={() => { setShowAdminPassword(false); setAdminPassword(''); }} className="w-full bg-red-700 text-white py-2 rounded-lg text-sm font-bold">Batal</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DashboardPage({ user, quota, isAdmin, onNavigate }) {
  return (
    <div className="px-4 py-6 pb-24">
      <h1 className="text-3xl font-bold text-white mb-1">Halo, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{user.name}</span>! 👋</h1>
      <p className="text-gray-400 text-sm mb-6">Siap buat konten musik yang keren?</p>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="glass-card rounded-2xl p-4 border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-transparent">
          <p className="text-xs text-gray-400 uppercase">Kuota</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{quota}</p>
          <p className="text-xs text-gray-500">Generate tersisa</p>
        </div>
        <div className="glass-card rounded-2xl p-4 border border-pink-500/20 bg-gradient-to-br from-pink-900/20 to-transparent">
          <p className="text-xs text-gray-400 uppercase">Paket</p>
          <p className="text-2xl font-bold text-pink-400">{user.plan}</p>
          <button onClick={() => onNavigate('harga')} className="text-xs text-purple-400 hover:underline mt-1">Upgrade →</button>
        </div>
      </div>

      <p className="text-xs font-bold text-gray-500 uppercase mb-3">Akses Cepat</p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { icon: Zap, label: 'Generator', page: 'generator', color: 'from-purple-600' },
          { icon: Play, label: 'Feed', page: 'feed', color: 'from-blue-600' },
          { icon: Sparkles, label: 'Inspirasi', page: 'inspirasi', color: 'from-pink-600' },
          { icon: MessageCircle, label: 'Pesan', page: 'pesan', color: 'from-green-600' },
        ].map((item, i) => (
          <button key={i} onClick={() => onNavigate(item.page)} className={`glass-card-hover rounded-2xl p-4 flex flex-col items-center gap-2 border border-purple-500/20 bg-gradient-to-br ${item.color}/10 to-transparent`}>
            <div className={`w-10 h-10 bg-gradient-to-r ${item.color} to-transparent rounded-lg flex items-center justify-center`}>
              <item.icon size={20} className="text-white" />
            </div>
            <span className="text-xs font-bold text-white text-center">{item.label}</span>
          </button>
        ))}
      </div>

      {isAdmin && (
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase mb-3">Admin Panel</p>
          <button onClick={() => onNavigate('admin')} className="w-full glass-card-hover rounded-2xl p-4 flex items-center gap-3 border border-red-500/20 bg-gradient-to-br from-red-900/10 to-transparent">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-transparent rounded-lg flex items-center justify-center">
              <Shield size={20} className="text-white" />
            </div>
            <div className="flex-1 text-left">
              <span className="text-xs font-bold text-white">Dashboard Admin</span>
              <p className="text-xs text-red-400">Kelola pengajuan & pengguna</p>
            </div>
            <ChevronRight size={16} className="text-red-400" />
          </button>
        </div>
      )}
    </div>
  );
}

function GeneratorPage({ quota, onQuotaDecrease, addToast }) {
  const [genre, setGenre] = useState('Pop');
  const [mood, setMood] = useState('Bahagia');
  const [results, setResults] = useState(null);

  const generate = () => {
    if (quota <= 0) { addToast('Kuota habis! Upgrade sekarang'); return; }
    onQuotaDecrease();
    setResults([
      { length: 'Pendek', caption: `🎵 ${genre} dengan mood ${mood}! #musik #${genre.toLowerCase()}` },
      { length: 'Sedang', caption: `🎶 Setiap nada dalam lagu ini mencerminkan mood ${mood.toLowerCase()}. Genre ${genre} yang autentik untuk cerita tulus! ✨ #musik #newmusic` },
      { length: 'Panjang', caption: `🌟 Ada momen yang tak bisa diungkap kata-kata. Musik ada untuk menjembatani. Lagu ini adalah perjalanan emosional ${mood.toLowerCase()}, dibungkus ${genre} autentik. Setiap bait adalah hati kami! 🎵✨ #musik #newmusic #${genre.toLowerCase()}` },
    ]);
    addToast('✨ Caption berhasil dibuat!');
  };

  return (
    <div className="px-4 py-6 pb-24">
      <h1 className="text-2xl font-bold text-white mb-1">Generator Caption AI</h1>
      <p className="text-gray-400 text-sm mb-6">Buat caption dan hashtag untuk konten musikmu</p>

      <div className="glass-card rounded-2xl p-4 mb-4 border border-purple-500/20">
        <p className="font-bold text-white text-sm mb-4">⚙️ Pengaturan</p>

        <div className="mb-4">
          <label className="text-xs text-gray-400 mb-2 block">Genre Musik</label>
          <select value={genre} onChange={e => setGenre(e.target.value)} className="w-full glass-card px-4 py-3 rounded-lg text-white border border-purple-500/20 outline-none focus:border-purple-500">
            {GENRES.map(g => <option key={g} className="bg-gray-900">{g}</option>)}
          </select>
        </div>

        <div className="mb-4">
          <label className="text-xs text-gray-400 mb-2 block">Mood / Suasana</label>
          <select value={mood} onChange={e => setMood(e.target.value)} className="w-full glass-card px-4 py-3 rounded-lg text-white border border-purple-500/20 outline-none focus:border-purple-500">
            {MOODS.map(m => <option key={m} className="bg-gray-900">{m}</option>)}
          </select>
        </div>

        <button onClick={generate} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-lg font-bold text-white transition flex items-center justify-center gap-2">
          <Zap size={16} /> Generate ({quota} tersisa)
        </button>
      </div>

      {results && (
        <div className="flex flex-col gap-3">
          {results.map((r, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-transparent">
              <p className="text-xs text-purple-400 font-bold uppercase mb-2">{r.length}</p>
              <p className="text-sm text-gray-300 mb-3">{r.caption}</p>
              <button onClick={() => { navigator.clipboard.writeText(r.caption); addToast('📋 Disalin!'); }} className="w-full glass-card-hover py-2 text-xs text-gray-300 rounded-lg border border-purple-500/20">Salin Semua</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function FeedPage({ addToast, feedPosts, setFeedPosts }) {
  const [liked, setLiked] = useState({});

  return (
    <div className="px-4 py-6 pb-24">
      <h1 className="text-2xl font-bold text-white mb-4">Feed Video 🎬</h1>
      {feedPosts.map(post => (
        <div key={post.id} className="glass-card rounded-2xl overflow-hidden mb-4 border border-purple-500/20">
          <div className="p-3 flex items-center gap-2">
            <Avatar name={post.user} size={36} />
            <div className="flex-1"><p className="font-bold text-white text-sm">{post.user}</p><p className="text-xs text-gray-400">{post.handle}</p></div>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 h-40 flex items-center justify-center">
            <Play size={40} className="text-white/50" fill="white" />
          </div>
          <div className="p-3">
            <p className="text-sm text-gray-300 mb-2">{post.caption}</p>
            <div className="flex items-center gap-4">
              <button onClick={() => { setLiked(p => ({...p, [post.id]: !p[post.id]})); if(!liked[post.id]) addToast('❤️ Disukai!'); }} className="flex items-center gap-1 text-sm hover:text-red-500 transition">
                <Heart size={16} className={liked[post.id] ? 'text-red-500 fill-red-500' : ''} /> {post.likes + (liked[post.id] ? 1 : 0)}
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white">
                <MessageCircle size={16} /> {post.comments}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function InspirasiPage({ quota, onQuotaDecrease, addToast, feedPosts, setFeedPosts }) {
  const [genre, setGenre] = useState('Indie');
  const [result, setResult] = useState(null);
  const [showCustom, setShowCustom] = useState(false);
  const [customData, setCustomData] = useState({ lirik: '', judul: '', gaya: 'Melankolis' });
  const [selectedStyle, setSelectedStyle] = useState('Melankolis');

  const generateInspirasi = () => {
    if (quota <= 0) { addToast('Kuota habis!'); return; }
    onQuotaDecrease();
    setResult({ titles: ['Judul 1', 'Judul 2', 'Judul 3'], mood: selectedStyle, concept: 'Shot sinematik malam hari' });
    addToast('✨ Inspirasi berhasil dibuat!');
  };

  const uploadCustom = () => {
    if (!customData.lirik.trim()) { addToast('Tulis lirik dulu!'); return; }
    if (!customData.judul.trim()) { addToast('Tulis judul dulu!'); return; }
    if (quota <= 0) { addToast('Kuota habis!'); return; }
    onQuotaDecrease();
    
    const newPost = {
      id: Date.now(),
      user: 'Anda',
      handle: '@user',
      caption: `🎵 ${customData.judul} - ${customData.gaya}\n\n${customData.lirik}`,
      likes: 0,
      comments: 0
    };
    setFeedPosts([newPost, ...feedPosts]);
    setCustomData({ lirik: '', judul: '', gaya: 'Melankolis' });
    setShowCustom(false);
    addToast('✨ Lagu berhasil diupload ke Feed!');
  };

  return (
    <div className="px-4 py-6 pb-24">
      <h1 className="text-2xl font-bold text-white mb-1">Mode AI Inspirasi</h1>
      <p className="text-gray-400 text-sm mb-6">Dapatkan inspirasi kreatif dari AI</p>

      <div className="glass-card rounded-2xl p-4 mb-4 border border-purple-500/20">
        <label className="text-xs text-gray-400 mb-2 block">Pilih Genre</label>
        <select value={genre} onChange={e => setGenre(e.target.value)} className="w-full glass-card px-4 py-3 rounded-lg text-white border border-purple-500/20 mb-3 outline-none focus:border-purple-500">
          {GENRES.map(g => <option key={g} className="bg-gray-900">{g}</option>)}
        </select>

        <label className="text-xs text-gray-400 mb-2 block">Pilih Gaya/Tone</label>
        <select value={selectedStyle} onChange={e => setSelectedStyle(e.target.value)} className="w-full glass-card px-4 py-3 rounded-lg text-white border border-purple-500/20 mb-4 outline-none focus:border-purple-500">
          {STYLES.map(s => <option key={s} className="bg-gray-900">{s}</option>)}
        </select>

        <div className="flex gap-2">
          <button onClick={generateInspirasi} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm">
            <Sparkles size={16} /> Inspirasi ({quota})
          </button>
          <button onClick={() => setShowCustom(!showCustom)} className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-bold text-sm">
            ✍️ Custom
          </button>
        </div>
      </div>

      {showCustom && (
        <div className="glass-card rounded-2xl p-4 mb-4 border border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-transparent">
          <label className="text-xs text-blue-400 font-bold mb-2 block">Buat Lirik Custom</label>
          
          <input value={customData.judul} onChange={e => setCustomData({...customData, judul: e.target.value})} placeholder="Judul Lagu..." className="w-full glass-card px-4 py-3 rounded-lg text-white border border-blue-500/20 mb-3 outline-none focus:border-blue-500" />
          
          <textarea value={customData.lirik} onChange={e => setCustomData({...customData, lirik: e.target.value})} placeholder="Tulis lirik lagu..." className="w-full glass-card px-4 py-3 rounded-lg text-white border border-blue-500/20 mb-3 outline-none focus:border-blue-500 h-24 resize-none" />
          
          <select value={customData.gaya} onChange={e => setCustomData({...customData, gaya: e.target.value})} className="w-full glass-card px-4 py-3 rounded-lg text-white border border-blue-500/20 mb-3 outline-none focus:border-blue-500">
            {STYLES.map(s => <option key={s} className="bg-gray-900">{s}</option>)}
          </select>
          
          <button onClick={uploadCustom} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
            <Upload size={16} /> Upload ke Feed
          </button>
        </div>
      )}

      {result && (
        <div className="space-y-3">
          {[
            { label: '🎵 Ide Judul', value: result.titles.join(', ') },
            { label: '🌊 Gaya/Mood', value: result.mood },
            { label: '🎬 Konsep', value: result.concept },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 border border-purple-500/20 bg-gradient-to-br from-pink-900/10 to-transparent">
              <p className="text-xs text-pink-400 font-bold mb-2">{item.label}</p>
              <p className="text-sm text-gray-300">{item.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PesanPage({ addToast, adminMessages, setAdminMessages, isAdmin }) {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');
  const [dmChats, setDmChats] = useState([
    { id: 1, name: 'Rina Kusuma', online: true, unread: 2, lastMsg: 'Keren banget!', isAdmin: false, messages: [
      { id: 1, from: 'them', text: 'Hei! Udah denger lagu baru?', time: '10:00' },
      { id: 2, from: 'me', text: 'Belum nih', time: '10:01' },
    ]},
  ]);
  
  const chatsToShow = isAdmin ? adminMessages.length > 0 ? [{ id: 'admin-chat', name: 'Chat Admin', isAdmin: true, messages: adminMessages }] : [] : [...dmChats, { id: 'admin-support', name: 'Admin Support', online: true, unread: 0, lastMsg: 'Bantuan apa yang kamu butuhkan?', isAdmin: true, messages: [] }];

  const sendMessage = () => {
    if (!message.trim()) { addToast('Ketik pesan dulu!'); return; }
    
    if (activeChat.isAdmin && !isAdmin) {
      setAdminMessages([...adminMessages, { id: Date.now(), from: 'User', text: message }]);
    } else if (activeChat.id !== 'admin-support') {
      setDmChats(prev => prev.map(d => d.id === activeChat.id ? { ...d, messages: [...d.messages, { id: Date.now(), from: 'me', text: message }] } : d));
    }
    
    setActiveChat(prev => ({ ...prev, messages: [...(prev.messages || []), { id: Date.now(), from: 'me', text: message }] }));
    setMessage('');
    addToast('💬 Pesan terkirim!');
  };

  if (activeChat) {
    return (
      <div className="flex flex-col h-screen bg-black">
        <div className="glass-card px-4 py-3 flex items-center gap-3 border-b border-purple-500/20 sticky top-0 z-10">
          <button onClick={() => setActiveChat(null)}><ArrowLeft size={20} className="text-gray-400" /></button>
          <p className="text-white font-bold">{activeChat.name}</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-hide">
          {(activeChat.messages || []).map(msg => (
            <div key={msg.id} className={`flex ${msg.from === 'me' || msg.from === activeChat.name && isAdmin ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-2xl max-w-xs ${msg.from === 'me' || msg.from === activeChat.name && isAdmin ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'glass-card text-gray-300 border border-purple-500/20'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="glass-card px-4 py-3 flex gap-2 border-t border-purple-500/20">
          <input value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Ketik pesan..." className="flex-1 glass-card px-3 py-2 rounded-lg text-white border border-purple-500/20 outline-none focus:border-purple-500" />
          <button onClick={sendMessage} className="bg-gradient-to-r from-purple-600 to-pink-600 w-9 h-9 rounded-lg flex items-center justify-center text-white hover:opacity-90"><Send size={16} /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 pb-20">
      <h1 className="text-2xl font-bold text-white mb-4">💬 Pesan</h1>
      {chatsToShow.map(item => (
        <button key={item.id} onClick={() => setActiveChat(item)} className="glass-card-hover rounded-xl p-3 flex gap-3 w-full mb-2 border border-purple-500/20">
          <Avatar name={item.name} />
          <div className="flex-1 text-left">
            <p className="text-white font-bold">{item.name}</p>
            <p className="text-xs text-gray-400">{item.lastMsg || 'Tidak ada pesan'}</p>
          </div>
          {item.unread > 0 && <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-full w-5 h-5 text-white text-xs flex items-center justify-center font-bold">{item.unread}</div>}
        </button>
      ))}
    </div>
  );
}

function HargaPage({ currentPlan, addToast }) {
  return (
    <div className="px-4 py-6 pb-20 text-center">
      <h1 className="text-3xl font-bold text-white mb-2">💳 Pilih Paket</h1>
      <p className="text-gray-400 text-sm mb-6">Upgrade kapan saja sesuai kebutuhan</p>
      {PACKAGES.map(pkg => (
        <div key={pkg.id} className={`glass-card rounded-2xl p-4 mb-4 border ${pkg.popular ? 'border-purple-500/50 bg-gradient-to-br from-purple-900/20' : 'border-purple-500/20'}`}>
          {pkg.popular && <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-bold mb-2">⭐ Populer</span>}
          <p className="font-bold text-white text-lg">{pkg.name}</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Rp {pkg.price.toLocaleString('id-ID')}</p>
          <p className="text-xs text-gray-400 mb-3">{pkg.gen} generate/bulan</p>
          <button onClick={() => addToast(`${pkg.name} dipilih! 🎉`)} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-bold text-sm">Pilih Paket</button>
        </div>
      ))}
    </div>
  );
}

function ProfilePage({ user, addToast }) {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [showCharacterPicker, setShowCharacterPicker] = useState(false);
  const [songs, setSongs] = useState([
    { id: 1, title: 'Lagu Pertama' },
    { id: 2, title: 'Lagu Kedua' },
  ]);
  const [follower] = useState(1250);
  const [following] = useState(342);

  const deleteSong = (id) => {
    setSongs(prev => prev.filter(s => s.id !== id));
    addToast('❌ Lagu dihapus!');
  };

  const selectCharacter = (char) => {
    setProfilePhoto(char.emoji);
    setShowCharacterPicker(false);
    addToast('✅ Foto profil berhasil diubah!');
  };

  return (
    <div className="px-4 py-6 pb-24">
      <h1 className="text-2xl font-bold text-white mb-6">👤 Profil</h1>

      <div className="glass-card rounded-2xl p-6 border border-purple-500/20 text-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl border-4 border-purple-500">
          {profilePhoto || '👤'}
        </div>
        <p className="text-xl font-bold text-white mb-4">{user.name}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div><p className="text-2xl font-bold text-purple-400">{follower}</p><p className="text-xs text-gray-400">Follower</p></div>
          <div><p className="text-2xl font-bold text-pink-400">{following}</p><p className="text-xs text-gray-400">Following</p></div>
        </div>

        <button onClick={() => setShowCharacterPicker(!showCharacterPicker)} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-bold text-sm">
          {showCharacterPicker ? 'Tutup Pilihan' : '🖼️ Pilih Foto Profil'}
        </button>
      </div>

      {showCharacterPicker && (
        <div className="glass-card rounded-2xl p-4 mb-6 border border-purple-500/20">
          <p className="text-sm font-bold text-white mb-3">🤖 Karakter AI (Laki-laki)</p>
          <div className="grid grid-cols-5 gap-2 mb-6">
            {AI_CHARACTERS.map(char => (
              <button key={char.id} onClick={() => selectCharacter(char)} className="glass-card-hover p-2 rounded-lg border border-purple-500/20 text-2xl">
                {char.emoji}
              </button>
            ))}
          </div>

          <p className="text-sm font-bold text-white mb-3">💎 Karakter Kartun (Perempuan)</p>
          <div className="grid grid-cols-5 gap-2">
            {CARTOON_CHARACTERS.map(char => (
              <button key={char.id} onClick={() => selectCharacter(char)} className="glass-card-hover p-2 rounded-lg border border-purple-500/20 text-2xl">
                {char.emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="glass-card rounded-2xl p-4 border border-purple-500/20">
        <p className="text-sm font-bold text-white mb-4">🎵 Hasil Karya Lagu</p>
        {songs.length === 0 ? (
          <p className="text-xs text-gray-400 text-center py-4">Belum ada lagu</p>
        ) : (
          <div className="space-y-2">
            {songs.map(song => (
              <div key={song.id} className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                <p className="text-sm text-gray-300">{song.title}</p>
                <button onClick={() => deleteSong(song.id)} className="text-red-400 hover:text-red-300">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AdminDashboard({ addToast, adminMessages, setAdminMessages }) {
  const [section, setSection] = useState('overview');
  const [applications, setApplications] = useState([
    { id: 1, name: 'Bagas Nugroho', platform: 'YouTube', status: 'pending' },
    { id: 2, name: 'Citra Lestari', platform: 'TikTok', status: 'pending' },
    { id: 3, name: 'Rizky Pratama', platform: 'Instagram', status: 'approved' },
  ]);
  const [groups, setGroups] = useState([
    { id: 1, name: 'Vibes Bahagia & Sad', members: 245, type: 1 },
    { id: 2, name: 'Romance Music Corner', members: 189, type: 2 },
    { id: 3, name: 'Creator Hub Indonesia', members: 87, type: 3 },
    { id: 4, name: 'Musik Motivasi Nusantara', members: 312, type: 4 },
  ]);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [newGroup, setNewGroup] = useState({ name: '', type: 1 });
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatMessage, setChatMessage] = useState('');

  const createGroup = () => {
    if (!newGroup.name.trim()) { addToast('Nama grup harus diisi!'); return; }
    setGroups([...groups, { id: Date.now(), name: newGroup.name, members: 1, type: newGroup.type }]);
    setNewGroup({ name: '', type: 1 });
    setShowCreateGroup(false);
    addToast('✅ Grup dibuat!');
  };

  const sendChatMessage = () => {
    if (!chatMessage.trim()) return;
    setAdminMessages(prev => [...prev, { id: Date.now(), from: 'Admin', text: chatMessage }]);
    setChatMessage('');
    addToast('💬 Pesan terkirim!');
  };

  if (selectedChat) {
    return (
      <div className="flex flex-col h-screen bg-black">
        <div className="glass-card px-4 py-3 flex items-center gap-3 border-b border-purple-500/20 sticky top-0 z-10">
          <button onClick={() => setSelectedChat(null)}><ArrowLeft size={20} className="text-gray-400" /></button>
          <p className="text-white font-bold">{selectedChat}</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-hide">
          {adminMessages.filter(m => m.from === selectedChat || m.from === 'User').map(msg => (
            <div key={msg.id} className={`flex ${msg.from === 'Admin' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-2xl max-w-xs ${msg.from === 'Admin' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'glass-card text-gray-300 border border-purple-500/20'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="glass-card px-4 py-3 flex gap-2 border-t border-purple-500/20">
          <input 
            value={chatMessage} 
            onChange={e => setChatMessage(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && sendChatMessage()} 
            placeholder="Ketik pesan..." 
            className="flex-1 glass-card px-3 py-2 rounded-lg text-white border border-purple-500/20 outline-none focus:border-purple-500" 
          />
          <button onClick={sendChatMessage} className="bg-gradient-to-r from-purple-600 to-pink-600 w-9 h-9 rounded-lg flex items-center justify-center text-white hover:opacity-90"><Send size={16} /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 pb-20">
      <h1 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <Shield size={24} className="text-red-400" /> Dashboard Admin
      </h1>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {[{id:'overview',label:'Ringkasan'},{id:'apps',label:'Pengajuan'},{id:'users',label:'Users'},{id:'groups',label:'Grup'}].map(s => (
          <button key={s.id} onClick={() => setSection(s.id)} className={`px-3 py-2 text-xs font-bold rounded-lg transition whitespace-nowrap ${section === s.id ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'glass-card text-gray-400 hover:text-white border border-purple-500/20'}`}>
            {s.label}
          </button>
        ))}
      </div>

      {section === 'overview' && (
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Total Users', value: '1,284' },
            { label: 'Active Today', value: '342' },
            { label: 'Generated Today', value: '1,847' },
            { label: 'Pending Apps', value: '2' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 border border-purple-500/20">
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      {section === 'apps' && (
        <div className="flex flex-col gap-3">
          {applications.map(app => (
            <div key={app.id} className="glass-card rounded-lg p-3 border border-purple-500/20 flex items-center justify-between">
              <div className="flex-1">
                <p className="font-bold text-white text-sm">{app.name}</p>
                <p className="text-xs text-gray-400">{app.platform}</p>
              </div>
              {app.status === 'pending' ? (
                <div className="flex gap-1">
                  <button onClick={() => { setApplications(prev => prev.map(a => a.id === app.id ? {...a, status:'approved'} : a)); addToast('✅ Approved!'); }} className="bg-emerald-700 text-white text-xs px-2 py-1 rounded">✓</button>
                  <button onClick={() => { setApplications(prev => prev.map(a => a.id === app.id ? {...a, status:'rejected'} : a)); addToast('❌ Rejected!'); }} className="bg-red-700 text-white text-xs px-2 py-1 rounded">✕</button>
                  <button onClick={() => setSelectedChat(app.name)} className="bg-blue-700 text-white text-xs px-2 py-1 rounded flex items-center gap-1"><MessageSquare size={12} /> Chat</button>
                </div>
              ) : (
                <span className={`text-xs px-2 py-1 rounded font-bold ${app.status === 'approved' ? 'bg-emerald-700 text-emerald-300' : 'bg-red-700 text-red-300'}`}>{app.status}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {section === 'groups' && (
        <div>
          <button onClick={() => setShowCreateGroup(true)} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-bold text-sm mb-4">+ Buat Grup Baru</button>
          {showCreateGroup && (
            <div className="glass-card rounded-2xl p-4 mb-4 border border-purple-500/20">
              <input value={newGroup.name} onChange={e => setNewGroup({...newGroup, name: e.target.value})} placeholder="Nama grup..." className="w-full glass-card px-4 py-3 rounded-lg text-white border border-purple-500/20 mb-3 outline-none focus:border-purple-500" />
              <select value={newGroup.type} onChange={e => setNewGroup({...newGroup, type: parseInt(e.target.value)})} className="w-full glass-card px-4 py-3 rounded-lg text-white border border-purple-500/20 mb-3 outline-none focus:border-purple-500">
                <option value={1}>Tipe 1: Lagu Bahagia & Sad</option>
                <option value={2}>Tipe 2: Romance Music Corner</option>
                <option value={3}>Tipe 3: Creator Hub (Eksklusif)</option>
                <option value={4}>Tipe 4: Musik Motivasi</option>
              </select>
              <div className="flex gap-2">
                <button onClick={createGroup} className="flex-1 bg-emerald-700 text-white py-2 rounded-lg font-bold text-sm">Buat</button>
                <button onClick={() => setShowCreateGroup(false)} className="flex-1 glass-card text-gray-300 py-2 rounded-lg border border-purple-500/20 text-sm">Batal</button>
              </div>
            </div>
          )}
          {groups.map(g => (
            <div key={g.id} className="glass-card rounded-lg p-3 border border-purple-500/20 mb-2">
              <p className="font-bold text-white text-sm">{g.name}</p>
              <p className="text-xs text-gray-400">{g.members} anggota</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null);
  const [quota, setQuota] = useState(3);
  const [toasts, setToasts] = useState([]);
  const [activePage, setActivePage] = useState('dashboard');
  const [feedPosts, setFeedPosts] = useState(FEED_POSTS);
  const [adminMessages, setAdminMessages] = useState([]);

  const addToast = (msg) => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3000);
  };

  const loginAsDemo = () => {
    setUser({ name: 'Demo', plan: 'Gratis' });
    setQuota(10);
    setPage('app');
  };

  const loginAsAdmin = () => {
    setUser({ name: 'Admin', plan: 'Ultra Pro' });
    setQuota(999);
    setPage('app');
  };

  const logout = () => {
    setUser(null);
    setPage('landing');
  };

  const NAV = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'generator', icon: Zap, label: 'Generate' },
    { id: 'feed', icon: Play, label: 'Feed' },
    { id: 'inspirasi', icon: Sparkles, label: 'Inspirasi' },
    { id: 'pesan', icon: MessageCircle, label: 'Pesan' },
    { id: 'profil', icon: User, label: 'Profil' },
  ];

  if (page === 'landing') return <><LandingPage onNavigate={setPage} /><Toast toasts={toasts} /></>;
  if (page === 'login') return <><LoginPage onDemoUser={loginAsDemo} onDemoAdmin={loginAsAdmin} /><Toast toasts={toasts} /></>;

  const isAdmin = user?.plan === 'Ultra Pro';

  const pages = {
    dashboard: <DashboardPage user={user} quota={quota} isAdmin={isAdmin} onNavigate={setActivePage} />,
    generator: <GeneratorPage quota={quota} onQuotaDecrease={() => setQuota(q => Math.max(0, q - 1))} addToast={addToast} />,
    feed: <FeedPage addToast={addToast} feedPosts={feedPosts} setFeedPosts={setFeedPosts} />,
    inspirasi: <InspirasiPage quota={quota} onQuotaDecrease={() => setQuota(q => Math.max(0, q - 1))} addToast={addToast} feedPosts={feedPosts} setFeedPosts={setFeedPosts} />,
    pesan: <PesanPage addToast={addToast} adminMessages={adminMessages} setAdminMessages={setAdminMessages} isAdmin={isAdmin} />,
    profil: <ProfilePage user={user} addToast={addToast} />,
    harga: <HargaPage currentPlan={user?.plan} addToast={addToast} />,
    admin: <AdminDashboard addToast={addToast} adminMessages={adminMessages} setAdminMessages={setAdminMessages} />,
  };

  return (
    <div className="bg-black min-h-screen">
      <Toast toasts={toasts} />
      <div className="glass-card sticky top-0 z-40 px-4 py-3 border-b border-purple-500/20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Music size={18} className="text-purple-400" />
          <span className="text-white font-bold text-sm">MusicCaption<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI</span></span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="glass-card px-2.5 py-1 rounded text-xs text-white border border-purple-500/20">
            <Zap size={12} className="inline mr-1" />{quota}
          </div>
          <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2.5 py-1 rounded font-bold">{user?.plan}</span>
          <button onClick={logout} className="text-gray-400 hover:text-white"><LogOut size={16} /></button>
        </div>
      </div>

      <main className="pb-20">
        {activePage === 'harga' ? <HargaPage currentPlan={user?.plan} addToast={addToast} /> : pages[activePage]}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-purple-500/20 flex justify-around">
        {NAV.map(item => (
          <button key={item.id} onClick={() => setActivePage(item.id)} className={`flex flex-col items-center gap-1 px-3 py-2 transition ${activePage === item.id ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'}`}>
            <item.icon size={20} />
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
        <button onClick={() => setActivePage('harga')} className={`flex flex-col items-center gap-1 px-3 py-2 transition ${activePage === 'harga' ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'}`}>
          <CreditCard size={20} />
          <span className="text-[10px] font-bold">Harga</span>
        </button>
      </nav>
    </div>
  );
}
