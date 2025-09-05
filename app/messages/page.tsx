"use client"
import { useState } from "react"
import { Search, MoreHorizontal, Send, Phone, Video, Filter, Users, Star, Heart, Megaphone, Plus, Image as ImageIcon, FileText, Smile } from "lucide-react"

interface Conversation {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  isGroup: boolean
  isCreator: boolean
  isVerified: boolean
  lastActive: string
}

interface BroadcastRecipient {
  id: number
  name: string
  avatar: string
  isSubscriber: boolean
  plan: string | null
}

export default function MessagesPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)
  const [showBroadcastModal, setShowBroadcastModal] = useState(false)
  const [messageText, setMessageText] = useState("")
  const [broadcastMessage, setBroadcastMessage] = useState("")
  const [broadcastImage, setBroadcastImage] = useState<File | null>(null)
  const [selectedRecipients, setSelectedRecipients] = useState<number[]>([])

  const conversations = [
    {
      id: 1,
      name: "Sakura",
      avatar: "/nature-photographer-portrait.jpg",
      lastMessage: "新しい写真を投稿しました！チェックしてくださいね",
      time: "2分前",
      unread: 3,
      isGroup: false,
      isCreator: true,
      isVerified: true,
      lastActive: "オンライン"
    },
    {
      id: 2,
      name: "Aoi",
      avatar: "/forest-wanderer.jpg",
      lastMessage: "ありがとうございます！とても参考になりました",
      time: "15分前",
      unread: 1,
      isGroup: false,
      isCreator: true,
      isVerified: true,
      lastActive: "1時間前"
    },
    {
      id: 3,
      name: "Yuki",
      avatar: "/river-explorer.jpg",
      lastMessage: "今度一緒に撮影に行きませんか？",
      time: "1時間前",
      unread: 0,
      isGroup: false,
      isCreator: false,
      isVerified: false,
      lastActive: "2時間前"
    },
    {
      id: 4,
      name: "Hana",
      avatar: "/mountain-hikers-group.jpg",
      lastMessage: "山の写真、素晴らしいですね！",
      time: "2時間前",
      unread: 0,
      isGroup: false,
      isCreator: true,
      isVerified: false,
      lastActive: "3時間前"
    },
    {
      id: 5,
      name: "Kai",
      avatar: "/river-explorer.jpg",
      lastMessage: "川の撮影スポットを教えていただき、ありがとうございました",
      time: "3時間前",
      unread: 0,
      isGroup: false,
      isCreator: true,
      isVerified: true,
      lastActive: "4時間前"
    },
    {
      id: 6,
      name: "Maya",
      avatar: "/nature-photographer-portrait.jpg",
      lastMessage: "夕日の写真、感動しました！",
      time: "5時間前",
      unread: 0,
      isGroup: false,
      isCreator: true,
      isVerified: true,
      lastActive: "6時間前"
    }
  ]

  const filters = [
    { id: "all", label: "すべて" },
    { id: "individual", label: "個別送信のみ" },
    { id: "broadcast", label: "ブロードキャスト" },
    { id: "unread", label: "未読のみ" },
    { id: "hidden", label: "非表示" }
  ]

  const broadcastRecipients = [
    { id: 1, name: "Sakura", avatar: "/nature-photographer-portrait.jpg", isSubscriber: true, plan: "プレミアム" },
    { id: 2, name: "Aoi", avatar: "/forest-wanderer.jpg", isSubscriber: true, plan: "ベーシック" },
    { id: 3, name: "Yuki", avatar: "/river-explorer.jpg", isSubscriber: false, plan: null },
    { id: 4, name: "Hana", avatar: "/mountain-hikers-group.jpg", isSubscriber: true, plan: "VIP" },
    { id: 5, name: "Kai", avatar: "/river-explorer.jpg", isSubscriber: true, plan: "プレミアム" },
    { id: 6, name: "Maya", avatar: "/nature-photographer-portrait.jpg", isSubscriber: false, plan: null }
  ]

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle sending message
      console.log("Sending message:", messageText)
      setMessageText("")
    }
  }

  const handleBroadcast = () => {
    if (broadcastMessage.trim() && selectedRecipients.length > 0) {
      // Handle broadcast
      console.log("Broadcasting to:", selectedRecipients, "Message:", broadcastMessage)
      setBroadcastMessage("")
      setSelectedRecipients([])
      setShowBroadcastModal(false)
    }
  }

  const toggleRecipient = (recipient: BroadcastRecipient) => {
    setSelectedRecipients(prev => 
      prev.includes(recipient.id) 
        ? prev.filter(id => id !== recipient.id)
        : [...prev, recipient.id]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">メッセージ</h1>
            <button
              onClick={() => setShowBroadcastModal(true)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors flex items-center gap-2"
            >
              <Megaphone className="w-4 h-4" />
              ブロードキャスト
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
                placeholder="会話を検索..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                title="フィルターオプション"
              >
                {filters.map((filter) => (
                  <option key={filter.id} value={filter.id}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">会話</h2>
            </div>

              <div className="divide-y divide-gray-200">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedConversation?.id === conversation.id ? "bg-pink-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                          src={conversation.avatar}
                          alt={conversation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                        {conversation.isVerified && (
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                            <Star className="w-3 h-3" />
                          </div>
                        )}
                        <div className={`absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          conversation.lastActive === "オンライン" ? "bg-green-500" : "bg-gray-400"
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-gray-800 truncate">
                            {conversation.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">{conversation.time}</span>
                            {conversation.unread > 0 && (
                              <div className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                                {conversation.unread}
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-1">
                          {conversation.lastMessage}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{conversation.lastActive}</span>
                          {conversation.isCreator && (
                            <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded">
                              クリエイター
                            </span>
                          )}
                        </div>
                      </div>
                </div>
              </div>
            ))}
              </div>
          </div>
        </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            {selectedConversation ? (
              <div className="bg-white rounded-2xl shadow-sm h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
              <div className="relative">
                <img
                          src={selectedConversation.avatar}
                          alt={selectedConversation.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {selectedConversation.isVerified && (
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                            <Star className="w-3 h-3" />
                  </div>
                )}
                        <div className={`absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          selectedConversation.lastActive === "オンライン" ? "bg-green-500" : "bg-gray-400"
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{selectedConversation.name}</h3>
                        <p className="text-sm text-gray-500">{selectedConversation.lastActive}</p>
                      </div>
              </div>
                  <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600" title="通話">
                        <Phone className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600" title="ビデオ通話">
                        <Video className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600" title="その他">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {/* Sample messages */}
                    <div className="flex justify-end">
                      <div className="bg-pink-500 text-white px-4 py-2 rounded-lg max-w-xs">
                        <p className="text-sm">こんにちは！</p>
                        <p className="text-xs opacity-75 mt-1">2分前</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                        <p className="text-sm">こんにちは！ありがとうございます</p>
                        <p className="text-xs text-gray-500 mt-1">1分前</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-pink-500 text-white px-4 py-2 rounded-lg max-w-xs">
                        <p className="text-sm">新しい写真を投稿しました！</p>
                        <p className="text-xs opacity-75 mt-1">今</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600" title="ハート">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600" title="画像">
                      <ImageIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600" title="絵文字">
                      <Smile className="w-5 h-5" />
                    </button>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="メッセージを入力..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    <button 
                      onClick={handleSendMessage}
                      className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600"
                      title="送信"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-gray-400" />
            </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">会話を選択</h3>
                  <p className="text-gray-500">左側から会話を選択してメッセージを開始してください</p>
        </div>
              </div>
            )}
          </div>
        </div>

        {/* Broadcast Modal */}
        {showBroadcastModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">ブロードキャスト送信</h2>
                  <button
                    onClick={() => setShowBroadcastModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
            </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {/* Recipients Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">送信先選択</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {broadcastRecipients.map((recipient) => (
                      <div
                        key={recipient.id}
                        onClick={() => toggleRecipient(recipient)}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          selectedRecipients.includes(recipient.id)
                            ? "border-pink-500 bg-pink-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={recipient.avatar}
                            alt={recipient.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{recipient.name}</h4>
                            <div className="flex items-center gap-2">
                              {recipient.isSubscriber ? (
                                <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded">
                                  {recipient.plan}プラン
                                </span>
                              ) : (
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                  フォロワー
                                </span>
                              )}
                            </div>
                          </div>
                          <div className={`w-5 h-5 rounded border-2 ${
                            selectedRecipients.includes(recipient.id)
                              ? "bg-pink-500 border-pink-500"
                              : "border-gray-300"
                          }`}>
                            {selectedRecipients.includes(recipient.id) && (
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">メッセージ内容</h3>
                  <div className="space-y-4">
                    <div>
                      <textarea
                        value={broadcastMessage}
                        onChange={(e) => setBroadcastMessage(e.target.value)}
                        placeholder="ブロードキャストメッセージを入力..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                      />
                    </div>
                    
                    {/* Image Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        画像（任意）
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">画像をアップロード</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setBroadcastImage(e.target.files?.[0] || null)}
                          className="hidden"
                          id="broadcastImage"
                        />
                        <label htmlFor="broadcastImage" className="mt-2 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg cursor-pointer text-sm">
                          選択
                        </label>
                      </div>
                      {broadcastImage && (
                        <p className="text-sm text-green-600 mt-2">✓ {broadcastImage.name}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Preview */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">プレビュー</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="/nature-photographer-portrait.jpg"
                        alt="You"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">あなた</h4>
                        <p className="text-xs text-gray-500">ブロードキャスト</p>
                      </div>
                    </div>
                    {broadcastMessage && (
                      <p className="text-sm text-gray-700 mb-2">{broadcastMessage}</p>
                    )}
                    {broadcastImage && (
                      <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      {selectedRecipients.length}人に送信
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => setShowBroadcastModal(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  キャンセル
                </button>
                <button
                  onClick={handleBroadcast}
                  disabled={!broadcastMessage.trim() || selectedRecipients.length === 0}
                  className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  送信する ({selectedRecipients.length}人)
            </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}