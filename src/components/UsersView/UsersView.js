import React, { Component } from 'react';

class UsersView extends Component {
  constructor() {
    super();
  }

  getUserCardView(userInfo){
    return(
      <div className="user-card" key={userInfo.id}>
        <div className="user-field">Name :- {userInfo.name}</div>
        <div className="user-field">Email :- {userInfo.email}</div>
      </div>
    )
  }

  render(){
    const { sampleUserData } = this.props;
    return(
      <div className="users-collection">
        {sampleUserData.map((userInfo)=> { return this.getUserCardView(userInfo)})}
      </div>
    );
  }
}

export default UsersView;