import React from "react";
import "./style.css";
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user) => {
        return (
          <div className="column">
            <div class="img1">
              <img src={user.avatar} alt="" />
            </div>
            <div className="details">
              <h2>
                <span>{user.first_name}</span>
                {user.last_name}
              </h2>
              <p>{user.email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
