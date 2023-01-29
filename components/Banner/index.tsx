import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

export const Banner = () => {
    return (
        <div className={styles.container}>
            <Swiper
                slidesPerView={1}               
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}        
                loop
                className={styles.swiper}
                modules={[Autoplay]}          
            >
                <SwiperSlide className={styles.swiperSlide}><img src='/tmp/banner1.png' alt='' /></SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}><img src='/tmp/banner2.png' alt='' /></SwiperSlide>
            </Swiper>
        </div>
    );
}