const initialState = {
  registries: {},
  allRegistries: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_REGISTRIES":
      return Object.assign({}, state, { registries: action.registries });
    case "RECEIVE_ALL_REGISTRIES":
      return Object.assign({}, state, { allRegistries: action.allRegistries });
    default:
      return state;
  }
};
