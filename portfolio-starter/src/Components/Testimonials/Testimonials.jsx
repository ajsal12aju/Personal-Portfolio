import React from 'react'
import './Testmonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import portfoliopic1 from "../../img/profile1.jpg"
import portfoliopic2 from "../../img/profile2.jpg"
import portfoliopic3 from "../../img/profile3.jpg"
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

function Testimonials() {
   const clients = [
    {
        img:portfoliopic1,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, doloribus."
    },
    {
        img:portfoliopic2,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, doloribus."
    },
    {
        img:portfoliopic3,
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, doloribus."
    }
   ]

  return (
    <div className='t-wrapper'>
        <div className="t-heading">
            <h1>Clients always get </h1>
            <span> Exceptional Work </span>
            <span> form me...</span>
            <div className='blur t-blur1' style={{background: "var(--purple)" }}></div>
            <div className='blur t-blur2' style={{background: "var(--skyblue)" }}></div>
        </div>
        {/* slider */}
        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>

                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials