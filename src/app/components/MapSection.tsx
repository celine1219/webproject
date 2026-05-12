import { MapPin, Navigation, Clock, DollarSign, TrendingUp, Footprints, Search, Filter, KakaoMapSearch } from 'lucide-react';
import { useState } from 'react';


const allTimelines = [
  {
    time: '10:00',
    title: '성수동 감성 카페',
    description: '브런치와 함께하는 여유로운 시작',
    duration: '1.5시간',
    cost: '2만원',
    distance: '0km',
    fatigue: 0,
    type: 'cafe',
    region: '성수',
    foodType: '카페'
  },
  {
    time: '12:00',
    title: '성수 수제화 거리 산책',
    description: '독특한 분위기의 골목길 탐방',
    duration: '1시간',
    cost: '무료',
    distance: '1.2km',
    fatigue: 15,
    type: 'walk',
    region: '성수',
    foodType: null
  },
  {
    time: '13:30',
    title: '한강 선셋 피크닉',
    description: '준비한 간식과 함께 노을 감상',
    duration: '2시간',
    cost: '1만원',
    distance: '3.5km',
    fatigue: 30,
    type: 'outdoor',
    region: '여의도',
    foodType: null
  },
  {
    time: '16:00',
    title: '한남동 루프탑 디너',
    description: '특별한 야경과 함께하는 저녁',
    duration: '2시간',
    cost: '10만원',
    distance: '7.8km',
    fatigue: 50,
    type: 'restaurant',
    region: '한남',
    foodType: '양식'
  },
  {
    time: '11:00',
    title: '홍대 브런치 카페',
    description: '감성적인 인테리어의 브런치 명소',
    duration: '1.5시간',
    cost: '3만원',
    distance: '0km',
    fatigue: 0,
    type: 'cafe',
    region: '홍대',
    foodType: '브런치'
  },
  {
    time: '14:00',
    title: '강남 이탈리안 레스토랑',
    description: '정통 이탈리안 파스타와 피자',
    duration: '2시간',
    cost: '8만원',
    distance: '5km',
    fatigue: 35,
    type: 'restaurant',
    region: '강남',
    foodType: '이탈리안'
  },
  {
    time: '12:30',
    title: '익선동 한식당',
    description: '전통 한옥에서 즐기는 한정식',
    duration: '1.5시간',
    cost: '5만원',
    distance: '3km',
    fatigue: 25,
    type: 'restaurant',
    region: '익선동',
    foodType: '한식'
  },
  {
    time: '18:00',
    title: '이태원 일식 오마카세',
    description: '셰프가 직접 만드는 특별한 코스',
    duration: '2시간',
    cost: '15만원',
    distance: '6km',
    fatigue: 40,
    type: 'restaurant',
    region: '이태원',
    foodType: '일식'
  }
];

export function MapSection() {
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [selectedFoodType, setSelectedFoodType] = useState('전체');

  const regions = ['전체', '성수', '홍대', '강남', '한남', '익선동', '이태원', '여의도'];
  const foodTypes = ['전체', '카페', '브런치', '한식', '양식', '이탈리안', '일식'];

  const filteredTimeline = allTimelines.filter(item => {
    const regionMatch = selectedRegion === '전체' || item.region === selectedRegion;
    const foodMatch = selectedFoodType === '전체' || item.foodType === selectedFoodType;
    return regionMatch && foodMatch;
  });
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl mb-4 text-gray-900">
            코스 미리보기
          </h2>
          <p className="text-lg text-gray-600">
            하루 일정을 한눈에 확인하세요
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-12 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg text-gray-900">코스 검색</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                지역
              </label>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedRegion === region
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                식당 유형
              </label>
              <div className="flex flex-wrap gap-2">
                {foodTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedFoodType(type)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedFoodType === type
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredTimeline.length === 0 && (
            <div className="mt-6 text-center py-8 bg-white rounded-xl">
              <p className="text-gray-500">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>

        {filteredTimeline.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl text-gray-900">
                    {selectedRegion !== '전체' ? `${selectedRegion} 코스` : '추천 코스'}
                  </h3>
                  <span className="px-3 py-1 bg-rose-500 text-white rounded-full text-sm">
                    {filteredTimeline.length}개 장소
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>총 {filteredTimeline.reduce((acc, item) => acc + parseFloat(item.duration), 0).toFixed(1)}시간</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Footprints className="w-4 h-4" />
                    <span>{filteredTimeline.length}개 장소</span>
                  </div>
                </div>
              </div>

              {filteredTimeline.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-4 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  {index < filteredTimeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-rose-500 to-pink-300 mt-2"></div>
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-5 border border-gray-100">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-sm text-rose-500">
                          {item.time}
                        </span>
                        <h4 className="text-lg text-gray-900 mt-1">
                          {item.title}
                        </h4>
                      </div>
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {item.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{item.cost}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Footprints className="w-4 h-4" />
                        <span>{item.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>피로도 {item.fatigue}%</span>
                      </div>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          item.fatigue < 30 ? 'bg-green-500' : item.fatigue < 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${item.fatigue}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <Navigation className="w-16 h-16 text-rose-400 mx-auto mb-4" />
                <p className="text-gray-600">지도 영역</p>
                <p className="text-sm text-gray-500 mt-2">
                   {/*  실제 서비스에서는 KakaoMap API 연동  */}
                </p>
              </div>
            </div>

            <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>총 이동거리: 약 12.5km</span>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
