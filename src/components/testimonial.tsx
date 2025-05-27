"use client"

import YouTubeEmbed from "./YoutubeEmbed";

export default function Testimonial()
{
    return(
             <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Testimonial</h1>
      <YouTubeEmbed videoId="Y0DoXFhnDHY" title="Testimonial Video" />
      </div>
    </div>
    );
}