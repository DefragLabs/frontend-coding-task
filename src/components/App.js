import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { translate } from 'react-i18next';
import { translateOptions } from '../i18n/config';
import { Dimmer, Loader } from 'semantic-ui-react';

import UsersView from './UsersView/UsersView'
import PhotosView from './PhotosViews/PhotosView';

import { fetchSampleUserData, fetchSamplePhotoData } from '../actions/app-actions';

class App extends Component {
  
  componentDidMount(){
    this.getUserData();

    this.getPhotoData();
  }

  getUserData(){
    this.props.fetchSampleUserData();
  }

  getPhotoData(){
    this.props.fetchSamplePhotoData();
  }

  getLoaderView(){
    return(
      <Dimmer active>
        <Loader />
      </Dimmer>
    )
  }

  getMainView(){
    const { sampleUserData, samplePhotoData } = this.props;
    return(
      <div>
        <UsersView sampleUserData={sampleUserData} />

        <PhotosView samplePhotoData={samplePhotoData} />
      </div>
    )
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        {isLoading ? this.getLoaderView() : this.getMainView()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    sampleUserData: state.sampleUserData,
    samplePhotoData: state.samplePhotoData,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchSampleUserData: fetchSampleUserData,
    fetchSamplePhotoData: fetchSamplePhotoData
  },dispatch)
}

export default translate(['translations'], translateOptions)(connect(mapStateToProps, mapDispatchToProps)(App));
