import ActionType from '../constants/action-type';

export const initialState = {
  isLoading: true,
  sampleUserData: [],
  samplePhotoData: []
};

const rootReducer = (state=initialState, action)=> {

  if (!action.type) {
    console.log('Payload missing a type!', action);
  }

  switch (action.type) {

    case ActionType.GET_SAMPLE_USER_DATA_ATTEMPTED: {
      return Object.assign({}, state, {
        isLoading: true
      });
    }
    case ActionType.GET_SAMPLE_USER_DATA_SUCCEEDED: {
      return Object.assign({}, state, {
        isLoading: false,
        sampleUserData: action.response.slice(0, 4)  
      });
    }
    case ActionType.GET_SAMPLE_USER_DATA_FAILED: {
      return Object.assign({}, state, {
        isLoading: false
      });
    }

    case ActionType.GET_SAMPLE_PHOTO_DATA_ATTEMPTED: {
      return Object.assign({}, state, {
        isLoading: true
      });
    }
    case ActionType.GET_SAMPLE_PHOTO_DATA_SUCCEEDED: {
      return Object.assign({}, state, {
        isLoading: false,
        samplePhotoData: action.response
      });
    }
    case ActionType.GET_SAMPLE_PHOTO_DATA_FAILED: {
      return Object.assign({}, state, {
        isLoading: false
      });
    }

    default:{
      return state;
    }

  };

};

export default rootReducer;