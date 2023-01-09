import React from 'react';
import Header from '../components/Header';
import SliderComponent  from '../components/SliderComponent';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
    <Header></Header>
      <SliderComponent></SliderComponent>
      <FeatureSection></FeatureSection>
      <Footer></Footer>
      </>
  )
}
