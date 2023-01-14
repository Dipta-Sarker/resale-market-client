import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-8'>
                <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
                <p>The Four Kinds of React State to Manage
                    Local state.
                    Global state.
                    Server state.
                    URL state.</p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl'> How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. </p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl'>What is a unit test? Why should we write unit tests?</h1>
                <p>Let's start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly</p>
            </div>
            <div className='mb-8'>
                <h1 className='text-2xl'> React vs. Angular vs. Vue?</h1>
                <p>A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers</p>
            </div>
        </div>
    );
};

export default Blog;