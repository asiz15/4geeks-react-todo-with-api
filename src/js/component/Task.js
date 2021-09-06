import React from "react";
import PropTypes from "prop-types";

export const Task = ({ task, tasks, setTasks, taskIndex }) => {
	const removeTask = () => {
		const arr = [...tasks];
		arr.splice(taskIndex, 1);
		setTasks(arr);
	};
	return (
		<li className="list-group-item d-flex justify-content-between task p-4">
			<span className="font-weight-bold" style={{ fontSize: "1.2em" }}>
				{taskIndex + 1}. {task}
			</span>
			<button
				type="button"
				className="task--delete p-0 m-0"
				onClick={removeTask}>
				X
			</button>
		</li>
	);
};

Task.propTypes = {
	task: PropTypes.string,
	tasks: PropTypes.array,
	setTasks: PropTypes.func,
	taskIndex: PropTypes.number
};
