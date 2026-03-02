import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  ShieldCheck, 
  Leaf, 
  Palette, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter,
  Search,
  ChevronRight,
  Home,
  Paintbrush,
  Sparkles,
  Layers,
  MapPin,
  Phone,
  Factory
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: 'Paints & Coatings', items: ['Architectural', 'Industrial', 'Thinners', 'Track & Road', 'Specialty Coatings'] },
  { name: 'Services', items: ['Safe Painting Service', 'Color Consultancy', 'Industrial Coatings', 'Surface Preparation'] },
  { name: 'Solutions', items: ['Waterproofing', 'Heat Reflective', 'Anti-Corrosive', 'Road Marking'] },
  { name: 'Inspiration', items: ['Color Visualizer', 'Decor Ideas', 'Expert Tips', 'Case Studies'] },
];

const SERVICES = [
  {
    title: "Safe Painting Service",
    description: "Expert consultation, professional painters, and a dust-free experience.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800",
    icon: <Paintbrush className="w-6 h-6" />
  },
  {
    title: "Color Consultancy",
    description: "Personalized color palettes designed by our expert consultants.",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Industrial Coating",
    description: "Specialized protective coatings for industrial equipment, structures, and infrastructure.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

const PRODUCT_CATEGORIES = [
  { name: 'Architectural', image: 'https://www.prismapaints.com/wp-content/uploads/2022/09/image-2-3.jpg' },
  { name: 'Industrial', image: 'https://www.prismapaints.com/wp-content/uploads/2022/09/shutterstock_418849663-1.jpg' },
  { name: 'Thinners', image: 'https://www.prismapaints.com/wp-content/uploads/2023/07/thinner.jpg' },
  { name: 'Track & Road', image: 'https://www.prismapaints.com/wp-content/uploads/2022/09/shutterstock_1736357276.jpg' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* Top Bar */}
      <div className="bg-slate-100 text-[10px] md:text-xs py-2 px-6 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center opacity-70">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Find a Store</span>
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 1800-209-5678</span>
          </div>
          <div className="flex gap-4">
            <span>For Professionals</span>
            <span>Investors</span>
            <span>Careers</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 cursor-pointer">
              
              <span className="text-2xl font-black tracking-tighter text-slate-900">PRISMA<span className="text-red-600"> PAINTS</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <div 
                  key={link.name}
                  onMouseEnter={() => setActiveNav(link.name)}
                  onMouseLeave={() => setActiveNav(null)}
                  className="relative group py-4 cursor-pointer"
                >
                  <span className="text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors">
                    {link.name}
                  </span>
                  {activeNav === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-slate-100 p-6 z-50"
                    >
                      <ul className="space-y-3">
                        {link.items.map((item) => (
                          <li key={item} className="text-sm text-slate-600 hover:text-red-600 transition-colors cursor-pointer">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input type="text" placeholder="Search for colors, products..." className="bg-transparent text-sm outline-none w-48" />
            </div>
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-[60] bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{link.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {link.items.map((item) => (
                      <a key={item} href="#" className="text-lg font-bold text-slate-900">{item}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <img 
            src="https://www.prismapaints.com/wp-content/uploads/2022/09/1920x1080-03.jpg" 
            alt="Vibrant Living Room with Yellow Sofa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-xl text-white"
              >
                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                  Transform Your Home Into a Masterpiece
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 font-medium">
                  Experience the joy of beautiful walls with our expert painting services and premium color collections.
                </p>
                <div className="flex gap-4">
                  <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/30">
                    Book Free Consultation
                  </button>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all">
                    Explore Colors
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Tools */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Palette className="text-red-600" />, title: 'Color Visualizer', desc: 'See colors on your walls' },
                { icon: <Paintbrush className="text-blue-600" />, title: 'Painting Service', desc: 'Safe & hassle-free' },
                { icon: <Droplets className="text-emerald-600" />, title: 'Paint Calculator', desc: 'Estimate your paint needs' },
                { icon: <MapPin className="text-orange-600" />, title: 'Find a Dealer', desc: 'Locate stores near you' },
              ].map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{tool.title}</h3>
                  <p className="text-xs text-slate-500">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Our Premium Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">From expert advice to professional execution, we handle everything to make your home beautiful.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-red-600 shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-500 mb-6 leading-relaxed">{service.description}</p>
                    <button className="text-red-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Know More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-black mb-4">Explore Our Products</h2>
                <p className="text-slate-500">Find the perfect finish for every surface of your home.</p>
              </div>
              <button className="hidden md:block border-2 border-slate-900 px-6 py-2 rounded-lg font-bold hover:bg-slate-900 hover:text-white transition-all">
                View All Products
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCT_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                    <div className="w-8 h-1 bg-red-600 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Color Visualizer CTA */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
            <img src="https://picsum.photos/seed/digital-color-visualizer/800/800" alt="Visualizer" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-xl">
              <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 block">Digital Tools</span>
              <h2 className="text-5xl font-black mb-8 leading-tight">Visualize Your Dream Home in Real-Time</h2>
              <p className="text-xl text-slate-400 mb-12 font-light">
                Try out thousands of colors instantly to visualize the room color.
              </p>
              <button className="bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                Try Color Visualizer
              </button>
            </div>
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Get Inspired</h2>
              <p className="text-slate-500">Discover the latest trends in home decor and wall textures.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'The Rise of Earthy Tones', category: 'Trends 2026', seed: 'earthy-paint-trends' },
                { title: 'Choosing the Right Finish', category: 'Expert Advice', seed: 'paint-finish-texture' },
                { title: 'Modern Minimalist Living', category: 'Decor Ideas', seed: 'minimalist-interior-paint' },
              ].map((blog, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                    <img src={`https://images.unsplash.com/photo-1643148636639-c4f28543a5cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2 block">{blog.category}</span>
                  <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">{blog.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                
                <span className="text-2xl font-black tracking-tighter text-slate-900">PRISMA<span className="text-red-600"> PAINTS</span></span>
              </div>
              <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
                We are more than just a paint company. We are a partner in your journey to create a home that reflects your personality and style.
              </p>
              <div className="flex gap-6">
                <Instagram className="w-6 h-6 text-slate-400 hover:text-red-600 cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-slate-400 hover:text-red-600 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-slate-400 hover:text-red-600 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-widest">Paints</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="hover:text-red-600 transition-colors cursor-pointer">Architectural</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Industrial</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Thinners</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Track & Road</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Specialty Coatings</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-widest">Services</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="hover:text-red-600 transition-colors cursor-pointer">Safe Painting</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Color Consultancy</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Interior Design</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Contractor Finder</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-widest">Support</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="hover:text-red-600 transition-colors cursor-pointer">Store Locator</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">FAQs</li>
                <li className="hover:text-red-600 transition-colors cursor-pointer">Safety Data</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400 font-medium">
            <p>© 2026 Prisma Paints. All rights reserved.</p>
            <div className="flex gap-8">
              <span className="hover:text-slate-900 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer">Terms of Use</span>
              <span className="hover:text-slate-900 transition-colors cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
