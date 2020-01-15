import React, {Component} from 'react';
import SideNav from "./SideNav";
import Forms from "./Forms";
import AuthService from "../../services/AuthService";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.AuthService = new AuthService();
        this.state = {
            selected: '1',
        }
    }
    componentDidMount = () =>{
        if(!this.AuthService.CheckForUser())
            this.props.history.push("/");
    }
    navClick = (e) => {
        this.setState({selected: e.target.value})
    };
    logOut = () =>{
        this.AuthService.LogOut();
        this.props.history.push("/");
    }
    render() {
        return (
            <div className='container-fluid dashboard'>
                <div className='row'>
                    <SideNav navClick={this.navClick} selected={this.state.selected} logOut={this.logOut}/>
                    <Forms selected={this.state.selected}/>
                </div>
            </div>
        );
    }
}

export default Dashboard;