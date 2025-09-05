"use client"
import { useState } from "react"
import { User, Settings, CreditCard, Bell, Shield, LogOut, Edit, Camera, Star, Users, Heart, Eye } from "lucide-react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const user = {
    name: "田中 花子",
    email: "hanako@example.com",
    avatar: "/nature-photographer-portrait.jpg",
    bio: "自然愛好家・写真家。美しい瞬間を共有しています。",
    joinDate: "2024年1月",
    isCreator: true,
    isVerified: true,
    stats: {
      followers: 15420,
      following: 892,
      posts: 89,
      likes: 12567
    }
  }

  const subscriptions = [
    {
      id: 1,
      creator: "Sakura",
      avatar: "/nature-photographer-portrait.jpg",
      plan: "プレミアムプラン",
      price: 1500,
      nextBilling: "2024-04-15",
      status: "active"
    },
    {
      id: 2,
      creator: "Aoi",
      avatar: "/forest-wanderer.jpg",
      plan: "ベーシックプラン",
      price: 800,
      nextBilling: "2024-04-20",
      status: "active"
    }
  ]

  const purchaseHistory = [
    {
      id: 1,
      title: "Morning Beauty",
      creator: "Sakura",
      price: 500,
      date: "2024-03-15",
      status: "completed"
    },
    {
      id: 2,
      title: "Sunset Magic",
      creator: "Aoi",
      price: 800,
      date: "2024-03-10",
      status: "completed"
    }
  ]

  const tabs = [
    { id: "profile", label: "プロフィール", icon: User },
    { id: "subscriptions", label: "購読管理", icon: CreditCard },
    { id: "purchases", label: "購入履歴", icon: Heart },
    { id: "settings", label: "設定", icon: Settings },
    { id: "creator", label: "クリエイター", icon: Star }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">アカウント設定</h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  {user.isVerified && (
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                      <Star className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <h2 className="font-semibold text-gray-800 mt-3">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
                {user.isCreator && (
                  <div className="mt-2 px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full">
                    クリエイター
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{user.stats.followers.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">フォロワー</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{user.stats.following.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">フォロー中</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{user.stats.posts}</div>
                  <div className="text-xs text-gray-500">投稿</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">{user.stats.likes.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">いいね</div>
                </div>
              </div>

              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
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
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">プロフィール設定</h2>
                  <button className="flex items-center gap-2 text-pink-500 hover:text-pink-600">
                    <Edit className="w-4 h-4" />
                    編集
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <button className="absolute bottom-0 right-0 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600" title="プロフィール写真を変更">
                        <Camera className="w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                      <p className="text-gray-500">{user.email}</p>
                      <p className="text-sm text-gray-500 mt-1">参加日: {user.joinDate}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">自己紹介</label>
                    <textarea
                      value={user.bio}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      rows={3}
                      placeholder="自己紹介を入力してください"
                      title="自己紹介"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">名前</label>
                      <input
                        type="text"
                        value={user.name}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="名前を入力してください"
                        title="名前"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="メールアドレスを入力してください"
                        title="メールアドレス"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                      保存
                    </button>
                    <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      キャンセル
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "subscriptions" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">購読管理</h2>
                
                <div className="space-y-4">
                  {subscriptions.map((subscription) => (
                    <div key={subscription.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={subscription.avatar}
                            alt={subscription.creator}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-medium text-gray-800">{subscription.creator}</h3>
                            <p className="text-sm text-gray-500">{subscription.plan}</p>
                            <p className="text-sm text-gray-500">次回請求: {subscription.nextBilling}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-800">¥{subscription.price}/月</div>
                          <div className={`text-sm ${
                            subscription.status === "active" ? "text-green-600" : "text-red-600"
                          }`}>
                            {subscription.status === "active" ? "アクティブ" : "停止中"}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">
                          管理
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
                          解約
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "purchases" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">購入履歴</h2>
                
                <div className="space-y-4">
                  {purchaseHistory.map((purchase) => (
                    <div key={purchase.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-800">{purchase.title}</h3>
                          <p className="text-sm text-gray-500">by {purchase.creator}</p>
                          <p className="text-sm text-gray-500">購入日: {purchase.date}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-800">¥{purchase.price}</div>
                          <div className="text-sm text-green-600">完了</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">設定</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-4">通知設定</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">新しい投稿の通知</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-pink-500" title="新しい投稿の通知" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">メッセージの通知</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-pink-500" title="メッセージの通知" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">いいねの通知</span>
                        <input type="checkbox" className="w-4 h-4 text-pink-500" title="いいねの通知" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-4">プライバシー設定</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">プロフィールを公開</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-pink-500" title="プロフィールを公開" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">オンライン状態を表示</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-pink-500" title="オンライン状態を表示" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-4">アカウント</h3>
                    <div className="space-y-3">
                      <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        パスワードを変更
                      </button>
                      <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        メールアドレスを変更
                      </button>
                      <button className="w-full text-left px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                        アカウントを削除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "creator" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">クリエイターセンター</h2>
                
                <div className="space-y-6">
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">クリエイター登録済み</h3>
                    <p className="text-sm text-gray-600">あなたは認証済みクリエイターです。</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                      <h3 className="font-medium text-gray-800 mb-2">投稿管理</h3>
                      <p className="text-sm text-gray-600">投稿の作成・編集・削除</p>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                      <h3 className="font-medium text-gray-800 mb-2">プラン管理</h3>
                      <p className="text-sm text-gray-600">サブスクリプションプランの設定</p>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                      <h3 className="font-medium text-gray-800 mb-2">収益管理</h3>
                      <p className="text-sm text-gray-600">売上・振込先の管理</p>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                      <h3 className="font-medium text-gray-800 mb-2">アナリティクス</h3>
                      <p className="text-sm text-gray-600">パフォーマンス分析</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
