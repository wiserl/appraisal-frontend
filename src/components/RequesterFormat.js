import React from 'react';

const styles = {
  border: '4px solid #545454',
  margin: '90px',
  padding: '40px',
  
};

export default requester => (
  <div style={{...styles}}>
    <h4>Name: {requester._name}</h4>
    <p>Email: {requester._email}</p>
    <div><em>Number of appraisals: {requester._appraisals}</em></div>
  </div>
)