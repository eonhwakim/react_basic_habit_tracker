import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {   


    // handleIncrement = habit => { 
    //     //console.log(`handleIncrement ${habit.name}`); 
    //     const habits = [...this.state.habits]; 
    //     const index = habits.indexOf(habit); 
    //     habits[index].count++; 
    //     this.setState({habits}); 
    // };

    // handleDecrement = habit => {
    //    //console.log(`handleIncrement ${habit.name}`)
    //     const habits = [...this.state.habits];
    //     const index = habits.indexOf(habit);
    //     const count = habtis[index].count - 1;
    //     habits[index].count = count < 0 ? 0 : count;
    //    //this.setState({habits: habits});
    //     this.setState({habits});

    // };

  
    // handleDelete = habit => {
    //     //console.log(`handleDelete ${habit.name}`)
    //     const habits = this.state.habits.filter(item => item.id !== habit.id);
    //     this.setState({habits});
    // };

    

    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };  
    
    handleDecrement = habit => {
        this.props.onDecrement(habit);
    };
    handleDelete = habit => {
        this.props.onDelete(habit);
    };
    handleAdd = name => {
        this.props.onAdd(name);
    };

    render() {        
        return (
        <>
            <HabitAddForm onAdd={this.handleAdd}/>
            <ul>
                {this.props.habits.map(habit => (
                    <Habit 
                        key={habit.id} 
                        habit = {habit} 
                        name={habit.name}
                        count={habit.count}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                ))}            
            </ul>
            <button className="habits-reset" onClick={this.props.onReset}>
                Reset All
            </button>
        </>
        );
    }
}

export default Habits;