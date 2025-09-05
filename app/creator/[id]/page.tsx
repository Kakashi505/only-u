"use client"
import { useState } from "react"
import { Heart, MessageCircle, Share, Bookmark, Users, Star, Eye, Calendar, MapPin, Camera, Video, Image as ImageIcon } from "lucide-react"

interface CreatorProfileProps {
  params: {
    id: string
  }
}

export default function CreatorProfile({ params }: CreatorProfileProps) {
  const [activeTab, setActiveTab] = useState("posts")
  const [isFollowing, setIsFollowing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Mock creator data
  const creator = {
    id: params.id,
    name: "Sakura",
    username: "@sakura_photography",
    avatar: "/nature-photographer-portrait.jpg",
    coverImage: "/majestic-mountain-landscape-with-lake-reflection.jpg",
    bio: "自然愛好家・写真家。美しい瞬間を共有しています。\n\n📸 風景写真専門\n🌅 朝日・夕日の撮影が得意\n🏔️ 山岳写真も撮影\n\n#自然写真 #風景 #朝日 #夕日 #山岳",
    location: "東京, 日本",
    joinDate: "2023年3月",
    isVerified: true,
    isOnline: true,
    stats: {
      followers: 15420,
      following: 892,
      posts: 89,
      likes: 125670
    },
    socialLinks: {
      instagram: "https://instagram.com/sakura_photo",
      twitter: "https://twitter.com/sakura_photo"
    }
  }

  const subscriptionPlans = [
    {
      id: 1,
      name: "ベーシックプラン",
      price: 800,
      description: "月額プラン - 基本コンテンツにアクセス",
      features: [
        "月5投稿まで閲覧可能",
        "基本写真へのアクセス",
        "コメント機能",
        "DM送信可能"
      ],
      subscriberCount: 2340,
      isPopular: false
    },
    {
      id: 2,
      name: "プレミアムプラン",
      price: 1500,
      description: "月額プラン - 全コンテンツにアクセス",
      features: [
        "全投稿閲覧可能",
        "高画質写真へのアクセス",
        "動画コンテンツ",
        "優先DM返信",
        "限定コンテンツ"
      ],
      subscriberCount: 1890,
      isPopular: true
    },
    {
      id: 3,
      name: "VIPプラン",
      price: 3000,
      description: "月額プラン - 特別コンテンツとサービス",
      features: [
        "全コンテンツ閲覧可能",
        "4K動画コンテンツ",
        "個別撮影リクエスト",
        "1対1ビデオ通話",
        "限定グッズプレゼント"
      ],
      subscriberCount: 456,
      isPopular: false
    }
  ]

  const posts = [
    {
      id: 1,
      title: "Morning Beauty",
      image: "/majestic-mountain-landscape-with-lake-reflection.jpg",
      price: 500,
      likes: 1247,
      views: 8934,
      comments: 23,
      isFree: false,
      createdAt: "2時間前",
      tags: ["ビューティー", "モーニング", "自然"]
    },
    {
      id: 2,
      title: "Forest Dreams",
      image: "/serene-forest-river-with-sunlight.jpg",
      price: 0,
      likes: 892,
      views: 4567,
      comments: 15,
      isFree: true,
      createdAt: "4時間前",
      tags: ["アウトドア", "自然", "森"]
    },
    {
      id: 3,
      title: "Sunset Magic",
      image: "/dramatic-mountain-sunset-with-clouds.jpg",
      price: 800,
      likes: 2156,
      views: 12345,
      comments: 67,
      isFree: false,
      createdAt: "6時間前",
      tags: ["夕日", "風景", "山"]
    },
    {
      id: 4,
      title: "Mountain Adventure",
      image: "/mountain-landscape.jpg",
      price: 300,
      likes: 543,
      views: 2341,
      comments: 8,
      isFree: false,
      createdAt: "8時間前",
      tags: ["アウトドア", "山", "冒険"]
    }
  ]

  const tabs = [
    { id: "posts", label: "投稿", count: creator.stats.posts },
    { id: "media", label: "メディア", count: 45 },
    { id: "likes", label: "いいね", count: 234 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80">
        <img
          src={creator.coverImage}
          alt={creator.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        
        {/* Back Button */}
        <button className="absolute top-4 left-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70">
          ←
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="relative">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />
              {creator.isVerified && (
                <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2">
                  <Star className="w-4 h-4" />
                </div>
              )}
              <div className={`absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-white ${
                creator.isOnline ? "bg-green-500" : "bg-gray-400"
              }`} />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-1">{creator.name}</h1>
                  <p className="text-gray-600 mb-2">{creator.username}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {creator.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {creator.joinDate}から参加
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      isFollowing
                        ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        : "bg-pink-500 text-white hover:bg-pink-600"
                    }`}
                  >
                    {isFollowing ? "フォロー中" : "フォロー"}
                  </button>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" title="メッセージ">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" title="シェア">
                    <Share className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <p className="text-gray-700 whitespace-pre-line">{creator.bio}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{creator.stats.followers.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">フォロワー</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{creator.stats.following.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">フォロー中</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{creator.stats.posts}</div>
                  <div className="text-sm text-gray-500">投稿</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{creator.stats.likes.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">いいね</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">サブスクリプションプラン</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative border rounded-2xl p-6 ${
                  plan.isPopular ? "border-pink-500 bg-pink-50" : "border-gray-200"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      人気
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-gray-800 mb-1">¥{plan.price}</div>
                  <div className="text-sm text-gray-500">/月</div>
                </div>

                <p className="text-sm text-gray-600 mb-4 text-center">{plan.description}</p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-4">
                  <div className="text-sm text-gray-500">
                    {plan.subscriberCount.toLocaleString()}人が購読中
                  </div>
                </div>

                <button
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.isPopular
                      ? "bg-pink-500 text-white hover:bg-pink-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {isSubscribed ? "購読中" : "購読する"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "posts" && (
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <div key={post.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                    
                    <h3 className="font-medium text-gray-800 mb-2">{post.title}</h3>
                    
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
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
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
                      <span>{post.createdAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "media" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
                    <img
                      src={`/mountain-landscape.jpg`}
                      alt={`Media ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === "likes" && (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">いいねした投稿</h3>
                <p className="text-gray-500">まだいいねした投稿がありません</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
