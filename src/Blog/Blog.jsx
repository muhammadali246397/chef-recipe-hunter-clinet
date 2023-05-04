import React from 'react';
import { Container } from 'react-bootstrap';
import Navbigation from '../share/Navbar/Navbigation';
import Footer from '../share/Footer/Footer';

const Blog = () => {
    return (
       <Container>
        <Navbigation></Navbigation>
        <div>
            <h4>1.Tell us the differences between uncontrolled and controlled components.</h4>
            <h5>controlled componets :</h5>
            <ol>
                <li>Managed by React state</li>
                <li>Parent component updates state on user interaction</li>
                <li>Data flows from parent component to component</li>
            </ol>
            <h5>Uncontroled component :</h5>
            <ol>
                <li>Managed by components own internal state</li>
                <li>Component updates own internal state on user interaction</li>
                <li>Data flows within the component</li>
            </ol>
            <h4>2.How to validate React props using PropTypes?</h4>
            <ol>
                <li>PropTypes.any : The prop can be of any data type.</li>
                <li>PropTypes.bool : The prop should be a Boolean.</li>
                <li>PropTypes.number : The prop should be a number</li>
                <li>PropTypes.string : The prop should be a string.</li>
            </ol>
            <h4>3.Tell us the difference between nodejs and express js.</h4>
            <p>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            <h4>4.What is a custom hook, and why will you create a custom hook?</h4>
            <p> A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.</p>
        </div>
        <Footer></Footer>
       </Container>
    );
};

export default Blog;