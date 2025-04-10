import Button from './Button';
import Input from './Input';

const TaskItem = ({ task }) => {
	function handleClick(taskName) {
		alert(`The clicked task is: ${taskName}`);
	}

	return (
		<div className="task">
			<Input
				type="checkbox"
				className="checkbox"
				checked={task.completed === true}
			/>

			<span>{task.title}</span>

			<Button
				buttonClass="delete-button"
				onClick={() => handleClick(task.title)}
			>
				<i className="fa-solid fa-trash"></i>
			</Button>
		</div>
	);
};

export default TaskItem;