import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
    render() {
        return (
            <h1>In todo</h1>
        )
    }
}

const todoComponent = connect()(Todo);
export {todoComponent as Todo}