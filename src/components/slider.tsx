"use client";

import { useState, useRef, useEffect } from 'react';

export default function ImageComparisonSlider({
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = clientX - containerRect.left;
    const percentage = (relativeX / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleInteractionStart = () => {
    setIsDragging(true);
  };

  const handleInteractionMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleInteractionMove);
    window.addEventListener('mouseup', handleInteractionEnd);
    window.addEventListener('touchmove', handleInteractionMove);
    window.addEventListener('touchend', handleInteractionEnd);

    return () => {
      window.removeEventListener('mousemove', handleInteractionMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchmove', handleInteractionMove);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging]);

  return (
    <div className="relative w-full h-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl bg-gray-100">
      {/* Container for both images */}
      <div ref={containerRef} className="absolute w-full h-full overflow-hidden">
        {/* Before Image (full width) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={beforeImage}
            alt="Before treatment"
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable="false"
          />
        </div>

        {/* After Image (clipped based on slider position) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={afterImage}
            alt="After treatment"
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable="false"
          />
        </div>

        {/* Slider Line with Centered Handle */}
        <div
          className={`absolute top-0 bottom-0 w-1.5  cursor-ew-resize z-10 ${
            isDragging ? 'bg-white' : ''
          }`}
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Centered Handle */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-20 rounded-full bg-white shadow-xl border-2 border-gray-200 hover:bg-blue-50 active:bg-blue-100 transition-colors"
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
          >
            <div className="flex  items-center space-x-1">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/80 text-white rounded-md text-sm font-medium backdrop-blur-sm">
          Before
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 text-white rounded-md text-sm font-medium backdrop-blur-sm">
          After
        </div>
      </div>
    </div>
  );
}