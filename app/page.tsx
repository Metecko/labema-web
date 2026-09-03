import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MembersPreviewSection } from "@/components/sections/MembersPreviewSection";
import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";
import { ResearchSection } from "@/components/sections/ResearchSection";

export const metadata: Metadata = {
  title: "LABEMA — Laboratorio de Biología y Ecología Marina Aplicada",
  description:
    "LABEMA es el Laboratorio de Biología y Ecología Marina Aplicada de la Escuela de Ciencias del Mar, Pontificia Universidad Católica de Valparaíso.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <ProjectsPreviewSection />
      <MembersPreviewSection />
      <ContactSection />
    </>
  );
}
