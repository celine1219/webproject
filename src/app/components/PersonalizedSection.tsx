import { EnhancedCourseCard } from './EnhancedCourseCard';

const personalizedCourses = [
  {
    image: 'https://images.unsplash.com/photo-1763098844932-7240ee8ff180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '비오는 날 북카페 코스',
    category: '실내',
    rating: 4.7,
    price: '1-2만원',
    duration: '2-3시간',
    emotionScore: 93,
    tags: ['비오는날', '조용한', '힐링'],
    distance: '0.5km',
    peopleRecommend: '혼놀 추천',
    difficulty: 'easy' as const,
    fatigue: 20
  },
  {
    image: 'https://images.unsplash.com/photo-1761208945137-4d2d966e02e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '혼자 떠나는 산 트레킹',
    category: '야외',
    rating: 4.6,
    price: '무료',
    duration: '4-5시간',
    emotionScore: 89,
    tags: ['힐링', '운동', '자연'],
    distance: '8.5km',
    peopleRecommend: '혼놀 추천',
    difficulty: 'medium' as const,
    fatigue: 75
  },
  {
    image: 'https://images.unsplash.com/photo-1747472892019-2eb7a930f4d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '야경 드라이브 코스',
    category: '드라이브',
    rating: 4.9,
    price: '3-5만원',
    duration: '2-3시간',
    emotionScore: 97,
    tags: ['야경', '드라이브', '낭만'],
    distance: '25km',
    peopleRecommend: '데이트 추천',
    difficulty: 'easy' as const,
    fatigue: 30
  },
  {
    image: 'https://images.unsplash.com/photo-1688544994167-79cf8c9e5b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '제주 해변 힐링 여행',
    category: '여행',
    rating: 4.9,
    price: '10-15만원',
    duration: '반나절',
    emotionScore: 96,
    tags: ['제주', '힐링', '자연'],
    distance: '45km',
    peopleRecommend: '친구 추천',
    difficulty: 'easy' as const,
    fatigue: 35
  },
  {
    image: 'https://images.unsplash.com/photo-1761695939616-1c03087c1ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '성수동 감성 카페 투어',
    category: '카페',
    rating: 4.8,
    price: '2-3만원',
    duration: '2-3시간',
    emotionScore: 95,
    tags: ['감성', '사진', '브런치'],
    distance: '3.2km',
    peopleRecommend: '데이트 추천',
    difficulty: 'easy' as const,
    fatigue: 25
  },
  {
    image: 'https://images.unsplash.com/photo-1730189959808-ff8570587d44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: '친구와 액티비티 코스',
    category: '액티비티',
    rating: 4.7,
    price: '5-8만원',
    duration: '3-4시간',
    emotionScore: 92,
    tags: ['액티비티', '친구', '활동적'],
    distance: '6km',
    peopleRecommend: '친구 추천',
    difficulty: 'medium' as const,
    fatigue: 60
  }
];

export function PersonalizedSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">
            당신을 위한 맞춤 추천
          </h2>
          <p className="text-lg text-gray-600">
            오늘의 날씨와 분위기에 딱 맞는 코스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalizedCourses.map((course, index) => (
            <EnhancedCourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
