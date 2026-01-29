import { Users, ArrowUpRight, Building2, ChevronDown, Info } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Users className="h-5 w-5 text-blue-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Можно завести друзей</h3>
      <p className="mb-4 text-sm text-gray-400">У нас дружный колектив, все как всегда. Взрослых уважаем!!!</p>
    </div>
  )
}