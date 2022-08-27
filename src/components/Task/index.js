import React, { useState, useEffect } from "react";
import "./task.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask } from "../../store/actions/getTaskAction";
import AddIcon from "@mui/icons-material/Add";
import Summary from "./summary";
import Form from "../Form/Form";


const Task = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { allTask } = useSelector((state) => state.task);
    const { assignedUers } = useSelector((state) => state.assignedUser);
  const [addTask, setAddTask] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const [taskSummary, setTaskSummary] = useState(false);

  useEffect(() => {
    if (assignedUers) {
      const data = user?.payload.results;
      dispatch(getAllTask(data));
      setTaskSummary(true);
      setJustAdded(false);
    }
  }, [assignedUers, justAdded]);

  return (
    <div className="mainWrap">
      <div className="taskWrap">
        <div className="taskCount">
          <span>Task {allTask && allTask.payload.length}</span>
          <button
            onClick={() => {
              setAddTask(true);
              setTaskSummary(false);
            }}
          >
            <AddIcon />
          </button>
        </div>
        {user && taskSummary && <Summary />}
        {addTask && (
          <Form
            setAddTask={setAddTask}
            setTaskSummary={setTaskSummary}
            setJustAdded={setJustAdded}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
