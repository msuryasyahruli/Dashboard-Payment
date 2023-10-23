import axios from "axios";
import React, { useEffect, useState } from "react";

const Expenses = () => {
  const [balance, setbalance] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dashboard-api-smoky.vercel.app/balance`)
      .then((res) => {
        setbalance(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 20,
        }}
      >
        <div
          className="w-100 d-flex justify-content-between"
          style={{ height: 30 }}
        >
          <h5 style={{ lineHeight: "30px" }}>All Expenses</h5>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            style={{
              borderRadius: 10,
              border: "1px solid #F1F1F1",
              width: 130,
            }}
          >
            <option value="1">Monthly</option>
            <option value="2">Weekly</option>
            <option value="3">Daily</option>
          </select>
        </div>
        <div
          className="w-100 mt-3 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <div
            style={{
              backgroundColor: "#4EB7F2",
              width: "32%",
              borderRadius: 10,
              padding: 20,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#FFFFFF1A",
                borderRadius: 100,
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <img src={require("../assets/moneys.png")} alt="money" />
            </div>
            <div style={{ color: "white", marginTop: 10 }}>
              <h5 style={{ margin: 0 }}>Balance</h5>
              <p style={{ fontSize: 14, color: "#FAFAFA", margin: 0 }}>
                April 2022
              </p>
              <h4 style={{ margin: 0 }}>${balance.balance}</h4>
            </div>
          </div>
          <div
            className="border"
            style={{ width: "32%", borderRadius: 10, padding: 20 }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#FAFAFA",
                borderRadius: 100,
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <img src={require("../assets/card-receive.png")} alt="receive" />
            </div>
            <div style={{ marginTop: 10 }}>
              <h5 style={{ margin: 0 }}>Income</h5>
              <p style={{ fontSize: 14, color: "#AAAAAA", margin: 0 }}>
                April 2022
              </p>
              <h4 style={{ color: "#4EB7F2", margin: 0 }}>${balance.income}</h4>
            </div>
          </div>
          <div
            className="border"
            style={{ width: "32%", borderRadius: 10, padding: 20 }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#FAFAFA",
                borderRadius: 100,
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <img src={require("../assets/card-send.png")} alt="send" />
            </div>
            <div style={{ marginTop: 10 }}>
              <h5 style={{ margin: 0 }}>Expenses</h5>
              <p style={{ fontSize: 14, color: "#AAAAAA", margin: 0 }}>
                April 2022
              </p>
              <h4 style={{ color: "#4EB7F2", margin: 0 }}>${balance.expenses}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
