import React, { useState, useEffect, useContext, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import MusicContainer from "../../components/MusicContainer";
import Jumbotron from "react-bootstrap/Jumbotron";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import "./style.css";



function Posts() {

    const [allPosts, setAllPosts] = useState([]);
    const testRef = useRef();
    const [{currPosts,search,targetType}, setCurrPosts] = useState({ currPosts: [], search: "", targetType:""});
    const userState = useContext(UserContext);
    useEffect(() => {
        loadPosts();
    },[]);

    function loadPosts(){
        API.getPosts().then(results =>{
            setAllPosts(results.data);
             setCurrPosts({
                 search: "",
                 targetType: "",
                 currPosts: results.data
             });
        })
    }

    function handleTypeChange({target}){
        console.log(testRef.current.value)
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
            <Jumbotron className="postJumbo">
                <h1>Find your next music student/teacher</h1>
            </Jumbotron>
            <Row name="SearchRow" className="justify-content-center">
            <Form>
                <Form.Row >
                <Col >
                <Form.Group>
                    <Form.Control type="search" placeholder="Search" onChange={handleSearchChange}></Form.Control>
                </Form.Group>
                </Col>
                <Col>
               
                    <Form.Control as="select" onChange={handleTypeChange} ref={testRef}>
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

                {currPosts.length===0 ? 
                <h4>No Results Found</h4>
                :
                currPosts.map((p,index)=>{
                    const yourPost = (p.author_id===userState.currUser._id);
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
                    ownPost = {yourPost}
                    />
                })}
                </Col>

            </Row>
        </Container>
    )
}

export default Posts;