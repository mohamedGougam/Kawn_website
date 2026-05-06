import { AppPreviewSection } from "@/components/AppPreviewSection";
import { Communities } from "@/components/Communities";
import { DownloadSection } from "@/components/DownloadSection";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HumanFutureSection } from "@/components/HumanFutureSection";
import { Navbar } from "@/components/Navbar";
import { PeopleSection } from "@/components/PeopleSection";
import { WhatMakesKawnDifferent } from "@/components/WhatMakesKawnDifferent";
import { WhyKawn } from "@/components/WhyKawn";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden bg-white">
        <Hero />
        <WhatMakesKawnDifferent />
        <Communities />
        <Events />
        <PeopleSection />
        <AppPreviewSection />
        <WhyKawn />
        <HumanFutureSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
