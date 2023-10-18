
import React from "react";
import Banner from './banner'
import Category from './category'
import Experience from './experince'
import Info from './info'
import Skills from './skills'
export default function Content() {
  return (
    <>
      <>
        {/*Header End*/}
        {/*Home Banner Start*/}
        <Banner />
        {/*Home Banner End*/}
        {/*Main Start*/}
        {/*Categories Start*/}
        <Category />

        {/*Categories End*/}
        {/*Join Company Info Start*/}
        <Info />
        {/*Join Company Info End*/}
        {/*Limitless Experience Start*/}
        <Experience />
        {/*Limitless Experience End*/}
        {/*Skills Start*/}
        <Skills />
        {/*Skills Start End*/}
        {/*Main End*/}
      </>
    </>
  );
}