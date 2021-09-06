import axios from "axios";
import React, { useState, useEffect } from "react";
import { Task } from "./Task";

const sampleTask = {
	label: "",
	done: false
};

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState(sampleTask);

	const baseUrl = "https://assets.breatheco.de/apis/fake/todos/user/asiz15";
	const getTasks = () => {
		axios
			.get(baseUrl)
			.then(res => setTasks(res.data))
			.catch(err => console.log(err));
	};
	const addTask = e => {
		if (e.key === "Enter" && newTask.label.length > 0) {
			const arr = [...tasks];
			arr.push(newTask);
			setTasks(arr);
			setNewTask(sampleTask);
		}
	};
	const clearTasks = () => {
		const deleteTasks = {
			method: "PUT",
			url: baseUrl,
			headers: {
				"Content-Type": "application/json"
			},
			data: []
		};
		axios(deleteTasks)
			.then(res => setTasks([]))
			.catch(err => console.log(err));
	};
	const updateTasks = () => {
		
	}
	useEffect(() => {
		getTasks();
	}, []);
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
								value={newTask.label}
								onChange={e =>
									setNewTask({
										...newTask,
										label: e.target.value
									})
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
						<li className="list-group-item d-flex justify-content-between w-100">
							<small className="text-secondary">
								{tasks.length} Items left
								<button onClick={clearTasks}>Delete all</button>
							</small>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
