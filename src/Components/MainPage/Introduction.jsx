import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import { ArrowLeft2, Diagram, HomeWifi, MenuBoard, User } from "iconsax-react";

const Introduction = () => {
    return ( 
      <section className="w-full bg-[url('src/assets/Images/Bg/IntroductionMobile.png')] md:bg-[url('src/assets/Images/Bg/IntroductionDesktop.png')] bg-no-repeat bg-cover flex flex-col md:flex-row justify-around items-center gap-x-48 p-2 lg:p-28">
        <div className="flex w-full md:w-[600px] flex-col">

      <Typography variant="h2" className="text-white text-base md:text-lg lg:text-xl font-bold lg:mb-6 px-5 mt-5">
      رستوران‌های زنجیره‌ای ترخینه
      </Typography>
      <Typography variant="p" className="text-white lg:text-3xl lg:leading-[3rem] mb-4 p-5">
      مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از ۲۰ سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
      </Typography>
      <div className='flex justify-end items-cener px-5 md:px-0'>
      <Button className='bg-transparent text-white border border-white px-8 py-1 lg:px-12 lg:py-2 font-extrabold lg:text-xl flex justify-center items-center'>
         <span>اطلاعات بیشتر</span>
         <ArrowLeft2 size="32" className='text-white'/>
      </Button>
      </div>
        </div>
        <div className='flex flex-col items-baseline justify-evenly h-full w-full md:w-[26rem] text-white'>
         <IntroductionLeftSide FirstText="پرسنلی مجرب و حرفه‌ای" FirstIconName={ <User size="48" className='mb-8'/>} SecondText=" کیفیت بالای غذا‌ها" SecondIconName={ <Diagram size="48" className='mb-8' />} >
         </IntroductionLeftSide>
         <IntroductionLeftSide FirstText="محیطی دلنشین و آرام" FirstIconName={<HomeWifi size="48" className='mb-8'/>} SecondText="منوی متنوع" SecondIconName={<MenuBoard size="48" className='mb-8'/>}>
         </IntroductionLeftSide>
        </div>
      </section>
     );
}
 
export default Introduction;


const IntroductionLeftSide = ({children , FirstText , SecondText , FirstIconName , SecondIconName}) => {
  return (
    <div className='w-full md:w-[29rem] flex justify-between items-center p-6 gap-4'>
    <div className='flex flex-1 flex-col items-center'>
   {FirstIconName}
        <Typography variant="h5" className="text-xs md:text-sm xl:text-lg">
       {FirstText}
        </Typography>
    </div>
    <div className='flex flex-1 flex-col items-center'>
    {SecondIconName}
        <Typography variant="h5" className="text-xs md:text-sm xl:text-lg">
       {SecondText}
        </Typography>
    </div>
</div>
  )
}

export  {IntroductionLeftSide};