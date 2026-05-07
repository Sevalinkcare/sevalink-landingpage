import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "About SevaLink — Emergency Healthcare Platform",
  description:
    "SevaLink is a real-time emergency response platform connecting patients, ambulances, hospitals, and homecare providers in Rajkot, Gujarat, India.",
};

const services = [
  {
    label: "Emergency Ambulance",
    description:
      "Dispatch BLS, ALS, ICU on Wheels, Neonatal, and Patient Transport ambulances in minutes — tracked in real time.",
    href: "/services",
  },
  {
    label: "Homecare Services",
    description:
      "Book verified nurses, physiotherapists, and attendants for post-surgery recovery, elderly care, and chronic illness management.",
    href: "/services",
  },
  {
    label: "Hospital Appointments",
    description:
      "Schedule consultations at partner hospitals and clinics without waiting in queues.",
    href: "/services",
  },
];

const values = [
  { label: "Speed", description: "Every second matters in an emergency. Our platform is built for fast dispatch and real-time coordination." },
  { label: "Transparency", description: "Patients and families see live status updates. No confusion, no missed calls." },
  { label: "Reliability", description: "24/7 support, verified service providers, and a network designed to never go offline." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 space-y-8">

        {/* Mission */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Who We Are</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">About SevaLink</h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
            SevaLink is a real-time emergency response platform designed to connect patients,
            ambulances, hospitals, and homecare providers in one fast and reliable network —
            starting in Rajkot, Gujarat.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            We exist because emergency medical coordination in India is still fragmented —
            families waste precious minutes searching for ambulances, hospitals have no visibility
            into incoming patients, and caregivers work in isolation. SevaLink fixes this by
            putting every part of the care chain on a single connected platform.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            A product of{" "}
            <strong className="text-gray-700">SevaLink Technology Pvt Ltd</strong> — Rajkot, Gujarat, India.
          </p>
        </section>

        {/* What We Offer */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">What We Offer</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-3 text-base text-gray-600">
            Three core services, one platform.{" "}
            <Link href="/services" className="text-red-600 hover:text-red-700 underline-offset-2 hover:underline transition-colors">
              View full service details →
            </Link>
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="group block rounded-xl border border-[#DC262615] bg-red-50/50 p-5 transition hover:border-red-300 hover:bg-red-50 hover:shadow-sm"
              >
                <p className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                  {s.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">What Drives Us</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">Our Values</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.label} className="rounded-xl border border-[#DC262615] bg-white/80 p-5">
                <p className="font-semibold text-red-600">{v.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Get Involved</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">Ready to connect?</h2>
          <p className="mt-3 text-base text-gray-600">
            Whether you are a patient, a hospital, a fleet company, or a homecare provider —
            there is a place for you in the SevaLink network.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Explore Services
            </Link>
            <Link
              href="/provider"
              className="inline-flex items-center rounded-lg border border-red-600 px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              Become a Partner
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-white"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
