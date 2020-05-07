import React from 'react';
import Form from 'react-bootstrap/Form';

function DescriptionCreatePost() {
    return(
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description of post</Form.Label>
        <Form.Control as="textarea" rows="3" />
        </Form.Group>
    )
}

export default DescriptionCreatePost;