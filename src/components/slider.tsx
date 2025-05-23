'use client';

import Image, { StaticImageData } from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: StaticImageData | string;
  afterImage: StaticImageData | string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) updateSliderPosition(e.touches[0].clientX);
  }, [updateSliderPosition]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      <div ref={containerRef} className="relative w-full h-full select-none touch-none">

        {/* Before Image - Full */}
        <Image
          src={beforeImage}
          alt="Before"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />

        {/* After Image - Clipped */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1  z-20 cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="w-12 h-12 bg-white rounded-full border shadow-md flex items-center justify-center">
              <MoveHorizontal className="text-gray-600 w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-5 left-5 bg-black/60 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-md shadow">
          {beforeLabel}
        </div>
        <div className="absolute bottom-5 right-5 bg-black/60 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-md shadow">
          {afterLabel}
        </div>
      </div>
    </div>
  );
}