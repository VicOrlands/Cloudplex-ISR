import dynamic from "next/dynamic";
import type { Metadata } from "next";
import HeroSection from "@/app/landing/hero/Hero";

const Badges = dynamic(() => import("@/app/landing/Badges"));
const Clients = dynamic(() => import("@/app/landing/Client"));
const Service = dynamic(() => import("@/app/landing/Service"));
const Events = dynamic(() => import("@/app/landing/event/Event"));
const BlogGrid = dynamic(() => import("@/components/blogGrid/Grid"));
const Partners = dynamic(() => import("@/components/partners/Partners"));
const Testimonials = dynamic(() => import("@/app/landing/testimonial/Testimonial"));

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
