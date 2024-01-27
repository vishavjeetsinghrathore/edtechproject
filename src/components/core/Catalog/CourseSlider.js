import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper/modules'

import Course_Card from './Course_Card'

const CourseSlider = ({Courses}) => {
  return (
    <>
      {Courses?.length ? (
        // <Swiper
        //   slidesPerView={1}
        //   spaceBetween={25}
        //   loop={true}
        //   modules={[FreeMode, Pagination]}
        //   breakpoints={{
        //     1024: {
        //       slidesPerView: 3,
        //     },
        //   }}
        //   className="max-h-[30rem]"
        // >
        //   {Courses?.map((course, i) => (
        //     <SwiperSlide key={i}>
        //       <Course_Card course={course} />
        //     </SwiperSlide>
        //   ))}
        // </Swiper>
        <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={200}
        pagination={true}
        modules={[Autoplay,Pagination,Navigation]}
        className='mySwiper'
        autoplay={{
            delay:1200,
            disableOnInteraction:false,
        }}
        navigation={true}
        
        >
            {
                Courses?.map((course,index)=>(
                    <SwiperSlide key={index}>
                        <Course_Card course={course} />

                    </SwiperSlide>
                ))
            }

        </Swiper>
      
        
        
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
