import React from 'react';

const styles = {
  border: '1px solid #545454',
  margin: '10px',
  padding: '15px'
};

export default requester => (
  <div style={{...styles}}>
    <h4>Name: {requester._name}</h4>
    <p>Email: {requester._email}</p>
    <div><em>Number of appraisals: {requester._appraisals}</em></div>
  </div>
)