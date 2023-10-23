import React, { useEffect, useState } from "react";
import Expenses from "./expenses";
import Invoice from "./Invoice";
import Card from "./card";
import axios from "axios";

const Home = () => {
  const [account, setAccount] = useState([])
  useEffect(() => {
    axios
      .get(`https://dashboard-api-smoky.vercel.app/account`)
      .then((res) => {
        setAccount(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])
  
  return (
    <div className="">
      <div className="row">
        <div
          className="col-md-2 d-flex align-items-center"
          style={{ flexDirection: "column" }}
        >
          <div
            style={{
              height: 53,
              width: 173,
              marginTop: 30,
              backgroundColor: "#C4C4C4",
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={require("../assets/gallery.png")} alt="img" />
          </div>
          <div
            style={{
              height: 53,
              width: 193,
              margin: 20,
              backgroundColor: "#FAFAFA",
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <div
              style={{
                borderRadius: 100,
                height: 32,
                width: 32,
                margin: 5,
                backgroundColor: "#98DAFF",
              }}
            >
              <img src="" alt="" />
            </div>
            <div style={{ height: "auto", width: "auto" }}>
              <h6>{account.name}</h6>
              <p style={{ lineHeight: 1, fontSize: "12px", margin: 0 }}>
                {account.email}
              </p>
            </div>
          </div>
          <button className="d-flex align-items-center" style={{ width: 193, height: 40, backgroundColor: "transparent", border: 0, borderRight: "4px solid #4EB7F2" }}>
            <img src={require("../assets/category-2.png")} alt="category" />
            <h6 style={{ margin: 0, padding: 10, color: "#4EB7F2" }}>Dashboard</h6>
          </button>
        </div>
        <div
          className="col-md-10 row"
          style={{ backgroundColor: "#FAFAFA", padding: 30, height: "100vh" }}
        >
          <div className="col-md-7">
            <Expenses />
            <Invoice />
          </div>
          <div className="col-md-5">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
