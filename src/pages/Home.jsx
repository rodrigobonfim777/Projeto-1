import { AppShell } from "@mantine/core";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <AppShell header={{ height: 80 }}>
      <Header />

      <AppShell.Main>
        <div id="home">
          <Hero />
        </div>

        <div id="stats">
          <Stats />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="pricing">
          <Pricing />
        </div>

        <div id="faq">
          <FAQ />
        </div>

        <div id="contact">
          <Footer />
        </div>
      </AppShell.Main>
    </AppShell>
  );
}