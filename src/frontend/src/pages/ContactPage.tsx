import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IssueType } from "../backend.d";
import { useActor } from "../hooks/useActor";

const PHONE = "+15597361577";
const PHONE_DISPLAY = "+1 559-736-1577";

interface FormState {
  name: string;
  phone: string;
  address: string;
  issueType: IssueType | "";
}

const issueLabels: Record<IssueType, string> = {
  [IssueType.emergency]: "Emergency",
  [IssueType.inspection]: "Inspection",
  [IssueType.quote]: "Quote",
};

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    address: "",
    issueType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.issueType) {
      setError("Please select a roof issue type.");
      return;
    }

    if (!actor) {
      setError("Connection not ready. Please try again in a moment.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await actor.submitContactForm(
        form.name,
        form.phone,
        form.address,
        form.issueType as IssueType,
      );
      setIsSuccess(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try calling us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Free Estimates — No Obligation
            </span>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl mb-4">
              Contact Us
            </h1>
            <p className="text-white/70 font-body text-lg lg:text-xl max-w-2xl mx-auto">
              Ready to talk about your roof? Fill out the form or call us
              directly — we respond fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── FORM (3 cols) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-border p-6 sm:p-8 shadow-card-lift">
                <h2 className="font-display font-bold text-foreground text-2xl mb-1">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  We'll get back to you within 1 hour during business hours — or
                  call now for immediate assistance.
                </p>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      data-ocid="contact.success_state"
                      className="flex flex-col items-center text-center py-12"
                    >
                      <div className="w-16 h-16 bg-orange/10 flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-orange" />
                      </div>
                      <h3 className="font-display font-bold text-foreground text-xl mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground font-body text-sm max-w-sm leading-relaxed">
                        Thanks, {form.name}! We've received your request and
                        will be in touch shortly. For urgent issues, please call
                        us directly.
                      </p>
                      <a
                        href={`tel:${PHONE}`}
                        className="mt-6 inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-display font-bold px-6 py-3 text-sm transition-all duration-200 shadow-orange-glow hover:shadow-none"
                      >
                        <Phone className="w-4 h-4" />
                        {PHONE_DISPLAY}
                      </a>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Name */}
                      <div>
                        <Label
                          htmlFor="contact-name"
                          className="font-accent font-semibold text-foreground text-sm mb-1.5 block"
                        >
                          Full Name <span className="text-orange">*</span>
                        </Label>
                        <Input
                          id="contact-name"
                          type="text"
                          data-ocid="contact.name.input"
                          required
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="font-body text-base h-12"
                          autoComplete="name"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <Label
                          htmlFor="contact-phone"
                          className="font-accent font-semibold text-foreground text-sm mb-1.5 block"
                        >
                          Phone Number <span className="text-orange">*</span>
                        </Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          data-ocid="contact.phone.input"
                          required
                          placeholder="(559) 555-0100"
                          value={form.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          className="font-body text-base h-12"
                          autoComplete="tel"
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <Label
                          htmlFor="contact-address"
                          className="font-accent font-semibold text-foreground text-sm mb-1.5 block"
                        >
                          Property Address{" "}
                          <span className="text-orange">*</span>
                        </Label>
                        <Input
                          id="contact-address"
                          type="text"
                          data-ocid="contact.address.input"
                          required
                          placeholder="123 Main St, Visalia, CA 93291"
                          value={form.address}
                          onChange={(e) =>
                            handleChange("address", e.target.value)
                          }
                          className="font-body text-base h-12"
                          autoComplete="street-address"
                        />
                      </div>

                      {/* Issue Type */}
                      <div>
                        <Label
                          htmlFor="contact-issue"
                          className="font-accent font-semibold text-foreground text-sm mb-1.5 block"
                        >
                          Roof Issue <span className="text-orange">*</span>
                        </Label>
                        <Select
                          value={form.issueType}
                          onValueChange={(val) =>
                            handleChange("issueType", val)
                          }
                        >
                          <SelectTrigger
                            id="contact-issue"
                            data-ocid="contact.issue.select"
                            className="font-body text-base h-12"
                          >
                            <SelectValue placeholder="Select an issue type…" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.values(IssueType).map((type) => (
                              <SelectItem
                                key={type}
                                value={type}
                                className="font-body text-sm"
                              >
                                {issueLabels[type]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Error */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            data-ocid="contact.error_state"
                            className="flex items-center gap-2 bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 text-sm font-body"
                          >
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            {error}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit */}
                      <Button
                        type="submit"
                        data-ocid="contact.submit_button"
                        disabled={isSubmitting}
                        className="w-full bg-orange hover:bg-orange-dark text-white font-display font-black h-14 text-lg shadow-orange-glow hover:shadow-none transition-all duration-200"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            <span data-ocid="contact.loading_state">
                              Sending…
                            </span>
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>

                      <p className="text-muted-foreground text-xs font-body text-center">
                        For immediate help, call{" "}
                        <a
                          href={`tel:${PHONE}`}
                          className="text-orange font-semibold hover:underline"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ── INFO PANEL (2 cols) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Phone */}
              <div className="bg-charcoal-dark p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange" />
                <div className="relative z-10">
                  <p className="text-orange font-accent font-bold uppercase tracking-widest text-xs mb-2">
                    Call Us Now
                  </p>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-3 group"
                  >
                    <Phone className="w-6 h-6 text-orange flex-shrink-0" />
                    <span className="font-display font-black text-white text-2xl group-hover:text-orange transition-colors">
                      {PHONE_DISPLAY}
                    </span>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-orange" />
                  <h3 className="font-display font-bold text-foreground text-base">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-muted-foreground">
                      Monday – Sunday
                    </span>
                    <span className="font-accent font-bold text-orange text-sm">
                      Open 24/7
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-muted-foreground">
                      Emergency Service
                    </span>
                    <span className="font-accent font-bold text-orange text-sm">
                      Always Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-orange" />
                  <h3 className="font-display font-bold text-foreground text-base">
                    Service Area
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  Visalia, CA and surrounding Central Valley communities.
                </p>
              </div>

              {/* Google Maps */}
              <div className="overflow-hidden border border-border shadow-card-lift">
                <div
                  className="h-2 bg-orange w-full"
                  data-ocid="contact.map_marker"
                />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101668.21!2d-119.292!3d36.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80952c6c0b95a4b5%3A0xf3a7dc5f1a6e8b1!2sVisalia%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Visalia, CA Map"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
