
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import img1 from '../../assets/card/img1.jpg'
import img2 from '../../assets/card/img2.jpg'
import img3 from '../../assets/card/img3.jpg'
import img4 from '../../assets/card/img4.jpg'



const Category = () => {
    return (
        <div>
            
            <section>
            <div className="text-white text-center mt-10">
            <p className="uppercase">---@Mehedi---</p>
          <h1 className="uppercase text-3xl font-bold py-2 px-3">My recent works</h1>
         {/* new text add now.... */}
          <div className='mt-5'>
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          </SwiperSlide>
      
       
        
       
</Swiper>
          </div>

        </div>

            </section>
        </div>
    );
};

export default Category;