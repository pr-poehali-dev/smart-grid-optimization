import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">НОВОЕ</span>
        <span className="text-gray-300">Присоединяйтесь к нашему Discord-сообществу</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        ArmiyaKorneplodov
      </h1>

      <p className="mb-2 max-w-xl text-2xl font-semibold text-violet-400">
        Вступай к нам в Армию!!!
      </p>
      <p className="mb-8 max-w-xl text-gray-400">Присоединяйся к нашему сообществу и стань частью легенды!</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button 
          className="rounded-full bg-violet-600 px-8 py-6 text-lg hover:bg-violet-700 text-white"
          onClick={() => window.open('https://discord.gg/r8zgpRtG', '_blank')}
        >
          Зайти <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}