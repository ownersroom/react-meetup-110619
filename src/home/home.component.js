import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>React Meetup June 11th 2019</h1>
      <h2>
        <Link to="/click-outside">useClickOutside</Link>
      </h2>
      <h2>
        <Link to="/breakpoints">useBreakpoints</Link>
      </h2>
    </div>
  );
}

export default Home;
