import { useState, VFC } from "react";

// タスクデータの型
type Task = {
  id: number;
  task: string;
};

// 画面入力用ステートの初期値
const initTask = {
  id: 0,
  task: "",
};

const sample2: VFC = () => {
  // 画面表示用のタスク一覧
  const [tasks, setTasks] = useState<Task[]>([]);
  // 画面入力
  const [editTask, setEditTask] = useState<Task>(initTask);

  // =============================================
  // 追加・更新ボタンクリック
  //    画面入力値をタスク一覧へ反映する
  const handleInsertClick = () => {
    if (editTask.id === 0) {
      // id が 0 の場合は追加時
      editTask.id = tasks.length + 1;
      // タスクデータへ追加する
      setTasks([...tasks, editTask]);
    } else {
      // id が 0以外 の場合は更新時
      const tmpTasks = tasks.map((task) => {
        // タスクデータの中から更新対象を入力値で入れ替える
        if (task.id !== editTask.id) {
          return task;
        } else {
          return editTask;
        }
      });
      // タスクデータへ反映する
      setTasks(tmpTasks);
    }
    // 画面入力用のステートを初期化する
    setEditTask(initTask);
  };
  // =============================================
  // 削除ボタンクリック
  const handleDeleteClick = (id: number) => {
    // タスクデータから削除対象のタスクを除く
    const tmpTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    // タスクデータへ追加する
    setTasks(tmpTasks);
  };

  // =============================================
  // JSX 画面描画
  return (
    <div className="mt-10 ml-10">
      <div className="flex flex-col">
        {/* タスク入力用 */}
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
        {/* 追加・更新ボタン */}
        <button
          className="bg-gray-300"
          onClick={() => {
            handleInsertClick();
          }}
        >
          {editTask.id === 0 ? "追加" : "更新"}
        </button>
      </div>
      {/* タスク一覧 */}
      <div className="flex flex-col">
        {tasks.map((task) => {
          return (
            <div className="flex flex-row ">
              {/* タスクデータ */}
              <div key={task.id} className="mr-10">
                {task.task}
              </div>
              {/* 削除ボタン */}
              <button
                className="m-6 bg-gray-300"
                onClick={() => {
                  handleDeleteClick(task.id);
                }}
              >
                削除
              </button>
              {/* 更新ボタン */}
              {/* 該当行のタスクを入力用のテキストボックスに表示させる */}
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
