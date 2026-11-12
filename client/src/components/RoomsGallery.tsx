import { motion, AnimatePresence } from "framer-motion";
import { BedDouble, ChevronLeft, ChevronRight, Users, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

// Bedroom photos (from the Daba Village Google Drive). Full size in /images/rooms, thumbnails in /images/rooms/thumbs.
export const ROOM_PHOTOS: { src: string; alt: string }[] = [
  { src: "/images/rooms/room-01.jpg", alt: "Luxury suite with teal walls, four-poster bed, and yellow seating" },
  { src: "/images/rooms/room-02.jpg", alt: "Luxurious teal-walled suite with canopy bed, traditional rug, and round mirrors" },
  { src: "/images/rooms/room-03.jpg", alt: "Warm terracotta bedroom suite with traditional Moroccan decor" },
  { src: "/images/rooms/room-04.jpg", alt: "Traditional Moroccan bedroom with orange walls and woodwork" },
  { src: "/images/rooms/room-05.jpg", alt: "Luxurious canopy bed in blue walled Moroccan bedroom" },
  { src: "/images/rooms/room-06.jpg", alt: "Twin bedroom with wooden ceiling, yellow walls, and blue rug" },
  { src: "/images/rooms/room-07.jpg", alt: "Cozy corner with traditional window seat and mirror" },
  { src: "/images/rooms/room-08.jpg", alt: "Vibrant teal armchair and Moroccan side table by wooden doors" },
  { src: "/images/rooms/room-09.jpg", alt: "Luxury suite interior with carved bed posts looking toward courtyard pool" },
  { src: "/images/rooms/room-10.jpg", alt: "Close-up of intricately carved wooden headboard with plush pillows" },
];

const ROOM_TYPES = [
  { name: "Deluxe Rooms", guests: "2 guests (+1 child)", note: "4 rooms" },
  { name: "Deluxe Suites", guests: "2 guests", note: "2 suites with pool view" },
  { name: "Casitas", guests: "Up to 4 guests", note: "2 casitas" },
  { name: "Superiore Room", guests: "2 guests (+1 child)", note: "1 room" },
];

export function RoomsGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const count = ROOM_PHOTOS.length;

  const go = useCallback(
    (dir: number) => setOpen(i => (i === null ? i : (i + dir + count) % count)),
    [count]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  return (
    <section id="rooms" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">Where You'll Sleep</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">Rooms & Suites</h2>
          <p className="text-muted-foreground font-light">
            Bedrooms and suites set around the courtyard and gardens, decorated with Moroccan craftsmanship: carved wood,
            canopy beds and warm earth tones. Groups share double or triple rooms, allocated by availability and group size.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-14">
          {ROOM_TYPES.map(r => (
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

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [&>*]:mb-3">
          {ROOM_PHOTOS.map((p, i) => (
            <motion.button
              key={p.src}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="block w-full overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Open photo: ${p.alt}`}
            >
              <img
                src={p.src.replace("/rooms/", "/rooms/thumbs/")}
                alt={p.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 tracking-wide">
          Tap a photo to open the gallery.{" "}
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
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            onTouchStart={e => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={e => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Bedroom photo gallery"
          >
            <img
              src={ROOM_PHOTOS[open].src}
              alt={ROOM_PHOTOS[open].alt}
              className="max-h-[85vh] max-w-[92vw] object-contain"
              onClick={e => e.stopPropagation()}
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm px-16">
              {ROOM_PHOTOS[open].alt} · {open + 1} / {count}
            </p>
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
              onClick={() => setOpen(null)}
              aria-label="Close gallery"
            >
              <X className="w-7 h-7" />
            </button>
            <button
              type="button"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
              onClick={e => {
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
              onClick={e => {
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
