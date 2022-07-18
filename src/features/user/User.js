import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./userSlice"
import "./user.css";

const User = () => {
  const [user, setUser] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.user.randomUser
  });

  useEffect(() => {
    if (dispatch)
      dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setUser(data)
    }
  }, [data]);



  const renderUser = () => {
    return (

      <>
        <div className="user__left">
          <img src={user.picture} alt="" />
        </div>
        <div className="user__right">
          {
            <ul>
              <li>
                <h1>
                  {user.name.first} {user.name.last}
                </h1>
              </li>
              <li>
                <h3>Email: {user.email}</h3>
              </li>
              <li>
                <h3>Phone: {user.phone}</h3>
              </li>
              <li>
                <h3>City: {user.location.city}</h3>
              </li>
            </ul>
          }
        </div>
      </>
    );
  };

  return user &&

    <div className="user">{renderUser()}</div>;
}

export default User;
