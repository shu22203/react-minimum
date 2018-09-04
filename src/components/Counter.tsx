import * as React from 'react';

interface IProps {
    count: number;
    increment: any;
    decrement: any;
}

export default class Counter extends React.Component<IProps, {}> {
    public increment: any;
    public decrement: any;

    constructor(props: any) {
        super(props);
        this.increment = this.props.increment.bind(this);
        this.decrement = this.props.decrement.bind(this);
    }

    public render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}
