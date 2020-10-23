import React from 'react'

export default class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { name: "", age: "" }
        };
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        if (this.props.pollInterval) {
            window.setInterval(
                () => this.loadCommentsFromServer(),
                this.props.pollInterval,
            );
        }
    }
    render() {
        return (
            <>
                
            </>
            )
    }
}