import _ from 'lodash';
import { GetData } from '../apis/request';

export const fetchServicesAndProviders = () => async (dispatch, getState) => {
  await dispatch(fetchServices());
  await dispatch(fetchProviders());

  //await Promise.all(  userIds.forEach(id=>dispatch(fetchUser(id))));

}
export const fetchServices = () => async (dispatch) => {
  GetData("http://localhost:5000/api/services").then(result => {
    if (result != null) {
      if (result.status == 200) {
        console.log(result.data)
        dispatch({ type: "FETCH_SERVICES", payload: result.data.data })
      }
      else
        dispatch({ type: "FETCH_SERVICES", payload: [] })
    }
  });

};

export const fetchProviders = () => async (dispatch) => {
  GetData("http://localhost:5000/api/providers").then(result => {
    if (result != null) {
      if (result.status == 200)
        dispatch({ type: "FETCH_PROVIDERS", payload: result.data.data })
      else
        dispatch({ type: "FETCH_PROVIDERS", payload: [] })
    }
  });
};

