import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { Eye, Sun, Wind, Camera, Bed, Utensils, Map, Leaf, Download, Compass, Lightbulb, Layers, Instagram, Globe } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const lionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: lionScroll } = useScroll({
    target: lionRef,
    offset: ["start end", "end start"],
  });
  const lionY = useTransform(lionScroll, [0, 1], ["-20%", "20%"]);

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
            A biome-integrated wildlife hide system designed to disappear into the landscape.
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

      {/* LION'S EYE PARALLAX */}
      <div
        ref={lionRef}
        className="relative w-full overflow-hidden aspect-[2/1] md:aspect-auto md:h-[55vh]"
      >
        <motion.div
          style={{ y: lionY, willChange: "transform", position: "absolute", top: "-20%", left: 0, right: 0, height: "140%" }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/lions-eye.jpg`}
            alt="Lion's eyes — eye-level with the wild"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </div>

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
            Ubuntu Reflections<span className="text-lg align-super">™</span> is not just built on the landscape,{" "}
            <span className="italic text-earth-olive">it becomes the landscape.</span> A quiet interface between human presence and natural behaviour.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            This is not architecture imposed on nature. It is architecture absorbed by it — allowing wildlife to move freely, undisturbed, while creating a space of profound ecological respect.
          </motion.p>
        </div>
      </section>

      {/* CREATOR'S VISION */}
      <section className="py-0 md:py-0 px-6 bg-earth-deep text-white">
        <div className="max-w-5xl mx-auto py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <blockquote className="font-serif text-2xl md:text-4xl leading-snug text-white/90 italic mb-10 max-w-3xl mx-auto">
              "Ubuntu Reflections<span className="not-italic text-sm align-super">™</span> is a biome-integrated wildlife hide system designed to disappear into the landscape. It creates a quiet interface between human presence and natural behaviour — allowing wildlife to move freely, undisturbed."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-earth-sand" />
              <span className="text-xs tracking-widest uppercase text-earth-sand">Sean Koekemoer — Wildlife Enthusiast &amp; Photographer</span>
              <div className="w-12 h-[1px] bg-earth-sand" />
            </div>
            <p className="mt-8 text-white/50 font-light text-sm max-w-2xl mx-auto leading-relaxed">
              Over more than fifteen years, this concept has been shaped through observation, patience, and continuous refinement. Every element has been considered, tested, and aligned — not only to create a place of comfort, but to establish a fully integrated natural environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE ANIMALS */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="00"
            title="The Animals"
            subtitle="Biodiversity is what makes Ubuntu Reflections™ come alive."
          />
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our fellow enthusiasts all share one thing in common — the love for the animals. Our footprint whilst establishing Eco Bunker sites is our utmost priority.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We strive to see every species thrive in their given environment, and therefore our intention is to integrate and disappear rather than maximise our human presence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Capturing an image of these moments in nature is timeless. The wild behaves as it always has — unaware, uninterrupted, and astonishingly close.
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-1">Photography</p>
                <p className="text-sm text-foreground font-light">Photos by Sean Koekemoer</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/gallery-photographer-bunker.png`}
                alt="Wildlife photographer in the Eco Bunker — eye-level with nature"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
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
                The philosophy behind Ubuntu Reflections™ is rooted in absolute minimal disturbance. Traditional lodges elevate guests above the landscape, separating them from the environment. We chose the opposite approach.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By sinking the structure into the earth and extending the natural topography over its roof, the Eco Bunker effectively disappears. This camouflage allows wildlife to approach without fear, offering an unparalleled, intimate connection with the wild.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It is a living ecosystem — crafted to bring people closer to nature without disturbing it. A space where silence is respected, where presence replaces distraction, where photographers, observers, and nature lovers become part of the environment they came to experience.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm italic text-muted-foreground font-serif text-xl leading-snug">
                  "To create a place where nature leads, and everything else follows."
                </p>
                <p className="mt-3 text-xs font-mono tracking-widest uppercase text-muted-foreground">Sean Koekemoer</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/sketch-render.png`}
                alt="Ubuntu Reflections architectural sketch — watercolour render"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE ECOSYSTEM */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="01b"
            title="The Ecosystems"
            subtitle="This is not landscaping. It is ecosystem design."
          />
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] overflow-hidden order-2 md:order-1"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/gallery-eco-lodge-savanna.png`}
                alt="Eco Bunker integrated into the African savanna"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 md:order-2"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                The ecosystem is a community of living organisms that interact with each other and their physical environment. These interactions create a complex web of relationships where energy and nutrients flow between different components.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Between each Eco Bunker, 25 different Aloe species form living boundaries. These attract pollinators, insects, and birdlife — forming the base of a natural food chain.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  { label: "25 Aloe Species", desc: "Living boundaries between bunkers attract pollinators, insects, and birdlife." },
                  { label: "Indigenous Trees", desc: "Introduce nesting, shade, and seasonal variation throughout the site." },
                  { label: "Bee-Eater Clay Banks", desc: "Clay construction walls provide adequate shelter for bee-eaters within the structure itself." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-earth-olive pl-5">
                    <h4 className="font-sans font-medium text-foreground text-sm uppercase tracking-widest mb-1">{item.label}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESIGN & ARCHITECTURE */}
      <section id="design" className="py-24 md:py-40 px-6 bg-card">
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
                className="bg-background p-10 group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-earth-sand/30"
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
            <div className="absolute top-4 left-4 z-10 text-xs font-mono text-muted-foreground tracking-widest uppercase">Fig 1. Plan View &amp; Section</div>
            <div className="w-full border border-border overflow-hidden bg-[#f5f0e8]">
              <img
                src={`${import.meta.env.BASE_URL}images/plan-view.png`}
                alt="Ubuntu Reflections architectural plan view and section drawing showing circular layout with boma, living areas, photography bunker, and waterhole"
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
                East- and west-facing viewing panels capture the low-angle morning and afternoon light, enabling golden-hour photography without disturbing wildlife. Together, this strategy ensures high-quality lighting flexibility throughout the day, aligned with animal behaviour.
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

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-mono tracking-widest uppercase text-white/40 mb-1">Photography</p>
                <p className="text-sm text-white/60 font-light">Photos by Sean Koekemoer</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2A1E15] to-[#1A120C] p-8 md:p-12 border border-white/5 flex flex-col justify-center"
            >
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-white/90 italic mb-8">
                "Designed to disappear into its surroundings, the bunker offers absolute immersion with absolute respect for nature — no disruption, no staged encounters. Time slows. Senses heighten."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-earth-sand"></div>
                <span className="text-xs tracking-widest uppercase text-earth-sand">Disappearing to see more</span>
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
                  className="hidden lg:block w-full h-[180px] mt-10 bg-earth-stone/10 border border-border relative overflow-hidden"
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

                {/* PDF Booklet Download */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-8 border-t border-border"
                >
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Publication · 2026</p>
                  <h4 className="font-serif text-xl text-foreground mb-2">Ubuntu Reflections™ Booklet</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Download the full architectural booklet — concept, site analysis, sun orientation, spatial rationale, precedents, and renders. A complete introduction to Ubuntu Reflections™ as a biome-integrated wildlife observation system.
                  </p>
                  <a
                    href={`${import.meta.env.BASE_URL}downloads/Ubuntu-Reflections-Booklet-2026.pdf`}
                    download="Ubuntu-Reflections-Booklet-2026.pdf"
                    className="inline-flex items-center gap-2 bg-earth-deep text-white px-6 py-3 font-sans text-xs tracking-widest uppercase hover:bg-earth-olive transition-colors duration-300 group"
                  >
                    <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                    Download Booklet — PDF
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground/60 tracking-wide">26.02.2026 · Architectural Magazine · Ubuntu Reflections™</p>
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
                  { habitat: "Trees & Canopy", icon: "🌳", wildlife: ["Insects & birdlife", "Elephants", "Leopards"] },
                  { habitat: "Shrubveld", icon: "🌿", wildlife: ["Small wildlife", "Birds", "Antelope", "Insects", "Fruit-eating birds"] },
                  { habitat: "Rivers & Water", icon: "🌊", wildlife: ["Birdlife", "Water animals", "Antelope", "Insect-eating birds"] },
                  { habitat: "Grassy Savanna", icon: "🌾", wildlife: ["Buffalo", "Antelope", "Grass birds", "Insects", "Feline predators"] },
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
            </div>
          </div>
        </div>
      </section>

      {/* ECOLOGICAL INTEGRATION */}
      <section id="sustainability" className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Leaf className="w-6 h-6 text-earth-olive" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Ecological Integration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {[
              {
                color: "border-earth-olive",
                title: "Living Roofs",
                desc: "The entire structure is blanketed with local soil seeded with the same plant community as its host biome — mopaneveld, fynbos, or grassy savanna. This provides massive thermal mass, reduces cooling loads, and restores the habitat footprint to near zero.",
              },
              {
                color: "border-earth-sand",
                title: "Rammed Earth & Stone",
                desc: "Constructed using materials excavated directly from the site — gneissic stone and rammed earth walls. They breathe, regulate humidity, and match the exact chromatic signature of the surrounding landscape.",
              },
              {
                color: "border-earth-stone",
                title: "Climate Response",
                desc: "High-level windows enable cross-ventilation. The sunken form creates natural shade. Evaporative cooling channels use the water channel system to passively cool internal spaces — architecture that listens to the climate rather than fighting it.",
              },
              {
                color: "border-earth-olive",
                title: "Natural Water Purification",
                desc: "Subtle integration of bee-eater clay banks that conceal and support natural water purification systems — every detail exists with purpose, from the positioning of each structure for optimal light, to the stillness of reflection water engineered for undisturbed imagery.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border-l-2 ${item.color} pl-6`}
              >
                <h4 className="font-sans font-medium text-foreground tracking-wide mb-3 uppercase text-sm">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE RESERVE OFFERS */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What the Reserve Offers</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Klaserie Private Nature Reserve is one of South Africa's largest unfenced private reserves, seamlessly integrated into the Greater Kruger ecosystem. No crowds. No boundaries between you and the wild.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Big 5 Wildlife", desc: "Lion, leopard, elephant, rhino, and buffalo roam freely through the reserve." },
              { title: "380+ Bird Species", desc: "A birder's paradise — from raptors and hornbills to rare woodland kingfishers." },
              { title: "Night Safaris", desc: "Nocturnal drives reveal a hidden world — civets, genets, and nightjars emerge after dark." },
              { title: "Walking Safaris", desc: "Track game on foot with experienced rangers — the most intimate encounter nature offers." },
              { title: "Photography Safaris", desc: "Specialist photographic drives timed to golden hour for world-class wildlife images." },
              { title: "No-Fence Boundary", desc: "Open to Kruger National Park — wildlife moves freely across one of Africa's great ecosystems." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-card border border-border p-6 group hover:border-earth-olive/40 transition-colors duration-300"
              >
                <div className="w-8 h-[2px] bg-earth-olive mb-5" />
                <h4 className="font-sans font-medium text-sm uppercase tracking-widest text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY ATTRACTIONS */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Nearby Attractions</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Positioned at the heart of one of Africa's most spectacular regions — everything within reach.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-0">
            {[
              { name: "Kruger National Park", dist: "±12 km", desc: "One of Africa's greatest game reserves — the Greater Kruger ecosystem extends directly from Klaserie's eastern boundary." },
              { name: "Blyde River Canyon", dist: "±60 km", desc: "Africa's largest green canyon. The Three Rondavels, Bourke's Luck Potholes, and God's Window are all within reach." },
              { name: "Hoedspruit Endangered Species Centre", dist: "±43 km", desc: "A cheetah and endangered species rehabilitation and breeding facility — home to cheetah, wild dog, and pangolin." },
              { name: "Kapama Game Reserve", dist: "±30 km", desc: "Renowned Big 5 game reserve offering luxury bush experiences and specialist photography safaris." },
              { name: "Panorama Route & Abel Erasmus Pass", dist: "±80 km", desc: "One of South Africa's most scenic drives through the Drakensberg escarpment — waterfalls, valleys, and dramatic passes." },
              { name: "Eastgate Airport", dist: "±37 km", desc: "Direct bush flights from Johannesburg and Cape Town. Fly-in access to the Lowveld, no long road transfers." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex gap-6 py-7 border-b border-border"
              >
                <div className="shrink-0 w-20 pt-0.5">
                  <span className="text-sm font-mono tracking-widest text-earth-olive font-medium">{item.dist}</span>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-foreground text-sm mb-2 uppercase tracking-wide">{item.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE DEVELOPERS */}
      <section className="py-24 md:py-32 px-6 bg-earth-deep text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="04b"
            title="The Developers"
            subtitle="Dynamic Construction Consulting (PTY) Ltd"
            dark
          />
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-white/70 leading-relaxed text-lg">
                Dynamic Construction Consulting (PTY) Ltd is the team that made everything possible. From the architectural concept to its structural viability, to the cost engineering and project feasibility — DCC is a profound team of professional consultants that maximised their inputs and efforts to make the vision come alive.
              </p>
              <p className="text-white/70 leading-relaxed">
                With a vast variety of experience underpinning the result, Ubuntu Reflections™ delivers a truly unique product to the global market — accommodating wildlife enthusiasts and photographers who seek a space where the interaction between nature and humans is up close and personal.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-mono tracking-widest uppercase text-white/40 mb-4">In collaboration with</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <a href="https://dcc-consulting.co.za/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                    <img src={`${import.meta.env.BASE_URL}images/logo-dcc.png`} alt="DCC Consulting" className="h-10 w-auto object-contain" />
                  </a>
                  <a href="https://allofarch.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                    <img src={`${import.meta.env.BASE_URL}images/logo-aoa.jpg`} alt="AOA — All of Architecture" className="h-10 w-auto object-contain rounded-sm" />
                  </a>
                  <a href="https://www.huizemark.com/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                    <img src={`${import.meta.env.BASE_URL}images/logo-huizemark.png`} alt="Huizemark" className="h-10 w-auto object-contain" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2A1E15] to-[#1A120C] border border-white/5 p-8 md:p-12 space-y-8"
            >
              <div className="space-y-2">
                <p className="text-xs font-mono tracking-widest uppercase text-earth-sand">A Unique Profitable Business Model</p>
                <h3 className="font-serif text-2xl md:text-3xl text-white">Built for those who seek more</h3>
              </div>
              <p className="text-white/60 leading-relaxed">
                Ubuntu Reflections™ accommodates global wildlife enthusiasts and photographers who seek a space where the interaction between nature and humans is up close and personal — while establishing a sound and unique investment opportunity in the heart of one of Africa's premier conservation zones.
              </p>
              <div className="border-t border-white/10 pt-8 space-y-4">
                {[
                  "Biome-integrated design with zero ecological footprint",
                  "Multiple revenue streams: photography, eco-tourism, education",
                  "Positioned in the Greater Kruger ecosystem",
                  "Scalable — each Eco Bunker site is independently viable",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-earth-sand mt-2 shrink-0" />
                    <p className="text-white/70 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRECEDENTS */}
      <section id="precedents" className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="05"
            title="Precedents"
            subtitle="Learning from those who disappeared first."
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
                className="border border-border p-8 md:p-10 space-y-6"
              >
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-earth-olive mb-2 block">Precedent {idx + 1}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground">{p.name}</h3>
                  <span className="text-sm text-muted-foreground tracking-widest uppercase">{p.location}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="border-t border-border pt-6">
                  <span className="text-xs font-mono tracking-widest uppercase text-earth-olive mb-3 block">Findings</span>
                  <p className="text-muted-foreground leading-relaxed text-sm italic">{p.finding}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 px-6 bg-background">
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
              Photography by Sean Koekemoer
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            number="07"
            title="Get in Touch"
            subtitle="Book a viewing or find out more."
          />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-16">

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Arrange a Private Viewing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a wildlife photographer, investor, or nature enthusiast, we'd love to show you Ubuntu Reflections™. Reach out to schedule a site visit or to find out more about the project.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-b border-border pb-5">
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Email</p>
                  <a
                    href="mailto:info@ubuntu-reflections.co.za"
                    className="text-foreground font-light text-lg hover:text-earth-olive transition-colors break-all"
                  >
                    info@ubuntu-reflections.co.za
                  </a>
                </div>
                <div className="border-b border-border pb-5">
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Phone</p>
                  <a
                    href="tel:+27727268775"
                    className="text-foreground font-light text-lg hover:text-earth-olive transition-colors"
                  >
                    +27 72 726 8775
                  </a>
                </div>
                <div className="border-b border-border pb-5">
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Website</p>
                  <a
                    href="https://www.ubuntu-reflections.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-light text-lg hover:text-earth-olive transition-colors flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    www.ubuntu-reflections.co.za
                  </a>
                </div>
                <div className="border-b border-border pb-5">
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Instagram</p>
                  <a
                    href="https://www.instagram.com/ubuntubunkers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-light text-lg hover:text-earth-olive transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    @ubuntubunkers
                  </a>
                </div>
                <div className="border-b border-border pb-5">
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Location</p>
                  <p className="text-foreground font-light">Klaserie Private Nature Reserve</p>
                  <p className="text-muted-foreground text-sm">Greater Kruger, Limpopo, South Africa</p>
                </div>
              </div>

              <div className="bg-earth-deep/5 border border-border p-6">
                <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3">Response Time</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We respond to all enquiries within 48 hours. For urgent bookings, call directly — we're on the ground in Klaserie.
                </p>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-earth-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

        {/* Top footer content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-10 flex flex-col items-center text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Ubuntu Reflections<span className="text-lg align-super">™</span></h2>
          <p className="text-white/60 font-light max-w-md mb-6">Architecture absorbed by nature. Designed for stillness, observation, and ecological respect.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/ubuntubunkers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs tracking-widest uppercase"
            >
              <Instagram className="w-4 h-4" />
              @ubuntubunkers
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://www.ubuntu-reflections.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs tracking-widest uppercase"
            >
              <Globe className="w-4 h-4" />
              ubuntu-reflections.co.za
            </a>
          </div>
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
                alt="DCC — Dynamic Construction Consulting"
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
            <span>© 2026 Ubuntu Reflections™ — Eco Bunker Wildlife Hide</span>
            <span className="mt-4 md:mt-0">24.26° S, 31.22° E · Klaserie, South Africa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
