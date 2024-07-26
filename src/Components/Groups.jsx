import React from "react";
import logo from "../Images/live-chat.png";
import SearchIcon from "@mui/icons-material/Search";
import "./myStyle.css";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className="list-container">
      <div className={"ug-header" + (lightTheme ? "" : " dark")}>
        <img src={logo} style={{ height: "2rem", width: "2rem" }} alt="logo" />
        <p className={"ug-title" + (lightTheme ? "" : " dark")}>
          Available Groups
        </p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
