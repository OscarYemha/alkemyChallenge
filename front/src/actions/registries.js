import axios from "axios";

const receiveRegistries = (registries) => {
  return {
    type: "RECEIVE_REGISTRIES",
    registries,
  };
};

const receiveAllRegistries = (allRegistries) => {
  return {
    type: "RECEIVE_ALL_REGISTRIES",
    allRegistries,
  };
};

export const fetchRegistries = () => (dispatch) =>
  axios
    .get("http://localhost:4000/api/registries")
    .then((res) => res.data)
    .then((registries) => dispatch(receiveRegistries(registries)));

export const fetchAllRegistries = () => (dispatch) =>
  axios
    .get("http://localhost:4000/api/allregistries")
    .then((res) => res.data)
    .then((allRegistries) => dispatch(receiveAllRegistries(allRegistries)));

export const createNewRegistry = function (registry) {
  return function () {
    return axios.post("http://localhost:4000/api/createnewregistry", {
      registry,
    });
  };
};

export const deleteRegistry = function (registry) {
  return function () {
    return axios.put(`http://localhost:4000/api/registry/delete`, {
      registry,
    });
  };
};
