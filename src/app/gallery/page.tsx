'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  RowsPhotoAlbum,
  RenderImageProps,
  RenderImageContext,
} from 'react-photo-album';
import 'react-photo-album/rows.css';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import photos from '@/components/photos'; // Ensure this path is correct

export default function PhotoGallery() {
  const [index, setIndex] = useState<number>(-1);

  const renderNextImage = (
    { alt, title, sizes }: RenderImageProps,
    { photo, width, height }: RenderImageContext
  ) => (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        src={photo}
        alt={alt || ''}
        title={title}
        fill
        sizes={sizes}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        className="object-cover rounded-xl shadow-sm my-10 hover:scale-[1.02] bg-purple-200  transition-transform duration-300"
      />
    </div>
  );

  return (
    <div className="px-4 py-12 bg-white">

      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={250}
        render={{ image: renderNextImage }}
        onClick={({ index }) => setIndex(index)}
        sizes={{
          size: 'calc(100vw - 32px)',
          sizes: [{ viewport: '(min-width: 1024px)', size: '1168px' }],
        }}
      />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos}
        index={index}
        animation={{ swipe: 300 }}
      />
    </div>
  );
}
