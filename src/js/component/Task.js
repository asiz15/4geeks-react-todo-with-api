import React from "react";
import PropTypes from "prop-types";

export const Task = ({ task, tasks, updateTasks, taskIndex }) => {
	const removeTask = () => {
		const arr = [...tasks];
		arr.splice(taskIndex, 1);
		if (arr.length === 0) {
			arr.push({ label: "sample task", done: false });
		}
		updateTasks(arr);
	};
	return (
		<li className="list-group-item d-flex justify-content-between task p-4">
			<span className="font-weight-bold" style={{ fontSize: "1.2em" }}>
				{taskIndex + 1}. {task?.label}
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
	task: PropTypes.object,
	tasks: PropTypes.array,
	updateTasks: PropTypes.func,
	taskIndex: PropTypes.number
};
