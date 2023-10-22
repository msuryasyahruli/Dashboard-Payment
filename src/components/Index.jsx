import React from "react";
import Expenses from "./expenses";
import Invoice from "./Invoice";
import Card from "./card";

const Home = () => {
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
              <h6>Muhammad Surya</h6>
              <p style={{ lineHeight: 1, fontSize: "12px", margin: 0 }}>
                syahruli@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-10 row" style={{ backgroundColor: "#FAFAFA", padding: 30, height: "100vh" }}>
            <div className="col-md-7">
              <Expenses />
              <Invoice/>
            </div>
            <div className="col-md-5">
              <Card/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
