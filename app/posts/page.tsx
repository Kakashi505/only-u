"use client"
import { useState } from "react"
import { Heart, Eye, MessageCircle, Share, Bookmark, Filter, Grid3X3, List } from "lucide-react"

export default function PostsPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("latest")

  const posts = [
    {
      id: 1,
      title: "Morning Beauty",
      creator: "Sakura",
      avatar: "/nature-photographer-portrait.jpg",
      image: "/majestic-mountain-landscape-with-lake-reflection.jpg",
      price: 500,
      likes: 1247,
      views: 8934,
      comments: 23,
      isFree: false,
      tags: ["ビューティー", "モーニング"],
      createdAt: "2時間前"
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
      comments: 15,
      isFree: true,
      tags: ["アウトドア", "自然"],
      createdAt: "4時間前"
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
      comments: 67,
      isFree: false,
      tags: ["夕日", "風景"],
      createdAt: "6時間前"
    },
    {
      id: 4,
      title: "Mountain Adventure",
      creator: "Hana",
      avatar: "/mountain-hikers-group.jpg",
      image: "/mountain-landscape.jpg",
      price: 300,
      likes: 543,
      views: 2341,
      comments: 8,
      isFree: false,
      tags: ["アウトドア", "山"],
      createdAt: "8時間前"
    },
    {
      id: 5,
      title: "River Flow",
      creator: "Kai",
      avatar: "/river-explorer.jpg",
      image: "/forest-river.jpg",
      price: 0,
      likes: 1234,
      views: 5678,
      comments: 34,
      isFree: true,
      tags: ["川", "自然"],
      createdAt: "12時間前"
    },
    {
      id: 6,
      title: "Peak Sunset",
      creator: "Maya",
      avatar: "/nature-photographer-portrait.jpg",
      image: "/mountain-sunset.jpg",
      price: 600,
      likes: 1876,
      views: 9876,
      comments: 45,
      isFree: false,
      tags: ["夕日", "山"],
      createdAt: "1日前"
    }
  ]

  const genres = [
    "すべて", "ビューティー", "アウトドア", "ファッション", "フィットネス", 
    "グルメ", "旅行", "アート", "音楽", "ゲーム"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">投稿</h1>
          
          {/* Filters and Controls */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Genre Filter */}
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    genre === "すべて"
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  }`}
                  title={`${genre}でフィルター`}
                >
                  {genre}
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
                <option value="latest">最新順</option>
                <option value="popular">人気順</option>
                <option value="price">価格順</option>
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

        {/* Posts Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!post.isFree && (
                    <div className="absolute top-3 right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ¥{post.price}
                    </div>
                  )}
                  {post.isFree && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      無料
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <img
                      src={post.avatar}
                      alt={post.creator}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium text-gray-800">{post.creator}</span>
                    <span className="text-sm text-gray-500">{post.createdAt}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.map((tag) => (
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
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-pink-500" title="ブックマーク">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-pink-500" title="シェア">
                        <Share className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 group cursor-pointer">
                <div className="relative flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-32 object-cover rounded-lg"
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
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={post.avatar}
                      alt={post.creator}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-medium text-gray-800">{post.creator}</span>
                    <span className="text-sm text-gray-500">{post.createdAt}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2">{post.title}</h3>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.map((tag) => (
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
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-pink-500" title="ブックマーク">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-pink-500" title="シェア">
                        <Share className="w-4 h-4" />
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
