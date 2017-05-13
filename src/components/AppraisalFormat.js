import React from 'react';

const styles = {
  border: '4px  #545454',
  margin: '90px',
  padding: '40px',
  
};

export default appraisal => (
  <div style={{...styles}}>
    <h4> Requester Email: {appraisal._email}</h4>
    <p>Type: {appraisal._type}</p>
    <div><em>Start Date: {appraisal._start}</em></div>
    <div><p> End Date: {appraisal._end}</p></div>
    <div><p> Region: {appraisal._address}</p></div>
  </div>
)