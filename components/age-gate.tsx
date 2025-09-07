"use client"
import { useState, useEffect } from "react"

export default function AgeGate() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if age has been confirmed in localStorage
    const ageConfirmed = localStorage.getItem('ageConfirmed')
    if (!ageConfirmed) {
      setIsVisible(true)
    }
  }, [])

  const handleConfirm = (confirmed: boolean) => {
    if (confirmed) {
      localStorage.setItem('ageConfirmed', 'true')
      setIsVisible(false)
    } else {
      // Redirect to a safe page or show message
      window.location.href = 'https://www.google.com'
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center text-white z-[9999]">
      <div className="max-w-md mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">OnlyU</h1>
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <span className="text-lg sm:text-2xl">🔞</span>
          </div>
        </div>
        
        <div className="mb-6 sm:mb-8">
          <p className="text-base sm:text-lg mb-3 sm:mb-4">
            ここから先は、アダルトコンテンツが含まれております。
          </p>
          <p className="text-base sm:text-lg mb-3 sm:mb-4">
            18歳未満の方のアクセスは固くお断りします。
          </p>
          <p className="text-lg sm:text-xl font-semibold">
            あなたは18歳以上ですか？
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => handleConfirm(true)}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold text-base sm:text-lg transition-colors"
          >
            はい
          </button>
          <button
            onClick={() => handleConfirm(false)}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold text-base sm:text-lg transition-colors"
          >
            いいえ
          </button>
        </div>

        <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">
          Are you 18 or older?
        </p>
      </div>
    </div>
  )
}
