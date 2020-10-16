import React from 'react';
import FetchGeocode from './components/FetchGeocode';
import Title from './components/Title'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper"> 
        <div className="main">
          <div className="container">
            <div className="row">
              <div>
                <Title />
                <FetchGeocode />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}; 

export default App;
