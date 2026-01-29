import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        Присоединяйся к нашему сообществу —{" "}
        <span className="font-medium text-white">стань частью легенды!</span>
      </footer>
    </main>
  )
}