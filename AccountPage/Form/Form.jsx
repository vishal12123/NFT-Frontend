// Form.jsx
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Form.module.css";
import { Button } from "../../components/componentsindex.js";

const Form = ({ onFormSubmit }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form onSubmit={handleSubmit}>
          <div className={Style.Form_box_input}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              className={Style.Form_box_input_userName}
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input
                type="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="6"
              placeholder="something about yourself in few words"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>

              <input
                type="text"
                placeholder="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input
                  type="text"
                  placeholder="http://"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor="twitter">Twitter</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input
                  type="text"
                  placeholder="http://"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input
                  type="text"
                  placeholder="http://"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="walletAddress">Wallet address</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
              />
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={Style.Form_box_btn}>
            <Button
              btnName="Upload profile"
              type="submit"
              classStyle={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
