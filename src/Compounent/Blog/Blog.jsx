import React from 'react';

const Blog = () => {
    return (
        <div className='container mb-4'>
            <h2 className='text-5xl text-center font-bold m-5'>Qustion All </h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    (1) Tell us the differences between uncontrolled and controlled components ?
                </div>
                <div className="collapse-content">
                    <p> Ans:In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    (2) How to validate React props using PropTypes?
                </div>
                <div className="collapse-content">
                    <p> Ans:PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we're using PropTypes.string .</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    (3) Tell us the difference between nodejs and express js.?
                </div>
                <div className="collapse-content">
                    <p> Ans:js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    (4) What is a custom hook, and why will you create a custom hook??
                </div>
                <div className="collapse-content">
                    <p> Ans:Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </div>
            </div>
        </div>

    );
};

export default Blog;