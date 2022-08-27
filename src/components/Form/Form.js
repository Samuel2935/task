import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTask } from '../../store/actions/addTaskAction';



export default function Form({ setAddTask, setTaskSummary, setJustAdded }) {
  const dispatch = useDispatch();
  const { assignedUers } = useSelector((state) => state.assignedUser);
  const { user } = useSelector((state) => state.auth);

  const [payload, setPayload] = useState({
    task_date: "",
    task_time: 5400,
    assigned_user: "",
    is_completed: 1,
    time_zone: 19800,
    task_msg: "",
  });

  const getUserId = (user_name) => {
    const selectedUser =
      assignedUers.payload?.length &&
      assignedUers.payload?.filter(
        (assignedUser) => assignedUser.name === user_name
      );

    const userId = selectedUser[0].id;
    return setPayload({ ...payload, assigned_user: userId });
  };
  
  // const hh_mm_ss_To_Sec = (hms) => {
  //   // console.log(typeof hms);
  //   const [hours, minutes, seconds] = parseInt(hms.split(":"));
  //   const totalSeconds = +hours * 60 * 60 + +minutes * 60 + +seconds;
  //   console.log([typeof hours, typeof minutes, seconds]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = user.payload.results;
    const data = { payload, result };
    console.log(payload);
    dispatch(AddTask(data));
    setAddTask(false);
    setJustAdded(true);
  };

  return (
    <div className="formWrap">
      <div className="create">
        <div className="reg">
          <form>
            <div>
              <p>Task Description</p>
              <input
                placeholder="Follow_up"
                value={payload.task_msg}
                onChange={(e) =>
                  setPayload({ ...payload, task_msg: e.target.value })
                }
              />
              <i></i>
            </div>

            <div className="date_time">
              <div className="date">
                <p>Date</p>
                <input
                  type="date"
                  placeholder="date"
                  value={payload.task_date}
                  onChange={(e) =>
                    setPayload({ ...payload, task_date: e.target.value })
                  }
                />
              </div>

              <div className="time">
                <p>Time</p>
                <input
                  type="time"
                  placeholder="time"
                  // value={payload.task_time}
                  // onChange={
                  //   (e) => hh_mm_ss_To_Sec(e.target.value)
                  //   // setPayload({ ...payload, task_time: e.target.value })
                  // }
                />
              </div>
            </div>

            <div>
              <p>Assign User</p>

              <select
                name=""
                id=""
                onChange={
                  (e) => getUserId(e.target.value)
                  // setPayload({ ...payload, assigned_user: e.target.value })
                }
                // value={payload.assigned_user}
              >
                <option value="">Select a user</option>
                {assignedUers &&
                  assignedUers.payload?.map((user) => (
                    <option key={user.id}>{user.name}</option>
                  ))}
              </select>
            </div>

            <div className="btn">
              <div className="btn1">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  style={{ backgroundColor: "green" }}
                >
                  save
                </button>
              </div>
              <div className="btn2">
                <button
                  onClick={() => {
                    setAddTask(false);
                    setTaskSummary(true);
                  }}
                  style={{ backgroundColor: "red" }}
                >
                  cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
