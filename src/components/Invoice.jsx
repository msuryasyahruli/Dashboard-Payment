import React from "react";
import { Link } from "react-router-dom";

const Invoice = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#fff",
          marginTop: 30,
          borderRadius: 20,
          padding: 20,
        }}
      >
        <div className="w-100" style={{ height: 30 }}>
          <h5 style={{ lineHeight: "30px" }}>Quick Invoice</h5>
        </div>
        <div className="w-100 mt-3">
          <p style={{ margin: 0 }}>Latest Transaction</p>
          <div className="d-flex">
            <div
              style={{
                height: 53,
                width: 193,
                backgroundColor: "#FAFAFA",
                display: "flex",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
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
                <h6>Lekan Okeowo</h6>
                <p style={{ lineHeight: 1, fontSize: "12px", margin: 0 }}>
                  lekan@gmail.com
                </p>
              </div>
            </div>
            <div
              style={{
                height: 53,
                width: 193,
                backgroundColor: "#FAFAFA",
                display: "flex",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
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
                <h6>Jhon doe</h6>
                <p style={{ lineHeight: 1, fontSize: "12px", margin: 0 }}>
                  jhon@gmail.com
                </p>
              </div>
            </div>
            <div
              style={{
                height: 53,
                width: 193,
                backgroundColor: "#FAFAFA",
                display: "flex",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
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
                <h6>Mr Lorem</h6>
                <p style={{ lineHeight: 1, fontSize: "12px", margin: 0 }}>
                  lorem@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-100 mt-3 d-flex justify-content-between">
          <div style={{ width: "49%" }}>
            <p style={{ margin: 0 }}>Customer name</p>
            <div
              style={{
                backgroundColor: "#FAFAFA",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <input
                type="text"
                placeholder="Type customer name"
                style={{ border: 0, backgroundColor: "transparent" }}
              />
            </div>
          </div>
          <div style={{ width: "49%" }}>
            <p style={{ margin: 0 }}>Customer Email</p>
            <div
              style={{
                backgroundColor: "#FAFAFA",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <input
                type="text"
                placeholder="Type customer email"
                style={{ border: 0, backgroundColor: "transparent" }}
              />
            </div>
          </div>
        </div>
        <div className="w-100 mt-3 d-flex justify-content-between">
          <div style={{ width: "49%" }}>
            <p style={{ margin: 0 }}>Item name</p>
            <div
              style={{
                backgroundColor: "#FAFAFA",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <input
                type="text"
                placeholder="Type item name"
                style={{ border: 0, backgroundColor: "transparent" }}
              />
            </div>
          </div>
          <div style={{ width: "49%" }}>
            <p style={{ margin: 0 }}>Item mount</p>
            <select
              class="custom-select"
              style={{
                backgroundColor: "#FAFAFA",
                padding: 10,
                width: "100%",
                borderRadius: 10,
                border: 0,
                color:"#AAAAAA"
              }}
            >
              <option value="1">USD</option>
              <option value="2">EUR</option>
              <option value="3">IDR</option>
            </select>
          </div>
        </div>
        <div className="w-100 mt-3 d-flex justify-content-between">
          <div style={{ width: 300, textAlign: "center", width: "49%" }}>
            <Link
              href=""
              style={{
                color: "#4EB7F2",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: 2,
              }}
            >
              Add more details
            </Link>
          </div>
          <button
            style={{
              width: "49%",
              border: 0,
              backgroundColor: "#4EB7F2",
              color: "white",
              borderRadius: 10,
              padding: 10,
            }}
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
