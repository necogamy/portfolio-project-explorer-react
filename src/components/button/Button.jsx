import React, { Component } from 'react';
import './styles.css';

export class Button extends Component {
    render() {
        return <button style={{opacity: this.props.active === this.props.filter ? 1 : 0.7}} className='button' onClick={this.props.onClick ? () => this.props.onClick(this.props.filter) : ''} >{this.props.filter}</button>;
    }
}