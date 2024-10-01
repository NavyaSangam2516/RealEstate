// import React from 'react'
// import './Residency.css'
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
// import 'swiper/css'
// import data from '../../utils/slider.json'
// import { sliderSettings } from '../../utils/common'


// const Residency = () => {
//     return (
//         <section className='r-wrapper'>

//             <div className="paddings innerwidth r-container">
//                 <div className="r-head flexColStart">
//                     <span className='orangeText'>The Services</span>
//                     <span className='primaryText'>We Are Providing</span>
//                 </div>
//                 <Swiper{...sliderSettings}>
//                     {
//                         data.map((card, i) => (
//                             <SwiperSlide key={i}>
//                                 <div className="flexColStart r-card">
//                                     <img src={card.image} alt="home" />

//                                     <span className='secondaryText r-price'>
//                                         <span>{card.price}</span>
//                                         <span style={{color:"orange"}}>K</span>
//                                     </span>
//                                     <span className='primaryText'>{card.name}</span>
//                                     <span className='secondaryText'>{card.detail}</span>
//                                 </div>
//                             </SwiperSlide>

//                         ))

//                     }
//                 </Swiper>
//             </div>
//         </section>
//     )
// }

// export default Residency

import React from 'react'
import './Residency.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Residency = () => {
    return (
        <section className='r-wrapper'>
            <div className="paddings innerwidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>The Services</span>
                    <span className='primaryText'>We Are Providing</span>
                </div>
                <Swiper {...sliderSettings}
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />
                                    <span className='secondaryText r-price'>
                                        <span>{card.price}</span>
                                        <span style={{ color: "orange" }}>K</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residency
