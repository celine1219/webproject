import { MapPin, Instagram, Youtube, Twitter, TrendingUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <MapPin className="w-6 h-6 text-rose-500 fill-rose-500" />
                <TrendingUp className="w-3 h-3 text-orange-500 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-rose-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                RoutePick
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI가 추천하는 완벽한 코스.<br />
              데이트, 혼자놀기, 여행까지 당신만의 특별한 하루를 만들어보세요.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-rose-500 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-rose-500 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-rose-500 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">서비스</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  추천 코스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  인기 지역
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  저장한 코스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  리뷰 작성
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">고객 지원</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  공지사항
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  파트너 신청
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 TrendDate. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-rose-500 transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-rose-500 transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-rose-500 transition-colors">
                위치기반서비스
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
