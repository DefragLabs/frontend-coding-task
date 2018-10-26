import axios from 'axios';
import {
  fetchSampleUserDataAttempted,
  fetchSampleUserDataSucceeded,
  fetchSampleUserDataFailed,
  fetchSamplePhotosDataAttempted,
  fetchSamplePhotosDataSucceeded,
  fetchSamplePhotosDataFailed
} from '../actions/app-actions';

export function apiEndPoint() {
  return 'https://jsonplaceholder.typicode.com';
}

export function getHeaders(authToken) {
  if (authToken){
    return {
      'Content-Type': 'application/json',
      'Authorization': 'Token'
    }
  }
  else{
    return{
      'Content-Type': 'application/json'
    }
  }
}

export function getSampleUserData(dispatch) {
  let url = `${apiEndPoint()}/users`;
  dispatch(fetchSampleUserDataAttempted());
  axios.get(
    url,{
      headers: getHeaders(),
    })
  .then(response => {
    const successResponse = response.data;
    dispatch(fetchSampleUserDataSucceeded(successResponse));
  })
  .catch(error => {
    if (error) {
      const errorResponse = error.response;
      dispatch(fetchSampleUserDataFailed(errorResponse));
    }
  });
};

export function getSamplePhotosData(dispatch) {
  let url = `${apiEndPoint()}/comments`;
  dispatch(fetchSamplePhotosDataAttempted());
  axios.get(
    url,{
      headers: getHeaders(),
    })
  .then(response => {
    const successResponse = response.data;
    dispatch(fetchSamplePhotosDataSucceeded(successResponse));
  })
  .catch(error => {
    if (error) {
      const errorResponse = error.response;
      dispatch(fetchSamplePhotosDataFailed(errorResponse));
    }
  });
};