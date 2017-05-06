import React from 'react';

const styles = {
  border: '1px solid #545454',
  margin: '10px',
  padding: '15px'
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