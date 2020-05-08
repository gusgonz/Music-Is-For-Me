import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import MusicContainer from "../../components/MusicContainer";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";




function Posts() {

    const [allPosts, setAllPosts] = useState([]);

    const [{currPosts,search,targetType}, setCurrPosts] = useState({ currPosts: [], search: "", targetType:""});
    const userState = useContext(UserContext);

    useEffect(() => {
        loadPosts();
        console.log(userState)
    },[]);

    function loadPosts(){
        API.getPosts().then(results =>{
            setAllPosts(results.data);
             setCurrPosts({
                 search: "",
                 targetType: "",
                 currPosts:[]
             });
        })
    }

    function handleTypeChange({target}){
        let newArr = allPosts.filter(post => {
            // console.log(search, " ", post.name);
            return post.title===target.value && post.role.includes(search);
        })
        setCurrPosts({
            currPosts: newArr,
            targetType:target.value,
            search: search
        });
    }

    function handleSearchChange({target}){
        let newArr = allPosts.filter(post => {
            return post.title===targetType && post.role.includes(target.value);
        });

        setCurrPosts({
            currPosts: newArr,
            targetType:targetType,
            search: target.value
        });
    }

    return (
        <Container>
            <Row name="SearchRow">
            <Form>
                <Form.Row>
                <Col>
                <Form.Group>
                    <Form.Control type="search" placeholder="Search" onChange={handleSearchChange}></Form.Control>
                </Form.Group>
                </Col>
                <Col>
                    <Form.Control as="select" onChange={handleTypeChange}>
                        <option>Select..</option>
                        <option>Teacher</option>
                        <option>Student</option>
                    </Form.Control>
                </Col>
                </Form.Row>
            </Form>
            </Row>
            <Row name="ContentRow">
                <Col>
                {currPosts.map((p,index)=>{
                    return <MusicContainer
                    title={p.title}
                    video={p.video}
                    name={p.name}
                    author_id={p.author_id}
                    email={p.email}
                    phone={p.phone}
                    role={p.role}
                    description={p.description}
                    key={index}
                    />
                })}
                </Col>

            </Row>
        </Container>
    )
}

export default Posts;