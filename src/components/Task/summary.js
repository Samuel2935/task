import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import "./task.css"
import { Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTask } from '../../store/actions/deleteTaskAction';

const Summary = () => {
    const dispatch = useDispatch();
    const { allTask } = useSelector((state) => state.task);
     const { user } = useSelector((state) => state.auth);

    const handleDelete = (task_id, company_id) => {
        const data = {
          task_id,
          company_id,
          token: user.payload.results.token,
        };
        dispatch(deleteTask(data));
    };

  return (
    <>
      {allTask && allTask.payload.length === 0 && <p style={{textAlign: "center"}}>No Task yet - Click the + button to add new task</p>}
      {allTask &&
        allTask.payload.map((task) => (
          <div className="taskSummary" key={task.id}>
            <div className="left">
              <Avatar src="/broken-image.jpg" />
              <div className="info">
                <h4>{task.task_msg}</h4>
                <div className="date">
                  <span>{task.task_date}</span> <span>{task.task_time}</span>
                </div>
              </div>
            </div>
            <div className="right">
              <span>
                <EditIcon />
              </span>
              <span>
                <AssignmentTurnedInIcon />
              </span>
              <span onClick={() => handleDelete(task.id, task.company_id)}>
                <DeleteIcon />
              </span>
            </div>
          </div>
        ))}
    </>
  );
}

export default Summary