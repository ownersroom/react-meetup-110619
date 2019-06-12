function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_BREAKPOINTS':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export { reducer };
