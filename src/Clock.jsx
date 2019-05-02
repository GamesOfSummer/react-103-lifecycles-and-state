import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: 0 };
    }

    render() {
        return (
            <div>
                <h1>{this.state.date}</h1>
            </div>
        );
    }
}
