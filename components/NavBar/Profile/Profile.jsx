import React, { useState, useCallback } from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import Link from "next/link";
import { useDropzone } from "react-dropzone";

//INTERNAL IMPORT
import Style from "./Profile.module.css";
import images from "../../../img";

const Profile = ({ currentAccount }) => {
  const [fileUrl, setFileUrl] = useState(images.user1);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFileUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <div className={Style.profile_account_img} {...getRootProps()}>
          <input {...getInputProps()} />
          {fileUrl && (
            <Image
              src={fileUrl}
              alt="user profile"
              width={150}
              height={150}
              className={Style.profile_account_img}
            />
          )}
          {!fileUrl && (
            <FaUserAlt size={150} className={Style.profile_account_img_icon} />
          )}
        </div>

        <div className={Style.profile_account_info}>
          <p>{currentAccount.username}</p>
          <small>{currentAccount.email}</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/author" }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/author" }}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/account" }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/contactus" }}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/aboutus" }}>About Us</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
