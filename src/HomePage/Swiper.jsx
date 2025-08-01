import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay , FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const images = [
    '/Partenrs/cropped-الشعاار-1-164x43.png',
    '/Partenrs/download (24).png',
    '/Partenrs/logo(arkan)-DWyeMILx.png',
    '/Partenrs/logo-BEirJ3uM.png',
    '/Partenrs/لوجو نقابة الكيميائيين العراقية  1-CH3xefoU.svg',

  ]
const SwiperTwo = () => {
    return (
        <div className='relative'>

        <div className="w-full max-w-6xl mx-auto py-4 px-2 pt-30">
        <div className='flex items-center justify-center p-2 px-6 bg-second text-white  w-fit mx-auto rounded-full  gap-3 mb-8'>
      <h2 className="text-center font-bold text-xl md:text-2xl ">Our Partners</h2>
      </div>
      {/* Animated Floating Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Circle 1 */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-primary/30 rounded-full animate-float-scale"></div>

        {/* Circle 2 */}
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-second/20 rounded-full animate-bounce-scale"></div>



        {/* Circle 4 */}
        <div className="absolute top-1/2 right-1/6 w-5 h-5 bg-primary/25 rounded-full animate-rotate-scale"></div>





        {/* Circle 7 */}
        <div className="absolute bottom-1/2 left-1/6 w-6 h-6 bg-primary/20 rounded-full animate-bounce-scale"></div>

      </div>
          <Swiper
  modules={[Autoplay, FreeMode]}
  loop={true}
  freeMode={true}
  speed={1800}
  loopedSlides={images.length}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  spaceBetween={12}
  slidesPerView={1}
  breakpoints={{
    480: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 3 }
  }}
>
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-50 sm:h-50 md:h-56 lg:h-60 xl:h-64 flex items-center justify-center p-1">
                  <img 
                    src={img} 
                    alt={`Saudi Arabia ${idx + 1}`} 
                    className=" object-contain w-40  bg-white"
                    style={{ display: 'block' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      )
}

export default SwiperTwo