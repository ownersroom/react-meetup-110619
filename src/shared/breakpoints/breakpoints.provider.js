import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialValues } from './breakpoints.constants';
import { BreakpointsContext } from './breakpoints.context';
import { reducer } from './breakpoints.reducer';

function BreakpointsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    function handler() {
      const xs = window.matchMedia('only screen and (max-width: 50em)').matches;
      const sm = window.matchMedia('only screen and (min-width: 50em)').matches;
      const md = window.matchMedia('only screen and (min-width: 60em)').matches;
      const lg = window.matchMedia('only screen and (min-width: 70em)').matches;

      dispatch({
        type: 'UPDATE_BREAKPOINTS',
        payload: {
          xs,
          sm,
          md,
          lg
        }
      });
    }

    handler();

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <BreakpointsContext.Provider value={state}>
      {children}
    </BreakpointsContext.Provider>
  );
}

BreakpointsProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { BreakpointsProvider };
