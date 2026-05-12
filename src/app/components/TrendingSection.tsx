import { TrendingUp, Heart, Eye } from 'lucide-react';

const trendingKeywords = [
  { keyword: '성수동', count: '2.4k' },
  { keyword: '한강피크닉', count: '1.8k' },
  { keyword: '루프탑', count: '1.5k' },
  { keyword: '감성카페', count: '1.2k' },
  { keyword: '야경맛집', count: '980' },
  { keyword: '브런치', count: '856' },
  { keyword: '한옥카페', count: '742' },
  { keyword: '선셋', count: '698' }
];

const trendingPlaces = [
  {
    image: 'https://images.unsplash.com/photo-1682452057391-800e24d8454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '성수동 카페거리',
    views: '12.5k',
    likes: '3.2k',
    trending: 1
  },
  {
    image: 'https://images.unsplash.com/photo-1711923236198-4ae03a28e436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '홍대 감성 골목',
    views: '10.8k',
    likes: '2.9k',
    trending: 2
  },
  {
    image: 'https://images.unsplash.com/photo-1595817985981-1933b587b429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '한남동 루프탑',
    views: '9.2k',
    likes: '2.5k',
    trending: 3
  },
  {
    image: 'https://images.unsplash.com/photo-1776910733034-3e8fcee087dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '여의도 한강공원',
    views: '8.7k',
    likes: '2.3k',
    trending: 4
  }
];

export function TrendingSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-rose-500" />
          <h2 className="text-4xl text-gray-900">
            실시간 인기 트렌드
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-xl mb-4 text-gray-800">
            🔥 요즘 핫한 키워드
          </h3>
          <div className="flex flex-wrap gap-3">
            {trendingKeywords.map((item, index) => (
              <button
                key={index}
                className="px-5 py-2.5 bg-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500 hover:text-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-transparent group"
              >
                <span className="mr-2">#{item.keyword}</span>
                <span className="text-sm text-gray-500 group-hover:text-white/80">
                  {item.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-6 text-gray-800">
            📍 지금 가장 인기있는 데이트 지역
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingPlaces.map((place, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>#{place.trending}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg text-white mb-2">
                      {place.title}
                    </h4>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{place.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{place.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
