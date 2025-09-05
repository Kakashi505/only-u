"use client"
import { useState, useEffect } from "react"
import { Eye, EyeOff, Shield, AlertTriangle, Lock, Unlock } from "lucide-react"

interface ContentModerationProps {
  imageUrl: string
  isExplicit?: boolean
  isSubscribed?: boolean
  isFree?: boolean
  onUnlock?: () => void
  className?: string
}

export default function ContentModeration({
  imageUrl,
  isExplicit = false,
  isSubscribed = false,
  isFree = false,
  onUnlock,
  className = ""
}: ContentModerationProps) {
  const [isBlurred, setIsBlurred] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Determine if content should be blurred based on user preferences and content type
    if (isExplicit && !isSubscribed && !isFree) {
      setIsBlurred(true)
    } else {
      setIsBlurred(false)
    }
  }, [isExplicit, isSubscribed, isFree])

  const handleUnlock = () => {
    if (onUnlock) {
      onUnlock()
    } else {
      setShowContent(true)
      setIsBlurred(false)
    }
  }

  const handleMouseEnter = () => {
    if (isBlurred) {
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Image */}
      <img
        src={imageUrl}
        alt="Content"
        className={`w-full h-full object-cover transition-all duration-300 ${
          isBlurred && !showContent ? "blur-md scale-110" : ""
        }`}
      />

      {/* Blur Overlay */}
      {isBlurred && !showContent && (
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          {/* Mosaic Pattern Overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full mosaic-pattern" />
          </div>

          {/* Content Warning */}
          <div className="relative z-10 text-center text-white p-6">
            <div className="w-16 h-16 bg-red-500 bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">アダルトコンテンツ</h3>
            <p className="text-sm opacity-90 mb-4">
              このコンテンツは18歳未満の方には<br />
              適していません
            </p>
            
            {!isSubscribed && !isFree ? (
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Lock className="w-4 h-4" />
                  <span>購読または購入が必要です</span>
                </div>
                <button
                  onClick={handleUnlock}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors"
                >
                  購読/購入する
                </button>
              </div>
            ) : (
              <button
                onClick={handleUnlock}
                className="bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors flex items-center gap-2 mx-auto"
              >
                <Unlock className="w-4 h-4" />
                表示する
              </button>
            )}
          </div>
        </div>
      )}

      {/* Hover Effect */}
      {isBlurred && isHovering && !showContent && (
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 rounded-full p-3">
            <Eye className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      )}

      {/* Content Warning Badge */}
      {isExplicit && (
        <div className="absolute top-3 right-3">
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            18+
          </div>
        </div>
      )}

      {/* Subscription Required Badge */}
      {!isFree && !isSubscribed && (
        <div className="absolute top-3 left-3">
          <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Lock className="w-3 h-3" />
            購読必要
          </div>
        </div>
      )}
    </div>
  )
}

// Content Filter Component
interface ContentFilterProps {
  onFilterChange: (filters: ContentFilters) => void
  className?: string
}

interface ContentFilters {
  showExplicit: boolean
  showFreeOnly: boolean
  showSubscribedOnly: boolean
}

export function ContentFilter({ onFilterChange, className = "" }: ContentFilterProps) {
  const [filters, setFilters] = useState<ContentFilters>({
    showExplicit: false,
    showFreeOnly: false,
    showSubscribedOnly: false
  })

  const handleFilterChange = (key: keyof ContentFilters, value: boolean) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm ${className}`}>
      <h3 className="font-semibold text-gray-800 mb-4">コンテンツフィルター</h3>
      
      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={filters.showExplicit}
            onChange={(e) => handleFilterChange('showExplicit', e.target.checked)}
            className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
          />
          <span className="text-sm text-gray-700">アダルトコンテンツを表示</span>
        </label>
        
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={filters.showFreeOnly}
            onChange={(e) => handleFilterChange('showFreeOnly', e.target.checked)}
            className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
          />
          <span className="text-sm text-gray-700">無料コンテンツのみ</span>
        </label>
        
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={filters.showSubscribedOnly}
            onChange={(e) => handleFilterChange('showSubscribedOnly', e.target.checked)}
            className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
          />
          <span className="text-sm text-gray-700">購読済みコンテンツのみ</span>
        </label>
      </div>
    </div>
  )
}

// Age Verification Component
interface AgeVerificationProps {
  onVerify: (isVerified: boolean) => void
  className?: string
}

export function AgeVerification({ onVerify, className = "" }: AgeVerificationProps) {
  const [isVerified, setIsVerified] = useState(false)

  const handleVerify = (verified: boolean) => {
    setIsVerified(verified)
    onVerify(verified)
  }

  if (isVerified) {
    return null
  }

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ${className}`}>
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-red-600" />
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-4">年齢確認</h2>
        <p className="text-gray-600 mb-6">
          このサイトにはアダルトコンテンツが含まれています。<br />
          18歳未満の方はアクセスできません。<br /><br />
          あなたは18歳以上ですか？
        </p>
        
        <div className="flex gap-4">
          <button
            onClick={() => handleVerify(true)}
            className="flex-1 bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors"
          >
            はい（18歳以上）
          </button>
          <button
            onClick={() => handleVerify(false)}
            className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
          >
            いいえ
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          年齢確認は一度のみ行われます
        </p>
      </div>
    </div>
  )
}

// Content Warning Banner
interface ContentWarningBannerProps {
  message: string
  type?: "warning" | "error" | "info"
  onDismiss?: () => void
  className?: string
}

export function ContentWarningBanner({ 
  message, 
  type = "warning", 
  onDismiss, 
  className = "" 
}: ContentWarningBannerProps) {
  const getTypeStyles = () => {
    switch (type) {
      case "error":
        return "bg-red-50 border-red-200 text-red-800"
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800"
      default:
        return "bg-yellow-50 border-yellow-200 text-yellow-800"
    }
  }

  const getIcon = () => {
    switch (type) {
      case "error":
        return <AlertTriangle className="w-5 h-5" />
      case "info":
        return <Shield className="w-5 h-5" />
      default:
        return <AlertTriangle className="w-5 h-5" />
    }
  }

  return (
    <div className={`border rounded-lg p-4 flex items-center gap-3 ${getTypeStyles()} ${className}`}>
      {getIcon()}
      <p className="flex-1 text-sm font-medium">{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-current opacity-70 hover:opacity-100"
        >
          ✕
        </button>
      )}
    </div>
  )
}
