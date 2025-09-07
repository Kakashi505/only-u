"use client"
import { useState } from "react"
import { TrendingUp, Users, Heart, Eye, Star, ChevronUp, ChevronDown } from "lucide-react"

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState("posts")
  const [timeRange, setTimeRange] = useState("weekly")

  const postRankings = [
    {
      id: 1,
      rank: 1,
      title: "Morning Beauty",
      creator: "Sakura",
      avatar: "/nature-photographer-portrait.jpg",
      image: "/majestic-mountain-landscape-with-lake-reflection.jpg",
      price: 500,
      likes: 12470,
      views: 89340,
      revenue: 125000,
      rankChange: "up",
      changeValue: 2
    },
    {
      id: 2,
      rank: 2,
      title: "Sunset Magic",
      creator: "Aoi",
      avatar: "/forest-wanderer.jpg",
      image: "/dramatic-mountain-sunset-with-clouds.jpg",
      price: 800,
      likes: 21560,
      views: 123450,
      revenue: 98000,
      rankChange: "down",
      changeValue: 1
    },
    {
      id: 3,
      rank: 3,
      title: "Forest Dreams",
      creator: "Yuki",
      avatar: "/river-explorer.jpg",
      image: "/serene-forest-river-with-sunlight.jpg",
      price: 0,
      likes: 8920,
      views: 45670,
      revenue: 0,
      rankChange: "up",
      changeValue: 3
    },
    {
      id: 4,
      rank: 4,
      title: "Mountain Adventure",
      creator: "Hana",
      avatar: "/mountain-hikers-group.jpg",
      image: "/mountain-landscape.jpg",
      price: 300,
      likes: 5430,
      views: 23410,
      revenue: 45000,
      rankChange: "new",
      changeValue: 0
    },
    {
      id: 5,
      rank: 5,
      title: "Peak Sunset",
      creator: "Maya",
      avatar: "/nature-photographer-portrait.jpg",
      image: "/mountain-sunset.jpg",
      price: 600,
      likes: 18760,
      views: 98760,
      revenue: 78000,
      rankChange: "down",
      changeValue: 2
    }
  ]

  const creatorRankings = [
    {
      id: 1,
      rank: 1,
      name: "Sakura",
      avatar: "/nature-photographer-portrait.jpg",
      subscribers: 154200,
      posts: 89,
      revenue: 2500000,
      isVerified: true,
      rankChange: "up",
      changeValue: 1
    },
    {
      id: 2,
      rank: 2,
      name: "Aoi",
      avatar: "/forest-wanderer.jpg",
      subscribers: 221000,
      posts: 124,
      revenue: 2200000,
      isVerified: true,
      rankChange: "down",
      changeValue: 1
    },
    {
      id: 3,
      rank: 3,
      name: "Maya",
      avatar: "/nature-photographer-portrait.jpg",
      subscribers: 189000,
      posts: 92,
      revenue: 1800000,
      isVerified: true,
      rankChange: "up",
      changeValue: 2
    },
    {
      id: 4,
      rank: 4,
      name: "Kai",
      avatar: "/river-explorer.jpg",
      subscribers: 123400,
      posts: 78,
      revenue: 1500000,
      isVerified: true,
      rankChange: "new",
      changeValue: 0
    },
    {
      id: 5,
      rank: 5,
      name: "Yuki",
      avatar: "/river-explorer.jpg",
      subscribers: 89300,
      posts: 67,
      revenue: 1200000,
      isVerified: false,
      rankChange: "down",
      changeValue: 1
    }
  ]

  const timeRanges = [
    { value: "daily", label: "日間" },
    { value: "weekly", label: "週間" },
    { value: "monthly", label: "月間" },
    { value: "all", label: "全期間" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">ランキング</h1>
          
          {/* Time Range Selector */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  timeRange === range.value
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
            <button
              onClick={() => setActiveTab("posts")}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeTab === "posts"
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              投稿ランキング
            </button>
            <button
              onClick={() => setActiveTab("creators")}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeTab === "creators"
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              クリエイターランキング
            </button>
          </div>
        </div>

        {/* Rankings Content */}
        {activeTab === "posts" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-3 sm:p-6 border-b border-gray-200">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">投稿ランキング</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">人気の投稿をチェック</p>
            </div>
            
            <div className="divide-y divide-gray-200">
              {postRankings.map((post) => (
                <div key={post.id} className="p-3 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-4">
                    {/* Rank */}
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                        post.rank <= 3 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"
                      }`}>
                        {post.rank}
                      </div>
                      {post.rankChange === "up" && (
                        <div className="flex items-center text-green-500">
                          <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs">{post.changeValue}</span>
                        </div>
                      )}
                      {post.rankChange === "down" && (
                        <div className="flex items-center text-red-500">
                          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs">{post.changeValue}</span>
                        </div>
                      )}
                      {post.rankChange === "new" && (
                        <div className="px-1 sm:px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                          NEW
                        </div>
                      )}
                    </div>

                    {/* Post Image */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                      />
                      {post.price > 0 && (
                        <div className="absolute top-1 right-1 bg-pink-500 text-white px-1 py-0.5 rounded text-xs">
                          ¥{post.price}
                        </div>
                      )}
                    </div>

                    {/* Post Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base truncate">{post.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={post.avatar}
                          alt={post.creator}
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                        />
                        <span className="text-xs sm:text-sm text-gray-600 truncate">{post.creator}</span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                          {post.likes.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          {post.views.toLocaleString()}
                        </div>
                        {post.revenue > 0 && (
                          <div className="text-pink-500 font-medium">
                            ¥{post.revenue.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="bg-pink-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-pink-600 transition-colors">
                      購入
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "creators" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-3 sm:p-6 border-b border-gray-200">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">クリエイターランキング</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">人気のクリエイターをチェック</p>
            </div>
            
            <div className="divide-y divide-gray-200">
              {creatorRankings.map((creator) => (
                <div key={creator.id} className="p-3 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-4">
                    {/* Rank */}
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                        creator.rank <= 3 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"
                      }`}>
                        {creator.rank}
                      </div>
                      {creator.rankChange === "up" && (
                        <div className="flex items-center text-green-500">
                          <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs">{creator.changeValue}</span>
                        </div>
                      )}
                      {creator.rankChange === "down" && (
                        <div className="flex items-center text-red-500">
                          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs">{creator.changeValue}</span>
                        </div>
                      )}
                      {creator.rankChange === "new" && (
                        <div className="px-1 sm:px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                          NEW
                        </div>
                      )}
                    </div>

                    {/* Creator Avatar */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                      {creator.isVerified && (
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                          <Star className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                    {/* Creator Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base truncate">{creator.name}</h3>
                      
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                          {creator.subscribers.toLocaleString()}人
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                          {creator.posts}投稿
                        </div>
                      </div>
                      
                      <div className="text-pink-500 font-medium text-xs sm:text-sm">
                        売上: ¥{creator.revenue.toLocaleString()}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                      <button className="bg-pink-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-pink-600 transition-colors">
                        フォロー
                      </button>
                      <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-700 rounded-lg text-xs sm:text-sm hover:bg-gray-50 transition-colors">
                        プロフィール
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-6 sm:mt-8">
          <button className="bg-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-pink-600 transition-colors">
            もっと見る
          </button>
        </div>
      </div>
    </div>
  )
}
