import React from 'react';
import $ from 'jquery';

class LoadingScreen extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      imgLoaded: false
    };
  }

  componentDidMount(){
    const logo = new Image();
    logo.src = '/img/icons/logo.svg';
    logo.onload = () => {
      $('.loading__logo').fadeIn();
    };
  }

  render(){
    return(
      <div className="LoadingScreen">
        <div className="loading__logo">
          <div className="loading__loader"></div>
        </div>
      </div>
    );
  }

}

export default LoadingScreen;
