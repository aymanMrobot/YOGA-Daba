import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  Calendar,
  Check,
  Coffee,
  Leaf,
  Menu,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Utensils,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { RoomsGallery } from "@/components/RoomsGallery";

const SANCTUARY_GALLERY = [
  {
    src: "/images/hero-meditation-pool.jpg",
    category: "Meditation",
    title: "Courtyard Stillness",
    caption: "Morning seated meditation by the quiet reflection pool surrounded by palm fronds.",
    imgClass: "object-bottom",
  },
  {
    src: "/images/courtyard-arches-dusk.jpg",
    category: "Architecture",
    title: "The Arched Pool Colonnade",
    caption: "Lantern-lit iron arches and sun loungers reflected in calm water at twilight.",
  },
  {
    src: "/images/garden-tea-pergola.jpg",
    category: "Sanctuary",
    title: "Shaded Garden Pergola",
    caption: "Open-air lounge shaded by olive and willow trees for afternoon tea breaks.",
  },
  {
    src: "/images/moroccan-salon-hearth.jpg",
    category: "Lounge",
    title: "The Hearth & Salon",
    caption: "Warm Moroccan living hall with central fireplace for evening circles and quiet reading.",
  },
  {
    src: "/images/cooking-class-garden.jpg",
    category: "Culinary",
    title: "Garden Cooking Table",
    caption: "Hands-on organic tagine and salad preparation harvested from our kitchen garden.",
  },
  {
    src: "/images/riad-palms-twilight.jpg",
    category: "Grounds",
    title: "Twilight Over Daba Village",
    caption: "Terracotta riad walls framed by tall date palms at the foot of the Atlas Mountains.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? "bg-background/90 backdrop-blur-md py-4 shadow-sm" : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-6"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo.webp" alt="Daba Village Logo" className="h-10 md:h-12 w-auto" />
          </div>
          <div className={`hidden md:flex items-center gap-7 font-sans text-sm tracking-widest uppercase ${scrolled ? "text-foreground" : "text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"}`}>
            <a href="#retreats" className="hover:text-primary transition-colors">Retreats</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#accommodation" className="hover:text-primary transition-colors">Stay</a>
            <a href="#rooms" className="hover:text-primary transition-colors">Rooms</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Grounds</a>
            <a href="#wellness" className="hover:text-primary transition-colors">Culinary</a>
            <Button asChild variant="outline" className={`${scrolled ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" : "border-white bg-transparent text-white hover:bg-white hover:text-black [text-shadow:none]"} rounded-none px-6`}>
              <a href="#contact">Inquire</a>
            </Button>
          </div>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className={`md:hidden p-2 ${scrolled || mobileMenuOpen ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg py-6 px-4 flex flex-col gap-5 font-sans text-sm tracking-widest uppercase text-foreground">
            <a href="#retreats" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Retreats</a>
            <a href="#experience" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#accommodation" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Stay</a>
            <a href="#rooms" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Rooms</a>
            <a href="#gallery" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Grounds</a>
            <a href="#wellness" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Culinary</a>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none w-full" onClick={() => setMobileMenuOpen(false)}>
              <a href="#contact">Inquire</a>
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[640px] max-h-[920px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/yoga-savasana-dusk.jpg"
            alt="Evening yoga practice around the lantern-lit courtyard pool at Daba Village"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center gap-6"
          >
            <motion.span variants={fadeIn} className="font-sans text-sm md:text-base tracking-[0.3em] uppercase">
              Daba Village Retreats
            </motion.span>
            <motion.h1 variants={fadeIn} className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight">
              Find Stillness <br /> in the Atlas
            </motion.h1>
            <motion.p variants={fadeIn} className="font-sans text-lg md:text-xl max-w-2xl mx-auto font-light opacity-90 mt-4">
              "A sanctuary where breath meets the horizon. Reconnect with nature, restore your spirit, and find your flow in the heart of Marrakech."
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8">
              <Button asChild className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase">
                <a href="#retreats">Explore Retreats</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </header>

      {/* Introduction */}
      <section id="accommodation" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <figure>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/yoga-group-pool.jpg"
                    alt="Morning yoga practice reflected in the courtyard pool"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-muted-foreground font-light tracking-wide">
                  Morning alignment and breathwork reflected in the courtyard pool
                </figcaption>
              </figure>
              <figure className="absolute -bottom-10 -right-10 w-2/3 hidden md:block bg-background border-8 border-background shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/courtyard-pool-night.jpg"
                    alt="The riad courtyard and pool lit up at night"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="pt-2 text-[11px] text-muted-foreground font-light">
                  Evening lantern glow across the riad courtyard
                </figcaption>
              </figure>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">The Sanctuary</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                A Space for <span className="italic text-primary">Transformation</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Daba is dedicated to welcoming yoga retreats and women's wellness gatherings. We offer a dedicated yoga shala and a rooftop practice space facing the majestic Atlas mountains.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Our serene property is surrounded by spacious gardens where we cultivate organic fruits and vegetables, ensuring fresh, wholesome produce is served daily to our guests. It is a place to relax, reconnect with nature, and enjoy personalized hospitality in an intimate setting.
              </p>
              <div className="pt-4">
                <div className="flex flex-wrap gap-8">
                  <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors uppercase text-xs tracking-widest border-b border-primary pb-1">
                    Plan Your Retreat <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#rooms" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors uppercase text-xs tracking-widest border-b border-primary pb-1">
                    See the Bedrooms <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience / Offerings */}
      <section id="experience" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">Holistic Journey</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Curated Experiences</h2>
            <p className="text-muted-foreground font-light">
              Beyond the tranquil atmosphere of the riad, we offer authentic Moroccan experiences designed to immerse you in local culture and wellness practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Yoga & Meditation",
                caption: "Courtyard Poolside & Rooftop Atlas Shala",
                desc: "Practice in our dedicated shala or on the rooftop facing the Atlas mountains. Suitable for all levels.",
                icon: <Sun className="w-6 h-6 text-primary" />,
                image: "/images/yoga-class-courtyard.jpg"
              },
              {
                title: "Wellness & Spa",
                caption: "Traditional Hammam, Black Soap & Henna Art",
                desc: "Traditional Hammam rituals with eucalyptus black soap, Moroccan henna art, and massage services for deep renewal.",
                icon: <Moon className="w-6 h-6 text-primary" />,
                image: "/images/henna-courtyard-ritual.jpg"
              },
              {
                title: "Nature & Culture",
                caption: "Equistar Riding, Atlas Excursions & Cooking",
                desc: "Guided horse rides through Marrakech farmland, tagine & couscous cooking classes, and excursions to the Atlas.",
                icon: <Leaf className="w-6 h-6 text-primary" />,
                image: "/images/horses-atlas-paddock.jpg"
              }
            ].map((item, index) => (
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border/70 overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.caption}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2.5 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <figcaption className="p-6 flex-1 flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-primary font-medium mb-2">
                    {item.caption}
                  </span>
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section id="retreats" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-sans text-xs tracking-[0.25em] uppercase font-semibold">
              Group Stays
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Group Accommodation <br className="hidden sm:inline" />
              <span className="italic font-light text-primary">& Catering Package</span>
            </h2>
            <p className="text-muted-foreground font-light text-base md:text-lg leading-relaxed">
              Bring your group together at Daba Village. One simple rate covers comfortable accommodation, freshly prepared meals and relaxing breaks throughout the day, so everyone can settle in and enjoy their stay.
            </p>
          </div>

          {/* Every Package Includes */}
          <div className="mb-20 bg-muted/40 border border-border/80 p-8 md:p-12 rounded-sm shadow-xs">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium block">
                Every Package Includes
              </span>
              <div className="w-12 h-px bg-primary/40 mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <BedDouble className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Accommodation</h4>
                  <p className="text-sm text-muted-foreground font-light">In double or triple rooms</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Full Breakfast</h4>
                  <p className="text-sm text-muted-foreground font-light">Served each morning</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Light Lunch</h4>
                  <p className="text-sm text-muted-foreground font-light">With sandwiches and soft drinks</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Three-Course Dinner</h4>
                  <p className="text-sm text-muted-foreground font-light">From a set menu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Two Tea & Coffee Breaks</h4>
                  <p className="text-sm text-muted-foreground font-light">Throughout the day</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Local Tourist Taxes</h4>
                  <p className="text-sm text-muted-foreground font-light">Included in the rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Package Rates Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-sans text-xs tracking-[0.25em] uppercase font-semibold">
              Package Rates
            </span>
            <p className="font-serif text-xl italic text-muted-foreground mt-1">per person, per night</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
            {/* Low Season */}
            <div className="border border-border bg-card p-8 md:p-10 rounded-sm hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-2">
                  All other dates
                </span>
                <h3 className="font-serif text-3xl mb-6">Low Season</h3>

                <div className="mb-8 pb-6 border-b border-border/60">
                  <div className="flex items-baseline">
                    <span className="font-serif text-3xl text-foreground/70 mr-1.5">€</span>
                    <span className="font-serif text-6xl md:text-7xl font-normal text-foreground">169</span>
                  </div>
                  <span className="text-xs text-muted-foreground tracking-widest uppercase block mt-2">
                    per person, per night
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground font-light mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Double or triple room accommodation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Full breakfast & light sandwich lunch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Three-course set menu dinner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>2 tea & coffee breaks throughout the day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Access to Yoga Shala & rooftop practice deck</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Local tourist taxes included</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border/60">
                <a
                  href="#contact"
                  className="inline-block w-full text-center py-3.5 px-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase text-xs tracking-widest font-medium"
                >
                  Inquire for Low Season
                </a>
              </div>
            </div>

            {/* High Season */}
            <div className="border border-primary/50 bg-card p-8 md:p-10 rounded-sm relative flex flex-col justify-between shadow-sm">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
                Popular
              </div>
              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-primary font-medium block mb-2">
                  April, May & October
                </span>
                <h3 className="font-serif text-3xl mb-6">High Season</h3>

                <div className="mb-8 pb-6 border-b border-border/60">
                  <div className="flex items-baseline">
                    <span className="font-serif text-3xl text-foreground/70 mr-1.5">€</span>
                    <span className="font-serif text-6xl md:text-7xl font-normal text-foreground">195</span>
                  </div>
                  <span className="text-xs text-muted-foreground tracking-widest uppercase block mt-2">
                    per person, per night
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground font-light mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Prime Moroccan spring & autumn weather</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Double or triple room accommodation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Full breakfast & light sandwich lunch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Three-course set menu dinner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>2 tea & coffee breaks throughout the day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Access to Yoga Shala & rooftop practice deck</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Local tourist taxes included</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border/60">
                <a
                  href="#contact"
                  className="inline-block w-full text-center py-3.5 px-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase text-xs tracking-widest font-medium"
                >
                  Inquire for High Season
                </a>
              </div>
            </div>

            {/* Festive Season */}
            <div className="bg-[#353c29] text-[#f7f3eb] p-8 md:p-10 rounded-sm relative flex flex-col justify-between shadow-md border border-[#485338]">
              <div className="absolute top-0 right-0 bg-[#d4a359] text-black text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                Holiday Stay
              </div>
              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-[#d4a359] font-medium block mb-2">
                  21 December – 3 January
                </span>
                <h3 className="font-serif text-3xl mb-6 text-white">Festive Season</h3>

                <div className="mb-6 pb-6 border-b border-white/15">
                  <div className="flex items-baseline">
                    <span className="font-serif text-3xl text-white/70 mr-1.5">€</span>
                    <span className="font-serif text-6xl md:text-7xl font-normal text-white">235</span>
                  </div>
                  <span className="text-xs text-white/70 tracking-widest uppercase block mt-2">
                    per person, per night
                  </span>
                </div>

                {/* Special New Year's Eve Note */}
                <div className="mb-6 p-3.5 bg-black/30 border border-white/15 rounded-xs text-xs text-white/95 leading-relaxed">
                  <span className="font-medium text-[#d4a359] block mb-0.5">New Year’s Eve, 31 December</span>
                  Quoted separately at <strong className="text-white font-semibold">€239</strong> per person
                </div>

                <ul className="space-y-3 text-sm text-white/85 font-light mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#d4a359] shrink-0" />
                    <span>Magical year-end festive atmosphere</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#d4a359] shrink-0" />
                    <span>Double or triple room accommodation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#d4a359] shrink-0" />
                    <span>Full breakfast & light sandwich lunch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#d4a359] shrink-0" />
                    <span>Three-course set menu dinner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#d4a359] shrink-0" />
                    <span>2 tea & coffee breaks throughout the day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#d4a359] shrink-0" />
                    <span>Access to Yoga Shala & retreat grounds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#d4a359] shrink-0" />
                    <span>Local tourist taxes included</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15">
                <a
                  href="#contact"
                  className="inline-block w-full text-center py-3.5 px-4 bg-[#d4a359] text-black hover:bg-[#e0b26c] transition-colors uppercase text-xs tracking-widest font-semibold"
                >
                  Inquire for Festive Season
                </a>
              </div>
            </div>
          </div>

          {/* Booking Conditions & Exclusive Use (Domaine Hire) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Booking Conditions */}
            <div className="lg:col-span-7 bg-muted/40 border border-border p-8 md:p-10 rounded-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-2xl md:text-3xl">Booking Conditions</h3>
                </div>

                <div className="space-y-4 text-sm font-light leading-relaxed">
                  <div className="pb-3 border-b border-border/60">
                    <span className="font-medium text-foreground block mb-0.5">Group size</span>
                    <p className="text-muted-foreground">From 10 guests up to 30 guests at the published rates.</p>
                  </div>

                  <div className="pb-3 border-b border-border/60">
                    <span className="font-medium text-foreground block mb-0.5">Minimum stay</span>
                    <p className="text-muted-foreground">Two nights.</p>
                  </div>

                  <div className="pb-3 border-b border-border/60">
                    <span className="font-medium text-foreground block mb-0.5">Rooms</span>
                    <p className="text-muted-foreground">Double or triple rooms, allocated by availability and group size. <a href="#rooms" className="text-primary border-b border-primary/60">See the bedrooms</a></p>
                  </div>

                  <div className="pb-3 border-b border-border/60">
                    <span className="font-medium text-foreground block mb-0.5">Larger groups</span>
                    <p className="text-muted-foreground">Groups of more than 30 guests receive a tailored quotation based on total group size and accommodation requirements.</p>
                  </div>

                  <div className="pb-3 border-b border-border/60">
                    <span className="font-medium text-foreground block mb-0.5">Teacher & Organizer Benefit</span>
                    <p className="text-muted-foreground">Complimentary stay for the Teacher / Organizer for groups over 15 people.</p>
                  </div>

                  <div className="pt-1">
                    <span className="font-medium text-foreground block mb-0.5">Cancellation Policy</span>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      In case of cancellation 60 days (or more) before the retreat, a voucher equivalent to the deposit will be issued and will be valid for 12 months. The deposit is non-refundable for cancellations made less than 60 days before arrival. Cases of force majeure are handled on a case-by-case basis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 text-xs italic text-muted-foreground">
                All rates are quoted per person, per night, and include the services listed. Bookings are subject to availability.
              </div>
            </div>

            {/* Exclusive Domaine Hire */}
            <div className="lg:col-span-5 bg-[#353c29] text-[#f7f3eb] p-8 md:p-10 rounded-sm relative flex flex-col justify-between border border-[#485338] shadow-md">
              <div>
                <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#d4a359] font-medium block mb-3">
                  Exclusive Use
                </span>
                <h3 className="font-serif text-3xl md:text-4xl mb-6 text-white leading-tight">
                  Domaine Hire & <br />Private Events
                </h3>

                <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6">
                  The entire domaine can be reserved for your group alone, whether for a retreat, a celebration or a private event. Exclusive hire is quoted individually, based on group size, event requirements, length of stay and the level of exclusivity required.
                </p>

                <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/10 text-xs text-[#d4a359] tracking-wider uppercase mb-8">
                  <span>✦</span>
                  <span>Available on request</span>
                  <span>✦</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15">
                <a
                  href="#contact"
                  className="inline-block w-full text-center py-3.5 px-4 bg-[#d4a359] text-black hover:bg-[#e0b26c] transition-colors uppercase text-xs tracking-widest font-semibold"
                >
                  Inquire for Domaine Hire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RoomsGallery />

      {/* Sanctuary Grounds & Retreat Moments */}
      <section id="gallery" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">
              Life at Daba Village
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              The Sanctuary & Grounds
            </h2>
            <p className="text-muted-foreground font-light">
              A closer look at our courtyard practice spaces, garden pergolas, Moroccan salons, and outdoor culinary tables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SANCTUARY_GALLERY.map((item, idx) => (
              <motion.figure
                key={item.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                className="group bg-card border border-border/80 overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={`${item.title} — ${item.caption}`}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${"imgClass" in item && item.imgClass ? item.imgClass : ""}`}
                  />
                  <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-xs text-[10px] uppercase tracking-widest px-2.5 py-1 text-foreground">
                    {item.category}
                  </span>
                </div>
                <figcaption className="p-5 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1.5">
                    {item.caption}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Journey */}
      <section id="wellness" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <span className="text-white/70 font-sans text-xs tracking-[0.2em] uppercase">Nourish</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 text-white">Farm to Table</h2>
              <p className="text-white/80 font-light text-lg leading-relaxed mb-10">
                We provide all meals cooked with our local produce; generally vegetarian and meat dishes, accommodating vegan and gluten-free needs.
                Enjoy a bountiful breakfast, a light lunch of soups and salads, and a generous dinner under the stars.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
                <div className="p-5 border border-white/20 rounded-sm">
                  <h4 className="font-serif text-xl mb-2">Breakfast</h4>
                  <p className="text-sm text-white/70 font-light">Fresh juices, Moroccan pancakes, fruits & organic eggs</p>
                </div>
                <div className="p-5 border border-white/20 rounded-sm">
                  <h4 className="font-serif text-xl mb-2">Lunch</h4>
                  <p className="text-sm text-white/70 font-light">Light soups, fresh garden salads & sandwiches</p>
                </div>
                <div className="p-5 border border-white/20 rounded-sm">
                  <h4 className="font-serif text-xl mb-2">Dinner</h4>
                  <p className="text-sm text-white/70 font-light">Traditional Tagines, Couscous & seasonal specialties</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <figure className="bg-black/20 border border-white/15 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/farm-breakfast-spread.jpg"
                    alt="Traditional Moroccan msemen breakfast with garden honey and fruit"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="p-4 text-xs text-white/80 font-light leading-relaxed">
                  <strong className="text-white font-medium block mb-0.5 font-serif text-base">Morning Table</strong>
                  Warm msemen flatbreads, garden jams, farm honey, and seasonal fruit.
                </figcaption>
              </figure>

              <figure className="bg-black/20 border border-white/15 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/moroccan-tagine-feast.jpg"
                    alt="Moroccan caramelized prune and almond tagine"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="p-4 text-xs text-white/80 font-light leading-relaxed">
                  <strong className="text-white font-medium block mb-0.5 font-serif text-base">Evening Tagines</strong>
                  Slow-cooked Moroccan dishes crafted from fresh local and garden produce.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-background pt-24 pb-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <img src="/images/logo.webp" alt="Daba Village" className="h-16 w-auto mb-6 opacity-80" />
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                A sanctuary of peace in the foothills of the Atlas Mountains. Where tradition meets tranquility.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-muted-foreground font-light">
                <li>Route aurika Km 12<br />Mohamadia 9<br />tameslouht 42312</li>
                <li>
                  <a href="tel:+212655699126" className="hover:text-primary transition-colors block font-medium">
                    +212 655-699126
                  </a>
                  <a
                    href="https://wa.me/212655699126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline inline-block mt-0.5"
                  >
                    Chat on WhatsApp →
                  </a>
                </li>
                <li><a href="mailto:info@dabavillage.com" className="hover:text-primary transition-colors">info@dabavillage.com</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Retreats</h4>
              <ul className="space-y-4 text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-primary transition-colors">Yoga Retreats</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Women's Wellness</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Corporate Offsites</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Private Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Newsletter</h4>
              <p className="text-sm text-muted-foreground font-light mb-4">
                Subscribe to receive updates on upcoming retreats and seasonal offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-b border-border focus:border-primary outline-none py-2 w-full text-sm font-light"
                />
                <button className="text-primary uppercase text-xs tracking-widest hover:text-primary/80">Join</button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-light tracking-widest uppercase">
            <p>© 2026 Daba Village. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/daba.village/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              <a href="https://daba-village-services.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Services & Prices</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
