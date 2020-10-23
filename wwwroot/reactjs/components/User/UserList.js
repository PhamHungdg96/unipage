import React, {useState} from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchUserList } from "../../redux/actionCreators"

const mapStateToProps = state => {
    return {
        Users: state.Users.Users
    };
};

const mapDispatchToProps = dispatch => ({
    loadUserList: () => dispatch(fetchUserList())
});

class User extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.Name}</td>
                <td>{this.props.Age}</td>
                <td>
                    <Link className="btn btn-primary btn-sm" to={"edit/" + this.props.id}>Edit</Link>{' '}
                    <Button variant="danger"size="sm">Del</Button>
                </td>
            </tr>
        );
    }
}
class UserList extends React.Component {
    componentDidMount() {
        this.props.loadUserList()
    }
    render() {
        const UserNodes = this.props.Users.map(v => (
            <User Name={v.name} Age={v.age} key={v.id} id={v.id}/>
        ));
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {UserNodes}
                </tbody>
            </Table>
        );
    }
}
//export default UserList
export default connect(mapStateToProps, mapDispatchToProps)(UserList)