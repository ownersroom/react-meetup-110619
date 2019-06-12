import { useContext } from 'react';
import { BreakpointsContext } from './breakpoints.context';

function useBreakpoints() {
  return useContext(BreakpointsContext);
}

export { useBreakpoints };
