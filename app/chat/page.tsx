import {
  ArrowLeft,
  Phone,
  Video,
  MoreVertical,
  Camera,
  Mic,
  Send,
  MapPin,
  ImageIcon,
  Smile,
  Paperclip,
} from "lucide-react"

export default function ChatPage() {
  const messages = [
    {
      id: 1,
      sender: "Alex Rivers",
      avatar: "/nature-photographer-portrait.jpg",
      message:
        "Hey! Just got back from the most incredible hike at Eagle Peak. The sunrise was absolutely breathtaking!",
      time: "9:15 AM",
      isMe: false,
      type: "text",
    },
    {
      id: 2,
      sender: "Me",
      message: "That sounds amazing! I've been wanting to check out Eagle Peak. How was the trail difficulty?",
      time: "9:18 AM",
      isMe: true,
      type: "text",
    },
    {
      id: 3,
      sender: "Alex Rivers",
      avatar: "/nature-photographer-portrait.jpg",
      message:
        "It's moderate difficulty, about 6 miles round trip. The first 3 miles are pretty steep but totally worth it for the views!",
      time: "9:20 AM",
      isMe: false,
      type: "text",
    },
    {
      id: 4,
      sender: "Alex Rivers",
      avatar: "/nature-photographer-portrait.jpg",
      image: "/dramatic-mountain-sunset-with-clouds.jpg",
      message: "Here's the view from the summit this morning",
      time: "9:21 AM",
      isMe: false,
      type: "image",
    },
    {
      id: 5,
      sender: "Me",
      message:
        "WOW! That's incredible! The colors are absolutely stunning. What time did you start hiking to catch that sunrise?",
      time: "9:25 AM",
      isMe: true,
      type: "text",
    },
    {
      id: 6,
      sender: "Alex Rivers",
      avatar: "/nature-photographer-portrait.jpg",
      message:
        "Started around 5:30 AM. It was still dark but I had my headlamp. The trail is well-marked so it's pretty safe even in the dark.",
      time: "9:27 AM",
      isMe: false,
      type: "text",
    },
    {
      id: 7,
      sender: "Me",
      message:
        "That's dedication! I'm definitely adding this to my weekend plans. Any other gear recommendations besides the headlamp?",
      time: "9:30 AM",
      isMe: true,
      type: "text",
    },
    {
      id: 8,
      sender: "Alex Rivers",
      avatar: "/nature-photographer-portrait.jpg",
      message:
        "Definitely bring layers - it gets cold at the summit! Also, plenty of water and some snacks. The trail can be rocky in places so good hiking boots are essential.",
      time: "9:32 AM",
      isMe: false,
      type: "text",
    },
    {
      id: 9,
      sender: "Alex Rivers",
      avatar: "/nature-photographer-portrait.jpg",
      location: "Eagle Peak Trailhead, Rocky Mountain National Park",
      message: "Here's the exact trailhead location if you want to save it",
      time: "9:33 AM",
      isMe: false,
      type: "location",
    },
    {
      id: 10,
      sender: "Me",
      message:
        "Perfect! Thanks for sharing the location. I'll probably head out there this Saturday if the weather holds up.",
      time: "9:35 AM",
      isMe: true,
      type: "text",
    },
    {
      id: 11,
      sender: "Alex Rivers",
      avatar: "/nature-photographer-portrait.jpg",
      message:
        "Weather looks great for Saturday! Let me know how it goes. I might be doing the Crystal Lake trail that day if you're interested in joining.",
      time: "9:37 AM",
      isMe: false,
      type: "text",
    },
    {
      id: 12,
      sender: "Me",
      message: "That could be fun! I'll let you know after I tackle Eagle Peak. Thanks for all the tips! 🏔️",
      time: "9:40 AM",
      isMe: true,
      type: "text",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-gray-800" title="戻る">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <img
            src="/nature-photographer-portrait.jpg"
            alt="Alex Rivers"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">Alex Rivers</h2>
            <p className="text-sm text-green-500">Active now</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-blue-500" title="通話">
            <Phone className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-blue-500" title="ビデオ通話">
            <Video className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800" title="その他">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.isMe ? "flex-row-reverse" : "flex-row"}`}>
            {!message.isMe && (
              <img
                src={message.avatar || "/placeholder.svg"}
                alt={message.sender}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
            )}

            <div className={`max-w-xs lg:max-w-md ${message.isMe ? "ml-auto" : "mr-auto"}`}>
              {message.type === "text" && (
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    message.isMe
                      ? "bg-[#ff1493] text-white rounded-br-md"
                      : "bg-white text-gray-800 rounded-bl-md border border-gray-200"
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                </div>
              )}

              {message.type === "image" && (
                <div className="space-y-2">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={message.image || "/placeholder.svg"}
                      alt="Shared photo"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  {message.message && (
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.isMe
                          ? "bg-[#ff1493] text-white rounded-br-md"
                          : "bg-white text-gray-800 rounded-bl-md border border-gray-200"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                    </div>
                  )}
                </div>
              )}

              {message.type === "location" && (
                <div className="space-y-2">
                  <div
                    className={`p-3 rounded-2xl border ${
                      message.isMe
                        ? "bg-[#ff1493] text-white border-pink-400 rounded-br-md"
                        : "bg-white text-gray-800 border-gray-200 rounded-bl-md"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">Location</span>
                    </div>
                    <p className="text-sm">{message.location}</p>
                    <button className="text-xs underline mt-1 opacity-80">View on map</button>
                  </div>
                  {message.message && (
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.isMe
                          ? "bg-[#ff1493] text-white rounded-br-md"
                          : "bg-white text-gray-800 rounded-bl-md border border-gray-200"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                    </div>
                  )}
                </div>
              )}

              <p className={`text-xs text-gray-500 mt-1 ${message.isMe ? "text-right" : "text-left"}`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <button className="text-gray-500 hover:text-[#ff1493]" title="ファイル添付">
            <Paperclip className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-[#ff1493]" title="カメラ">
            <Camera className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-[#ff1493]" title="画像">
            <ImageIcon className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-[#ff1493]" title="位置情報">
            <MapPin className="w-5 h-5" />
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type a message about your nature adventures..."
              className="w-full px-4 py-2 bg-gray-100 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#ff1493] focus:bg-white transition-all pr-12"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#ff1493]" title="絵文字">
              <Smile className="w-5 h-5" />
            </button>
          </div>

          <button className="text-gray-500 hover:text-[#ff1493]" title="音声メッセージ">
            <Mic className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-[#ff1493] rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors" title="送信">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
