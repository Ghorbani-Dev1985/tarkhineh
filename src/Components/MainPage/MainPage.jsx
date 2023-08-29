import React from "react";
import Slider from "./Slider";
import { Button, Input, Typography } from "@material-tailwind/react";
import RestaurantMenu from "./RestaurantMenu";
import FormikInput from "../../Common/FormikInput";
import { SearchNormal1 } from "iconsax-react";
import Introduction from "./Introduction";

const MainPage = () => {
  return (
    <>
      <Slider />
      <div className="flex md:hidden">
        <FormikInput type="search" name="Search" id="search" label="جستجو" >
          <SearchNormal1 />
        </FormikInput>
      </div>
      <section className="container p-1 md:p-0 flex flex-col items-center mx-auto my-8 text-nautral-600">
        <Typography variant="h4">منوی رستوران</Typography>
        <RestaurantMenu />
      </section>
        <Introduction />
    </>
  );
};

export default MainPage;
