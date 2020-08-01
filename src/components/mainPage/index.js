import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

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
    <Scrollbars autoHide
      autoHideTimeout={1000}
      autoHideDuration={500}
      autoHeight
      autoHeightMin={0}
      autoHeightMax={'100vh'}
    >
      <div className="main main--resume">
        <Header />
        <Bio />
        <Contact />
        <Shortcuts />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Languages />
        <Footer />
      </div>
    </Scrollbars>
  );
};

export default index;
