import Image from 'next/image'
import { Button } from '@/components/ui/button'
import HeroSide from './HeroSide'


export default function Hero() {
  const src="https://img.freepik.com/premium-photo/colorful-rangoli-white-background_1000717-2122.jpg";
  return (
    <section className="back2">
    {/* <section className="back"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Handcrafted</span>
                <span className="block text-purple-600">with Love</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl lg:mx-0">
                Discover unique arts and crafts from talented artisans around the world. Each piece tells a story and brings beauty to your home.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button size="lg" className="w-full sm:w-auto px-8 py-3 md:py-4 md:text-lg md:px-10">
                    Shop Now
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3 md:py-4 md:text-lg md:px-10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
              <div className="mt-12 lg:mt-0 lg:w-1/2">
                  <div className="relative mx-auto w-full max-w-lg lg:max-w-none back">
                    <HeroSide />
                    <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-8 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
