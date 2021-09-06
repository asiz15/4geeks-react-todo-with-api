import React, { useState } from "react";
import { Task } from "./Task";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	const addTask = e => {
		if (e.key === "Enter" && newTask.length > 0) {
			const arr = [...tasks];
			arr.push(newTask);
			setTasks(arr);
			setNewTask("");
		}
	};
	return (
		<div className="text-center mt-5 container">
			<h2 className="mb-4">React Todos</h2>
			<div className="row mt-4">
				<div className="col col-12">
					<ul className="list-group text-left shadow-lg">
						<li className="list-group-item p-0">
							<input
								type="text"
								onKeyDown={e => addTask(e)}
								className="form-control p-4"
								placeholder="Whats needs to be done?"
								value={newTask}
								onChange={e =>
									setNewTask(e.target.value)
								}></input>
						</li>
						{tasks.length > 0 ? (
							tasks.map((task, index) => {
								return (
									<Task
										key={index}
										task={task}
										tasks={tasks}
										taskIndex={index}
										setTasks={setTasks}></Task>
								);
							})
						) : (
							<li className="list-group-item text-secondary">
								No tasks, add a task...
							</li>
						)}
						<li className="list-group-item">
							<small className="text-secondary">
								{tasks.length} Items left
							</small>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
