import React, { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage, AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import img1 from "../Assets/download.jpeg";
import img2 from "../Assets/cat.jpeg";
import img3 from "../Assets/goku.jpeg";

import { handleUploadClick } from "./uploadFile.jsx";
import { handleDownloadClick } from "./downloadFile.jsx";
import "./homestyle.css";

function Home() {
  const [isopen, setIsopen] = useState(false);

  const openmenu = () => {
    if (isopen === false) {
      setIsopen(true);
    } else {
      setIsopen(false);
    }
  };
  return (
    <div>
      <nav className="mynav">
        <div className="logo" style={{ marginLeft: "10px" }}></div>
        <div className="nav-ele">Home</div>
        <div className="nav-ele">Explore</div>
        <div className="nav-ele">
          <div className="create-ele " onClick={openmenu}>
            Create <RiArrowDropDownLine />
          </div>{" "}
        </div>
        <div className="navsearch">
          <div className="search-icon">
            <BiSearchAlt2 />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-ele icons">
          <BsBellFill />
        </div>
        <div className="nav-ele icons">
          <AiFillMessage />
        </div>
        <div className="nav-ele icons">
          <div className="logo"></div>
        </div>
        <div className="nav-ele last">
          <RiArrowDropDownLine />
        </div>
      </nav>
      <div className="body-con">
        <div className="pinwrapper">
          <div className="pin">
            <img src={img1} alt="Anime" />
            <div className="overlay">
              <div className="title">Anime</div>
              <div className="options">
                <BsDownload /> <FiMoreVertical />
              </div>
            </div>
          </div>
          <div className="pin" style={{ height: "30vh" }}>
            <img src={img2} alt="Cat" />
            <div className="overlay">
              <div className="title">Cat</div>
              <div className="options">
                <BsDownload /> <FiMoreVertical />
              </div>
            </div>
          </div>
          <div className="pin" style={{ height: "60vh" }}>
            <img src={img3} alt="Goku" />
            <div className="overlay">
              <div className="title">Goku</div>
              <div className="options">
                <BsDownload /> <FiMoreVertical />
              </div>
            </div>
          </div>

          <div className="upld-con" style={{ height: "100px", width: "95%" }}>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
            />
            <label htmlFor="fileInput" style={{ fontFamily: "Bree Serif" }}>
              Select an image
            </label>
            <button onClick={handleUploadClick} style={{ marginRight: "10px" }}>
              Upload
            </button>
          </div>

          <div className="upld-con" style={{ height: "100px", width: "95%" }}>
            <label style={{ fontFamily: "Bree Serif" }}>
              Download an image
            </label>
            <button
              onClick={handleDownloadClick}
              style={{ marginRight: "10px" }}
            >
              Download
            </button>
          </div>
        </div>
      </div>
      {isopen && (
        <div className="createpannel">
          <div className="left">
            <div className="upld-con">
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                accept="image/*"
              />
              <label htmlFor="fileInput" style={{ fontFamily: "Bree Serif" }}>
                Select an image
              </label>
            </div>
          </div>
          <div className="right">
            <div className="close" onClick={openmenu}>
              <AiOutlineClose />
            </div>
            <div className="ins-con">
              <label className="title1">Title</label>
              <input type="text" className="inputs" />
              <label className="title1">Owner</label>
              <input type="text" className="inputs" />
              <label className="title1">Email</label>
              <input type="text" className="inputs" />
              <br />
              <button onClick={handleUploadClick}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
