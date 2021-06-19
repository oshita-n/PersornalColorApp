import { useState, useEffect } from "react";
import type { VFC } from "react";
import axios from "axios";
import useSWR from "swr";

// タスクデータの型
type Task = {
  id: number;
  task: string;
  created_at: string;
  updated_at: string;
};
type EditTask = {
  id: number;
  task: string;
};

// 画面入力用ステートの初期値
const initTask = {
  id: 0,
  task: "",
};

const URL = "http://127.0.0.1:8000/api/task/";
// 検索
export const taskGet = (url: string) =>
  axios.get<Task[]>(url).then((res) => res.data);
// 新規登録
export const taskPost = (url: string, task: EditTask) =>
  axios.post<Task>(url, task).then((res) => res.data);
// 更新
export const taskPut = (url: string, id: number, task: EditTask) =>
  axios.put<Task>(`${url}${id}/`, task).then((res) => res.data);
// 削除
export const taskDelete = (url: string, id: number) =>
  axios.delete(`${url}${id}/`).then((res) => res);

const sample2: VFC = () => {
  // 画面表示用のタスク一覧
  const { data: tasks, mutate } = useSWR<Task[]>(URL, taskGet);
  // 画面入力
  const [editTask, setEditTask] = useState<EditTask>(initTask);

  // =============================================
  // 追加・更新ボタンクリック
  //    画面入力値をタスク一覧へ反映する
  const handleInsertClick = async () => {
    if (editTask.id === 0) {
      // id が 0 の場合は追加時
      await taskPost(URL, editTask);
      await mutate();
    } else {
      // 更新
      await taskPut(URL, editTask.id, editTask);
      await mutate();
    }
    // 画面入力用のステートを初期化する
    setEditTask(initTask);
  };
  // =============================================
  // 削除ボタンクリック
  const handleDeleteClick = async (id: number) => {
    // タスクデータを削除する
    await taskDelete(URL, id);
    await mutate();
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
        {tasks &&
          tasks.map((task) => {
            // return <span key={task.id}>{task.task}</span>;
            return (
              <div className="flex flex-row key={task.id}">
                {/* タスクデータ */}
                <div className="mr-10">{task.task}</div>
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
