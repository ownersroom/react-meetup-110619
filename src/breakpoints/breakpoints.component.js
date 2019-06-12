import React from 'react';
import { Link } from 'react-router-dom';
import { useBreakpoints } from 'shared/breakpoints';

function Breakpoints() {
  const { xs, sm, md, lg } = useBreakpoints();

  return (
    <>
      <Link className="back" to="/">
        ←
      </Link>
      <div className="container evenly">
        <div className="box">
          <p className={xs ? 'active' : ''}>XS</p>
        </div>
        <div className="box">
          <p className={sm ? 'active' : ''}>SM</p>
        </div>
        <div className="box">
          <p className={md ? 'active' : ''}>MD</p>
        </div>
        <div className="box">
          <p className={lg ? 'active' : ''}>LG</p>
        </div>
      </div>
    </>
  );
}

export default Breakpoints;
