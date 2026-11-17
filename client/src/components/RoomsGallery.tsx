import { AnimatePresence, motion } from "framer-motion";
import { BedDouble, ChevronLeft, ChevronRight, Users, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type RoomCategory = "All" | "Suites" | "Bedrooms" | "Bathrooms";

export interface RoomPhoto {
  src: string;
  title: string;
  caption: string;
  category: Exclude<RoomCategory, "All">;
}

// Curated room & ensuite photographs from the Daba Village archive.
// Full-size images live in /images/rooms and thumbnails in /images/rooms/thumbs.
export const ROOM_PHOTOS: RoomPhoto[] = [
  {
    src: "/images/rooms/room-01.jpg",
    title: "Teal Canopy Suite",
    caption: "Four-poster cedar canopy bed, mustard daybed lounge, and warm timber ceiling.",
    category: "Suites",
  },
  {
    src: "/images/rooms/room-02.jpg",
    title: "Saffron Canopy Suite",
    caption: "Hand-carved wooden headboard with white cotton drapes and patterned floor tiles.",
    category: "Suites",
  },
  {
    src: "/images/rooms/room-03.jpg",
    title: "Terracotta Twin or Double",
    caption: "Sunlit convertible twin beds framed by ochre tadelakt walls and cedar shutters.",
    category: "Bedrooms",
  },
  {
    src: "/images/rooms/room-04.jpg",
    title: "Golden Lattice Suite",
    caption: "Spacious suite featuring custom cedar mashrabiya closets and a cushioned window nook.",
    category: "Bedrooms",
  },
  {
    src: "/images/rooms/room-05.jpg",
    title: "Emerald Four-Poster Bedroom",
    caption: "Twisted carved bedposts, brass wall lanterns, and quiet garden-facing windows.",
    category: "Suites",
  },
  {
    src: "/images/rooms/room-06.jpg",
    title: "Courtyard Cedar Entry",
    caption: "Hand-carved Moroccan doors opening from the poolside arcade directly into the suite.",
    category: "Suites",
  },
  {
    src: "/images/rooms/room-07.jpg",
    title: "Terracotta Tadelakt Ensuite",
    caption: "Double brass basins, arched Moroccan brass mirror, and rose-zellige rain shower.",
    category: "Bathrooms",
  },
  {
    src: "/images/rooms/room-08.jpg",
    title: "Charcoal Soaking Bath",
    caption: "Sunken black tadelakt soaking tub paired with herringbone zellige tiles and brass taps.",
    category: "Bathrooms",
  },
];

const CATEGORIES: RoomCategory[] = ["All", "Suites", "Bedrooms", "Bathrooms"];

const ROOM_TYPES = [
  { name: "Deluxe Rooms", guests: "2 guests (+1 child)", note: "4 rooms" },
  { name: "Deluxe Suites", guests: "2 guests", note: "2 suites with pool view" },
  { name: "Casitas", guests: "Up to 4 guests", note: "2 casitas" },
  { name: "Superiore Room", guests: "2 guests (+1 child)", note: "1 room" },
];

export function RoomsGallery() {
  const [filter, setFilter] = useState<RoomCategory>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const visiblePhotos =
    filter === "All" ? ROOM_PHOTOS : ROOM_PHOTOS.filter((p) => p.category === filter);
  const count = visiblePhotos.length;

  const go = useCallback(
    (dir: number) =>
      setOpenIndex((i) => (i === null ? i : (i + dir + count) % count)),
    [count]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, go]);

  return (
    <section id="rooms" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">
            Where You'll Sleep
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Rooms & Suites</h2>
          <p className="text-muted-foreground font-light">
            Bedrooms and suites set around the courtyard and gardens, decorated with Moroccan craftsmanship:
            carved cedar wood, canopy beds, and hand-polished tadelakt baths. Groups share double or triple rooms,
            allocated by availability and group size.
          </p>
        </div>

        {/* Room Categories Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12">
          {ROOM_TYPES.map((r) => (
            <div key={r.name} className="border border-border/80 bg-background p-4 md:p-6">
              <BedDouble className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-serif text-xl md:text-2xl mb-1">{r.name}</h3>
              <p className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-primary mb-3">
                <Users className="w-3.5 h-3.5" /> {r.guests}
              </p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{r.note}</p>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Room photo categories">
          {CATEGORIES.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setOpenIndex(null);
                  setFilter(cat);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors border ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat === "All" ? "All Spaces" : cat}
              </button>
            );
          })}
        </div>

        {/* Uniform Captioned Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visiblePhotos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="group bg-card border border-border/80 overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="relative aspect-[4/3] w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Open photo: ${p.title}`}
              >
                <img
                  src={p.src.replace("/rooms/", "/rooms/thumbs/")}
                  alt={`${p.title} — ${p.caption}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-xs text-[10px] uppercase tracking-widest px-2.5 py-1 text-foreground">
                  {p.category}
                </span>
              </button>
              <figcaption className="p-4 flex-1 flex flex-col">
                <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1">
                  {p.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10 tracking-wide">
          Tap any room photo to view full size.{" "}
          <a
            href="https://live.ipms247.com/booking/book-rooms-dabariad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary border-b border-primary pb-0.5"
          >
            Book an individual room
          </a>
        </p>
      </div>

      <AnimatePresence>
        {openIndex !== null && visiblePhotos[openIndex] && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Bedroom photo gallery"
          >
            <div className="flex flex-col items-center max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <img
                src={visiblePhotos[openIndex].src}
                alt={visiblePhotos[openIndex].title}
                className="max-h-[78vh] max-w-[90vw] object-contain"
              />
              <div className="mt-4 text-center text-white px-6 max-w-2xl">
                <p className="font-serif text-2xl">
                  {visiblePhotos[openIndex].title}
                  <span className="text-sm font-sans text-white/60 ml-3">
                    {openIndex + 1} / {count}
                  </span>
                </p>
                <p className="text-sm text-white/80 font-light mt-1">
                  {visiblePhotos[openIndex].caption}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
              onClick={() => setOpenIndex(null)}
              aria-label="Close gallery"
            >
              <X className="w-7 h-7" />
            </button>
            <button
              type="button"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>
            <button
              type="button"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
