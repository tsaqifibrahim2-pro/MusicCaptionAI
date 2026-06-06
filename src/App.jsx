import React, { useState, useEffect, useRef } from 'react';
import {
  Music, Home, Zap, Play, MessageCircle, CreditCard,
  Sparkles, Heart, Share2, Copy, Check, X, LogOut,
  Shield, Hash, RefreshCw, ChevronRight, ArrowLeft,
  Send, Star, AlertCircle
} from 'lucide-react';

const GENRES = ['Pop', 'R&B', 'Hip-Hop', 'Indie', 'Jazz', 'Electronic', 'Folk', 'Rock', 'Classical', 'Dangdut', 'Koplo'];
const MOODS = ['Bahagia', 'Melankolis', 'Energetik', 'Romantis', 'Motivasi', 'Santai', 'Sedih', 'Nostalgik'];

const FEED_POSTS = [
  { id: 1, user: 'Rina Kusuma', handle: '@rinakusuma', caption: '🎵 Single terbaru sudah rilis! #musikindonesia', likes: 284, comments: 42 },
  { id: 2, user: 'Dimas Pratama', handle: '@dimaspratama', caption: 'Latihan gitar acoustic 🎸 #acoustic', likes: 156, comments: 28 },
  { id: 3, user: 'Studio Nada', handle: '@studionada', caption: 'Behind the scenes! 🎙️✨ #studio', likes: 521, comments: 89 },
];

const DM_CHATS = [
  { id: 1, name: 'Rina Kusuma', online: true, unread: 2, lastMsg: 'Keren banget!', messages: [
    { id: 1, from: 'them', text: 'Hei! Udah denger lagu baru?', time: '10:00' },
    { id: 2, from: 'me', text: 'Belum nih', time: '10:01' },
  ]},
];

const PACKAGES = [
  { id: 'gratis', name: 'Gratis', price: 0, gen: '5', features: ['5 generate/bulan', 'Caption IG & TikTok'] },
  { id: 'starter', name: 'Starter', price: 29000, gen: '50', popular: true, features: ['50 generate/bulan', 'Semua platform'] },
  { id: 'pro', name: 'Pro', price: 79000, gen: '200', features: ['200 generate/bulan', 'Unlimited Inspirasi'] },
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
          <input type="email" placeholder="musisi@email.com" className="w-full glass-card px-4 py-3 rounded-lg text-white placeholder-gray-600 border border-purple-500/20 mb-3 outline-none focus:border-purple-500" />
          <input type="password" placeholder="••••••••" className="w-full glass-card px-4 py-3 rounded-lg text-white placeholder-gray-600 border border-purple-500/20 mb-4 outline-none focus:border-purple-500" />
          <button onClick={onDemoUser} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-bold mb-4 transition">Masuk</button>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-500 text-xs">atau</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          <div className="flex gap-2">
            <button onClick={onDemoUser} className="flex-1 glass-card-hover py-2.5 rounded-lg text-xs text-gray-300 font-bold border border-purple-500/20">👤 Demo User</button>
            <button onClick={onDemoAdmin} className="flex-1 glass-card-hover py-2.5 rounded-lg text-xs text-gray-300 font-bold border border-purple-500/20">⚙️ Demo Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardPage({ user, quota, onNavigate }) {
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
      <div className="grid grid-cols-2 gap-3">
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

function FeedPage({ addToast }) {
  const [liked, setLiked] = useState({});

  return (
    <div className="px-4 py-6 pb-24">
      <h1 className="text-2xl font-bold text-white mb-4">Feed Video 🎬</h1>
      {FEED_POSTS.map(post => (
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

function InspirasiPage({ addToast }) {
  const [genre, setGenre] = useState('Indie');
  const [result, setResult] = useState(null);

  return (
    <div className="px-4 py-6 pb-24">
      <h1 className="text-2xl font-bold text-white mb-1">Mode AI Inspirasi</h1>
      <p className="text-gray-400 text-sm mb-6">Dapatkan inspirasi kreatif dari AI</p>

      <div className="glass-card rounded-2xl p-4 mb-4 border border-purple-500/20">
        <label className="text-xs text-gray-400 mb-2 block">Pilih Genre</label>
        <select value={genre} onChange={e => setGenre(e.target.value)} className="w-full glass-card px-4 py-3 rounded-lg text-white border border-purple-500/20 mb-4 outline-none focus:border-purple-500">
          {GENRES.map(g => <option key={g} className="bg-gray-900">{g}</option>)}
        </select>
        <button onClick={() => setResult({ titles: ['Judul 1', 'Judul 2', 'Judul 3'], mood: 'Melankolis', concept: 'Shot sinematik malam hari' })} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
          <Sparkles size={16} /> Dapatkan Inspirasi
        </button>
      </div>
      {result && (
        <div className="space-y-3">
          {[
            { label: '🎵 Ide Judul', value: result.titles.join(', ') },
            { label: '🌊 Mood', value: result.mood },
            { label: '🎬 Konsep Visual', value: result.concept },
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

function PesanPage({ addToast }) {
  const [activeChat, setActiveChat] = useState(null);
  const [dmChats] = useState(DM_CHATS);

  if (activeChat) {
    return (
      <div className="flex flex-col h-screen">
        <div className="glass-card px-4 py-3 flex items-center gap-3 border-b border-purple-500/20 sticky top-0">
          <button onClick={() => setActiveChat(null)}><ArrowLeft size={20} className="text-gray-400" /></button>
          <p className="text-white font-bold">{activeChat.name}</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-hide">
          {activeChat.messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-2xl ${msg.from === 'me' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'glass-card text-gray-300 border border-purple-500/20'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="glass-card px-4 py-3 flex gap-2 border-t border-purple-500/20">
          <input placeholder="Ketik pesan..." className="flex-1 glass-card px-3 py-2 rounded-lg text-white border border-purple-500/20 outline-none focus:border-purple-500" />
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 w-9 h-9 rounded-lg flex items-center justify-center text-white"><Send size={16} /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 pb-20">
      <h1 className="text-2xl font-bold text-white mb-4">💬 Pesan</h1>
      {dmChats.map(item => (
        <button key={item.id} onClick={() => setActiveChat(item)} className="glass-card-hover rounded-xl p-3 flex gap-3 w-full mb-2 border border-purple-500/20">
          <Avatar name={item.name} />
          <div className="flex-1 text-left">
            <p className="text-white font-bold">{item.name}</p>
            <p className="text-xs text-gray-400">{item.lastMsg}</p>
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

export default function App() {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null);
  const [quota, setQuota] = useState(10);
  const [toasts, setToasts] = useState([]);
  const [activePage, setActivePage] = useState('dashboard');

  const addToast = (msg) => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3000);
  };

  const loginAsDemo = () => {
    setUser({ name: 'Demo', plan: 'Starter' });
    setPage('app');
  };

  const loginAsAdmin = () => {
    setUser({ name: 'Admin', plan: 'Pro' });
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
    { id: 'harga', icon: CreditCard, label: 'Harga' },
  ];

  if (page === 'landing') return <><LandingPage onNavigate={setPage} /><Toast toasts={toasts} /></>;
  if (page === 'login') return <><LoginPage onDemoUser={loginAsDemo} onDemoAdmin={loginAsAdmin} /><Toast toasts={toasts} /></>;

  const pages = {
    dashboard: <DashboardPage user={user} quota={quota} onNavigate={setActivePage} />,
    generator: <GeneratorPage quota={quota} onQuotaDecrease={() => setQuota(q => Math.max(0, q - 1))} addToast={addToast} />,
    feed: <FeedPage addToast={addToast} />,
    inspirasi: <InspirasiPage addToast={addToast} />,
    pesan: <PesanPage addToast={addToast} />,
    harga: <HargaPage currentPlan={user?.plan} addToast={addToast} />,
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
        {pages[activePage]}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-purple-500/20 flex justify-around">
        {NAV.map(item => (
          <button key={item.id} onClick={() => setActivePage(item.id)} className={`flex flex-col items-center gap-1 px-3 py-2 transition ${activePage === item.id ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'}`}>
            <item.icon size={20} />
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
              }
