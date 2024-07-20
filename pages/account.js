import Profile from "../././components/NavBar/Profile/Profile";
// Account.jsx
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

//INTERNAL IMPORT
import Style from "../styles/account.module.css";
import images from "../img";
import Form from "../AccountPage/Form/Form";


const Account = () => {
  const [fileUrl, setFileUrl] = useState(images.user1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    description: "",
    website: "",
    facebook: "",
    twitter: "",
    instagram: "",
    walletAddress: "",
  });

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFileUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, []);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          {fileUrl && (
            <Image
              src={fileUrl}
              alt="user profile"
              width={150}
              height={150}
              className={Style.account_box_img}
            />
          )}
          <p>Change Image</p>
        </div>
        <div className={Style.account_box_form}>
          <Form onFormSubmit={handleFormSubmit} />
        </div>
      </div>

      <div className={Style.account_profile}>
        <Profile currentAccount={formData} />
      </div>
    </div>
  );
};

export default Account;
