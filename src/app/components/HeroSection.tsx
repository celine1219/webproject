import { MapPin, Sparkles, Search, Users, Car, Bus, Footprints } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { TimePickerClock } from './TimePickerClock';
import { BudgetSlider } from './BudgetSlider';
import { useState } from 'react';

export function HeroSection() {
  const [transport, setTransport] = useState('walk');

  const transportOptions = [
    { id: 'walk', label: '도보', icon: Footprints },
    { id: 'public', label: '대중교통', icon: Bus },
    { id: 'car', label: '자동차', icon: Car }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1682452057391-800e24d8454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGhvbmdkYWUlMjBzdHJlZXQlMjBhZXN0aGV0aWMlMjBldmVuaW5nfGVufDF8fHx8MTc3ODA0MzE5OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Seoul street at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">
            AI가 만드는 완벽한 하루
          </h1>
          <p className="text-xl text-white/90">
            데이트 · 혼자놀기 · 여행까지, 당신만의 특별한 코스를 추천해드립니다
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                지역
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500">
                <option>서울 전체</option>
                <option>강남/신사</option>
                <option>홍대/연남</option>
                <option>성수/건대</option>
                <option>이태원/한남</option>
                <option>북촌/익선동</option>
                <option>부산</option>
                <option>제주</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                인원
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500">
                <option>혼자</option>
                <option>커플</option>
                <option>친구 3-4명</option>
                <option>가족</option>
                <option>단체</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <Sparkles className="w-4 h-4" />
                코스 유형
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500">
                <option>혼자 힐링 카페 코스</option>
                <option>친구들과 노는 홍대 코스</option>
                <option>야간 드라이브 코스</option>
                <option>비오는날 실내 코스</option>
                <option>당일치기 여행 코스</option>
                <option>데이트 코스</option>
                <option>가족 나들이</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <Car className="w-4 h-4" />
                이동수단
              </label>
              <div className="flex gap-2">
                {transportOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setTransport(option.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-3 rounded-xl border transition-all text-sm ${
                        transport === option.id
                          ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white border-transparent shadow-md'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-rose-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <BudgetSlider onBudgetChange={(budget) => {
              console.log('Budget:', budget);
            }} />
          </div>

          <div className="mb-6">
            <TimePickerClock onTimeChange={(start, end) => {
              console.log('Time range:', start, end);
            }} />
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-rose-500 via-orange-500 to-pink-500 text-white rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-lg">AI 코스 추천받기</span>
          </button>
        </div>
      </div>
    </section>
  );
}
