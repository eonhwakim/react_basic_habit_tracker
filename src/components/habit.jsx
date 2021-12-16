import React, { Component } from 'react';

class Habit extends Component {
    componentDidCatch() {
        console.log(`habit: ${this.props.habit.name} mounted`)
    }
    componentWillUnmount() {
        console.log(`habit: ${this.props.habit.name} will unmounted`)

    }
   
    handleIncrement = () => {
       this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);

    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {        
        
        const {name} = this.props.habit;
        const {count} = this.props;
        console.log(`habit: ${name}`);
        return (
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="far fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease"  onClick={this.handleDecrement}>
                <i className="far fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="far fa-trash-alt"></i>
            </button>
            </li>
        );
    }
}

export default Habit;