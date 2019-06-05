import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { BreakpointsContext } from 'shared/breakpoints';

class FooWithBreakpoints extends PureComponent {
  render() {
    return (
      <>
        <Link className="back" to="/">
          ←
        </Link>
        <BreakpointsContext.Consumer>
          {({ xs, sm, md, lg }) => (
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
          )}
        </BreakpointsContext.Consumer>
      </>
    );
  }
}

export default FooWithBreakpoints;
