"use client"
import { useState } from "react"
import { Users, Star, Heart, MessageCircle, Filter, Grid3X3, List } from "lucide-react"

export default function CreatorsPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("popular")

  const creators = [
    {
      id: 1,
      name: "Sakura",
      avatar: "/nature-photographer-portrait.jpg",
      coverImage: "/majestic-mountain-landscape-with-lake-reflection.jpg",
      subscribers: 15420,
      posts: 89,
      isVerified: true,
      description: "Nature photographer & model. Sharing beautiful moments from around the world.",
      tags: ["ビューティー", "写真", "自然"],
      isOnline: true,
      lastActive: "オンライン"
    },
    {
      id: 2,
      name: "Yuki",
      avatar: "/river-explorer.jpg",
      coverImage: "/serene-forest-river-with-sunlight.jpg",
      subscribers: 8930,
      posts: 67,
      isVerified: false,
      description: "Adventure content creator. Exploring the great outdoors and sharing the journey.",
      tags: ["アウトドア", "冒険", "旅行"],
      isOnline: false,
      lastActive: "2時間前"
    },
    {
      id: 3,
      name: "Aoi",
      avatar: "/forest-wanderer.jpg",
      coverImage: "/dramatic-mountain-sunset-with-clouds.jpg",
      subscribers: 22100,
      posts: 124,
      isVerified: true,
      description: "Lifestyle & beauty content creator. Daily inspiration and beauty tips.",
      tags: ["ライフスタイル", "ビューティー", "ファッション"],
      isOnline: true,
      lastActive: "オンライン"
    },
    {
      id: 4,
      name: "Hana",
      avatar: "/mountain-hikers-group.jpg",
      coverImage: "/mountain-landscape.jpg",
      subscribers: 5670,
      posts: 45,
      isVerified: false,
      description: "Fitness enthusiast and mountain lover. Sharing workout routines and hiking adventures.",
      tags: ["フィットネス", "山", "健康"],
      isOnline: false,
      lastActive: "1日前"
    },
    {
      id: 5,
      name: "Kai",
      avatar: "/river-explorer.jpg",
      coverImage: "/forest-river.jpg",
      subscribers: 12340,
      posts: 78,
      isVerified: true,
      description: "Photographer and nature enthusiast. Capturing the beauty of rivers and forests.",
      tags: ["写真", "自然", "川"],
      isOnline: true,
      lastActive: "オンライン"
    },
    {
      id: 6,
      name: "Maya",
      avatar: "/nature-photographer-portrait.jpg",
      coverImage: "/mountain-sunset.jpg",
      subscribers: 18900,
      posts: 92,
      isVerified: true,
      description: "Sunset photographer and travel blogger. Chasing golden hour around the world.",
      tags: ["写真", "旅行", "夕日"],
      isOnline: false,
      lastActive: "3時間前"
    }
  ]

  const categories = [
    "すべて", "ビューティー", "アウトドア", "ファッション", "フィットネス", 
    "写真", "旅行", "ライフスタイル", "音楽", "アート"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">クリエイター</h1>
          
          {/* Filters and Controls */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "すべて"
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  }`}
                  title={`${category}でフィルター`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-2 ml-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                title="並び替えオプション"
              >
                <option value="popular">人気順</option>
                <option value="newest">新着順</option>
                <option value="verified">認証済み</option>
                <option value="online">オンライン</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-pink-500 text-white" : "text-gray-600"}`}
                  title="グリッド表示"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-pink-500 text-white" : "text-gray-600"}`}
                  title="リスト表示"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Creators Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((creator) => (
              <div key={creator.id} className="bg-white rounded-2xl shadow-sm overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={creator.coverImage}
                    alt={creator.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                  
                  {/* Online Status */}
                  <div className="absolute top-3 right-3">
                    <div className={`w-3 h-3 rounded-full ${
                      creator.isOnline ? "bg-green-500" : "bg-gray-400"
                    }`} />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative -mt-8">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-16 h-16 rounded-full border-4 border-white object-cover"
                      />
                      {creator.isVerified && (
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                          <Star className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{creator.name}</h3>
                      <p className="text-sm text-gray-500">{creator.lastActive}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{creator.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {creator.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {creator.subscribers.toLocaleString()}人
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {creator.posts}投稿
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-pink-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors">
                      フォロー
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors" title="メッセージ">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {creators.map((creator) => (
              <div key={creator.id} className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 group cursor-pointer">
                <div className="relative flex-shrink-0">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  {creator.isVerified && (
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                      <Star className="w-3 h-3" />
                    </div>
                  )}
                  <div className={`absolute top-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                    creator.isOnline ? "bg-green-500" : "bg-gray-400"
                  }`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-800">{creator.name}</h3>
                    <span className="text-sm text-gray-500">{creator.lastActive}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{creator.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {creator.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {creator.subscribers.toLocaleString()}人
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {creator.posts}投稿
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors">
                        フォロー
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors" title="メッセージ">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors">
            もっと見る
          </button>
        </div>
      </div>
    </div>
  )
}
