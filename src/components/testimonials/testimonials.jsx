import React from "react";
import "./testimonials.css";
import Avat from "../../assets/avatarupwork.jpg";
import saava from "../../assets/saudiava.png";
import freelanceava from "../../assets/freelanceavatar.jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avat,
    name: "UpWork Client",
    review:
      "Ahmed is an exceptional programmer and a pleasure to work with. He was able to quickly identify and troubleshoot the issue with our application, providing efficient and effective solutions. His communication throughout the project was excellent, always keeping us informed and up to date on his progress. We appreciated his attention to detail and his ability to work collaboratively with our team. Overall, we highly recommend Ahmed for any programming or troubleshooting needs and look forward to working with him again in the future. Thank you!",
  },
{
    avatar: freelanceava,
    name: "Freelancer.com Client",
    review:
      "  I have many issue with my xamarin ios and ahmed help for solved it and he is helping me with another issue that we didn’t discuss it ! He is really helpful and friendly. I hope to work with you again.",
  },
  { avatar: saava,
    name: "Ali ",
    review:
      "  I got a solution to my problem from brother Ahmed, and I got an explanation and many details to avoid such problemshe is very helpful. many thanks for you ",
  },
  {
    avatar: Avat,
    name: "UpWork Client",
    review:
      "Ahmed was excellent! He was patient and quickly understood the requirements of the project. He offered unique solutions and different ways to go about coding errors which worked perfectly. He implemented code fast and worked on a short deadline, completing everything before the due date. Overall, Ahmed was amazing and someone I'd definitely work with again! I recommend him!",
  },
  {
    avatar: Avat,
    name: "UpWork Client",
    review:
      "Excellent work done on time",
  },
  {
    avatar:Avat ,
    name: "UpWork Client",
    review:
      "very good work done on time",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Clients Review</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView="auto"
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
