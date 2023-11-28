import React, { Component, useState } from "react";
import Dashboardcss from "../Dashboard.css";
import "./PhotoCaptureThree.css";
import ReactSwitch from "react-switch";
import { Link } from "react-router-dom";
import axios from "axios";
import UserLoginDetails from "../UserLoginDetails";
import homeDown from "../Assets/Images/FieldAgent/homeDown.png";
import peopleDown from "../Assets/Images/FieldAgent/peopleDown.png";
import Footer from "../Footer";
import vector from "../vector.png";

import gated_sec from "../PropertyAdditionPageIcons/gatedsecurity_1/24.png";
import car_parking from "../PropertyAdditionPageIcons/car_parking/24.png";
import gym_1 from "../PropertyAdditionPageIcons/gym_1/24.png";
import club_house from "../PropertyAdditionPageIcons/club_house/24.png";
import swimming_pool from "../PropertyAdditionPageIcons/swimming_pool/24.png";
import convenience_store from "../PropertyAdditionPageIcons/convenience_store/24.png";
import bedroom from "../Assets/Images/FieldAgent/Bedroom.png";
import washroom from "../Assets/Images/FieldAgent/washroom.png";
import balcony from "../Assets/Images/FieldAgent/Balcony_two.png";
import broom_clean from "../Assets/Images/FieldAgent/Broom_clean.png";
import BackButton from "../CommonButtonBack";
import CommonHeader from "../CommonHeader";
import CommonBtn from "../CommonButton";
import CommonTopButton from "../CommonTopButton";

function PhotoCaptureTwo() {
  const token = localStorage.getItem("token");
  console.log(token);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    alert("You have been logged out.");
  };

  const [formData, setFormData] = useState({
    // propertyid: propertyid,
    mainGate: true,
    clubHouse: true,
    groceryStore: true,
    swimmingPool: true,
    gym: true,
    parking: true,
    feature1: true,
    feature2: true,
    feature3: true,
    
  });

  return (
    <>
      <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
          backgroundRepeat: "no-repeat",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        {/* <h2 style={{ color: "#52796F" }}>Photo Capture</h2> */}
        <CommonHeader title="Photo Capture" color="#52796F"/>
        <div style={{ textAlign: "left" }}>
          <text>
            Society Photos Checklist
            <br />
            <div style={{ marginTop: "20px" }}></div>
            1. Below are mandatory pictures
            <br />
            2. If there are more places in the society relevant to the tenant,
            please click all pictures.
            <br />
          </text>
        </div>

        {/* -----------------------------society related pressure-------------------------------------- */}

        <h3
          style={{ textAlign: "left", marginBottom: "10px", marginTop: "80px" }}
        >
          Society Related Pictures
        </h3>
        <div
          style={{
            height: "300px",
            borderRadius: "5px",
            background:
              "linear-gradient(180deg, rgba(232, 231, 231, 0.5) 0%, rgba(232, 231, 231, 0) 100%)",
            border: "1px solid #CFD3D2",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div class="grid-container" style={{ width: "300px" }}>
              <div class="grid-item" style={{ border: "none" }}>
                <img src={gated_sec} alt="Icon description" />
                <h5
                  style={{
                    marginTop: "-2px",
                    fontSize: "10px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Main Gate
                </h5>
                <h6 style={{ marginTop: "-13px", fontSize: "8px" }}></h6>
                <ReactSwitch
                  checked={formData.gated_security}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      gated_security: !formData.gated_security,
                    })
                  }
                  onColor="#DAF0EE"
                  onHandleColor="#fff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                  activeBoxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                />
              </div>
              <div class="grid-item" style={{ border: "none" }}>
                <img src={club_house} alt="Icon description" />
                <h5
                  style={{
                    marginTop: "-5px",
                    marginBottom: "10px",
                    fontSize: "10px",
                  }}
                >
                  Club house
                </h5>
                <ReactSwitch
                  checked={formData.club_house}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      club_house: !formData.club_house,
                    })
                  }
                  onColor="#DAF0EE"
                  onHandleColor="#fff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                  activeBoxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                />
              </div>
              <div class="grid-item" style={{ border: "none" }}>
                <img src={convenience_store} alt="Icon description" />
                <h5 style={{ marginTop: "-5px", fontSize: "10px" }}>
                  Grocery Store
                </h5>
                <h5 style={{ marginTop: "-9px", fontSize: "8px" }}></h5>
                <ReactSwitch
                  checked={formData.convenience_store}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      convenience_store: !formData.convenience_store,
                    })
                  }
                  onColor="#DAF0EE"
                  onHandleColor="#fff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                  activeBoxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                />
              </div>
              <div class="grid-item" style={{ border: "none" }}>
                <img src={swimming_pool} alt="Icon description" />
                <h5
                  style={{
                    marginTop: "-5px",
                    marginBottom: "15px",
                    fontSize: "10px",
                  }}
                >
                  Swimming Pool
                </h5>
                <ReactSwitch
                  checked={formData.Swimming_pool}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      Swimming_pool: !formData.Swimming_pool,
                    })
                  }
                  onColor="#DAF0EE"
                  onHandleColor="#fff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                  activeBoxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                />
              </div>

              <div class="grid-item" style={{ border: "none" }}>
                <img src={gym_1} alt="Icon description" />
                <h5
                  style={{
                    marginTop: "-1px",
                    marginBottom: "20px",
                    fontSize: "10px",
                  }}
                >
                  Gym
                </h5>
                <ReactSwitch
                  checked={formData.Gym}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      Gym: !formData.Gym,
                    })
                  }
                  onColor="#DAF0EE"
                  onHandleColor="#fff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                  activeBoxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                />
              </div>

              <div class="grid-item" style={{ border: "none" }}>
                <img src={car_parking} alt="Icon description" />
                <h5 style={{ marginTop: "-5px" }}>Parking</h5>
                <h5 style={{ marginTop: "-13px", fontSize: "8px" }}></h5>
                <ReactSwitch
                  checked={formData.car_parking}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      car_parking: !formData.car_parking,
                    })
                  }
                  onColor="#DAF0EE"
                  onHandleColor="#fff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                  activeBoxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------Add Features---------------------------------------------- */}
<h3 class="heading">Add other Places for which you have <br /> clicked photos</h3>
<div class="container">
  <h4 class="subtitle">Add Features</h4>
  <div class="input-row">
    <div class="input-field">
    <input type="text" placeholder="Enter Field Name" />
    </div>
    <div class="add-button">
     <CommonBtn title="Add"  margin="15px" width="10px" />
    </div>
  </div>

  <div class="input-row">
    <div class="input-field">
    <input type="text" placeholder="Enter Field Name" />
    </div>
    <div class="add-button">
     <CommonBtn title="Add"  margin="15px" width="10px"/>
    </div>
  </div>
  <div class="input-row">
    <div class="input-field">
    <input type="text" placeholder="Enter Field Name" />
    </div>
    <div class="add-button">
     <CommonBtn title="Add"  margin="15px"  width="10px"/>
  </div>
  </div>
  <div class="empty-row"></div>
  <div class="empty-row"></div>
</div>


        {/* <div class="buttonBackNext">
		                <button className="CommonnBackButton" style={{ fontSize: "16px", fontWeight: "1000" , textAlign: "right", fontStyle: "normal", width: "35%" }}>Back <img className="vectorBack" src={vector} alt="fireSpot"  style={{ float: "left", marginLeft: "-5%" }}/></button>
		                <button className="CommonnButton" style={{ fontWeight: "1000" , textAlign: "left", fontStyle: "normal", width: "40%" }}>Submit<img className="vectorSignIn" src={vector} alt="fireSpot" style={{ float: "right", marginRight: "-5%",marginTop:"-25px" }}/></button>
		                </div> */}
        {/* BODY */}

        <div
          style={{
            display: "flex",
            marginTop: "50px",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft:"40px"
          }}
        >
          <BackButton title="Back" margin="" fontweight="bolder" />
          <CommonBtn title="Submit" margin="38%" fontweight="bolder" />
        </div>

        <Footer />
      </div>
    </>
  );
}
export default PhotoCaptureTwo;
