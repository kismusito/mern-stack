import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authActions} from '../../_action';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alertUsername: false,
            alertPassword: false
        }
    }

    authUsername(username) {
        if(username === "") {
            this.setState({
                alertUsername: true
            })
            return false;
        } else {
            this.setState({
                alertUsername: false
            })
            return true;
        }
    }

    authPassword(password) {
        if(password === "") {
            this.setState({
                alertPassword: true
            })
            return false;
        } else {
            this.setState({
                alertPassword: false
            })
            return true
        }
    }

    onHandleSubmit = e => {
        e.preventDefault();

        if(this.authUsername(this.username.value)) 
            if(this.authPassword(this.password.value)) {
                const userObjet = {
                    username: this.username.value,
                    password: this.password.value
                }

                this.props.login(userObjet)
            }
                
           
    }

    render() {

        const { authReducer } = this.props;

        return (
            <div className="formSend">
                <form action="#" onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <input type="text" id="usermane" ref={input => this.username = input} name="usermane" className="form-control" placeholder="Username" />
                        {this.state.alertUsername && <p>The username is required</p>}
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" name="password" ref={input => this.password = input} className="form-control" placeholder="Password" />
                        {this.state.alertPassword && <p>The password is required</p>}
                    </div>
                    <button className="button-send">Login</button>
                </form>

                {authReducer.loginRequest && <div className="loader_content"><div className="loader"></div> <span>Loading</span> </div>}

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authReducer } = state;
    return {authReducer}
}

const actionCreator = {
    login: authActions.login
}

const loginComponent = connect(mapStateToProps , actionCreator)(Login);
export {loginComponent as Login}