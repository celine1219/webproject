import { DateCourseCard } from './DateCourseCard';

const courses = [
  {
    image: 'https://images.unsplash.com/photo-1761695939616-1c03087c1ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: '성수동 감성 카페 투어',
    category: '카페',
    rating: 4.8,
    price: '2-3만원',
    duration: '2-3시간',
    emotionScore: 95,
    tags: ['감성', '사진', '브런치']
  },
  {
    image: 'https://images.unsplash.com/photo-1621596016740-c831e613dc49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: '한남동 루프탑 디너',
    category: '레스토랑',
    rating: 4.9,
    price: '8-12만원',
    duration: '2-3시간',
    emotionScore: 98,
    tags: ['로맨틱', '야경', '특별한날']
  },
  {
    image: 'https://images.unsplash.com/photo-1758892591932-64a3d2203a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: '한강 선셋 피크닉',
    category: '야외',
    rating: 4.7,
    price: '1-2만원',
    duration: '3-4시간',
    emotionScore: 92,
    tags: ['가성비', '선셋', '여유']
  },
  {
    image: 'https://images.unsplash.com/photo-1688544994167-79cf8c9e5b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: '제주 해변 일몰 여행',
    category: '여행',
    rating: 4.9,
    price: '10-15만원',
    duration: '반나절',
    emotionScore: 96,
    tags: ['제주', '힐링', '자연']
  },
  {
    image: 'https://images.unsplash.com/photo-1761208945137-4d2d966e02e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: '혼자 떠나는 산 트레킹',
    category: '혼자놀기',
    rating: 4.6,
    price: '무료',
    duration: '4-5시간',
    emotionScore: 89,
    tags: ['힐링', '운동', '자연']
  },
  {
    image: 'https://images.unsplash.com/photo-1763098844932-7240ee8ff180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: '비오는 날 북카페',
    category: '실내',
    rating: 4.7,
    price: '1-2만원',
    duration: '2-3시간',
    emotionScore: 93,
    tags: ['비오는날', '조용한', '힐링']
  }
];

export function RecommendedCourses() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">
            추천 데이트 코스
          </h2>
          <p className="text-lg text-gray-600">
            지금 가장 인기있는 데이트 장소를 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <DateCourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
