import React from 'react';
import PropTypes from 'prop-types';
import { initialValues } from './breakpoints.constants';
import { BreakpointsContext } from './breakpoints.context';

function BreakpointsProvider({ children }) {
  return (
    <BreakpointsContext.Provider value={initialValues}>
      {children}
    </BreakpointsContext.Provider>
  );
}

BreakpointsProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { BreakpointsProvider };
