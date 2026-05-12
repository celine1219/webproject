import { MapPin, User, TrendingUp } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="relative">
              <MapPin className="w-6 h-6 text-rose-500 fill-rose-500" />
              <TrendingUp className="w-3 h-3 text-orange-500 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-rose-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              RoutePick
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-rose-500 transition-colors">
              홈
            </a>
            <a href="#courses" className="text-gray-700 hover:text-rose-500 transition-colors">
              추천코스
            </a>
            <a href="#popular" className="text-gray-700 hover:text-rose-500 transition-colors">
              인기지역
            </a>
            <a href="#saved" className="text-gray-700 hover:text-rose-500 transition-colors">
              저장한코스
            </a>
            <a href="#trend" className="text-gray-700 hover:text-rose-500 transition-colors">
              트렌드
            </a>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 via-orange-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-300">
            <User className="w-4 h-4" />
            <span>로그인</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
