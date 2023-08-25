import React from 'react';
import Slider from './Slider';
import { Typography } from '@material-tailwind/react';
import RestaurantMenu from './RestaurantMenu';

const MainPage = () => {
    return (
        <>
        <Slider /> 
        <section className='container flex flex-col items-center mx-auto my-8 text-nautral-600'>
          <Typography variant="h4">
             منوی رستوران
          </Typography>
          <RestaurantMenu />
        </section>
        </>
     );
}
 
export default MainPage;