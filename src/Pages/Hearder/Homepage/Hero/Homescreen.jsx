import React from 'react'
import Hearder from '../../Hearder';
import Hero from './Hero';
import Aboutus from '../Aboutus/Aboutus';
import Event from '../Event/Event';
import Programmes from '../Programmes/Programmes';

const Homescreen = () => {
  return (
    <div>
      {/* <Hearder /> */}
      <Hero />
      <Aboutus />
      <Event />
      <Programmes />
    </div>
  );
}

export default Homescreen