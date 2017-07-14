import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const SearchBar = (props) => {

  return (
    <Form className="searchbar">
      <Form.Field>
        <input id="search" floated='left' value={props.searchTerm} onChange={props.handleChange} placeholder='Enter A Term' />
      </Form.Field>
      <Button type='submit' floated='left' id="search" onClick={props.handleClick}>Search</Button>
    </Form>
  )
}

export default SearchBar;
