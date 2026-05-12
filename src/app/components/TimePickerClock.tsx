import { useState, useRef, useEffect } from 'react';
import { Clock, Sunrise, Sun, Sunset, Moon } from 'lucide-react';

interface TimePickerClockProps {
  onTimeChange?: (startTime: number, endTime: number) => void;
}

export function TimePickerClock({ onTimeChange }: TimePickerClockProps) {
  const [startTime, setStartTime] = useState(10);
  const [endTime, setEndTime] = useState(18);
  const [isDragging, setIsDragging] = useState<'start' | 'end' | null>(null);
  const clockRef = useRef<HTMLDivElement>(null);

  const getTimeFromAngle = (angle: number): number => {
    const normalized = ((angle % 360) + 360) % 360;
    const hour = Math.round((normalized / 360) * 24);
    return hour === 24 ? 0 : hour;
  };

  const getAngleFromTime = (time: number): number => {
    return (time / 24) * 360;
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !clockRef.current) return;

    const rect = clockRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
    const normalizedAngle = (angle + 90 + 360) % 360;
    const newTime = getTimeFromAngle(normalizedAngle);

    if (isDragging === 'start') {
      setStartTime(newTime);
    } else {
      setEndTime(newTime);
    }
  };

  useEffect(() => {
    if (isDragging) {
      const handleMove = (e: MouseEvent | TouchEvent) => handleDrag(e);
      const handleUp = () => setIsDragging(null);

      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleUp);

      return () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleUp);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('touchend', handleUp);
      };
    }
  }, [isDragging]);

  useEffect(() => {
    if (onTimeChange) {
      onTimeChange(startTime, endTime);
    }
  }, [startTime, endTime]);

  const getTimeLabel = (time: number): string => {
    const hour = time === 0 ? 12 : time > 12 ? time - 12 : time;
    const period = time < 12 ? 'AM' : 'PM';
    return `${period} ${hour}:00`;
  };

  const getTimeEmoji = (time: number): string => {
    if (time >= 5 && time < 11) return '🌅';
    if (time >= 11 && time < 17) return '☀️';
    if (time >= 17 && time < 20) return '🌇';
    return '🌙';
  };

  const getGradient = () => {
    const avgTime = (startTime + endTime) / 2;
    if (avgTime >= 5 && avgTime < 11) return 'from-orange-100 via-pink-100 to-purple-100';
    if (avgTime >= 11 && avgTime < 17) return 'from-blue-100 via-cyan-100 to-teal-100';
    if (avgTime >= 17 && avgTime < 20) return 'from-orange-100 via-rose-100 to-pink-100';
    return 'from-indigo-100 via-purple-100 to-pink-100';
  };

  const createArcPath = () => {
    const startAngle = getAngleFromTime(startTime);
    const endAngle = getAngleFromTime(endTime);

    let sweepAngle = endAngle - startAngle;
    if (sweepAngle < 0) sweepAngle += 360;

    const radius = 140;
    const centerX = 180;
    const centerY = 180;

    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);

    const largeArc = sweepAngle > 180 ? 1 : 0;

    return `M ${centerX},${centerY} L ${x1},${y1} A ${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;
  };

  const getHandlePosition = (time: number) => {
    const angle = getAngleFromTime(time);
    const rad = ((angle - 90) * Math.PI) / 180;
    const x = 180 + 140 * Math.cos(rad);
    const y = 180 + 140 * Math.sin(rad);
    return { x, y, angle };
  };

  const startPos = getHandlePosition(startTime);
  const endPos = getHandlePosition(endTime);

  const timeMarkers = [
    { time: 0, label: '12 AM', icon: Moon },
    { time: 6, label: '6 AM', icon: Sunrise },
    { time: 12, label: '12 PM', icon: Sun },
    { time: 18, label: '6 PM', icon: Sunset }
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg text-gray-900">시간 선택</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => { setStartTime(10); setEndTime(14); }}
            className="px-4 py-2 text-sm bg-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500 hover:text-white text-gray-700 rounded-full border border-gray-200 hover:border-transparent transition-all shadow-sm"
          >
            짧게
          </button>
          <button
            onClick={() => { setStartTime(10); setEndTime(18); }}
            className="px-4 py-2 text-sm bg-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500 hover:text-white text-gray-700 rounded-full border border-gray-200 hover:border-transparent transition-all shadow-sm"
          >
            반나절
          </button>
          <button
            onClick={() => { setStartTime(9); setEndTime(22); }}
            className="px-4 py-2 text-sm bg-white hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500 hover:text-white text-gray-700 rounded-full border border-gray-200 hover:border-transparent transition-all shadow-sm"
          >
            하루종일
          </button>
        </div>
      </div>

      <div className={`relative bg-gradient-to-br ${getGradient()} rounded-3xl p-6 transition-all duration-700`}>
        <div className="flex justify-center">
          <div
            ref={clockRef}
            className="relative w-[240px] h-[240px]"
          >
            <svg viewBox="0 0 360 360" className="w-full h-full">
              <defs>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
                </filter>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              <circle
                cx="180"
                cy="180"
                r="165"
                fill="white"
                fillOpacity="0.95"
                filter="url(#shadow)"
              />

              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i / 24) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const outerR = 155;
                const innerR = i % 6 === 0 ? 145 : 150;
                const x1 = 180 + innerR * Math.cos(rad);
                const y1 = 180 + innerR * Math.sin(rad);
                const x2 = 180 + outerR * Math.cos(rad);
                const y2 = 180 + outerR * Math.sin(rad);

                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i % 6 === 0 ? '#9ca3af' : '#d1d5db'}
                    strokeWidth={i % 6 === 0 ? 2 : 1}
                    strokeLinecap="round"
                  />
                );
              })}

              <path
                d={createArcPath()}
                fill="url(#arcGradient)"
                className="transition-all duration-300"
              />

              <line
                x1="180"
                y1="180"
                x2={startPos.x}
                y2={startPos.y}
                stroke="#f43f5e"
                strokeWidth="4"
                strokeLinecap="round"
                className="transition-all duration-300"
              />

              <circle
                cx={startPos.x}
                cy={startPos.y}
                r="16"
                fill="white"
                stroke="#f43f5e"
                strokeWidth="4"
                className="cursor-grab active:cursor-grabbing transition-transform hover:scale-110 drop-shadow-lg"
                style={{ filter: isDragging === 'start' ? 'url(#glow)' : '' }}
                onMouseDown={() => setIsDragging('start')}
                onTouchStart={() => setIsDragging('start')}
              />

              <line
                x1="180"
                y1="180"
                x2={endPos.x}
                y2={endPos.y}
                stroke="#ec4899"
                strokeWidth="4"
                strokeLinecap="round"
                className="transition-all duration-300"
              />

              <circle
                cx={endPos.x}
                cy={endPos.y}
                r="16"
                fill="white"
                stroke="#ec4899"
                strokeWidth="4"
                className="cursor-grab active:cursor-grabbing transition-transform hover:scale-110 drop-shadow-lg"
                style={{ filter: isDragging === 'end' ? 'url(#glow)' : '' }}
                onMouseDown={() => setIsDragging('end')}
                onTouchStart={() => setIsDragging('end')}
              />

              <circle cx="180" cy="180" r="8" fill="#6b7280" />

              {timeMarkers.map(({ time, label, icon: Icon }) => {
                const angle = (time / 24) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const r = 120;
                const x = 180 + r * Math.cos(rad);
                const y = 180 + r * Math.sin(rad);

                return (
                  <g key={time}>
                    <foreignObject x={x - 12} y={y - 12} width="24" height="24">
                      <div className="flex items-center justify-center w-full h-full">
                        <Icon className="w-5 h-5 text-gray-400" />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl mb-1">{getTimeEmoji(startTime)}</div>
            <p className="text-xs text-gray-600 mb-1">시작</p>
            <p className="text-lg bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              {getTimeLabel(startTime)}
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl mb-1">{getTimeEmoji(endTime)}</div>
            <p className="text-xs text-gray-600 mb-1">종료</p>
            <p className="text-lg bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              {getTimeLabel(endTime)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
