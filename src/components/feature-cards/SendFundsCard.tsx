import { ShoppingCart, Building2, ChevronDown, Info } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { ArrowUpRight } from "lucide-react"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <ShoppingCart className="h-5 w-5 text-green-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Можно купить роли</h3>
      <p className="mb-4 text-sm text-gray-400">Получите уникальные роли и привилегии в нашем сообществе</p>
    </div>
  )
}