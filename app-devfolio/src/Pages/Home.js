import React from "react";
import { withAuthHOC } from '../Hooks/withAuthHOC';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>{this.props.auth.username}</p>
            </div>
        );
    }
}

export default withAuthHOC(Home);