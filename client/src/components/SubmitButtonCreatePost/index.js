import React from 'react';
import Button from 'react-bootstrap/Button';
// import GetCreatePostInfo from '../../pages/CreatePost';

function SubmitButtonCreatePost(props) {
    return(
        <>
  <Button variant="primary" size="lg" onClick={props.GetCreatePostInfo}>
    Create Post
  </Button>{' '}
</>
    )
}

export default SubmitButtonCreatePost;