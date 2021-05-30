import React, { useRef, useEffect, useState } from "react";
// @ts-ignore
import { ChatEngine } from "react-chat-engine";
import { auth } from "../config/firebase";
import { chatConfig } from "../config/chatEngine";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
import { createUser, getUser, googleLogin } from "../services/auth.service";

const Chat = () => {
  const history = useHistory();
  const { user }: any = useAuth();
  console.log(user);

  useEffect(() => {
    async function initUser() {
      if (!user) return history.push("/");
      const data: any = await getUser(user.email, user.uid);
      if (data.error) {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        if (user.photoURL) {
          const file = await getFile(user.photoURL);
          formData.append("avatar", file, file.name);
        }
        const userData = await createUser(formData);
      }
    }

    initUser();
    return () => {
        
    };
  }, []);
  const handleLogOut = async () => {
    await auth.signOut();
    history.push("/");
  };
  const getFile = async (url: string) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.png", { type: "image/png" });
  };
  if (!user) return <div>Loading...</div>;
  return (
    <div>
      <div className="flex bg-red-600 px-5 py-4 justify-between">
        <span className="text-xl text-white font-bold">Chats</span>{" "}
        <span
          className="cursor-pointer text-white font-bold"
          onClick={() => handleLogOut()}
        >
          Logout
        </span>
      </div>
      <div className="font-sans">
        <ChatEngine
          height="calc(100vh - 60px )"
          publicKey={chatConfig.projectId}
          userName={user.email}
          userSecret={user.uid}
        ></ChatEngine>
      </div>
    </div>
  );
};

export default Chat;
