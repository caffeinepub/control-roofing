import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ChevronRight,
  Clock,
  Home,
  Phone,
  RotateCcw,
  Shield,
  Star,
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

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static star array, order never changes
        <Star key={i} className="w-5 h-5 fill-orange text-orange" />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] lg:min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-roofing.dim_1200x600.jpg')",
          }}
        />
        {/* Layered overlay — stronger on mobile for legibility */}
        <div className="absolute inset-0 bg-charcoal-dark/90 sm:bg-gradient-to-r sm:from-charcoal-dark/95 sm:via-charcoal-dark/80 sm:to-charcoal-dark/40" />
        {/* Orange accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 w-full">
          <div className="max-w-2xl">
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-orange px-3 py-1.5 mb-5"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white text-xs font-accent font-bold uppercase tracking-widest">
                Open 24/7 — Emergency Service
              </span>
            </motion.div>

            {/* H1 — tighter responsive scale, improved leading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display font-black text-white text-[2.1rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] sm:leading-[1.05] mb-5"
            >
              Visalia's Trusted{" "}
              <span className="text-orange">5-Star Roofing</span>
              {" & "}24-Hour Emergency Experts.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-white/80 text-base sm:text-xl font-body leading-relaxed mb-8"
            >
              3+ years of local excellence and 24/7 service. Your roof is your
              first line of defense — we protect it.
            </motion.p>

            {/* CTAs — stacked on mobile, side-by-side on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* PRIMARY — dominant size on all screen sizes */}
              <a
                href={`tel:${PHONE}`}
                data-ocid="hero.call.button"
                className="inline-flex items-center justify-center gap-3 bg-orange hover:bg-orange-dark text-white font-display font-black px-7 py-5 text-lg sm:text-base leading-none transition-all duration-200 shadow-orange-glow hover:shadow-none group w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:animate-pulse" />
                <span>
                  <span className="block text-[10px] font-accent font-bold uppercase tracking-widest text-white/70 leading-none mb-0.5">
                    Tap to Call
                  </span>
                  {PHONE_DISPLAY}
                </span>
              </a>
              {/* SECONDARY — clearly subordinate */}
              <Link
                to="/contact"
                data-ocid="hero.quote.button"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 text-white font-display font-bold px-6 py-5 sm:py-4 text-base leading-none transition-all duration-200 backdrop-blur-sm w-full sm:w-auto"
              >
                Free Quote
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Mobile-only social proof row under CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-6 flex items-center gap-3 sm:hidden"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static stars
                  <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                ))}
              </div>
              <span className="text-white/70 text-xs font-body">
                5.0 Rating · Licensed & Insured · Visalia, CA
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CALL BAR ── (hidden on sm+) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-orange shadow-lg shadow-black/40">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-3 py-4 w-full"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="text-white font-display font-black text-base">
            Call Now: {PHONE_DISPLAY}
          </span>
        </a>
      </div>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section className="bg-charcoal py-5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {[
              {
                icon: <Star className="w-5 h-5 fill-orange text-orange" />,
                label: "5.0 Rating",
                sub: "Perfect Score",
              },
              {
                icon: <Shield className="w-5 h-5 text-orange" />,
                label: "3+ Years",
                sub: "Serving Visalia",
              },
              {
                icon: <Clock className="w-5 h-5 text-orange" />,
                label: "24/7 Service",
                sub: "Emergency Ready",
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-orange" />,
                label: "100%",
                sub: "Satisfaction",
              },
            ].map((item, i) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: static list, order never changes
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 px-4 lg:px-8 py-2"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-accent font-bold text-white text-base">
                    {item.label}
                  </p>
                  <p className="text-white/50 text-xs font-body">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-l-4 border-orange p-8 lg:p-10 shadow-card-lift text-left relative"
          >
            {/* Quote mark */}
            <div
              className="absolute -top-5 left-8 text-8xl font-display text-orange leading-none select-none opacity-80"
              aria-hidden="true"
            >
              "
            </div>
            <div className="pt-5">
              <StarRating />
              <blockquote className="mt-4 font-body text-lg lg:text-xl text-foreground leading-relaxed italic">
                Highly recommended if you need a new roof or repairs to your old
                roof. Control Roofing was fast, professional, and cleaned up
                everything when they were done.
              </blockquote>
              <p className="mt-6 font-accent font-bold text-orange text-sm uppercase tracking-wider">
                — Visalia Homeowner
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-orange font-accent font-bold uppercase tracking-widest text-sm mb-3">
              What We Do
            </p>
            <h2 className="font-display font-black text-foreground text-3xl sm:text-4xl lg:text-5xl">
              Roofing Services You Can Trust
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Wrench className="w-8 h-8 text-orange" />,
                title: "Emergency Leak Repairs",
                desc: "24/7 rapid response to stop leaks fast. Licensed, insured, and ready when you need us most.",
                tag: "24/7 AVAILABLE",
              },
              {
                icon: <Home className="w-8 h-8 text-orange" />,
                title: "New Roof Installations",
                desc: "Complete roof replacement with quality materials and expert installation backed by our guarantee.",
                tag: "FULL SERVICE",
              },
              {
                icon: <RotateCcw className="w-8 h-8 text-orange" />,
                title: "Restoration Services",
                desc: "Extend the life of your aging roof with professional restoration — a cost-effective alternative to full replacement.",
                tag: "COST-EFFECTIVE",
              },
            ].map((service, i) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: static list, order never changes
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="service-card bg-white border border-border p-6 lg:p-8 shadow-card-lift hover:shadow-xl transition-all duration-250 flex flex-col overflow-hidden"
              >
                <div className="flex items-start justify-between mb-5">
                  {/* Orange-tinted icon container instead of flat gray */}
                  <div className="w-14 h-14 bg-orange/10 flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-accent font-bold text-orange bg-orange/10 px-2 py-1.5 tracking-widest leading-none">
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground text-xl mb-3">
                  {service.title}
                </h3>
                {/* Upgraded body text size for legibility */}
                <p className="font-body text-muted-foreground text-base leading-relaxed flex-1">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-orange font-accent font-bold text-sm hover:gap-3 transition-all duration-200"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="bg-charcoal-dark py-16 lg:py-20 relative overflow-hidden">
        {/* Diagonal stripe background */}
        <div className="absolute inset-0 diagonal-stripe opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Ready to Protect Your Home?
            </h2>
            <p className="text-white/70 font-body text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Don't wait for a small leak to become a big problem. Call us now —
              we're available 24/7 for all emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-display font-black px-8 py-4 text-lg transition-all duration-200 shadow-orange-glow hover:shadow-none"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-orange hover:text-orange text-white font-display font-bold px-8 py-4 text-base transition-all duration-200"
              >
                Request a Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spacer so sticky bar doesn't clip content on mobile */}
      <div className="h-16 sm:hidden" />
    </div>
  );
}
