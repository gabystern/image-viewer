import React from 'react';

const NavBar = (props) => {

  if (this.props.images.length > 0){
    let pageNumbers = [];
     for (let i = 1; i <= Math.ceil(this.props.images.length / this.props.imagesPerPage); i++) {
       pageNumbers.push(i);
     }
     const renderPageNumbers = pageNumbers.map(number => {
       return (
         <li
           key={number}
           id={number}
           onClick={this.props.handleClick}
         >
           {number}
         </li>
     )})
     return (
     <ul id="page-numbers">
       {renderPageNumbers}
     </ul> )
  }

  return (
    <ul id="page-numbers">
      <p>hi</p>
    </ul>
  )

}

export default NavBar;
