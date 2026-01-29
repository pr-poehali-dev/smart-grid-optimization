import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2 relative z-10">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">НОВОЕ</span>
        <span className="text-gray-300">Присоединяйтесь к нашему Discord-сообществу</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance relative z-10">
        ArmiyaKorneplodov
      </h1>

      <p className="mb-2 max-w-xl text-2xl font-semibold text-violet-400 relative z-10">
        Вступай к нам в Армию!!!
      </p>
      <p className="mb-8 max-w-xl text-gray-400 relative z-10">Присоединяйся к нашему сообществу и стань частью легенды!</p>

      <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
        <Button 
          className="rounded-full bg-violet-600 px-8 py-6 text-lg hover:bg-violet-700 text-white shadow-lg shadow-violet-500/50 hover:shadow-violet-500/70 transition-all"
          onClick={() => window.open('https://discord.gg/r8zgpRtG', '_blank')}
        >
          Зайти <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}