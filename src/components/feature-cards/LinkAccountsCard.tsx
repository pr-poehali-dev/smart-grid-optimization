import { Crown, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const recipients = [
  { name: "Алексей Петров", info: "alexey@finpotok.ru", code: "P-52112", image: "/professional-man-portrait.png" },
  { name: "Мария Иванова", info: "+7 (495) 123-45-67", code: "P-52132", image: "/professional-woman-portrait.png" },
  { name: "Елена Смирнова", info: "elena@finpotok.ru", code: "P-52184", initials: "ЕС", color: "bg-teal-600" },
  { name: "Дмитрий Козлов", info: "+7 (812) 987-65-43", code: "P-52114", initials: "ДК", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Crown className="h-5 w-5 text-yellow-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Лучшая администрация</h3>
      <p className="mb-4 text-sm text-gray-400">Вы можете стать администрацией, просто напишите нам в лс и мы проведем небольшой тест</p>
    </div>
  )
}