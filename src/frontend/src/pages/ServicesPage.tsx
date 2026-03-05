import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Clock,
  Home,
  Phone,
  RotateCcw,
  Shield,
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

const services = [
  {
    id: "emergency",
    icon: <AlertTriangle className="w-10 h-10 text-orange" />,
    badge: "24/7 RAPID RESPONSE",
    title: "Emergency Leak Repairs",
    headline: "Stop the Damage Before It Spreads",
    description:
      "A roof leak doesn't wait for business hours — and neither do we. Control Roofing is on call around the clock, every day of the year. Our emergency response team arrives fast to assess and seal leaks before water damage reaches your interior.",
    points: [
      "Available 24 hours, 7 days a week",
      "Rapid on-site assessment and temporary sealing",
      "Permanent repair solutions for all roof types",
      "Fully licensed and insured technicians",
      "Serving all of Visalia and the Central Valley",
    ],
  },
  {
    id: "installation",
    icon: <Home className="w-10 h-10 text-orange" />,
    badge: "FULL REPLACEMENT",
    title: "New Roof Installations",
    headline: "Protect Your Home with a Roof Built to Last",
    description:
      "Whether you're building new or replacing an aging roof, our installation team delivers precision craftsmanship with premium materials. We walk you through every option — shingles, tiles, metal — and handle the entire project from removal to final inspection.",
    points: [
      "Complete teardown and disposal of old roofing",
      "Premium materials: asphalt shingles, tile, metal",
      "Detailed project timeline and daily updates",
      "Post-installation walkthrough and documentation",
      "Workmanship warranty on every installation",
    ],
  },
  {
    id: "restoration",
    icon: <RotateCcw className="w-10 h-10 text-orange" />,
    badge: "COST-EFFECTIVE",
    title: "Restoration Services",
    headline: "Extend Your Roof's Life — Without Full Replacement",
    description:
      "Not every aging roof needs a full replacement. Our restoration services assess your current roof's condition and apply targeted repairs, recoating, and weatherproofing to add years of life and performance. A smart investment for homeowners looking to maximize value.",
    points: [
      "Comprehensive roof condition assessment",
      "Targeted patching and structural repair",
      "Weatherproof coating application",
      "Gutter and flashing repair/replacement",
      "Detailed before-and-after documentation",
    ],
  },
];

export default function ServicesPage() {
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
              Central Valley's Trusted Roofers
            </span>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl mb-4">
              Our Roofing Services
            </h1>
            <p className="text-white/70 font-body text-lg lg:text-xl max-w-2xl mx-auto">
              Open 24 Hours — We're here when your roof needs us most, day or
              night, emergency or planned project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 24/7 BADGE BAR ── */}
      <section className="bg-orange py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {[
              {
                icon: <Clock className="w-5 h-5" />,
                text: "Open 24 Hours, 7 Days a Week",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                text: "Licensed & Fully Insured",
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                text: "All Roof Types Serviced",
              },
              {
                icon: <CheckCircle className="w-5 h-5" />,
                text: "5.0 Star Rated in Visalia",
              },
            ].map((item, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static list, order never changes
              <div key={i} className="flex items-center gap-2 text-white">
                {item.icon}
                <span className="font-accent font-bold text-sm uppercase tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-orange/10 flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-accent font-bold text-orange bg-orange/10 px-3 py-1.5 tracking-widest">
                    {service.badge}
                  </span>
                </div>
                <h2 className="font-display font-black text-foreground text-3xl lg:text-4xl mb-2">
                  {service.title}
                </h2>
                <p className="text-orange font-accent font-bold text-sm uppercase tracking-wide mb-4">
                  {service.headline}
                </p>
                <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                      <span className="font-body text-base text-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-display font-bold px-6 py-3.5 text-sm transition-all duration-200 shadow-orange-glow hover:shadow-none"
                >
                  <Phone className="w-4 h-4" />
                  Call for{" "}
                  {service.id === "emergency"
                    ? "Emergency Help"
                    : "a Free Quote"}
                </a>
              </div>

              {/* Visual Panel */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-charcoal-dark p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 diagonal-stripe opacity-20" />
                  <div className="relative z-10">
                    <div
                      className="text-orange font-display font-black text-8xl lg:text-9xl leading-none mb-4 select-none"
                      aria-hidden
                    >
                      0{i + 1}
                    </div>
                    <div className="h-1 w-16 bg-orange mb-6" />
                    <h3 className="text-white font-display font-bold text-xl lg:text-2xl mb-4">
                      {service.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.points.slice(0, 4).map((point) => (
                        <div
                          key={point}
                          className="bg-white/5 border border-white/10 p-3 text-white/70 text-xs font-body leading-snug"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-muted py-16 lg:py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-black text-foreground text-3xl sm:text-4xl mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Call us and we'll assess your roof's condition and recommend the
              best solution for your budget.
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
                className="inline-flex items-center justify-center gap-2 bg-charcoal-dark hover:bg-charcoal text-white font-display font-bold px-8 py-4 transition-colors duration-200"
              >
                Request a Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
