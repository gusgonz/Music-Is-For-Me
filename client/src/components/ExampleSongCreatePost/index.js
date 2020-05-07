import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';

function ExampleSongCreatePost() {
    return(
<InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>Artist/Band Name</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl />
  <InputGroup.Prepend>
    <InputGroup.Text>Song Name</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl />
</InputGroup>
    )
}

export default ExampleSongCreatePost;