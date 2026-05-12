import { Cloud, TrendingUp, Users, Moon, Sparkles, Navigation } from 'lucide-react';

const aiRecommendations = [
  {
    icon: Cloud,
    title: '오늘 날씨에 어울리는 코스',
    subtitle: '맑은 날 야외 활동 추천',
    courses: [
      { name: '한강 피크닉', tag: '야외', people: '2-4명' },
      { name: '북한산 등산', tag: '활동적', people: '혼자/친구' },
      { name: '경복궁 산책', tag: '문화', people: '가족' }
    ],
    gradient: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-50'
  },
  {
    icon: TrendingUp,
    title: '지금 인기 있는 혼놀 코스',
    subtitle: '혼자서도 즐거운 하루',
    courses: [
      { name: '성수동 카페 투어', tag: '혼놀', people: '혼자' },
      { name: '코엑스 별마당 도서관', tag: '실내', people: '혼자' },
      { name: '이태원 갤러리 탐방', tag: '문화', people: '혼자' }
    ],
    gradient: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Users,
    title: '친구 3명 추천 루트',
    subtitle: '친구들과 즐기기 좋은 코스',
    courses: [
      { name: '홍대 맛집 투어', tag: '친구', people: '3-4명' },
      { name: '강남 볼링장 & 노래방', tag: '액티비티', people: '3-4명' },
      { name: '연남동 술집 탐방', tag: '친구', people: '3-4명' }
    ],
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Moon,
    title: '야경 드라이브 추천',
    subtitle: '밤하늘과 함께하는 코스',
    courses: [
      { name: '한강대교 야경 드라이브', tag: '야간', people: '커플' },
      { name: '남산타워 전망대', tag: '야경', people: '커플/친구' },
      { name: '여의도 불빛 산책', tag: '야간', people: '커플' }
    ],
    gradient: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50'
  }
];

export function AIRecommendSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="w-8 h-8 text-rose-500" />
          <div>
            <h2 className="text-4xl text-gray-900">
              AI 맞춤 추천
            </h2>
            <p className="text-gray-600 mt-1">실시간 분석으로 당신에게 딱 맞는 코스를 추천합니다</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiRecommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <div
                key={index}
                className={`${rec.bgColor} rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rec.gradient} flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-gray-900 mb-1">
                      {rec.title}
                    </h3>
                    <p className="text-sm text-gray-600">{rec.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {rec.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-gray-900 group-hover:text-rose-500 transition-colors">
                            {course.name}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                            {course.tag}
                          </span>
                          <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-xs">
                            {course.people}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-4 py-3 bg-gradient-to-r ${rec.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                  <Navigation className="w-4 h-4" />
                  <span>전체 코스 보기</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
