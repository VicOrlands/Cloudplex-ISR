import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeroSection from "@/app/landing/hero/Hero";

const Badges = dynamic(() => import("@/app/landing/Badges"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
const Clients = dynamic(() => import("@/app/landing/Client"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
const Service = dynamic(() => import("@/app/landing/Service"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
const Events = dynamic(() => import("@/app/landing/event/Event"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
const BlogGrid = dynamic(() => import("@/components/blogGrid/Grid"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
const Partners = dynamic(() => import("@/components/partners/Partners"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
const Testimonials = dynamic(() => import("@/app/landing/testimonial/Testimonial"), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

export const metadata: Metadata = {
  title:
    "Scalable Cloud Services by CloudPlexo | Expert Cloud Service Providers",
  description:
    "Choose CloudPlexo for cloud services and solutions. As leading cloud service providers, we offer scalable, reliable, and cutting-edge cloud technologies.",
  keywords: [
    "cloud services",
    "cloud service providers",
    "cloud solutions",
    "scalable cloud services",
    "cloud based backup services",
  ],
  metadataBase: new URL("https://www.cloudplexo.com"),
  alternates: {
    canonical: "https://www.cloudplexo.com",
  },
};

export default function Home() {
  return (
    <div className="landing-page">
      <HeroSection />
      <Partners />
      <Service />
      <Badges />
      <Testimonials />
      <Events />
      <Clients />
      <BlogGrid />
    </div>
  );
}
