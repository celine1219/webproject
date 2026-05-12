import { Star, DollarSign, Clock, Sparkles, Bookmark, Navigation, TrendingUp, Users, Zap } from 'lucide-react';

interface EnhancedCourseCardProps {
  image: string;
  title: string;
  category: string;
  rating: number;
  price: string;
  duration: string;
  emotionScore: number;
  tags?: string[];
  distance?: string;
  peopleRecommend?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  fatigue?: number;
}

export function EnhancedCourseCard({
  image,
  title,
  category,
  rating,
  price,
  duration,
  emotionScore,
  tags = [],
  distance = '2.5km',
  peopleRecommend = '혼놀 추천',
  difficulty = 'easy',
  fatigue = 30
}: EnhancedCourseCardProps) {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700'
  };

  const difficultyLabels = {
    easy: '쉬움',
    medium: '보통',
    hard: '어려움'
  };

  const peopleRecommendColors: Record<string, string> = {
    '혼놀 추천': 'bg-purple-500',
    '친구 추천': 'bg-blue-500',
    '데이트 추천': 'bg-rose-500',
    '가족 추천': 'bg-green-500'
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-rose-500 hover:text-white transition-colors">
          <Bookmark className="w-4 h-4" />
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <div className="bg-rose-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
            {category}
          </div>
          <div className={`${peopleRecommendColors[peopleRecommend] || 'bg-purple-500'}/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-1`}>
            <Users className="w-3 h-3" />
            {peopleRecommend}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg mb-3 text-gray-900 line-clamp-1">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-700">{rating.toFixed(1)}</span>
          </div>

          <div className="flex items-center gap-1 text-rose-500">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">감성 {emotionScore}점</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>{price}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Navigation className="w-4 h-4" />
            <span>{distance}</span>
          </div>
          <div className={`px-2 py-1 rounded-lg text-xs flex items-center justify-center ${difficultyColors[difficulty]}`}>
            난이도: {difficultyLabels[difficulty]}
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">이동 피로도</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    fatigue < 40 ? 'bg-green-500' : fatigue < 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${fatigue}%` }}
                ></div>
              </div>
              <span className="text-gray-700">{fatigue}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
