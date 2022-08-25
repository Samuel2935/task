import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


export default function Form() {
  const dispatch = useDispatch();
  const { assignedUers } = useSelector((state) => state.assignedUser);

  const [task, setTask] = useState({
    Task: '',
    Follow_up: '',
    date: '',
    time: '',
    Samuel_Ezeh: '',
  });

  useEffect(() => {
    
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createPost(task));
    console.log(task);
  };

  const clear = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formWrap">
      <div className="create">
        <div className="reg">
          <form>
            <div className="double">
              <div className="addput">
                <input
                  placeholder="Task"
                  onChange={(e) => setTask({ ...task, Task: e.target.value })}
                />

                <div className="add">
                  <button style={{ backgroundColor: "#fff", color: "#1da" }}>
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p>Task Description</p>
              <input
                placeholder="Follow_up"
                onChange={(e) =>
                  setTask({ ...task, Follow_up: e.target.value })
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
                  onChange={(e) => setTask({ ...task, date: e.target.value })}
                />
              </div>

              <div className="time">
                <p>Time</p>
                <input
                  type="time"
                  placeholder="time"
                  onChange={(e) => setTask({ ...task, time: e.target.value })}
                />
              </div>
            </div>

            <div>
              <p>Assign User</p>
              {/* <input
              type=""
              placeholder="Samuel_Ezeh"
              onChange={(e) =>
                setTask({ ...task, Samuel_Ezeh: e.target.value })
              }
            /> */}
              <select
                name=""
                id=""
                onChange={(e) =>
                  setTask({ ...task, Samuel_Ezeh: e.target.value })
                }
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
                  onSubmit={handleSubmit}
                  type="submit"
                  style={{ backgroundColor: "green" }}
                >
                  save
                </button>
              </div>
              <div className="btn2">
                <button onClick={clear} style={{ backgroundColor: "red" }}>
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
