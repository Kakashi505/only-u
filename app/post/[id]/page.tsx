"use client"
import { useState } from "react"
import { Heart, MessageCircle, Share, Bookmark, Eye, Users, Star, ArrowLeft, Download, Flag, MoreHorizontal, MapPin } from "lucide-react"

interface PostDetailProps {
  params: {
    id: string
  }
}

export default function PostDetail({ params }: PostDetailProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Mock post data
  const post = {
    id: params.id,
    title: "Morning Beauty",
    description: "朝の美しい光の中で撮影した特別な一枚。自然の美しさを感じてください。\n\nこの写真は、早朝5時に山頂で撮影しました。雲海と朝日のコントラストが美しく、心に残る瞬間でした。\n\n#自然写真 #朝日 #山 #雲海 #風景",
    creator: {
      id: 1,
      name: "Sakura",
      username: "@sakura_photography",
      avatar: "/nature-photographer-portrait.jpg",
      isVerified: true,
      isOnline: true,
      followers: 15420
    },
    image: "/majestic-mountain-landscape-with-lake-reflection.jpg",
    price: 500,
    isFree: false,
    isPurchased: false,
    likes: 1247,
    views: 8934,
    comments: 23,
    shares: 45,
    createdAt: "2時間前",
    tags: ["ビューティー", "モーニング", "自然", "朝日", "山"],
    category: "ビューティー",
    location: "富士山, 日本"
  }

  const comments = [
    {
      id: 1,
      user: {
        name: "Yuki",
        avatar: "/river-explorer.jpg",
        isVerified: false
      },
      content: "素晴らしい写真ですね！朝日の美しさが伝わってきます。",
      likes: 12,
      createdAt: "1時間前",
      isLiked: false
    },
    {
      id: 2,
      user: {
        name: "Aoi",
        avatar: "/forest-wanderer.jpg",
        isVerified: true
      },
      content: "雲海と朝日のコントラストが絶景です！撮影場所を教えていただけますか？",
      likes: 8,
      createdAt: "45分前",
      isLiked: true
    },
    {
      id: 3,
      user: {
        name: "Hana",
        avatar: "/mountain-hikers-group.jpg",
        isVerified: false
      },
      content: "私も同じ場所で撮影したことがあります。本当に美しい場所ですね！",
      likes: 5,
      createdAt: "30分前",
      isLiked: false
    }
  ]

  const relatedPosts = [
    {
      id: 2,
      title: "Forest Dreams",
      creator: "Yuki",
      avatar: "/river-explorer.jpg",
      image: "/serene-forest-river-with-sunlight.jpg",
      price: 0,
      likes: 892,
      views: 4567
    },
    {
      id: 3,
      title: "Sunset Magic",
      creator: "Aoi",
      avatar: "/forest-wanderer.jpg",
      image: "/dramatic-mountain-sunset-with-clouds.jpg",
      price: 800,
      likes: 2156,
      views: 12345
    }
  ]

  const handlePurchase = () => {
    // Handle purchase logic
    console.log("Purchasing post for ¥", post.price)
  }

  const handleSubscribe = () => {
    // Handle subscription logic
    console.log("Subscribing to creator")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="w-5 h-5" />
          戻る
        </button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Post Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.creator.avatar}
                      alt={post.creator.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-800">{post.creator.name}</h3>
                        {post.creator.isVerified && (
                          <Star className="w-4 h-4 text-blue-500" />
                        )}
                        <div className={`w-2 h-2 rounded-full ${
                          post.creator.isOnline ? "bg-green-500" : "bg-gray-400"
                        }`} />
                      </div>
                      <p className="text-sm text-gray-500">{post.creator.username}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600" title="その他">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600" title="報告">
                      <Flag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Post Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto max-h-[600px] object-cover"
                />
                
                {/* Price Overlay */}
                {!post.isFree && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-pink-500 text-white px-4 py-2 rounded-full text-lg font-medium">
                      ¥{post.price}
                    </div>
                  </div>
                )}

                {/* Lock Overlay for Paid Content */}
                {!post.isFree && !post.isPurchased && !isSubscribed && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">🔒</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">プレミアムコンテンツ</h3>
                      <p className="text-lg mb-6">このコンテンツを閲覧するには購入が必要です</p>
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={handlePurchase}
                          className="bg-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors"
                        >
                          購入する (¥{post.price})
                        </button>
                        <button
                          onClick={handleSubscribe}
                          className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                        >
                          プランに加入
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Post Info */}
              <div className="p-4">
                <h1 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h1>
                <p className="text-gray-600 whitespace-pre-line mb-4">{post.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-pink-100 hover:text-pink-600 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {post.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views.toLocaleString()}回閲覧
                    </div>
                    <span>{post.createdAt}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center gap-2 transition-colors ${
                        isLiked ? "text-red-500" : "text-gray-600 hover:text-red-500"
                      }`}
                      title="いいね"
                    >
                      <Heart className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`} />
                      <span className="font-medium">{post.likes + (isLiked ? 1 : 0)}</span>
                    </button>
                    <button
                      onClick={() => setShowComments(!showComments)}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                      title="コメント"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-500" title="シェア">
                      <Share className="w-6 h-6" />
                      <span className="font-medium">{post.shares}</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-2 transition-colors ${
                        isBookmarked ? "text-yellow-500" : "text-gray-600 hover:text-yellow-500"
                      }`}
                      title="ブックマーク"
                    >
                      <Bookmark className={`w-6 h-6 ${isBookmarked ? "fill-current" : ""}`} />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800" title="ダウンロード">
                      <Download className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            {showComments && (
              <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">コメント ({post.comments})</h3>
                
                {/* Comment Input */}
                <div className="mb-6">
                  <div className="flex gap-3">
                    <img
                      src="/placeholder-user.jpg"
                      alt="Your avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="コメントを入力..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                      投稿
                    </button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <img
                        src={comment.user.avatar}
                        alt={comment.user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-800">{comment.user.name}</span>
                          {comment.user.isVerified && (
                            <Star className="w-4 h-4 text-blue-500" />
                          )}
                          <span className="text-sm text-gray-500">{comment.createdAt}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{comment.content}</p>
                        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500" title="いいね">
                          <Heart className="w-4 h-4" />
                          {comment.likes}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Creator Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="text-center">
                <img
                  src={post.creator.avatar}
                  alt={post.creator.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h3 className="font-semibold text-gray-800 mb-1">{post.creator.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{post.creator.username}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-4">
                  <Users className="w-4 h-4" />
                  {post.creator.followers.toLocaleString()}フォロワー
                </div>
                <button className="w-full bg-pink-500 text-white py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                  フォロー
                </button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">関連投稿</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="flex gap-3 cursor-pointer group">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-sm mb-1 group-hover:text-pink-600">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-1">{relatedPost.creator}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {relatedPost.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {relatedPost.views}
                        </span>
                        {relatedPost.price > 0 && (
                          <span className="text-pink-500 font-medium">¥{relatedPost.price}</span>
                        )}
                        {relatedPost.price === 0 && (
                          <span className="text-green-500 font-medium">無料</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
