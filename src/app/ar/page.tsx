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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "كون — تواصل اجتماعي برؤية جديدة",
  description: "شارك لحظاتك وانضم للمحادثات وابقى قريبًا من مجتمعاتك مع تطبيق كون الاجتماعي.",
  openGraph: {
    title: "كون — تواصل اجتماعي برؤية جديدة",
    description: "قم بتحميل كون لنظامي iOS و Android. مساحة عصرية للتواصل بدون ضوضاء.",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Kawn Logo",
      },
    ],
  },
};

export default function HomeArabic() {
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
