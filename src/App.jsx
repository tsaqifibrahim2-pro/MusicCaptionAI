import React, { useState, useEffect } from 'react'
import { Heart, MessageCircle, Share2, Search, Plus, Home, Users, Mail, Settings, Menu, X, Copy, Check, LogOut, Eye, EyeOff, Zap, Music, Sparkles, Volume2, TrendingUp } from 'lucide-react'

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [cuotaUsed, setCuotaUsed] = useState(0)
  const [cuotaLimit, setCuotaLimit] = useState(3)
  const [selectedMood, setSelectedMood] = useState([])
  const [captionTitle, setCaptionTitle] = useState('')
  const [platform, setPlatform] = useState('Instagram')
  const [captions, setCaptions] = useState([])
  const [loginTab, setLoginTab] = useState('masuk')

  const handleDemoLogin = (role) => {
    if (role === 'user') {
      setUser({ name: 'Demo User', email: 'demo@music.ai', role: 'user', paket: 'Starter', quota: 10 })
      setCuotaLimit(10)
    } else {
      setUser({ name: 'Admin', email: 'admin@music.ai', role: 'admin', paket: 'Pro', quota: 999 })
      setCuotaLimit(999)
    }
    setIsAuthenticated(true)
    setCurrentPage('dashboard')
  }

  const generateCaption = () => {
    if (cuotaUsed >= cuotaLimit) {
      alert('Kuota habis!')
      return
    }
    const mockCaptions = [
      {
        short: `"${captionTitle}" - Lagu baru yang akan mengubah hari kamu! 🎵`,
        medium: `Dengarkan "${captionTitle}" - Karya terbaru dengan melodi yang memukau dan lirik yang menyentuh hati. Sempurna untuk setiap momen! 🎧✨`,
        long: `Saya dengan bangga mempersembahkan "${captionTitle}" - Lagu eksklusif yang menggabungkan emosi mendalam dengan produksi berkualitas tinggi. Setiap nada dirancang untuk resonansi dengan jiwa Anda. Dengarkan dan rasakan perbedaannya! 🎵💫`
      },
      {
        short: `Habiskan hari mu dengan "${captionTitle}" 🎶`,
        medium: `Baru dirilis! "${captionTitle}" hadir dengan vibe yang fresh dan energi yang menular. Tag teman yang harus mendengarkan ini! 🎧`,
        long: `✨ BARU! "${captionTitle}" sekarang available di semua platform streaming. Produksi premium, lirik mendalam, beat yang adiktif. Ini adalah soundtrack untuk moment spesialmu! 🎵🔥`
      }
    ]
    const selectedCaption = mockCaptions[Math.floor(Math.random() * mockCaptions.length)]
    setCaptions([selectedCaption, ...captions])
    setCuotaUsed(cuotaUsed + 1)
  }

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const moods = ['Happy 😊', 'Sad 😢', 'Energik 🔥', 'Chill 🌙', 'Romantic 💕', 'Motivasi 💪']
  const platforms = ['Instagram', 'TikTok', 'Keduanya']

  if (currentPage === 'landing' && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
        <div className="border-b border-[#7C3AED]/20 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Music className="w-8 h-8 text-[#7C3AED]" />
              <span className="font-bold text-xl">MusicCaption AI</span>
            </div>
            <button onClick={() => { setLoginTab('masuk'); setCurrentPage('login') }} className="px-6 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-full transition">
              Masuk
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#7C3AED] to-pink-500 bg-clip-text text-transparent">
            Generate Caption & Hashtag Musik Instantly
          </h1>
          <p className="text-xl text-gray-400 mb-8">Powered by AI untuk musisi Indonesia</p>
          <button onClick={() => { setLoginTab('daftar'); setCurrentPage('login') }} className="px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-full text-lg font-semibold transition">
            Mulai Gratis
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Sparkles, title: 'AI Caption Generator', desc: 'Generate caption unik dalam 3 gaya berbeda' },
            { icon: TrendingUp, title: 'Smart Hashtag', desc: '30-40 hashtag siap pakai per caption' },
            { icon: Music, title: 'Sharing Simplified', desc: 'Share langsung ke Instagram & TikTok' }
          ].map((f, i) => (
            <div key={i} className="p-6 border border-[#7C3AED]/30 rounded-xl backdrop-blur hover:border-[#7C3AED] transition">
              <f.icon className="w-8 h-8 text-[#7C3AED] mb-4" />
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[#7C3AED]/20 mt-20 py-8 text-center text-gray-400">
          <p>© 2026 MusicCaption AI. Built for Indonesian Musicians.</p>
        </div>
      </div>
    )
  }

  if (currentPage === 'login' && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="border border-[#7C3AED]/30 rounded-2xl p-8 backdrop-blur">
            <div className="flex gap-4 mb-8">
              <button onClick={() => setLoginTab('masuk')} className={`flex-1 py-2 rounded-lg transition ${loginTab === 'masuk' ? 'bg-[#7C3AED]' : 'border border-[#7C3AED]/30 hover:border-[#7C3AED]'}`}>
                Masuk
              </button>
              <button onClick={() => setLoginTab('daftar')} className={`flex-1 py-2 rounded-lg transition ${loginTab === 'daftar' ? 'bg-[#7C3AED]' : 'border border-[#7C3AED]/30 hover:border-[#7C3AED]'}`}>
                Daftar
              </button>
            </div>

            <input type="email" placeholder="Email" className="w-full bg-[#1a1a1a] border border-[#7C3AED]/30 rounded-lg px-4 py-3 mb-4 focus:border-[#7C3AED] outline-none" />
            <input type="password" placeholder="Password" className="w-full bg-[#1a1a1a] border border-[#7C3AED]/30 rounded-lg px-4 py-3 mb-6 focus:border-[#7C3AED] outline-none" />

            <button onClick={() => handleDemoLogin('user')} className="w-full bg-[#7C3AED] py-3 rounded-lg font-semibold mb-4 hover:bg-[#6D28D9] transition">
              {loginTab === 'masuk' ? 'Masuk' : 'Daftar'}
            </button>

            <div className="flex gap-2 mt-6">
              <button onClick={() => handleDemoLogin('user')} className="flex-1 text-sm px-4 py-2 bg-[#1a1a1a] border border-[#7C3AED]/30 rounded hover:border-[#7C3AED] transition">
                Demo User
              </button>
              <button onClick={() => handleDemoLogin('admin')} className="flex-1 text-sm px-4 py-2 bg-[#1a1a1a] border border-[#7C3AED]/30 rounded hover:border-[#7C3AED] transition">
                Demo Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-[#7C3AED]/20 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Music className="w-6 h-6 text-[#7C3AED]" />
            <span className="font-bold">MusicCaption</span>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <span className="text-sm text-gray-400">{user?.name}</span>
            <button onClick={() => { setIsAuthenticated(false); setCurrentPage('landing') }} className="flex items-center gap-2 text-sm px-4 py-2 bg-[#1a1a1a] border border-[#7C3AED]/30 rounded hover:border-[#7C3AED] transition">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 border-r border-[#7C3AED]/20 p-4`}>
          <nav className="space-y-2">
            {[
              { page: 'dashboard', icon: Home, label: 'Dashboard' },
              { page: 'generator', icon: Sparkles, label: 'Generator Caption' },
              { page: 'feed', icon: Music, label: 'Feed Video' },
              { page: 'inspirasi', icon: Zap, label: 'AI Inspirasi' },
              { page: 'pesan', icon: Mail, label: 'Pesan' },
              { page: 'pricing', icon: TrendingUp, label: 'Harga' },
              ...(user?.role === 'admin' ? [{ page: 'admin', icon: Settings, label: 'Admin Dashboard' }] : [])
            ].map(item => (
              <button key={item.page} onClick={() => { setCurrentPage(item.page); setIsMobileMenuOpen(false) }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentPage === item.page ? 'bg-[#7C3AED] text-white' : 'hover:bg-[#1a1a1a]'}`}>
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 p-4 md:p-8 max-w-6xl pb-20 md:pb-8">

          {currentPage === 'dashboard' && (
            <div>
              <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 border border-[#7C3AED]/30 rounded-xl backdrop-blur">
                  <p className="text-gray-400 mb-2">Kuota Tersisa</p>
                  <div className="text-4xl font-bold text-[#7C3AED]">{cuotaLimit - cuotaUsed}</div>
                  <div className="mt-4 w-full bg-[#1a1a1a] rounded-full h-2">
                    <div className="bg-[#7C3AED] h-2 rounded-full" style={{ width: `${(cuotaUsed / cuotaLimit) * 100}%` }}></div>
                  </div>
                </div>
                <div className="p-6 border border-[#7C3AED]/30 rounded-xl backdrop-blur">
                  <p className="text-gray-400 mb-2">Paket Aktif</p>
                  <div className="text-2xl font-bold">{user?.paket}</div>
                  <button className="mt-4 px-4 py-2 bg-[#7C3AED] rounded hover:bg-[#6D28D9] transition">Upgrade</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'Total Generate', value: cuotaUsed },
                  { label: 'Video Uploaded', value: cuotaUsed },
                  { label: 'Followers', value: '1.2K' }
                ].map((stat, i) => (
                  <div key={i} className="p-4 border border-[#7C3AED]/30 rounded-lg backdrop-blur text-center">
                    <p className="text-gray-400">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#7C3AED]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === 'generator' && (
            <div>
              <h1 className="text-3xl font-bold mb-8">Generator Caption</h1>
              <div className="max-w-2xl">
                <input value={captionTitle} onChange={(e) => setCaptionTitle(e.target.value)} placeholder="Judul Lagu" className="w-full bg-[#1a1a1a] border border-[#7C3AED]/30 rounded-lg px-4 py-3 mb-4 focus:border-[#7C3AED] outline-none" />
                
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Mood</p>
                  <div className="flex flex-wrap gap-2">
                    {moods.map(mood => (
                      <button key={mood} onClick={() => setSelectedMood(selectedMood.includes(mood) ? selectedMood.filter(m => m !== mood) : [...selectedMood, mood])} className={`px-4 py-2 rounded-full transition ${selectedMood.includes(mood) ? 'bg-[#7C3AED]' : 'border border-[#7C3AED]/30 hover:border-[#7C3AED]'}`}>
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Platform</p>
                  <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full bg-[#1a1a1a] border border-[#7C3AED]/30 rounded-lg px-4 py-3 focus:border-[#7C3AED] outline-none">
                    {platforms.map(p => <option key={p}>{p}</option>)}
                  </select>
                </div>

                <button onClick={generateCaption} disabled={cuotaUsed >= cuotaLimit} className="w-full bg-[#7C3AED] disabled:bg-gray-600 py-3 rounded-lg font-semibold hover:bg-[#6D28D9] transition">
                  Generate Caption
                </button>

                <div className="mt-8 space-y-4">
                  {captions.map((caption, idx) => (
                    <div key={idx} className="p-4 border border-[#7C3AED]/30 rounded-lg backdrop-blur">
                      <div className="space-y-3">
                        {[
                          { label: 'Pendek (~50 kata)', text: caption.short },
                          { label: 'Sedang (~100 kata)', text: caption.medium },
                          { label: 'Panjang (~150 kata)', text: caption.long }
                        ].map((item, i) => (
                          <div key={i}>
                            <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                            <div className="flex gap-2 items-start">
                              <p className="flex-1 text-sm">{item.text}</p>
                              <button onClick={() => copyToClipboard(item.text, `${idx}-${i}`)} className="mt-1">
                                {copiedIndex === `${idx}-${i}` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 hover:text-[#7C3AED]" />}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentPage === 'feed' && (
            <div>
              <h1 className="text-3xl font-bold mb-8">Feed Video</h1>
              <div className="max-w-2xl space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="border border-[#7C3AED]/30 rounded-xl overflow-hidden backdrop-blur">
                    <div className="bg-gradient-to-br from-[#7C3AED] to-pink-500 h-96 flex items-center justify-center">
                      <Music className="w-16 h-16 opacity-50" />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold mb-3">Video Musik #{i}</p>
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-sm hover:text-[#7C3AED] transition">
                          <Heart className="w-5 h-5" /> Like
                        </button>
                        <button className="flex items-center gap-2 text-sm hover:text-[#7C3AED] transition">
                          <MessageCircle className="w-5 h-5" /> Komentar
                        </button>
                        <button className="flex items-center gap-2 text-sm hover:text-[#7C3AED] transition">
                          <Share2 className="w-5 h-5" /> Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="fixed bottom-24 md:bottom-8 right-8 w-16 h-16 bg-[#7C3AED] rounded-full flex items-center justify-center hover:bg-[#6D28D9] transition shadow-lg">
                <Plus className="w-8 h-8" />
              </button>
            </div>
          )}

          {currentPage === 'inspirasi' && (
            <div>
              <h1 className="text-3xl font-bold mb-8">Mode AI Inspirasi</h1>
              <div className="max-w-2xl space-y-4">
                <div className="p-4 border border-[#7C3AED]/30 rounded-lg backdrop-blur">
                  <p className="text-gray-400 mb-2">Genre</p>
                  <select className="w-full bg-[#1a1a1a] border border-[#7C3AED]/30 rounded px-3 py-2 focus:border-[#7C3AED] outline-none">
                    <option>Pop</option>
                    <option>R&B</option>
                    <option>Hip-Hop</option>
                  </select>
                </div>
                <button className="w-full bg-[#7C3AED] py-3 rounded-lg font-semibold hover:bg-[#6D28D9] transition">Generate Ide Lagu</button>
                
                <div className="p-4 border border-[#7C3AED]/30 rounded-lg backdrop-blur">
                  <p className="font-semibold mb-2">💡 Ide Judul: "Midnight Dreams"</p>
                  <p className="text-sm text-gray-400 mb-2">Tema: Cinta, Mimpi, Malam</p>
                  <p className="text-sm text-gray-400 mb-2">Mood: Romantic, Melancholic</p>
                  <p className="text-sm text-gray-400">Referensi: The Weeknd, SZA</p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'pesan' && (
            <div>
              <h1 className="text-3xl font-bold mb-8">Pesan</h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 border-r border-[#7C3AED]/20">
                  <div className="space-y-2">
                    {['Semua', 'DM', 'Grup', '🌐 Global'].map(tab => (
                      <button key={tab} className="w-full text-left px-4 py-2 rounded hover:bg-[#1a1a1a] transition">{tab}</button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="border border-[#7C3AED]/30 rounded-lg p-4 backdrop-blur text-center text-gray-400">
                    Pilih percakapan untuk memulai
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'pricing' && (
            <div>
              <h1 className="text-3xl font-bold mb-8 text-center">Paket Harga</h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { name: 'Starter', price: 'Gratis', features: ['3x/bulan', 'Basic'], color: 'border-gray-600' },
                  { name: 'Standard', price: 'Rp 30K', features: ['50x/bulan', 'No Ads'], color: 'border-[#7C3AED]' },
                  { name: 'Pro', price: 'Rp 50K', features: ['200x/bulan', '∞ Inspirasi', 'Badge'], color: 'border-[#7C3AED]' },
                  { name: 'Ultra Pro', price: 'Rp 99K', features: ['Unlimited', 'Custom', 'Support'], color: 'border-pink-500' }
                ].map((pkg, i) => (
                  <div key={i} className={`border ${pkg.color} rounded-xl p-6 backdrop-blur`}>
                    <p className="font-bold text-lg mb-2">{pkg.name}</p>
                    <p className="text-2xl font-bold text-[#7C3AED] mb-4">{pkg.price}</p>
                    <ul className="text-sm space-y-2 mb-4">
                      {pkg.features.map((f, j) => <li key={j}>✓ {f}</li>)}
                    </ul>
                    <button className="w-full bg-[#7C3AED] py-2 rounded hover:bg-[#6D28D9] transition">Pilih</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === 'admin' && user?.role === 'admin' && (
            <div>
              <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Total Users', value: '1.2K' },
                  { label: 'Total Generate', value: '5.8K' },
                  { label: 'Pending Approval', value: '12' },
                  { label: 'Revenue (Bulan)', value: 'Rp 2.5M' }
                ].map((stat, i) => (
                  <div key={i} className="p-4 border border-[#7C3AED]/30 rounded-lg backdrop-blur text-center">
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#7C3AED]">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="border border-[#7C3AED]/30 rounded-lg backdrop-blur overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="border-b border-[#7C3AED]/20 bg-[#1a1a1a]">
                    <tr>
                      <th className="p-3 text-left">User</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map(i => (
                      <tr key={i} className="border-b border-[#7C3AED]/10 hover:bg-[#1a1a1a] transition">
                        <td className="p-3">User #{i}</td>
                        <td className="p-3"><span className="px-2 py-1 bg-yellow-500/20 rounded text-yellow-400 text-xs">Pending</span></td>
                        <td className="p-3 space-x-2">
                          <button className="px-3 py-1 bg-green-500/20 rounded text-green-400 text-xs hover:bg-green-500/30">Terima</button>
                          <button className="px-3 py-1 bg-red-500/20 rounded text-red-400 text-xs hover:bg-red-500/30">Tolak</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-[#7C3AED]/20 bg-[#0a0a0a] backdrop-blur flex justify-around">
        {[
          { page: 'dashboard', icon: Home },
          { page: 'generator', icon: Sparkles },
          { page: 'feed', icon: Music },
          { page: 'pesan', icon: Mail },
          { page: 'pricing', icon: TrendingUp }
        ].map(item => (
          <button key={item.page} onClick={() => setCurrentPage(item.page)} className={`flex-1 py-3 flex justify-center ${currentPage === item.page ? 'text-[#7C3AED] border-t-2 border-[#7C3AED]' : 'text-gray-400'}`}>
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </div>
      <div className="md:hidden h-16"></div>

    </div>
  )
}

export default App
