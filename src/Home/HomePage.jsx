import React from 'react';
import HomeSlider from './HomePageSlider/HomeSlider';
import Latest_6_jobs from '../Latest-Task/Latest_6_jobs';
import MicroEarn from './HomePageSlider/MicroEarn';
import Resume from './Resume';

const HomePage = () => {
  return (
    <div className='md:w-8/12  mx-auto' >
      {/* home page slider */}
      <HomeSlider></HomeSlider>
      <Latest_6_jobs></Latest_6_jobs>
      <MicroEarn></MicroEarn>
      <Resume></Resume>
    </div>
  );
};

export default HomePage;