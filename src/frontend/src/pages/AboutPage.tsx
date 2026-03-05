import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  Phone,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import { type Variants, motion } from "motion/react";

const PHONE = "+15597361577";
const PHONE_DISPLAY = "+1 559-736-1577";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const values = [
  {
    icon: <Wrench className="w-7 h-7 text-orange" />,
    title: "Quality Craftsmanship",
    desc: "We never cut corners. Every nail, every shingle, every seal is installed with precision and care.",
  },
  {
    icon: <Heart className="w-7 h-7 text-orange" />,
    title: "Honest Pricing",
    desc: "Transparent estimates with no hidden fees. We explain every cost before work begins.",
  },
  {
    icon: <Clock className="w-7 h-7 text-orange" />,
    title: "24/7 Availability",
    desc: "Roof emergencies don't follow a schedule. We're available any hour to respond to your call.",
  },
  {
    icon: <MapPin className="w-7 h-7 text-orange" />,
    title: "Local Expertise",
    desc: "We know Visalia's climate, codes, and neighborhoods. We're your neighbors, not a franchise.",
  },
];

const milestones = [
  { year: "2021", event: "Control Roofing founded in Visalia, CA" },
  { year: "2022", event: "Expanded to full Central Valley service area" },
  { year: "2023", event: "Achieved 5.0-star rating across all reviews" },
  { year: "2024", event: "Launched 24/7 emergency response program" },
  { year: "2025+", event: "Continuing to serve & grow with our community" },
];

export default function AboutPage() {
  return (
    <div className="pb-16 sm:pb-0">
      {/* ── PAGE HERO ── */}
      <section className="bg-charcoal-dark pt-16 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 diagonal-stripe opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block bg-orange text-white font-accent font-bold text-xs uppercase tracking-widest px-3 py-1.5 mb-6">
              Locally Owned &amp; Operated
            </span>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl mb-4">
              About Control Roofing
            </h1>
            <p className="text-white/70 font-body text-lg lg:text-xl max-w-2xl mx-auto">
              3+ years protecting Visalia homes with expert craftsmanship,
              honest service, and a commitment to our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-orange font-accent font-bold uppercase tracking-widest text-sm mb-3">
                Our Story
              </p>
              <h2 className="font-display font-black text-foreground text-3xl lg:text-4xl mb-6">
                Built on Visalia's Trust
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Control Roofing was founded with a simple idea: Visalia
                  homeowners deserve a roofing company that treats them like
                  neighbors, not transactions. Since our founding, we've built
                  our reputation nail by nail — delivering quality work,
                  standing behind our repairs, and showing up when it matters
                  most.
                </p>
                <p>
                  Over 3+ years, we've earned a perfect 5.0-star rating by doing
                  things the right way: honest assessments, transparent pricing,
                  skilled installation, and genuine follow-through. No
                  shortcuts, no upselling, no excuses.
                </p>
                <p>
                  Based right here in Visalia, we understand the Central
                  Valley's climate — the scorching summers, the occasional
                  winter rains — and we spec our work accordingly. When we put a
                  roof on, we build it to last in this specific environment.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: static star array, order never changes
                    <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                  ))}
                </div>
                <span className="font-accent font-bold text-foreground text-sm">
                  5.0 Rating — Visalia's Top-Rated Roofer
                </span>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  number: "3+",
                  label: "Years in Visalia",
                  sub: "Local expertise",
                },
                { number: "5.0", label: "Star Rating", sub: "Perfect score" },
                {
                  number: "24/7",
                  label: "Availability",
                  sub: "Always on call",
                },
                { number: "100%", label: "Satisfaction", sub: "Our guarantee" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-charcoal-dark p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-orange" />
                  <p className="font-display font-black text-orange text-4xl lg:text-5xl leading-none mb-2">
                    {stat.number}
                  </p>
                  <p className="font-accent font-bold text-white text-sm">
                    {stat.label}
                  </p>
                  <p className="text-white/50 font-body text-xs mt-1">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-16 lg:py-20 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-orange font-accent font-bold uppercase tracking-widest text-sm mb-2">
              Our Journey
            </p>
            <h2 className="font-display font-black text-foreground text-3xl sm:text-4xl">
              Growing With Visalia
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-orange/30 -translate-x-px sm:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`relative flex items-start gap-4 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-orange -translate-x-1/2 mt-2 flex-shrink-0" />

                  {/* Content */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                    }`}
                  >
                    <span className="font-accent font-black text-orange text-2xl">
                      {milestone.year}
                    </span>
                    <p className="font-body text-foreground text-sm mt-1">
                      {milestone.event}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-orange font-accent font-bold uppercase tracking-widest text-sm mb-2">
              What Drives Us
            </p>
            <h2 className="font-display font-black text-foreground text-3xl sm:text-4xl">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="service-card bg-white border border-border p-6 hover:shadow-xl transition-all duration-250 overflow-hidden"
              >
                <div className="w-12 h-12 bg-orange/10 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground text-base leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENT SECTION ── */}
      <section className="bg-charcoal-dark py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 diagonal-stripe opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-12 h-12 text-orange mx-auto mb-6" />
            <h2 className="font-display font-black text-white text-3xl sm:text-4xl mb-5">
              Our Commitment to Visalia Homeowners
            </h2>
            <p className="text-white/70 font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every home we work on belongs to a Visalia family. That's not just
              a job — it's a responsibility. We promise to show up on time, do
              the work right, and leave your property cleaner than we found it.
              That's the Control Roofing standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-display font-bold px-8 py-4 transition-all duration-200 shadow-orange-glow hover:shadow-none"
              >
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-display font-bold px-8 py-4 transition-all duration-200"
              >
                Get a Free Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
