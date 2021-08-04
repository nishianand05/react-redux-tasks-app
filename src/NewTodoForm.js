import React, {Component} from 'react';

class NewTodoForm extends Component {
	
	constructor(props){
		super(props);
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
		this.state = {
			task: ''
		}
	}
	
	handleSubmit(e){
		e.preventDefault();
		this.props.handleAdd(this.state.task);
		e.target.reset();
		this.props.history.push("/todos");
	}
	
	handleChange(e){
		this.setState({[e.target.name]: e.target.value})	
	}
	
	render(){
		return(
			<form onSubmit ={this.handleSubmit}>
				<input 
					type="text" 
					name="task" 
					id="task"
					placeholder="Add a task"
					onChange={this.handleChange}/>
				<button><i class="fas fa-plus"></i></button>
			</form>
		)
	}
}

export default NewTodoForm;
