import ActionTypes from '../constants/action-type';

import { getSampleUserData, getSamplePhotosData } from '../utils/app-api-utils';

export function fetchSampleUserData() {
  return(dispatch)=> {
    getSampleUserData(dispatch);
  }
}

export function fetchSampleUserDataAttempted(){
  return {
    type: ActionTypes.GET_SAMPLE_USER_DATA_ATTEMPTED
  }
}

export function fetchSampleUserDataSucceeded(response) {
  return {
    type: ActionTypes.GET_SAMPLE_USER_DATA_SUCCEEDED,
    response
  }
}

export function fetchSampleUserDataFailed(response) {
  return {
    type: ActionTypes.GET_SAMPLE_USER_DATA_FAILED,
    response
  }
}

export function fetchSamplePhotoData() {
  return(dispatch)=> {
    getSamplePhotosData(dispatch);
  }
}

export function fetchSamplePhotosDataAttempted(){
  return {
    type: ActionTypes.GET_SAMPLE_PHOTO_DATA_ATTEMPTED
  }
}

export function fetchSamplePhotosDataSucceeded(response) {
  return {
    type: ActionTypes.GET_SAMPLE_PHOTO_DATA_SUCCEEDED,
    response
  }
}

export function fetchSamplePhotosDataFailed(response) {
  return {
    type: ActionTypes.GET_SAMPLE_PHOTO_DATA_FAILED,
    response
  }
}