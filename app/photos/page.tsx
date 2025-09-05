import { Search, Filter, Grid3X3, List, Heart, Share, Download, Camera, MapPin, Calendar, Eye } from "lucide-react"

export default function PhotosPage() {
  const photoCategories = [
    { name: "All Photos", count: 247, active: true },
    { name: "Mountains", count: 89, active: false },
    { name: "Forests", count: 64, active: false },
    { name: "Rivers", count: 43, active: false },
    { name: "Wildlife", count: 31, active: false },
    { name: "Sunsets", count: 20, active: false },
  ]

  const photos = [
    {
      id: 1,
      src: "/majestic-mountain-landscape-with-lake-reflection.jpg",
      title: "Alpine Lake Reflection",
      location: "Banff National Park",
      date: "2024-03-15",
      likes: 124,
      views: 1847,
      category: "Mountains",
      description: "Perfect mirror reflection of snow-capped peaks in pristine alpine lake",
    },
    {
      id: 2,
      src: "/serene-forest-river-with-sunlight.jpg",
      title: "Forest Stream",
      location: "Olympic National Park",
      date: "2024-03-12",
      likes: 89,
      views: 1203,
      category: "Forests",
      description: "Sunlight filtering through ancient trees onto a peaceful stream",
    },
    {
      id: 3,
      src: "/dramatic-mountain-sunset-with-clouds.jpg",
      title: "Mountain Sunset",
      location: "Rocky Mountain National Park",
      date: "2024-03-10",
      likes: 156,
      views: 2341,
      category: "Sunsets",
      description: "Dramatic golden hour light painting the mountain peaks",
    },
    {
      id: 4,
      src: "/pristine-alpine-lake-with-mountain-reflection.jpg",
      title: "Crystal Clear Waters",
      location: "Glacier National Park",
      date: "2024-03-08",
      likes: 98,
      views: 1456,
      category: "Mountains",
      description: "Pristine alpine lake with perfect mountain reflections",
    },
    {
      id: 5,
      src: "/mountain-landscape.jpg",
      title: "Valley Vista",
      location: "Yosemite National Park",
      date: "2024-03-05",
      likes: 142,
      views: 1987,
      category: "Mountains",
      description: "Sweeping valley view from granite peaks",
    },
    {
      id: 6,
      src: "/forest-river.jpg",
      title: "Woodland Creek",
      location: "Great Smoky Mountains",
      date: "2024-03-03",
      likes: 76,
      views: 934,
      category: "Forests",
      description: "Moss-covered rocks and flowing water in ancient forest",
    },
    {
      id: 7,
      src: "/mountain-sunset.jpg",
      title: "Peak Glow",
      location: "Mount Rainier",
      date: "2024-03-01",
      likes: 189,
      views: 2876,
      category: "Sunsets",
      description: "Alpenglow illuminating snow-covered summit",
    },
    {
      id: 8,
      src: "/serene-forest-river-with-sunlight.jpg",
      title: "Misty Morning",
      location: "Cascade Range",
      date: "2024-02-28",
      likes: 67,
      views: 823,
      category: "Forests",
      description: "Fog rolling through evergreen forest at dawn",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-800">Nature Gallery</h1>
            <div className="flex items-center gap-3">
              <button className="text-gray-600 hover:text-gray-800" title="フィルター">
                <Filter className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-800" title="グリッド表示">
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-800" title="リスト表示">
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search photos by location, date, or category..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-[#ff1493] focus:bg-white transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {photoCategories.map((category) => (
              <button
                key={category.name}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active ? "bg-[#ff1493] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white px-4 py-3 border-b border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>247 photos • 12.3K total views • 1.8K likes</span>
            <div className="flex items-center gap-4">
              <span>Sort by: Recent</span>
              <button className="flex items-center gap-2 px-3 py-1 bg-[#ff1493] text-white rounded-full text-xs">
                <Camera className="w-4 h-4" />
                Upload Photo
              </button>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="relative aspect-square">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                      <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-gray-700 hover:bg-opacity-100" title="いいね">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-gray-700 hover:bg-opacity-100" title="シェア">
                        <Share className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-gray-700 hover:bg-opacity-100" title="ダウンロード">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded-full">
                      {photo.category}
                    </span>
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 truncate">{photo.title}</h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">{photo.description}</p>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{photo.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(photo.date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{photo.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{photo.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="p-4 text-center">
          <button className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
            Load More Photos
          </button>
        </div>
      </div>
    </div>
  )
}
