import React from 'react';

import Header from './header';
import Bio from './bio';
import Shortcuts from './shortcuts';
import Contact from './contact';
import Projects from './projects';
import Experience from './experience';
import Skills from './skills';
import Languages from './languages';
import Education from './education';
import Footer from './footer';

const index = () => {
  return (
    <div className="main main--resume">
      <Header />
      <Bio />
      <Shortcuts />
      <Contact />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Footer />
    </div>
  );
};

export default index;
