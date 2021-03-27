import { useState } from "react";

type Task = {
  id: number;
  task: string;
};

const initTask = {
  id: 0,
  task: "",
};

const sample2 = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task>(initTask);

  const handleInsertClick = () => {
    if (editTask.id === 0) {
      editTask.id = tasks.length + 1;
      setTasks([...tasks, editTask]);
    } else {
      const tmpTasks = tasks.map((task) => {
        if (task.id !== editTask.id) {
          return task;
        } else {
          return editTask;
        }
      });
      setTasks(tmpTasks);
    }

    setEditTask(initTask);
  };

  const handleDeleteClick = (id: number) => {
    const tmpTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(tmpTasks);
  };

  return (
    <div className="mt-10 ml-10">
      <div className="flex flex-col">
        <div className="flex flex-row ">
          <span>タスク</span>
          <input
            type="text"
            className="border border-black"
            value={editTask.task}
            onChange={(e) => {
              setEditTask({ ...editTask, task: e.target.value });
            }}
          />
        </div>
        <button
          className="bg-gray-300"
          onClick={() => {
            handleInsertClick();
          }}
        >
          {editTask.id === 0 ? "追加" : "更新"}
        </button>
      </div>
      <div className="flex flex-col">
        {tasks.map((task) => {
          return (
            <div className="flex flex-row ">
              <div key={task.id} className="mr-10">
                {task.task}
              </div>
              <button
                className="m-6 bg-gray-300"
                onClick={() => {
                  handleDeleteClick(task.id);
                }}
              >
                削除
              </button>
              <button
                className="m-6 bg-gray-300"
                onClick={() => {
                  setEditTask(task);
                }}
              >
                更新
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default sample2;
