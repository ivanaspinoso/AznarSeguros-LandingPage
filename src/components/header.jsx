import React from 'react';

export const Header = (props) => {


  return (
    <header id="header">
    <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
              <div className="intro-text" >
                <h1 style={{margin:20,padding:20}}>
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <p>
                  {props.data ? props.data.subtitle : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
