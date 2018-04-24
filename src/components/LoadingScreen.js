import React from 'react';
import $ from 'jquery';

const LoadingScreen = () => (
  <div className="LoadingScreen">
    <div className="loading__loader">
      <img className="loading__logo" src="/img/icons/logo.svg"
        onLoad={ () => {
            $('.loading__loader').fadeIn();
          }
      }></img>
    </div>
  </div>
);

export default LoadingScreen;
