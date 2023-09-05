import { Button } from '@material-tailwind/react';
import React from 'react';

const Menus = [
    {
        id: 1,
        imgSrc: "../src/Assets/Images/Menu/menu1.png",
        imgAlt: "غذای اصلی",
        btnText: "غذای اصلی",
    },
    {
        id: 2,
        imgSrc: "../src/Assets/Images/Menu/menu2.png",
        imgAlt: "پیش غذا",
        btnText: "پیش غذا ",
    },
    {
        id: 3,
        imgSrc: "../src/Assets/Images/Menu/menu3.png",
        imgAlt: " دسر",
        btnText: " دسر",
    },
    {
        id: 4,
        imgSrc: "../src/Assets/Images/Menu/menu4.png",
        imgAlt: " نوشیدنی",
        btnText: " نوشیدنی",
    }
]

const RestaurantMenu = () => {
    return ( 
      <section className='container mx-auto grid grid-cols-12 gap-y-28 md:gap-y-64 gap-x-4 lg:gap-x-3 mt-20 md:mt-44 mb-8 px-1 lg:px-0'>
            {
                Menus.map(({id, imgSrc , imgAlt , btnText}) => {
                    return(                   
        <div key={id} className='col-span-6 lg:col-span-3'>
            <div  className='relative flex flex-col items-center bg-PrimaryBrandColor rounded-lg min-h-max h-24 md:h-[180px]'>
                <img src={imgSrc} alt={imgAlt} className={`${id === 4 && "md:-top-48"} absolute -top-16 md:-top-32 w-28 h-28 md:w-max md:h-max`} />
               <Button className='bg-white text-nautral-600 font-semibold w-24 px-2 md:w-[155px] absolute left-auto right-auto -bottom-6'>
               <span className='text-xs md:text-lg'>{btnText}</span>
               </Button>
            </div>
        </div>
                    )
                })
            }
      </section>
     );
}
 
export default RestaurantMenu;