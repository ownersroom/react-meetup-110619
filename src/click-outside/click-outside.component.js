import React, { /* useRef, */ useState } from 'react';
import { Link } from 'react-router-dom';
// import { useClickOutside } from "./click-outside.hook";

function ClickOutside() {
  const [outside, setOutside] = useState(false);

  // const ref = useRef();
  // useClickOutside(ref, () => {
  //   setOutside(true);
  // });

  function handleBoxClick() {
    setOutside(false);
  }

  return (
    <>
      <Link className="back" to="/">
        ←
      </Link>
      <div className="container">
        <div className="box big" onClick={handleBoxClick} /* ref={ref} */>
          <p>Box</p>
          <span>{outside ? 'Outside' : 'Inside'}</span>
        </div>
      </div>
    </>
  );
}

export default ClickOutside;
