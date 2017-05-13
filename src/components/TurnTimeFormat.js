import React from 'react';

const styles = {
  border: '4px solid #545454',
  margin: '90px',
  padding: '40px',
  
};

export default appraisalTypes => (
  <div style={{...styles}}>
    <h4> Type: {appraisalTypes._type}</h4>
    <p>Cost: {appraisalTypes._cost}</p>
    <div><em>Turn Time: {appraisalTypes._turnTime}</em></div>
    <div><p> Region: {appraisalTypes._region}</p></div>
    
  </div>
)