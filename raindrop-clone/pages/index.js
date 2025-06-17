import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BackupSection from "@/components/BackupSection";
import PersonalTeamSection from "@/components/PersonalTeamSection";
import ExtraFeaturesSection from "@/components/ExtraFeaturesSection";
import OfferSection from "@/components/OfferSection";
import FurtherOfferSection from "@/components/FurtherOfferSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raindrop.io – All-in-one bookmark manager</title>
      </Head>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BackupSection />
      <PersonalTeamSection />
      <ExtraFeaturesSection />
      <OfferSection />
      <FurtherOfferSection />
      <Footer />
    </>
  );
}
