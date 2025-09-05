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
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">OnlyU</h1>
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🔞</span>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-lg mb-4">
            ここから先は、アダルトコンテンツが含まれております。
          </p>
          <p className="text-lg mb-4">
            18歳未満の方のアクセスは固くお断りします。
          </p>
          <p className="text-xl font-semibold">
            あなたは18歳以上ですか？
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => handleConfirm(true)}
            className="px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold text-lg transition-colors"
          >
            はい
          </button>
          <button
            onClick={() => handleConfirm(false)}
            className="px-8 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold text-lg transition-colors"
          >
            いいえ
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Are you 18 or older?
        </p>
      </div>
    </div>
  )
}
