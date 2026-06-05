*@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Font Styles */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'DM Sans', sans-serif;
  background: #0a0a0a;
  color: white;
}

.font-display {
  font-family: 'Syne', sans-serif;
}

/* Glassmorphism Card */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Glow Effects */
.glow-violet {
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.3);
}

.glow-violet-sm {
  box-shadow: 0 0 15px rgba(124, 58, 237, 0.4);
}

/* Gradient Text */
.text-gradient {
  background: linear-gradient(135deg, #7C3AED, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Grain Overlay Effect */
.grain-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  z-index: 9999;
}

/* Video Placeholder Gradients */
.video-gradient-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.video-gradient-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.video-gradient-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.video-gradient-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.video-gradient-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }

/* Hide Scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
