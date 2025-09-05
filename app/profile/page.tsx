import { Camera, MapPin, Calendar, Mountain, Trees, Waves, Settings, Share2 } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Cover Photo */}
          <div className="relative h-64 md:h-80">
            <img
              src="/majestic-mountain-landscape-with-lake-reflection.jpg"
              alt="Mountain landscape cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 right-4">
              <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors" title="設定">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Profile Picture */}
              <div className="relative -mt-20 md:-mt-24">
                <img
                  src="/nature-photographer-portrait.jpg"
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-[#ff1493] p-2 rounded-full">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Alex Rivers</h1>
                    <div className="flex items-center gap-4 text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Rocky Mountains, Colorado</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined March 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-[#ff1493] text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition-colors">
                      Follow
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors" title="シェア">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Professional nature photographer capturing the raw beauty of wilderness landscapes. Specializing in
                  mountain peaks, forest streams, and alpine lakes. Always seeking the perfect light to showcase
                  nature's magnificent artistry.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">247</div>
                    <div className="text-sm text-gray-600">Photos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">1.2K</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">89</div>
                    <div className="text-sm text-gray-600">Locations</div>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    <Mountain className="w-3 h-3" />
                    Mountain Photography
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    <Waves className="w-3 h-3" />
                    Water Features
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                    <Trees className="w-3 h-3" />
                    Forest Landscapes
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Sunrise/Sunset</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Wildlife</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Photos Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recent Captures</h2>
            <button className="text-[#ff1493] font-medium hover:text-pink-600 transition-colors">View All</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={`/serene-mountain-lake.png?height=200&width=200&query=nature landscape ${i + 1}`}
                    alt={`Nature photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment & Gear */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Photography Gear</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Camera Equipment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Canon EOS R5 Mirrorless Camera</li>
                <li>• Canon RF 24-70mm f/2.8L IS USM</li>
                <li>• Canon RF 70-200mm f/2.8L IS USM</li>
                <li>• Canon RF 16-35mm f/2.8L IS USM</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Outdoor Gear</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Peak Design Travel Tripod</li>
                <li>• Lowepro ProTactic BP 450 AW II</li>
                <li>• Circular Polarizing Filters</li>
                <li>• Neutral Density Filter Set</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
