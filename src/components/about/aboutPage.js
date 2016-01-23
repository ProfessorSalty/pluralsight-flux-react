import React from 'react';

class About extends React.Component {

    // static willTransitionTo(transition, params, query, callback) {
    //     if(!confirm('Caution: This page is boring.  Continue?')) {
    //         transition.about();
    //     } else {
    //         callback();
    //     }
    // }

    // static willTransitionFrom(transition, component) {
    //     if(!confirm('Caution: This page is really exciting.  Leave?')) {
    //         transition.about();
    //     }
    // }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application will use the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default About;