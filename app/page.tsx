"use client"
import { useState } from "react"
import Link from "next/link"
import { Heart, MessageCircle, Share, Bookmark, Eye, Users, Star, ChevronRight } from "lucide-react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("posts")
  const [activeLibraryTab, setActiveLibraryTab] = useState("purchased")

  // Mock data for staff picks
  const staffPicks = {
    posts: [
      {
        id: 1,
        title: "Morning Beauty",
        creator: "Sakura",
        avatar: "/nature-photographer-portrait.jpg",
        image: "/majestic-mountain-landscape-with-lake-reflection.jpg",
        price: 500,
        likes: 1247,
        views: 8934,
        isFree: false
      },
      {
        id: 2,
        title: "Forest Dreams",
        creator: "Yuki",
        avatar: "/river-explorer.jpg",
        image: "/serene-forest-river-with-sunlight.jpg",
        price: 0,
        likes: 892,
        views: 4567,
        isFree: true
      },
      {
        id: 3,
        title: "Sunset Magic",
        creator: "Aoi",
        avatar: "/forest-wanderer.jpg",
        image: "/dramatic-mountain-sunset-with-clouds.jpg",
        price: 800,
        likes: 2156,
        views: 12345,
        isFree: false
      }
    ],
    creators: [
      {
        id: 1,
        name: "Sakura",
        avatar: "/nature-photographer-portrait.jpg",
        subscribers: 15420,
        isVerified: true,
        description: "Nature photographer & model"
      },
      {
        id: 2,
        name: "Yuki",
        avatar: "/river-explorer.jpg",
        subscribers: 8930,
        isVerified: false,
        description: "Adventure content creator"
      },
      {
        id: 3,
        name: "Aoi",
        avatar: "/forest-wanderer.jpg",
        subscribers: 22100,
        isVerified: true,
        description: "Lifestyle & beauty"
      }
    ]
  }

  const genres = [
    "アウトドア", "ビューティー", "ファッション", "フィットネス", 
    "グルメ", "旅行", "アート", "音楽", "ゲーム", "映画"
  ]

  const rankingPosts = [
    { id: 1, title: "Top Post 1", creator: "Creator A", image: "/mountain-landscape.jpg", rank: 1 },
    { id: 2, title: "Top Post 2", creator: "Creator B", image: "/forest-river.jpg", rank: 2 },
    { id: 3, title: "Top Post 3", creator: "Creator C", image: "/mountain-sunset.jpg", rank: 3 }
  ]

  const rankingCreators = [
    { id: 1, name: "Top Creator 1", avatar: "/nature-photographer-portrait.jpg", rank: 1, subscribers: 50000 },
    { id: 2, name: "Top Creator 2", avatar: "/river-explorer.jpg", rank: 2, subscribers: 45000 },
    { id: 3, name: "Top Creator 3", avatar: "/forest-wanderer.jpg", rank: 3, subscribers: 40000 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
        {/* Post Library Section (for logged-in users) */}
        <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6 mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">投稿ライブラリ</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4">
            {["purchased", "saved", "liked", "history"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveLibraryTab(tab)}
                className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  activeLibraryTab === tab
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab === "purchased" && "購入済み"}
                {tab === "saved" && "保存済み"}
                {tab === "liked" && "いいね済み"}
                {tab === "history" && "視聴履歴"}
              </button>
            ))}
          </div>
          <div className="text-center py-8 text-gray-500">
            <p>まだコンテンツがありません</p>
          </div>
        </div>

        {/* Staff Picks Section */}
        <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6 mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">運営ピックアップ</h2>
          <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
            <button
              onClick={() => setActiveTab("posts")}
              className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeTab === "posts"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              投稿
            </button>
            <button
              onClick={() => setActiveTab("creators")}
              className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeTab === "creators"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              クリエイター
            </button>
          </div>

          {activeTab === "posts" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {staffPicks.posts.map((post) => (
                <div key={post.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!post.isFree && (
                      <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded text-xs font-medium">
                        ¥{post.price}
                      </div>
                    )}
                    {post.isFree && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        無料
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={post.avatar}
                      alt={post.creator}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-800">{post.creator}</span>
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">{post.title}</h3>
                  <div className="flex items-center gap-2 sm:gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "creators" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {staffPicks.creators.map((creator) => (
                <div key={creator.id} className="text-center">
                  <div className="relative mb-3">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                    {creator.isVerified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                        <Star className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">{creator.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{creator.description}</p>
                  <div className="flex items-center justify-center gap-1 text-xs sm:text-sm text-gray-500 mb-3">
                    <Users className="w-4 h-4" />
                    {creator.subscribers.toLocaleString()}人
                  </div>
                  <button className="bg-pink-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-pink-600 transition-colors">
                    フォロー
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-6">
            <Link
              href={activeTab === "posts" ? "/ranking" : "/creators"}
              className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium"
            >
              {activeTab === "posts" ? "投稿ランキングをもっと見る" : "クリエイターランキングをもっと見る"}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Recommended Genres */}
        <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6 mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">おすすめのジャンル</h2>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {genres.map((genre) => (
              <button
                key={genre}
                className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm hover:bg-pink-100 hover:text-pink-600 transition-colors"
              >
                {genre}
              </button>
            ))}
          </div>
          <button className="text-pink-500 hover:text-pink-600 font-medium text-sm">
            ジャンルをもっと見る
          </button>
        </div>

        {/* Ranking Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Post Ranking */}
          <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">ランキング - 投稿</h2>
            <div className="space-y-3">
              {rankingPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    {post.rank}
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-800 text-xs sm:text-sm truncate">{post.title}</h3>
                    <p className="text-xs text-gray-500 truncate">{post.creator}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link
                href="/ranking"
                className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium text-sm"
              >
                投稿ランキングをもっと見る
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Creator Ranking */}
          <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">ランキング - クリエイター</h2>
            <div className="space-y-3">
              {rankingCreators.map((creator) => (
                <div key={creator.id} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    {creator.rank}
                  </div>
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-800 text-xs sm:text-sm truncate">{creator.name}</h3>
                    <p className="text-xs text-gray-500 truncate">{creator.subscribers.toLocaleString()}人</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link
                href="/ranking"
                className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium text-sm"
              >
                クリエイターランキングをもっと見る
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
