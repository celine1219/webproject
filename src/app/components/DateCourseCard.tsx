import { Star, DollarSign, Clock, Sparkles, Bookmark } from 'lucide-react';

interface DateCourseCardProps {
  image: string;
  title: string;
  category: string;
  rating: number;
  price: string;
  duration: string;
  emotionScore: number;
  tags?: string[];
}

export function DateCourseCard({
  image,
  title,
  category,
  rating,
  price,
  duration,
  emotionScore,
  tags = []
}: DateCourseCardProps) {
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
        <div className="absolute top-3 left-3 bg-rose-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
          {category}
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

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>{price}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
