import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

import {connect} from 'react-redux';
import {addTodo, removeTodo, getTodos} from './actionCreators';
import {Route} from "react-router-dom";

class TodoList extends Component {
	
	constructor(props){
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		
	}
	
	componentDidMount(){
		this.props.getTodos();
	}
	
	handleAdd(val){
		this.props.addTodo(val);
	}
	
	removeTodo(id){
		this.props.removeTodo(id);
	}
	
	render(){
		let todos = this.props.todos.map(val => (
			<Todo 
				removeTodo={this.removeTodo.bind(this, val._id)} 
				task={val.task} 
				key={val._id} />
		));
		
		return(
				<div>
					<Route path="/todos/new" component= {props => (
								<NewTodoForm {...props} handleAdd={this.handleAdd}/>
							)} />
				
					<Route exact path ="/todos" component={()=>
							<div>
								<ul>{todos}</ul>
							</div>
						}/>
				</div>
		)
	}
}


function mapStateToProps(reduxState){
	return {
		...reduxState
	}
}

export default connect(mapStateToProps, {addTodo, removeTodo, getTodos})(TodoList);