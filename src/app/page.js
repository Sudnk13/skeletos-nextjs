import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "../components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
