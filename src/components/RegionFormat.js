import React from 'react';

const styles = {
  border: '4px solid #545454',
  margin: '90px',
  padding: '40px',
  
};

export default region => (
  <div style={{...styles}}>
    <h4> Name: {region._name}</h4>
    <p> Average Turn Time: {region._turnTime}</p>
    <div><em>Avergae Cost: {region._cost}</em></div>
    
  </div>
)