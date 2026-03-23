import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { Eye, Sun, Wind, Camera, Bed, Utensils, Map, Leaf, Download, Compass, Lightbulb, Layers } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-background min-h-screen selection:bg-earth-olive selection:text-white overflow-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section id="top" ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-earth-deep">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-landscape.png`}
            alt="African savanna landscape"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 tracking-tight"
          >
            Disappear to<br />see more.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="font-sans font-light tracking-wide uppercase text-white/80 text-sm md:text-base max-w-2xl mx-auto"
          >
            A site-integrated, climate-responsive wildlife observation pod that becomes part of the ecosystem.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-32 md:py-48 px-6 bg-background relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl md:text-5xl leading-snug md:leading-tight text-foreground"
          >
            EarthPod™ is not just built on the landscape,{" "}
            <span className="italic text-earth-olive">it becomes the landscape.</span> An architectural expression of patience, stillness, and profound ecological respect.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            A biome-adapted wildlife hide that disappears into the landscape — designed for Africa, shaped by its climates, and camouflaged by its ecosystems.
          </motion.p>
        </div>
      </section>

      {/* CONCEPT & VISION */}
      <section id="concept" className="py-24 md:py-32 px-6 bg-card relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="01"
            title="Concept & Vision"
            subtitle="Architecture that yields to nature."
          />

          <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                The philosophy behind EarthPod™ is rooted in absolute minimal disturbance. Traditional lodges elevate guests above the landscape, separating them from the environment. We chose the opposite approach.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By sinking the structure into the earth and extending the natural topography over its roof, the pod effectively disappears. This camouflage allows wildlife to approach without fear, offering an unparalleled, intimate connection with the wild.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each pod grows into its own environment: a green roof seeded with the same plant community as the biome it sits in — from mopaneveld to fynbos. It becomes part of the veld, not a structure imposed upon it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] bg-gradient-to-br from-earth-stone to-earth-olive/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply" />
              <div className="absolute inset-10 border border-white/20 flex items-center justify-center p-8 text-center">
                <p className="font-serif text-2xl text-earth-deep/50 italic">"Stillness is the ultimate luxury."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESIGN & ARCHITECTURE */}
      <section id="design" className="py-24 md:py-40 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="02"
            title="Spatial Layout"
            subtitle="Programmatic separation for undisturbed observation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Eye className="w-8 h-8 mb-6 text-earth-olive" strokeWidth={1} />,
                title: "The Viewing Bunker",
                desc: "A sunken, curved observation area projecting directly toward the waterhole — creating an immersive, eye-level connection with wildlife while maintaining acoustic, visual, and operational separation from the living spaces.",
              },
              {
                icon: <Utensils className="w-8 h-8 mb-6 text-earth-olive" strokeWidth={1} />,
                title: "Social Core",
                desc: "The central lounge and kitchen act as the calm, social heart of the structure — a transition spine that separates the busy programmatic elements from the quiet observation zone.",
              },
              {
                icon: <Bed className="w-8 h-8 mb-6 text-earth-olive" strokeWidth={1} />,
                title: "Resting Pods",
                desc: "Private sleeping pods and compact ablutions recessed to either side. Storage and services are pushed to the rear and edges to minimise disturbance.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-card p-10 group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-earth-sand/30"
              >
                {item.icon}
                <h3 className="text-xl font-serif mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Facade Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20"
          >
            <h3 className="font-serif text-2xl text-foreground mb-10 flex items-center gap-4">
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Facade Principles</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Layers className="w-6 h-6 text-earth-olive" strokeWidth={1} />,
                  title: "Absorbed",
                  desc: "Roof Biome — indigenous planting dissolves the structure into the surrounding landscape.",
                },
                {
                  icon: <Lightbulb className="w-6 h-6 text-earth-olive" strokeWidth={1} />,
                  title: "Practical",
                  desc: "High-level windows for cross-ventilation. Passive cooling in a 35–42°C climate.",
                },
                {
                  icon: <Compass className="w-6 h-6 text-earth-olive" strokeWidth={1} />,
                  title: "Grounded",
                  desc: "Human scale. Earth materials. The building feels of the land, not on it.",
                },
                {
                  icon: <Camera className="w-6 h-6 text-earth-olive" strokeWidth={1} />,
                  title: "View",
                  desc: "Front-lit, side-lit, and eye-level photography. Every aperture is a considered frame.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border-t border-border pt-6 space-y-3">
                  {item.icon}
                  <h4 className="font-sans font-medium text-foreground text-sm tracking-wide uppercase">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Plan View Drawing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 relative"
          >
            <div className="absolute top-4 left-4 z-10 text-xs font-mono text-muted-foreground tracking-widest uppercase">Fig 1. Plan View & Section</div>
            <div className="w-full border border-border overflow-hidden bg-[#f5f0e8]">
              <img
                src={`${import.meta.env.BASE_URL}images/plan-view.png`}
                alt="EarthPod architectural plan view and section drawing showing circular layout with boma, living areas, photography bunker, and waterhole"
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </div>
            <div className="mt-4 text-center text-xs font-light text-muted-foreground flex items-center justify-center gap-4 tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-border"></span>
              Boma · Living Areas · Light Well · Photography · Waterhole
              <span className="w-12 h-[1px] bg-border"></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTOGRAPHY EXPERIENCE */}
      <section id="photography" className="py-24 md:py-32 px-6 bg-earth-deep text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="03"
            title="The Lens"
            subtitle="360° solar-oriented. Engineered for the perfect shot."
            dark
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-earth-sand">Eye-Level Immersion</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                The Eco Bunker's orientation is fundamental to its photographic performance. Facing south allows the northern sun to front-light animals at the waterhole for most of the day, providing soft, even illumination while avoiding harsh silhouettes.
              </p>
              <p className="text-white/70 leading-relaxed">
                East- and west-facing viewing panels capture the low-angle morning and afternoon light, enabling golden-hour photography without disturbing wildlife. This strategy ensures high-quality lighting flexibility throughout the day, aligned with animal behaviour.
              </p>

              <ul className="space-y-4 mt-8 pt-8 border-t border-white/10">
                {[
                  { icon: <Camera size={20} />, text: "South-facing: front-lit wildlife photography all day" },
                  { icon: <Sun size={20} />, text: "East & west panels: golden hour without disturbing wildlife" },
                  { icon: <Eye size={20} />, text: "Sunken bunker: eye-level perspective with animals" },
                  { icon: <Wind size={20} />, text: "Draft-free, scent-controlled observation environment" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/80 font-light">
                    <span className="text-earth-sand">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2A1E15] to-[#1A120C] p-8 md:p-12 border border-white/5 flex flex-col justify-center"
            >
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-white/90 italic mb-8">
                "The golden hour light spills across the waterhole, hitting the east panels perfectly. The elephants don't even know we are here."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-earth-sand"></div>
                <span className="text-xs tracking-widest uppercase text-earth-sand">Wildlife Photographer</span>
              </div>

              {/* Solar orientation diagram */}
              <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                {[
                  { dir: "S", label: "Front-lit", sub: "All day" },
                  { dir: "E", label: "Golden Hour", sub: "Morning" },
                  { dir: "W", label: "Golden Hour", sub: "Afternoon" },
                ].map((o) => (
                  <div key={o.dir} className="space-y-1">
                    <div className="text-2xl font-serif text-earth-sand">{o.dir}</div>
                    <div className="text-xs font-medium text-white/80 uppercase tracking-wide">{o.label}</div>
                    <div className="text-xs text-white/40">{o.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SITE & ENVIRONMENT */}
      <section id="site" className="py-24 md:py-40 px-6 bg-background">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <SectionHeader
                  number="04"
                  title="The Site"
                  subtitle="Klaserie, South Africa."
                />

                {/* Site stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-10 space-y-4"
                >
                  {[
                    { label: "Coordinates", value: "24.26° S, 31.22° E" },
                    { label: "Bedrock", value: "Gneissic — Bushveld" },
                    { label: "Climate", value: "Hot · 35–42°C" },
                    { label: "Rainfall", value: "350–550mm annually" },
                    { label: "Season", value: "Long dry season" },
                    { label: "Eastgate Airport", value: "±37 km" },
                    { label: "Hoedspruit Town", value: "±43 km" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between border-b border-border pb-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.label}</span>
                      <span className="text-sm font-light text-foreground">{s.value}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="hidden lg:block w-full h-[220px] mt-10 bg-earth-stone/10 border border-border relative overflow-hidden"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/texture-stone.png`}
                    alt="Architectural texture"
                    className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Map className="w-10 h-10 text-earth-stone/50" strokeWidth={1} />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-16 space-y-20">
              {/* Biome description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-3xl mb-6 text-foreground">The Lowveld Biome</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  A diverse, drought-tolerant savanna on gneissic bedrock. The Klaserie landscape is defined by four overlapping habitat zones, each supporting distinct wildlife communities.
                </p>
              </motion.div>

              {/* Wildlife by habitat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    habitat: "Trees & Canopy",
                    icon: "🌳",
                    wildlife: ["Insects & birdlife", "Elephants", "Leopards"],
                  },
                  {
                    habitat: "Shrubveld",
                    icon: "🌿",
                    wildlife: ["Small wildlife", "Birds", "Antelope", "Insects", "Fruit-eating birds"],
                  },
                  {
                    habitat: "Rivers & Water",
                    icon: "🌊",
                    wildlife: ["Birdlife", "Water animals", "Antelope", "Insect-eating birds"],
                  },
                  {
                    habitat: "Grassy Savanna",
                    icon: "🌾",
                    wildlife: ["Buffalo", "Antelope", "Grass birds", "Insects", "Feline predators"],
                  },
                ].map((h, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card border border-border p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl">{h.icon}</span>
                      <h4 className="font-sans font-medium text-sm uppercase tracking-widest text-foreground">{h.habitat}</h4>
                    </div>
                    <ul className="space-y-1.5">
                      {h.wildlife.map((w) => (
                        <li key={w} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-earth-olive inline-block" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>

              {/* Sustainability */}
              <div id="sustainability">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <Leaf className="w-6 h-6 text-earth-olive" />
                    <h3 className="font-serif text-3xl text-foreground">Ecological Integration</h3>
                  </div>
                  <div className="space-y-8">
                    <div className="border-l-2 border-earth-olive pl-6">
                      <h4 className="font-sans font-medium text-foreground tracking-wide mb-2 uppercase text-sm">Living Roofs</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        The entire structure is blanketed with local soil seeded with the same plant community as its host biome — mopaneveld, fynbos, or grassy savanna. This provides massive thermal mass, reduces cooling loads, and restores the habitat footprint to near zero.
                      </p>
                    </div>
                    <div className="border-l-2 border-earth-sand pl-6">
                      <h4 className="font-sans font-medium text-foreground tracking-wide mb-2 uppercase text-sm">Rammed Earth & Stone</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Constructed using materials excavated directly from the site — gneissic stone and rammed earth walls. They breathe, regulate humidity, and match the exact chromatic signature of the surrounding landscape.
                      </p>
                    </div>
                    <div className="border-l-2 border-earth-stone pl-6">
                      <h4 className="font-sans font-medium text-foreground tracking-wide mb-2 uppercase text-sm">Climate Response</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        High-level windows enable cross-ventilation. The sunken form creates natural shade. Evaporative cooling channels use the water channel system to passively cool internal spaces — architecture that listens to the climate rather than fighting it.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRECEDENTS */}
      <section id="precedents" className="py-24 md:py-32 px-6 bg-earth-deep text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="05"
            title="Precedents"
            subtitle="Learning from those who disappeared first."
            dark
          />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {[
              {
                name: "Lala Limpopo Hide",
                location: "Zimbabwe",
                description:
                  "A low-profile, earth-integrated wildlife viewing shelter on the banks of the Limpopo River, designed to disappear into the riverine landscape. Built with natural materials and a recessed viewing aperture at animal eye-level, the hide provides photographers with an intimate, unobtrusive vantage point while maintaining minimal visual and ecological impact.",
                finding:
                  "Spatial hierarchy protects the viewing experience. The layout separates the 'busy' programmatic elements — entry, storage, utilities, circulation — from the 'quiet' zone dedicated to observation. Placing active areas behind the bunker ensures that movement and noise never disturb the primary purpose: stillness, immersion, and unobstructed connection to the landscape.",
              },
              {
                name: "Soroi Photo Hide",
                location: "Kenya",
                description:
                  "A discreet, ground-level wildlife photography hide positioned at a natural waterhole, designed to immerse photographers at eye-level with animals while remaining visually and environmentally unobtrusive within the landscape.",
                finding:
                  "The Soroi model demonstrates how programmatic separation — isolating movement, entry, and utilities from the observation core — allows the quiet zone to anchor the entire plan. The primary purpose remains undisturbed: stillness, immersion, and unobstructed connection to the landscape context.",
              },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="border border-white/10 p-8 md:p-10 space-y-6"
              >
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-earth-sand mb-2 block">Precedent {idx + 1}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white">{p.name}</h3>
                  <span className="text-sm text-white/40 tracking-widest uppercase">{p.location}</span>
                </div>
                <p className="text-white/70 leading-relaxed">{p.description}</p>
                <div className="border-t border-white/10 pt-6">
                  <span className="text-xs font-mono tracking-widest uppercase text-earth-sand mb-3 block">Findings</span>
                  <p className="text-white/60 leading-relaxed text-sm italic">{p.finding}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="06"
            title="Visuals"
            subtitle="Renders and atmospheric perspectives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16">
            {[
              { label: "Safari at Golden Hour", src: "gallery-safari-sunset.jpg" },
              { label: "Waterside Integration", src: "gallery-waterside-lodge.png" },
              { label: "Photographer in the Bunker", src: "gallery-photographer-bunker.png" },
              { label: "Earth-Integrated Exterior", src: "gallery-eco-lodge-savanna.png" },
              { label: "Curved Lodge at Waterhole", src: "gallery-curved-lodge-waterhole.png" },
              { label: "Boma Lounge at Dusk", src: "gallery-boma-lounge.png" },
              { label: "Bunker Under the Stars", src: "gallery-bunker-night.png" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/${item.src}`}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-serif text-lg tracking-wide drop-shadow-lg">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD BOOKLET */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-border p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-earth-olive to-transparent" />

            <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6">Publication · 2026</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              EarthPod™ Booklet
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Download the full architectural booklet — concept, site analysis, sun orientation, spatial rationale, precedents, and renders. A complete introduction to EarthPod™ as a biome-integrated wildlife observation pod.
            </p>

            <a
              href={`${import.meta.env.BASE_URL}downloads/EarthPod-Eco-Bunker-Booklet-2026.pdf`}
              download="EarthPod-Eco-Bunker-Booklet-2026.pdf"
              className="inline-flex items-center gap-3 bg-earth-deep text-white px-10 py-4 font-sans text-sm tracking-widest uppercase hover:bg-earth-olive transition-colors duration-300 group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download Booklet — PDF
            </a>

            <p className="mt-6 text-xs text-muted-foreground tracking-wide">
              26.02.2026 · Architectural Magazine · EarthPod™
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-earth-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

        {/* Top footer content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-10 flex flex-col items-center text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">EarthPod<span className="text-lg align-super">™</span></h2>
          <p className="text-white/60 font-light max-w-md">Architecture that yields to nature. Designed for stillness, observation, and ecological respect.</p>
        </div>

        {/* Partner logos — full-width black band */}
        <div className="relative z-10 w-full bg-black py-10 px-6">
          <p className="text-xs font-mono tracking-widest uppercase text-white/30 mb-10 text-center">In collaboration with</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 max-w-4xl mx-auto">

            <a
              href="https://www.huizemark.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/logo-huizemark.png`}
                alt="Huizemark"
                className="h-14 w-auto object-contain"
              />
              <span className="text-xs tracking-widest uppercase text-white/40 font-light">Huizemark</span>
            </a>

            <a
              href="https://allofarch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/logo-aoa.jpg`}
                alt="AOA — All of Architecture"
                className="h-14 w-auto object-contain rounded-sm"
              />
              <span className="text-xs tracking-widest uppercase text-white/40 font-light">All of Architecture</span>
            </a>

            <a
              href="https://dcc-consulting.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/logo-dcc.png`}
                alt="DCC Consulting"
                className="h-14 w-auto object-contain rounded-sm"
              />
              <span className="text-xs tracking-widest uppercase text-white/40 font-light">DCC Consulting</span>
            </a>

          </div>
        </div>

        {/* Copyright bar */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-6">
          <div className="w-full h-[1px] bg-white/10 mb-6" />
          <div className="flex flex-col md:flex-row justify-between text-xs tracking-widest uppercase text-white/40">
            <span>© 2026 EarthPod Eco Bunker</span>
            <span className="mt-4 md:mt-0">24.26° S, 31.22° E · Klaserie, South Africa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
