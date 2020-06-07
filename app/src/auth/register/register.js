import React, { Component } from 'react';
import { connect } from 'react-redux';

class Register extends Component {
    render() {
        return (
            <div className="formSend">
                <form action="#">
                    <div className="form-group">
                        <input type="text" id="usermane" name="usermane" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" name="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <button className="button-send">Register</button>
                </form>
            </div>
        )
    }
}

const registerComponent = connect()(Register);
export {registerComponent as Register};