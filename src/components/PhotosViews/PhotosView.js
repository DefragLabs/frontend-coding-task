import React, {Component} from 'react';

class PhotosView extends Component {
  constructor(){
    super();
  }

  getUserPhotoView(photoInfo){
    return(
      <div className="user-photo-info" key={photoInfo.id}>
        <div>{photoInfo.name}</div>
      </div>
    )
  }

  render(){
    const { samplePhotoData } = this.props;
    return(
      <div className="photos-collection">
        {samplePhotoData.map((photoInfo)=> { return this.getUserPhotoView(photoInfo)})}
      </div>
    )
  }
}

export default PhotosView;