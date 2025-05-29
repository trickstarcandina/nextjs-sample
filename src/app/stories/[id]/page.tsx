import React from 'react';
import Link from 'next/link';

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  // Sample story data - in a real app, this would be fetched from a data source
  const resolvedParams = await params;
  const stories = [
    {
      id: '1',
      title: 'The Kind Little Bird',
      content: `
        Once upon a time, in a quiet forest, there lived a small bird named Pipi. Pipi was not the strongest or the fastest, but she had the kindest heart. Every morning, she would chirp cheerfully to greet her neighbors.
        
        One day, Pipi noticed her friend, a tiny squirrel named Squeaky, looking sad. Squeaky had lost his favorite acorn, the one he saved for rainy days. Without hesitation, Pipi fluttered down and offered to help. They searched high and low, under leaves and over branches, until finally, Pipi spotted the shiny acorn near a stream.
        
        With a happy chirp, she guided Squeaky to it. Squeaky was overjoyed and thanked Pipi with a big hug. From that day on, all the forest animals knew that even the smallest act of kindness could brighten someone's day.
        
        And so, Pipi continued to spread kindness, proving that a big heart matters most of all.
      `,
    },
    {
      id: '2',
      title: 'Sunny Meadow Dreams',
      content: `
        In a faraway land, there was a sunny meadow where the grass glowed golden under the warm sun. Little Bunny, a fluffy white rabbit, loved to nap there, dreaming of magical adventures.
        
        One afternoon, as Little Bunny dozed off, he dreamt of floating on a cloud made of cotton candy. The cloud carried him over rivers of lemonade and mountains of chocolate. He giggled in his sleep as he imagined sharing these treats with his friends.
        
        When he woke, the sun was setting, painting the sky pink and orange. Though it was just a dream, Little Bunny felt a warmth in his heart. He hopped home, eager to tell his friends about his sweet journey, hoping to bring a smile to their faces.
        
        Sometimes, even dreams can spread happiness.
      `,
    },
    {
      id: '3',
      title: 'The Lost Star',
      content: `
        High above the world, in the vast night sky, a tiny star named Twinkle felt lost. She had wandered too far from her constellation family and couldn't find her way back.
        
        Twinkle shimmered sadly until a wise old moon noticed her. "Don't worry, little one," the moon said with a gentle glow. "I'll light your path." With the moon's help, Twinkle began her journey home, passing friendly clouds who whispered encouragement.
        
        After a long night, Twinkle finally saw the familiar pattern of her family. She twinkled brighter than ever, reuniting with her starry siblings. Thanks to the kindness of strangers, Twinkle learned that even when you're lost, you're never alone.
      `,
    },
    {
      id: '4',
      title: 'The Gentle Wave',
      content: `
        On a rocky shore, where the ocean met the land, there lived a wave named Whisper. Unlike the other waves who crashed loudly against the rocks, Whisper preferred to roll gently, soothing the shore with a soft touch.
        
        During a fierce storm, the other waves grew wild, frightening the tiny crabs and fish. Whisper, though small, moved forward with calm strength, creating a safe path for the little creatures to hide. "Follow me," Whisper murmured, guiding them to a quiet cove.
        
        The storm passed, and the sea creatures thanked Whisper for her gentleness. From then on, even the mightiest waves learned that sometimes, calmness is the greatest power.
      `,
    },
    {
      id: '5',
      title: 'A Cozy Blanket Tale',
      content: `
        In a chilly village, there was a magical blanket named Warmie. Woven with threads of love, Warmie had the power to make anyone who wrapped themselves in it feel safe and snug.
        
        One winter night, a shivering traveler named Lila stumbled into the village. Seeing her cold hands, the villagers offered Warmie to her. As soon as Lila wrapped herself in the blanket, she felt a warmth that melted away her worries. She smiled for the first time in days.
        
        Warmie's magic spread through the village, reminding everyone that a small gesture of care can warm even the coldest heart. And so, Warmie's legend grew, one cozy hug at a time.
      `,
    },
  ];

  const story = stories.find(s => s.id === resolvedParams.id);

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">Story Not Found</h1>
            <nav className="flex gap-6">
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Home</Link>
              <Link href="/stories" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Stories</Link>
              <Link href="/gallery" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Gallery</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 animate-fade-in delay-200">
          <p className="text-gray-600">Sorry, we couldn't find the story you're looking for. Please check our other stories.</p>
        </main>
        <footer className="bg-white py-6 mt-12 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 animate-fade-in delay-300">
            <p>© 2025 Healing Moments. Wishing you a speedy recovery.</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in">{story.title}</h1>
          <nav className="flex gap-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Home</Link>
            <Link href="/stories" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Stories</Link>
            <Link href="/gallery" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Gallery</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 animate-fade-in delay-200">
          <div className="prose max-w-none">
            {story.content.split('\n').filter(Boolean).map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4 animate-fade-in" style={{ animationDelay: `${300 + index * 100}ms` }}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <footer className="bg-white py-6 mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 animate-fade-in delay-800">
          <p>© 2025 Healing Moments. Wishing you a speedy recovery.</p>
        </div>
      </footer>
    </div>
  );
}
