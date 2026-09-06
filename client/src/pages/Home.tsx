import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Leaf, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo.webp" alt="Daba Village Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase">
            <a href="#retreats" className="hover:text-primary transition-colors">Retreats</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#accommodation" className="hover:text-primary transition-colors">Stay</a>
            <a href="#wellness" className="hover:text-primary transition-colors">Wellness</a>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-6">
              <a href="#contact">Inquire</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-handstand.jpg"
            alt="Yoga pose by the pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
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
              <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase">
                Explore Retreats
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/headstand-pool.jpg"
                  alt="Yoga practice by the pool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-[4/3] overflow-hidden hidden md:block border-8 border-background">
                <img
                  src="/images/headstand-pool-2.jpg"
                  alt="Reflection in the pool"
                  className="w-full h-full object-cover"
                />
              </div>
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
                <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors uppercase text-xs tracking-widest border-b border-primary pb-1">
                  Plan Your Retreat <ArrowRight className="w-4 h-4" />
                </a>
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
                desc: "Practice in our dedicated shala or on the rooftop facing the Atlas mountains. Suitable for all levels.",
                icon: <Sun className="w-6 h-6 text-primary" />,
                image: "/images/group-yoga-courtyard.jpg"
              },
              {
                title: "Wellness & Spa",
                desc: "Traditional Hammam rituals with black soap, henna art, and massage services for deep renewal.",
                icon: <Moon className="w-6 h-6 text-primary" />,
                image: "/images/evening-pool-relaxation.jpg"
              },
              {
                title: "Nature & Culture",
                desc: "Guided horse rides, cooking classes for tagine & couscous, and excursions to the Atlas or desert.",
                icon: <Leaf className="w-6 h-6 text-primary" />,
                image: "/images/poolside-pose.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section id="retreats" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">Retreat Packages</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8">Group Retreat Packages</h2>
              <p className="text-muted-foreground font-light mb-8">
                Full board basis including accommodation, all meals (vegetarian/vegan friendly), and exclusive usage of facilities for larger groups.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg">Exclusive Use</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Groups of 20+ rooms get exclusivity of the entire premises. Smaller groups (12-20) get exclusive usage of the Shala.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg">Teacher Benefits</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Complementary stay for the Teacher/Organizer for groups over 15 people.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-muted/50 p-6 rounded-lg">
                <h4 className="font-serif text-xl mb-4">Booking conditions for groups:</h4>
                <ul className="text-sm text-muted-foreground font-light space-y-2 list-disc pl-4 mb-6">
                  <li>Pre-booking of dates can be granted for a 1-month period</li>
                  <li>Minimum stay: 5 nights</li>
                  <li>Deposit of 30% to confirm booking</li>
                  <li>Balance of 70% to be wired 1 month before arrival</li>
                  <li>A variation of 20% in the number of participants is allowed</li>
                </ul>

                <h4 className="font-serif text-lg mb-2 text-foreground/80">Cancellation Policy:</h4>
                <p className="text-sm text-muted-foreground font-light mb-4 leading-relaxed">
                  In case of cancelation 60 days (or more) before the retreat, a voucher equivalent to the deposit will be issued and will be valid 12 months. The deposit is lost for any cancelation done less than 60 days before the retreat.
                </p>
                <ul className="text-sm text-muted-foreground font-light list-disc pl-4">
                  <li>Cases of force majeure are dealt on a case-by-case basis</li>
                </ul>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Junior Suite / Triple Shared */}
              <div className="border border-border p-8 hover:border-primary/50 transition-colors duration-300 bg-card flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl mb-2">Junior Suite / Triple</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Shared Occupancy • 3 Guests</p>

                  <div className="space-y-3 text-sm text-muted-foreground font-light mb-8">
                    <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                      <Leaf className="w-4 h-4 text-primary shrink-0" />
                      <span>Full board: vegetarian & vegan organic meals</span>
                    </div>
                    <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                      <Sun className="w-4 h-4 text-primary shrink-0" />
                      <span>Full access to Yoga Shala & rooftop practice deck</span>
                    </div>
                    <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                      <Moon className="w-4 h-4 text-primary shrink-0" />
                      <span>Ensuite private bathroom & Moroccan amenities</span>
                    </div>
                    <div className="flex items-center gap-2 pb-2">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <span>Dedicated retreat hosting & daily housekeeping</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic mb-4">
                    Custom group quotes & seasonal availability upon request.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block w-full text-center py-3 px-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase text-xs tracking-widest font-medium"
                  >
                    Inquire for Rates
                  </a>
                </div>
              </div>

              {/* Junior Suite / Double or Twin */}
              <div className="border border-border p-8 hover:border-primary/50 transition-colors duration-300 bg-card relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1">Popular</div>
                <div>
                  <h3 className="font-serif text-2xl mb-2">Junior Suite / Double</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Double or Twin Occupancy</p>

                  <div className="space-y-3 text-sm text-muted-foreground font-light mb-8">
                    <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                      <Leaf className="w-4 h-4 text-primary shrink-0" />
                      <span>Full board: vegetarian & vegan organic meals</span>
                    </div>
                    <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                      <Sun className="w-4 h-4 text-primary shrink-0" />
                      <span>Full access to Yoga Shala & rooftop practice deck</span>
                    </div>
                    <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                      <Moon className="w-4 h-4 text-primary shrink-0" />
                      <span>Ensuite private bath with garden or pool view</span>
                    </div>
                    <div className="flex items-center gap-2 pb-2">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <span>Extra bed options available upon request</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic mb-4">
                    Custom group quotes & seasonal availability upon request.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block w-full text-center py-3 px-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase text-xs tracking-widest font-medium"
                  >
                    Inquire for Rates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Journey */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-white/70 font-sans text-xs tracking-[0.2em] uppercase">Nourish</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 text-white">Farm to Table</h2>
            <p className="text-white/80 font-light text-lg leading-relaxed mb-10">
              We provide all meals cooked with our local produce; generally vegetarian and meat dishes, accommodating vegan and gluten-free needs.
              Enjoy a bountiful breakfast, a light lunch of soups and salads, and a generous dinner under the stars.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-white/20 rounded-sm">
                <h4 className="font-serif text-xl mb-2">Breakfast</h4>
                <p className="text-sm text-white/70 font-light">Fresh juices, Moroccan pancakes, fruits & organic eggs</p>
              </div>
              <div className="p-6 border border-white/20 rounded-sm">
                <h4 className="font-serif text-xl mb-2">Lunch</h4>
                <p className="text-sm text-white/70 font-light">Light soups, fresh garden salads & sandwiches</p>
              </div>
              <div className="p-6 border border-white/20 rounded-sm">
                <h4 className="font-serif text-xl mb-2">Dinner</h4>
                <p className="text-sm text-white/70 font-light">Traditional Tagines, Couscous & seasonal specialties</p>
              </div>
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
                  <a href="tel:+212676777790" className="hover:text-primary transition-colors block font-medium">
                    +212 6 76 77 77 90
                  </a>
                  <a
                    href="https://wa.me/212676777790"
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
            <p>© 2025 Daba Village. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
