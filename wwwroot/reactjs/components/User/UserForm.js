import React from 'react'

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', age: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }
    handleAgeChange(e) {
        this.setState({ age: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
        const name = this.state.name.trim();
        const age = this.state.age.trim();
        if (!name || !age) {
            return;
        }
        this.props.onUserSubmit({ name: name, age: age });
        // TODO: send request to the server
        this.setState({ name: '', age: '' });
    }
    render() {
        return (
            <form className="UserForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input
                    type="text"
                    placeholder="your age"
                    value={this.state.age}
                    onChange={this.handleAgeChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
}
export default UserForm;