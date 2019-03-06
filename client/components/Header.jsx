import React from 'react';

const Header = props => (

  <div className='boarder-header'>
    <span className='main-header'>{props.title}</span>
    <br></br>
    <span className='date'>{props.date}</span>
  </div>

)

export default Header