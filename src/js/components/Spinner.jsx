import * as React from 'react';

export default class Spinner extends React.Component {  


  render() {

   

    return (
      <div style={{ display: 'inline-block' }}>

       <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
}