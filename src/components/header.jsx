import React from 'react';

export const Header = (props) => {
  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth < 768);
  //   };

  //   window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const headerStyle = {
  //   marginTop: isSmallScreen ? '65%' : '35%',
  //   textAlign: 'center',
  //   transform: 'translateY(-50%)',
  // };

  return (
    <header id="header">
    <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
              <div className="intro-text" >
                <h1>
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
