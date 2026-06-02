import { MiniNavbar } from './ui/mini-navbar';

const DemoNavbar = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover opacity-30 grayscale" 
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80" 
          alt="Background - Stars and Night Sky"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-950"></div>
      </div>

      {/* Mini Navbar Component */}
      <MiniNavbar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 pt-24">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
          MINI NAVBAR
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Beautiful glassmorphism navbar component with smooth animations
        </p>
        <div className="flex flex-col sm:flex-row items-center text-lg text-gray-300 space-y-4 sm:space-y-0 sm:space-x-4">
          <span>Check the navbar above</span>
          <button
            className="px-6 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer text-base font-semibold"
          >
            Learn More
          </button>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
};

export default DemoNavbar;
