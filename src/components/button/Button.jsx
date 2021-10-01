import React, { Component } from 'react';
import './styles.css';

export class Button extends Component {
    render() {
        return <button onClick={this.props.onClick ? () => this.props.onClick(this.props.filter) : ''} >{this.props.filter}</button>;
    }
}