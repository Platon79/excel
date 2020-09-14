export function createStore(rootReducer, initialState = {}) {
  // eslint-disable-next-line
  let state = rootReducer(initialState, {type: '__INIT__'});
  let listeners = [];

  return {
    subscribe(fn) {
      listeners.push(fn);
      return {
        unsubscribe() {
          listeners = listeners.filter((l) => l !== fn);
        },
      };
    },
    dispatch(action = {}) {
      const newState = rootReducer(state, action);
      listeners.forEach((listener) => listener(newState));
    },
    getState() {
      return state;
    },
  };
}
