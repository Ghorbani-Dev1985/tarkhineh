import { Button } from '@material-tailwind/react';
import React from 'react';

const Menus = [
    {
        id:1,
        imgSrc: "../src/assets/Images/Menu/menu1.png",
        imgAlt: "غذای اصلی",
        btnText: "غذای اصلی",
    },
    {
        id:2,
        imgSrc: "../src/assets/Images/Menu/menu2.png",
        imgAlt: "پیش غذا",
        btnText: "پیش غذا ",
    },
    {
        id:1,
        imgSrc: "../src/assets/Images/Menu/menu3.png",
        imgAlt: " دسر",
        btnText: " دسر",
    },
    {
        id:1,
        imgSrc: "../src/assets/Images/Menu/menu4.png",
        imgAlt: " نوشیدنی",
        btnText: " نوشیدنی",
    }
]

const RestaurantMenu = () => {
    return ( 
      <section className='container mx-auto grid grid-cols-12 gap-3 mt-44 mb-8 px-1 md:px-0'>
            {
                Menus.map(({id, imgSrc , imgAlt , btnText}) => {
                    return(                   
        <div key={id} className='col-span-6 lg:col-span-3'>
            <div  className='relative flex flex-col items-center border-2 border-PrimaryBrandColor rounded-lg min-h-max h-[180px]'>
                <img src={imgSrc} alt={imgAlt} className='absolute -top-32' />
               <Button className='btns w-[165px] absolute left-auto right-auto -bottom-6'>
               {btnText}
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