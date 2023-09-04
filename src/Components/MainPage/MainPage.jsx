import React from "react";
import Slider from "./Slider";
import { Button, Input, Typography } from "@material-tailwind/react";
import RestaurantMenu from "./RestaurantMenu";
import { SearchNormal1 } from "iconsax-react";
import Introduction from "./Introduction";
import Section from "../../Common/Section";
import Branches from "./Branches";

const MainPage = () => {
  return (
    <>
      <Slider />
      <div className="flex md:hidden relative mt-6 w-full px-2">
       <input type="search" name="Search" id="search" label="جستجو" className="border border-PrimaryBrandColor rounded-lg w-full focus:border-green-800 focus:outline-none focus:ring-0" />
          <SearchNormal1 className="absolute left-3 top-2"/>
      </div>
      <Section sectionTitle="منوی رستوران" className="mb-6 md:mb-12">
        <RestaurantMenu />
      </Section>
      <Introduction />
      <Section sectionTitle="ترخینه گردی">
        <Branches />
      </Section>
    </>
  );
};

export default MainPage;
