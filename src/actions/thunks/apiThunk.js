import {
  saveRegisteredAddresses,
  fetchingAddresses
} from "../actionCreators/apiActions";

export const getAddresses = () => async dispatch => {
  try {
    dispatch(fetchingAddresses(true));
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://files.hoop.co.uk/addresses.json";
    const response = await fetch(proxyurl + url);
    if (response && response.status === 404) {
      throw new Error("couldn't get addresses");
    }
    const json = await response.text();
    const data = JSON.parse(json);
    await dispatch(saveRegisteredAddresses(data));
    dispatch(fetchingAddresses(false));
  } catch (error) {
    throw new Error("couldn't get addresses");
  }
};
