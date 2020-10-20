class Task {
	container;
	taskData;
	onDeleteTask;
	onEnableEditMode;
	constructor(taskData, onDeleteTask, onEnableEditMode) {
		this.container = document.querySelector("#tasksContainer");
		this.taskData = taskData;
		this.onDeleteTask = onDeleteTask;
		this.onEnableEditMode = onEnableEditMode;
		this.init();
	}

	init() {
		const task = ui.create("div", this.container, this.getTaskMarkup(), [
			"task",
		]);

		task.querySelector("#deleteTaskButton").addEventListener("click", () => {
			this.onDeleteTask(this.taskData.id);
		});

		task.querySelector("#editButton").addEventListener("click", () => {
			this.onEnableEditMode(this.taskData);
		});
	}

	getTaskMarkup = () => {
		const { taskName } = this.taskData;
		return `
    <p class="task__content" >
    ${taskName}
    </p>
    <div class="task__buttons" >
    <button id="deleteTaskButton" class="task__delete" >
    delete
    </button>
    <button id="editButton" class="task__edit"  > edit </button>
    </div>
    `;
	};
}
