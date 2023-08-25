import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "../../assets/Style/Slider.css";
import { Pagination, Navigation , Autoplay } from "swiper/modules";
import { Button, Typography } from "@material-tailwind/react";

const Sliders = [
    {
        id: 1,
        imgSrc: "../src/assets/Images/Slider/1.png",
        imgAlt: "رستوران ترخینه",
        text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
        btnText: "سفارش آنلاین غذا"
    },
    {
        id: 2,
        imgSrc: "../src/assets/Images/Slider/2.png",
        imgAlt: "رستوران ترخینه",
        text: "غذایی متفاوت در محیطی با آرامش و ویژه",
        btnText: "مشاهده بیشتر"
    },
    {
        id: 3,
        imgSrc: "../src/assets/Images/Slider/3.png",
        imgAlt: "رستوران ترخینه",
        text: "انتخاب غذا بر اساس سلیقه غذای شما",
        btnText: "مشاهده جزییات بیشتر"
    },
    {
        id: 4,
        imgSrc: "../src/assets/Images/Slider/4.png",
        imgAlt: "رستوران ترخینه",
        text: "بهترین غذا را با ترخینه تجربه نمایید",
        btnText: "سفارش آنلاین غذا"
    },
    {
        id: 5,
        imgSrc: "../src/assets/Images/Slider/5.png",
        imgAlt: "رستوران ترخینه",
        text: "در فضایی متفاوت و غذایی متفاوت ترخینه",
        btnText: "مشاهده منوی غذا"
    },
    {
        id: 6,
        imgSrc: "../src/assets/Images/Slider/6.png",
        imgAlt: "منوی ترخینه",
        text: "کافی است یک بار ترخینه را تجربه نمایید",
        btnText: "مشاهده شعبه‌ها"
    },
    {
        id: 7,
        imgSrc: "../src/assets/Images/Slider/7.png",
        imgAlt: "رستوران ایرانی",
        text: "انواع غذاها‌ی ایرانی و خارجی را از ترخینه بخواهید",
        btnText: "آشنایی بیشتر با ترخینه"
    },
]

const Slider = () => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      autoplay={{
          delay: 3000,
          disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation , Autoplay]}
      className="mySwiper"
    >
        {
            Sliders.map(({id,imgSrc,imgAlt,text,btnText}) => {
                return(

      <SwiperSlide key={id}>
        <img src={imgSrc} alt={imgAlt} />
        <Typography variant="h4" className="text-white absolute">
            {text}
        </Typography>
        <Button className="btns absolute bottom-12">
            {btnText}
        </Button>
      </SwiperSlide>
                )
            })
        }
      
    </Swiper>
  );
};

export default Slider;
