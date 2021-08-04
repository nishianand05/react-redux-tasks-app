import React from 'react';

const Todo = ({task, removeTodo}) => 
<li>
	{task}
	<button className="deleteTodo" onClick={removeTodo}><i class="far fa-trash-alt"></i></button>
</li>;

export default Todo;