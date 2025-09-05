"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, MessageCircle, Search, TrendingUp, User, Camera } from "lucide-react"
import { useLocalizationContext, LanguageSwitcher } from "@/contexts/LocalizationContext"

export default function Navigation() {
  const pathname = usePathname()
  const { locale, strings } = useLocalizationContext()

  const navItems = [
    { href: "/posts", label: strings.navigation.posts },
    { href: "/creators", label: strings.navigation.creators },
    { href: "/", label: strings.navigation.home },
    { href: "/feed", label: strings.navigation.feed },
    { href: "/ranking", label: strings.navigation.ranking },
    { href: "/messages", label: strings.navigation.messages },
    { href: "/account", label: strings.navigation.account },
  ]

  const mobileNavItems = [
    { href: "/", icon: Home, label: strings.navigation.home },
    { href: "/feed", icon: Search, label: strings.navigation.feed },
    { href: "/ranking", icon: TrendingUp, label: strings.navigation.ranking },
    { href: "/messages", icon: MessageCircle, label: strings.navigation.messages },
    { href: "/account", icon: User, label: strings.navigation.account },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-pink-500">OnlyU</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      isActive 
                        ? "bg-pink-500 text-white" 
                        : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-pink-500" title={strings.navigation.search}>
                <Search className="w-5 h-5" />
              </button>
              
              <div className="hidden lg:block">
                <LanguageSwitcher />
              </div>
              
              <div className="lg:hidden flex items-center gap-2">
                {mobileNavItems.slice(0, 3).map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`p-2 rounded-lg ${isActive ? "text-pink-500" : "text-gray-600"}`}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden">
        <div className="flex items-center justify-around py-2">
          {mobileNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                  isActive ? "text-pink-500" : "text-gray-600"
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
