"use client"
import { useState } from "react"
import { 
  BarChart3, 
  Users, 
  Heart, 
  Eye, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  Calendar,
  Download,
  Settings,
  MessageSquare,
  Star,
  Menu,
  X
} from "lucide-react"

export default function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock analytics data
  const analytics = {
    totalEarnings: 1250000,
    monthlyEarnings: 450000,
    subscribers: 15420,
    totalViews: 893400,
    totalLikes: 125670,
    posts: 89,
    engagement: 8.5,
    growth: {
      earnings: 12.5,
      subscribers: 8.3,
      views: -2.1,
      likes: 15.7
    }
  }

  const recentPosts = [
    {
      id: 1,
      title: "Morning Beauty",
      image: "/majestic-mountain-landscape-with-lake-reflection.jpg",
      price: 500,
      earnings: 25000,
      views: 8934,
      likes: 1247,
      comments: 23,
      createdAt: "2時間前",
      status: "published"
    },
    {
      id: 2,
      title: "Forest Dreams",
      image: "/serene-forest-river-with-sunlight.jpg",
      price: 0,
      earnings: 0,
      views: 4567,
      likes: 892,
      comments: 15,
      createdAt: "4時間前",
      status: "published"
    },
    {
      id: 3,
      title: "Sunset Magic",
      image: "/dramatic-mountain-sunset-with-clouds.jpg",
      price: 800,
      earnings: 48000,
      views: 12345,
      likes: 2156,
      comments: 67,
      createdAt: "6時間前",
      status: "published"
    }
  ]

  const subscribers = [
    {
      id: 1,
      name: "Yuki",
      avatar: "/river-explorer.jpg",
      plan: "プレミアムプラン",
      price: 1500,
      joinDate: "2024-03-15",
      status: "active"
    },
    {
      id: 2,
      name: "Aoi",
      avatar: "/forest-wanderer.jpg",
      plan: "ベーシックプラン",
      price: 800,
      joinDate: "2024-03-10",
      status: "active"
    },
    {
      id: 3,
      name: "Hana",
      avatar: "/mountain-hikers-group.jpg",
      plan: "VIPプラン",
      price: 3000,
      joinDate: "2024-03-08",
      status: "active"
    }
  ]

  const tabs = [
    { id: "overview", label: "概要", icon: BarChart3 },
    { id: "posts", label: "投稿管理", icon: Edit },
    { id: "subscribers", label: "購読者", icon: Users },
    { id: "analytics", label: "アナリティクス", icon: TrendingUp },
    { id: "earnings", label: "収益", icon: DollarSign },
    { id: "messages", label: "メッセージ", icon: MessageSquare }
  ]

  const stats = [
    {
      title: "総収益",
      value: `¥${analytics.totalEarnings.toLocaleString()}`,
      change: analytics.growth.earnings,
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "購読者数",
      value: analytics.subscribers.toLocaleString(),
      change: analytics.growth.subscribers,
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "総閲覧数",
      value: analytics.totalViews.toLocaleString(),
      change: analytics.growth.views,
      icon: Eye,
      color: "text-purple-600"
    },
    {
      title: "総いいね数",
      value: analytics.totalLikes.toLocaleString(),
      change: analytics.growth.likes,
      icon: Heart,
      color: "text-red-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-800">クリエイターダッシュボード</h1>
              <p className="text-sm sm:text-base text-gray-600">コンテンツと収益を管理しましょう</p>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg bg-white shadow-sm border"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Sidebar */}
          <div className={`lg:col-span-1 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id)
                        setSidebarOpen(false)
                      }}
                      className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "bg-pink-500 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div key={index} className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
                        <div className="flex items-center justify-between mb-2 sm:mb-4">
                          <div className={`p-1.5 sm:p-2 rounded-lg ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                            <Icon className={`w-4 h-4 sm:w-6 sm:h-6 ${stat.color}`} />
                          </div>
                          <div className={`flex items-center gap-1 text-xs sm:text-sm ${
                            stat.change >= 0 ? "text-green-600" : "text-red-600"
                          }`}>
                            {stat.change >= 0 ? (
                              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                            ) : (
                              <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                            )}
                            {Math.abs(stat.change)}%
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{stat.title}</p>
                      </div>
                    )
                  })}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">最近の活動</h2>
                  <div className="space-y-4">
                    {recentPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">{post.title}</h3>
                          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mt-1">
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              ¥{post.earnings.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">{post.createdAt}</div>
                          <div className="text-xs text-green-600 font-medium">公開中</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "posts" && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-3 sm:p-6 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800">投稿管理</h2>
                    <button className="bg-pink-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-pink-600 transition-colors flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      新規投稿
                    </button>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="p-3 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-800 mb-1 text-sm sm:text-base truncate">{post.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-2">
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views}回閲覧
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {post.likes}いいね
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {post.comments}コメント
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              ¥{post.earnings.toLocaleString()}収益
                            </span>
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500">{post.createdAt}</div>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <button className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-600" title="編集">
                            <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-600" title="その他">
                            <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "subscribers" && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-3 sm:p-6 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800">購読者 ({subscribers.length})</h2>
                    <button className="text-pink-500 hover:text-pink-600 font-medium flex items-center gap-2 text-sm sm:text-base">
                      <Download className="w-4 h-4" />
                      エクスポート
                    </button>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {subscribers.map((subscriber) => (
                    <div key={subscriber.id} className="p-3 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          src={subscriber.avatar}
                          alt={subscriber.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">{subscriber.name}</h3>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mt-1">
                            <span>{subscriber.plan}</span>
                            <span>¥{subscriber.price}/月</span>
                            <span className="hidden sm:inline">加入日: {subscriber.joinDate}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs sm:text-sm text-green-600 font-medium">アクティブ</div>
                          <button className="text-xs sm:text-sm text-pink-500 hover:text-pink-600 mt-1">
                            メッセージ
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">パフォーマンス分析</h2>
                  <div className="h-48 sm:h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2" />
                      <p className="text-sm sm:text-base">グラフがここに表示されます</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
                    <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">人気の投稿</h3>
                    <div className="space-y-3">
                      {recentPosts.slice(0, 3).map((post, index) => (
                        <div key={post.id} className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                            {index + 1}
                          </div>
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-800 text-xs sm:text-sm truncate">{post.title}</h4>
                            <p className="text-xs text-gray-500">{post.views}回閲覧</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
                    <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">エンゲージメント</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-600">エンゲージメント率</span>
                        <span className="font-semibold text-gray-800 text-sm sm:text-base">{analytics.engagement}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-600">平均閲覧時間</span>
                        <span className="font-semibold text-gray-800 text-sm sm:text-base">2分34秒</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-600">リピート率</span>
                        <span className="font-semibold text-gray-800 text-sm sm:text-base">68%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "earnings" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">収益概要</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-3xl font-bold text-gray-800 mb-1">
                        ¥{analytics.totalEarnings.toLocaleString()}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">総収益</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-3xl font-bold text-gray-800 mb-1">
                        ¥{analytics.monthlyEarnings.toLocaleString()}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">今月の収益</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-3xl font-bold text-gray-800 mb-1">
                        ¥{Math.round(analytics.monthlyEarnings / 30).toLocaleString()}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">日平均収益</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
                  <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">収益の内訳</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">サブスクリプション</span>
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">¥{Math.round(analytics.monthlyEarnings * 0.7).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">個別投稿販売</span>
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">¥{Math.round(analytics.monthlyEarnings * 0.3).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">チップ・投げ銭</span>
                      <span className="font-semibold text-gray-800 text-sm sm:text-base">¥{Math.round(analytics.monthlyEarnings * 0.1).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">メッセージ管理</h2>
                <div className="text-center py-8 sm:py-12">
                  <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">メッセージ機能</h3>
                  <p className="text-sm sm:text-base text-gray-500">購読者からのメッセージを管理できます</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
