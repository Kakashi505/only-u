"use client"
import { useState } from "react"
import { Heart, MessageCircle, Share, Bookmark, Eye, Users, Star, Filter, SortAsc } from "lucide-react"
import ContentModeration from "@/components/content-moderation"

export default function FeedPage() {
  const [sortBy, setSortBy] = useState("latest")

  const feedPosts = [
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
      isSubscribed: true,
      isExplicit: false,
      tags: ["ビューティー", "モーニング"],
      createdAt: "2時間前",
      description: "朝の美しい光の中で撮影した特別な一枚。自然の美しさを感じてください。"
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
      isSubscribed: false,
      isExplicit: false,
      tags: ["アウトドア", "自然"],
      createdAt: "4時間前",
      description: "森の中の静寂と美しさを表現した作品。自然の神秘を感じてください。"
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
      isSubscribed: false,
      isExplicit: false,
      tags: ["夕日", "風景"],
      createdAt: "6時間前",
      description: "夕日の魔法のような瞬間を捉えた特別な写真。感動的な瞬間をお楽しみください。"
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
      isSubscribed: true,
      isExplicit: false,
      tags: ["アウトドア", "山"],
      createdAt: "8時間前",
      description: "山の冒険の記録。新しい発見と感動の瞬間を共有します。"
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
      isSubscribed: false,
      isExplicit: false,
      tags: ["川", "自然"],
      createdAt: "12時間前",
      description: "川の流れの美しさを表現。自然の音と共にお楽しみください。"
    },
    {
      id: 6,
      title: "Private Session",
      creator: "Maya",
      avatar: "/nature-photographer-portrait.jpg",
      image: "/mountain-landscape.jpg",
      price: 1500,
      likes: 3456,
      views: 15678,
      comments: 89,
      isFree: false,
      isSubscribed: false,
      isExplicit: true,
      tags: ["プライベート", "限定"],
      createdAt: "1日前",
      description: "特別なプライベートセッションの内容。購読者のみ閲覧可能です。"
    }
  ]

  const sortOptions = [
    { value: "latest", label: "最新順" },
    { value: "popular", label: "人気順" },
    { value: "following", label: "フォロー中" },
    { value: "recommended", label: "おすすめ" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">フィード</h1>
          
          {/* Sort Options */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SortAsc className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">並び替え:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
              title="並び替えオプション"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Feed Posts */}
        <div className="space-y-6">
          {feedPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Post Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.avatar}
                      alt={post.creator}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{post.creator}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{post.createdAt}</span>
                        {post.isSubscribed && (
                          <>
                            <span>•</span>
                            <span className="text-pink-500 font-medium">購読中</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {post.isSubscribed && (
                      <div className="px-2 py-1 bg-pink-100 text-pink-600 text-xs rounded">
                        メンバー
                      </div>
                    )}
                    <button className="p-2 text-gray-400 hover:text-gray-600" title="ブックマーク">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <h2 className="font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-3">{post.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Image */}
              <ContentModeration
                imageUrl={post.image}
                isExplicit={post.isExplicit}
                isSubscribed={post.isSubscribed}
                isFree={post.isFree}
                className="w-full h-80"
                onUnlock={() => {
                  // Handle unlock logic - could redirect to purchase page
                  console.log("Unlocking content for post:", post.id)
                }}
              />

              {/* Post Actions */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
                      <Heart className="w-6 h-6" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                      <MessageCircle className="w-6 h-6" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-500">
                      <Eye className="w-6 h-6" />
                      <span className="text-sm font-medium">{post.views}</span>
                    </button>
                  </div>
                  <button className="text-gray-600 hover:text-gray-800" title="シェア">
                    <Share className="w-6 h-6" />
                  </button>
                </div>

                {/* Subscribe Button for Non-Subscribers */}
                {!post.isSubscribed && (
                  <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{post.creator}をフォロー</p>
                        <p className="text-xs text-gray-600">最新の投稿をチェック</p>
                      </div>
                      <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors">
                        フォロー
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

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