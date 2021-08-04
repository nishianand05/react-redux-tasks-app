export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODOS = "GET_TODOS";

function handleGetTodos(data){
	return {
		type: GET_TODOS,
		data
	}
}

function handleAddTodo(data){
	return {
		type: ADD_TODO,
		data
	}
}

function handleRemoveTodo(id){
	return {
		type: REMOVE_TODO,
		id
	}
}

export function getTodos(){
	var URL = 'https://lololol.run-ap-south1.goorm.io';
	return function(dispatch){
		return fetch(`${URL}/api/todos`)
		.then(res=>res.json())
		.then(data => dispatch(handleGetTodos(data)))
		.catch(err => console.log("Error!", err));
	}
}

export function addTodo(task){
	var URL = 'https://lololol.run-ap-south1.goorm.io';
	return dispatch => {
		return fetch(`${URL}/api/todos`, { 
			method: 'POST',
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({task})
		})
		.then(res => res.json())
		.then(data => dispatch(handleAddTodo(data)))
		.catch(err => console.log("Error!", err));
	}
}

export function removeTodo(id){
	var URL = 'https://lololol.run-ap-south1.goorm.io';
	return dispatch => {
		return fetch(`${URL}/api/todos/${id}`, { 
			method: 'DELETE',
		})
		.then(res => res.json())
		.then(data => dispatch(handleRemoveTodo(id)))
		.catch(err => console.log("Error!", err));
	}
}

