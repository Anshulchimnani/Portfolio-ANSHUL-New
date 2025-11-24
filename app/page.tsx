import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import FeaturedProjects from "@/components/FeaturedProjects";
import Expertise from "@/components/Expertise";
import ISO27001Section from "@/components/ISO27001";
import WorkExperience from "@/components/WorkExperience";
import Consulting from "@/components/Consulting";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImpactMetrics />
        <FeaturedProjects />
        <Expertise />
        <ISO27001Section />
        <WorkExperience />
        <Consulting />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
