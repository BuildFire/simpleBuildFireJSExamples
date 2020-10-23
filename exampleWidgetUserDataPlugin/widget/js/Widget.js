class Widget {
	constructor() {
		this.myTasks = [];
		this.editMode = false;
		this.defineMethods();
		this.initLogin();
		this.forceLogin();
		this.getMyTasks();
		this.container = document.querySelector("#tasksContainer");
		this.addButton = document.querySelector("#addTaskButton");
		this.input = document.querySelector("#taskInput");
		this.addButton.addEventListener("click", this.submit);
		this.input.addEventListener("keyup", this.onInputChange);
	}

	defineMethods() {
		this.initLogin = () => {
			buildfire.auth.getCurrentUser((err, user) => {
				if (err) return console.log(err);
				if (!user) {
					this.promptLogin();
				}
			});
		};

		this.getMyTasks = () => {
			buildfire.userData.search({}, "myTasks", (err, result) => {
				if (err) return console.log(err);
				this.myTasks = result;
				console.log(this.myTasks);
				this.renderTasks();
			});
		};

		this.renderTasks = () => {
			this.container.innerHTML = "";
			this.myTasks.forEach((task) => {
				new Task(
					{ ...task.data, id: task.id },
					this.deleteTask,
					this.enableEditMode
				);
			});
		};

		this.forceLogin = () => {
			buildfire.auth.onLogout(() => {
				this.promptLogin();
			});
		};

		this.promptLogin = () => {
			buildfire.auth.login({ allowCancel: false }, (err, result) => {
				if (err) return console.log(err);
			});
		};

		this.submit = () => {
			if (this.editMode) {
				console.log(this.editTaskId, this.taskName);
				buildfire.userData.update(
					this.editTaskId,
					{ taskName: this.taskName },
					"myTasks",
					null,
					(err, result) => {
						if (err) return console.log(err);
						console.log(result);
						this.updateSpecificTask(result);
					}
				);
			} else {
				buildfire.userData.insert(
					{ taskName: this.taskName },
					"myTasks",
					null,
					null,
					(err, result) => {
						if (err) return console.log(err);
						this.myTasks.push(result);
						this.renderTasks();
						this.input.value = "";
					}
				);
			}
		};

		this.updateSpecificTask = (taskData) => {
			const taskIndex = this.myTasks.findIndex((task) => {
				return task.id === taskData.id;
			});

			console.log(taskData);
			this.myTasks[taskIndex].data = { ...taskData.data };
			this.disabledEditMode();
			this.renderTasks();
		};

		this.onInputChange = ({ target }) => {
			const { value } = target;
			this.taskName = value;
		};

		this.deleteTask = (taskId) => {
			buildfire.userData.delete(taskId, "myTasks", null, (err, result) => {
				if (err) return console.log(err);

				this.myTasks = this.myTasks.filter((task) => task.id !== taskId);
				this.renderTasks();
			});
		};

		this.enableEditMode = (taskData) => {
			this.input.value = taskData.taskName;
			this.addButton.textContent = "save";
			this.editMode = true;
			this.editTaskId = taskData.id;
		};

		this.disabledEditMode = () => {
			this.input.value = "";
			this.addButton.textContent = "Add";
			this.editMode = false;
			this.editTaskId = null;
		};
	}
}

new Widget();
