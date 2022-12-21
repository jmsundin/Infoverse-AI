// import Sunburst from 'react-sunburst-d3-v4';
import React, { useState, useEffect } from 'react';
import d3TreeDummyDataFlare2 from '../data/d3TreeDummyDataFlare-2';

// Follow this tutorial:
// https://dev.to/andrewchmr/react-d3-sunburst-chart-3cpd

// This package might be more of what I want:
// https://www.npmjs.com/package/react-d3-zoomable-sunburst

const SunburstD3 = (props) => {
    const data = d3TreeDummyDataFlare2;

    return (
      <></>
          // <Sunburst
          //   data={data}
          //   scale="linear"
          //   keyId="anagraph"
          //   width="480"
          //   height="400"
          // />
    );
}

export default SunburstD3;