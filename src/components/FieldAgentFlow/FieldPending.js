import React, { Component, useEffect, useState } from "react";
import Dashboardcss from "../Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserLoginDetails from "../UserLoginDetails";
import homeDown from "../Assets/Images/homeDown.png";
import peopleDown from "../Assets/Images/peopleDown.png";
import Footer from "../Footer";
import vector from "../Assets/Images/vector.png";
import backgroundSecond from "../Assets/Images/other_bg.png";
import rentedOut from "../Assets/Images/rentedOut.png";
import sharedOut from "../Assets/Images/sharedOut.png";
import shortListed from "../Assets/Images/shortListed.png";
import yetShared from "../Assets/Images/yetShared.png";
import check from "../Assets/Images/check.png";
import CommonHeader from "../CommonHeader";
import PendingComp from "./PendingComp";

function FieldPending() {
  const [loading, setLoading] = useState(false);
  const [responsePendingProperties, setresponsePendingProperties] = useState(
    []
  );

  const token = localStorage.getItem("token");
  //   console.log(token);

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://b8rliving.com/field-agent/pending",
          axiosConfig
        );

        setresponsePendingProperties(response.data.data.property);
      } catch (error) {
        console.log(error);
        // Handle the error here if needed
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // This useEffect will log the updated state after it has been set.
  useEffect(() => {
    console.log(responsePendingProperties);
  }, [responsePendingProperties]);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    alert("You have been logged out.");
  };
  const username = localStorage.getItem("username");
  const name = username.substring(0, username.indexOf(" "));

  return (
    <>
      <div className="">
        <CommonHeader title="Pending Properties" color="#52796F" />
        {/* <div
        className="form"
        style={{
          borderRadius: "16px",
          marginTop: "10%",
          backgroundRepeat: "no-repeat",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
      </div> */}
        {/* <h5>Hey {name},</h5> */}
        <div className="px-[1rem] py-[2rem] text-[1.1rem]">
          <p className="my-[1rem]">Hey, {name}</p>
          <p>
            Properties show here are pending for verfification and photo
            submission.
          </p>
        </div>
        <PendingComp properties={responsePendingProperties} />
      </div>
      <Footer />
      <div className="mb-[1rem]" />
    </>
  );
}
export default FieldPending;
