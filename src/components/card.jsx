import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = () => {
  const [card, setcard] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/card`)
      .then((res) => {
        setcard(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [transaction, settransaction] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/transaction`)
      .then((res) => {
        settransaction(res.data);
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
        <div className="w-100" style={{ height: 30 }}>
          <h5 style={{ lineHeight: "30px" }}>My card</h5>
        </div>
        <div
          className="w-100 mt-3"
          style={{
            backgroundColor: "#4EB7F2",
            color: "white",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <div className="pb-4">
            <p style={{ lineHeight: 2, margin: 0, fontSize: 16 }}>Name Card</p>
            <h5>{card.name}</h5>
          </div>
          <div className="mt-5" style={{ textAlign: "end" }}>
            <h4>{card.nocard}</h4>
            <p className="m-0">12/20 - {card.cvv}</p>
          </div>
        </div>
        <hr />
        <div
          className="w-100 d-flex justify-content-between"
          style={{ height: 50 }}
        >
          <h5 style={{ lineHeight: "50px" }}>Transaction History</h5>
          <Link
            href=""
            style={{
              color: "#4EB7F2",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "50px",
            }}
          >
            See all
          </Link>
        </div>
        <div>
          <p style={{ color: "#AAAAAA" }}>13 April 2022</p>
          {transaction.map((transaction, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FAFAFA",
                borderRadius: 10,
                padding: 15,
              }}
              className="d-flex justify-content-between mb-3"
            >
              <div>
                <h6>{transaction.iname}</h6>
                <p style={{ lineHeight: 1, margin: 0, fontSize: 16 }}>
                  13 Apr, 2022
                </p>
              </div>
              <div>
                <h5 style={{ color: "#F3735E" }}>${transaction.money}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
