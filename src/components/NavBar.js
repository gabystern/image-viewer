import React from 'react';
import {Menu} from 'semantic-ui-react'

const NavBar = (props) => {

  if (props.images.length > 0){
    let pageNumbers = [];
     for (let i = 1; i <= Math.ceil(props.images.length / props.imagesPerPage); i++) {
       pageNumbers.push(i);
     }
     const renderPageNumbers = pageNumbers.map(number => {
       return (
         <Menu.Item name={number} id={number} onClick={props.handleClick} > {number} </Menu.Item>
     )})
     return (
       <div className='nav'>
         <Menu fluid widths={10} inverted>
           {renderPageNumbers}
         </Menu>
       </div>)
  }
  return (
    <div></div>
  )

}

export default NavBar;
