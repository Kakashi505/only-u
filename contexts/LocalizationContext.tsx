"use client"
import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, useLocalization } from '@/lib/localization'

interface LocalizationContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  strings: ReturnType<typeof useLocalization>
  formatTimeAgo: (date: Date) => string
  formatCurrency: (amount: number) => string
  formatNumber: (number: number) => string
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined)

interface LocalizationProviderProps {
  children: React.ReactNode
  defaultLocale?: Locale
}

export function LocalizationProvider({ 
  children, 
  defaultLocale = 'ja' 
}: LocalizationProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const strings = useLocalization(locale)

  // Save locale preference to localStorage
  useEffect(() => {
    localStorage.setItem('onlyu-locale', locale)
  }, [locale])

  // Load locale preference from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('onlyu-locale') as Locale
    if (savedLocale && (savedLocale === 'ja' || savedLocale === 'en')) {
      setLocale(savedLocale)
    }
  }, [])

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) {
      return strings.time.now
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60)
      return locale === 'ja' ? `${minutes}${strings.time.minutesAgo}` : `${minutes} ${strings.time.minutesAgo}`
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600)
      return locale === 'ja' ? `${hours}${strings.time.hoursAgo}` : `${hours} ${strings.time.hoursAgo}`
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400)
      return locale === 'ja' ? `${days}${strings.time.daysAgo}` : `${days} ${strings.time.daysAgo}`
    } else {
      return date.toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US')
    }
  }

  const formatCurrency = (amount: number) => {
    if (locale === 'ja') {
      return `¥${amount.toLocaleString('ja-JP')}`
    } else {
      return `$${amount.toLocaleString('en-US')}`
    }
  }

  const formatNumber = (number: number) => {
    return number.toLocaleString(locale === 'ja' ? 'ja-JP' : 'en-US')
  }

  const value: LocalizationContextType = {
    locale,
    setLocale,
    strings,
    formatTimeAgo,
    formatCurrency,
    formatNumber
  }

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  )
}

export function useLocalizationContext() {
  const context = useContext(LocalizationContext)
  if (context === undefined) {
    throw new Error('useLocalizationContext must be used within a LocalizationProvider')
  }
  return context
}

// Language switcher component
export function LanguageSwitcher() {
  const { locale, setLocale } = useLocalizationContext()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLocale('ja')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'ja' 
            ? 'bg-pink-500 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'en' 
            ? 'bg-pink-500 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        English
      </button>
    </div>
  )
}
