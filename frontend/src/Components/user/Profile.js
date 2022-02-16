import React, { useState, useEffect } from "react";
import "../../source/css/Profile.css";
import { useHistory } from "react-router-dom";

function Profile(props) {
  const history = useHistory();
  let [infoModal, setInfomodal] = useState(false);
  let [nicknmaModal, setNickname] = useState(false);

  //profile
  let [userId, setUserId] = useState();
  let [userEmail, setUserEmail] = useState("");
  let [userMygit, setUserMygit] = useState("");
  let [userNickname, setUserNickname] = useState("");
  let [usermyInfo, setUserMyInfo] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/user/current/", {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // 현재 유저 정보 받아왔다면, 로그인 상태로 state 업데이트 하고
        if (json.id) {
          setUserId(json.id);
          //유저정보를 받아왔으면 해당 user의 프로필을 받아온다.
        }
        fetch(
          "http://localhost:8000/user/auth/profile/" + json.id + "/update/",
          {
            method: "PATCH",
            headers: {
              Authorization: `JWT ${localStorage.getItem("token")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((userData) => {
            setUserEmail(userData.email);
            setUserMygit(userData.mygit);
            setUserNickname(userData.nickname);
            setUserMyInfo(userData.myInfo);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  let sendData;
  const handleEffect = (handleSubmit) => {
    sendData = {
      email: userEmail,
      mygit: userMygit,
      nickname: userNickname,
      myInfo: usermyInfo,
    };
    handleSubmit();
  };

  const handleSubmit = () => {
    let form_data = new FormData();
    form_data.append("nickname", sendData.nickname);
    form_data.append("myInfo", sendData.myInfo);
    fetch("http://localhost:8000/user/auth/profile/" + userId + "/update/", {
      method: "PATCH",
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      body: form_data,
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", JSON.stringify(response)));
  };

  const DeleteUser = () => {
    if (window.confirm("정말 삭제하시겠습니까 ?") === true) {
      fetch("http://localhost:8000/user/current/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json.id);
          fetch(
            "http://localhost:8000/user/auth/profile/" + json.id + "/delete/",
            {
              method: "DELETE",
              headers: {
                Authorization: `JWT ${localStorage.getItem("token")}`,
              },
            }
          )
            .then((res) => res.json())
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      // props.handleLogout();
      // history.push("/");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="title-wrapper">
            <h3>닉네임</h3>
          </div>
          <div className="block-for-mobile">
            {nicknmaModal === true ? null : (
              <div className="contents">{userNickname}</div>
            )}

            {nicknmaModal === true ? (
              <form className="nickname-form">
                <input
                  className="nickname-input"
                  placeholder={userNickname}
                  onChange={(e) => {
                    setUserNickname(e.target.value);
                  }}
                ></input>
              </form>
            ) : (
              <div className="edit-wrapper">
                <button
                  className="fix-button"
                  onClick={() => {
                    setNickname(true);
                  }}
                >
                  수정
                </button>
              </div>
            )}
          </div>
          <div className="contents">
            {/* <button className="out-button" onClick={DeleteUser}>
              회원탈퇴
            </button> */}
            <button
              className="save-button"
              onClick={() => {
                handleEffect(handleSubmit);
                setInfomodal(false);
                setNickname(false);
              }}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
