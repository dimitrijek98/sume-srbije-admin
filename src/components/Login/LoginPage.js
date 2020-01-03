import React, {Component} from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        //this.UserService = new UserService();
        this.state = {
            email: '',
            password: '',
        }
    }

    login = (e) => {
        // e.preventDefault();
        // this.UserService.login(this.state.email, this.state.password)
        //     .then(res => {
        //         console.log(res.data[0]);
        //         this.props.history.push({pathname: '/fileExplorer',state: {user: res.data[0]}});
        //     });

    };

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div className='container-fluid login-container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='login-form-container'>
                                <form className='form-size'>
                                    <div className="form-group pb-3">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control mt-2" name='email'
                                               id="exampleInputEmail1"
                                               aria-describedby="emailHelp" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group pb-4">
                                        <label>Password</label>
                                        <input type="password" name='password' onChange={this.handleInput}
                                               className="form-control mt-2"/>
                                    </div>

                                    <button onClick={this.login} type="submit" className="btn btn-light">Log in
                                    </button>
                                </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default LoginPage;