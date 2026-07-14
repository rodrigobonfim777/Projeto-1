import { AppShell } from "@mantine/core";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AppShell header={{ height: 80 }}>
      <Header />

      <AppShell.Main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <FAQ />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}