import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./NFTTabs.module.css";

const NFTTabs = ({ dataTab }) => {
  const names = [
    "Vishal Vishwakarma",
    "Neha",
    "Anamika",
    "User 4",
    "Wasiullah",
  ];

  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, i) => (
        <div className={Style.NFTTabs_box} key={i + 1}>
          <Image
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $770 by <span>{names[i]}</span>
              <MdVerified />
            </span>

            <small>Jun 14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
