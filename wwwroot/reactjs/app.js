import React from 'react'
import UserList from './components/User/UserList'
import UserForm from './components/User/UserForm'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UserEdit from './components/User/UserEdit'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }
    loadCommentsFromServer() {
        axios.get(this.props.url)
        .then((res)=>{
            this.setState({data:res.data})
        })
        // const xhr = new XMLHttpRequest();
        // xhr.open('get', this.props.url, true);
        // xhr.onload = () => {
        //     const data = JSON.parse(xhr.responseText);
        //     this.setState({ data: data });
        // };
        // xhr.send();
    }
    componentDidMount() {
        //this.props.loadUserList()
        this.loadCommentsFromServer();
        if(this.props.pollInterval){
            window.setInterval(
                () => this.loadCommentsFromServer(),
                this.props.pollInterval,
            );
        }
    }
    handleUserSubmit(User){
        const data = new FormData();
        const self= this
        data.append('Name', User.name);
        data.append('Age', User.age);
        const _url=this.props.url
        axios({
            method:'post',
            url: _url,
            headers:{
                'Content-Type':'application/json'
            },
            data:data
        }).then(res => {
            console.log(res.data)
        });
        
    }
    render() {
        console.log("hung_log", this.props.Users)
        return (
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="~/">UNIPAGE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/add">ADD</Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Navbar>
                <Switch>
                    <Route path="/" exact component={UserList} />
                    <Route path="/add" render={() => <UserForm onUserSubmit={this.handleUserSubmit} />} />
                    <Route path="/edit/:id" render={(props) => <UserEdit {...props} />} />
                </Switch>
            </Router>
        )
    }
}
export default App;
