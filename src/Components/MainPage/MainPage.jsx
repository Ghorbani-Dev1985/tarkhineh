import React from "react";
import Slider from "./Slider";
import { Button, Input, Typography } from "@material-tailwind/react";
import RestaurantMenu from "./RestaurantMenu";
import FormikInput from "../../Common/FormikInput";
import { SearchNormal1 } from "iconsax-react";
import Introduction from "./Introduction";
import Section from "../../Common/Section";
import Branches from "./Branches";

const MainPage = () => {
  return (
    <>
      <Slider />
      <div className="flex md:hidden">
        <FormikInput type="search" name="Search" id="search" label="جستجو" >
          <SearchNormal1 />
        </FormikInput>
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
