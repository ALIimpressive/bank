import React, { useState } from "react";
import "../Navbar/navbar.css";
import "../Navbar/hero.css";
import "../Navbar/spen.css";
import "../Navbar/seader.css";
import HomeIcon from "@mui/icons-material/Home";
import PollIcon from "@mui/icons-material/Poll";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AddCardIcon from "@mui/icons-material/AddCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import log from ".././../img/Profile Pic.png";
import { useDispatch, useSelector } from "react-redux";
import { addFink, deleteFink } from "../../stores/fink";
// import { LineChart } from "recharts";

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//   "Page A",
//   "Page B",
//   "Page C",
//   "Page D",
//   "Page E",
//   "Page F",
//   "Page G",
// ];

const Navbars = () => {
  const data = useSelector((state) => state.fink.finks);
  console.log(data, "sas");
  const dispatch = useDispatch();
  const [values, setValues] = useState({ money: "", hell: "" });
  function addMoney() {
    dispatch(addFink({ ...values, date: Date(), id: Date.now() }));
  }
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          {/* 1 */}
          <div className="hed-bloc">
            <div className="hed-h1">
              <BlurOnIcon sx={{ color: "white", fontSize: "60px" }} />
              <h1 style={{ color: "white" }}>MoneyGuard</h1>
            </div>
            <img src={log} alt="" />
            <h5 style={{ color: "white" }}>Welcome back!</h5>
            <h2 style={{ color: "white" }}>Adam Jacobs</h2>
            <div className="q"></div>
            <div className="hed-btn">
              <button>
                <HomeIcon />
                Dashboard
              </button>
            </div>
            <div className="hed-btn">
              <button>
                <PollIcon />
                Investements
              </button>
            </div>
            <div className="hed-btn">
              <button>
                <CreditCardIcon />
                My Cards
              </button>
            </div>
            <div className="hed-btn">
              <button>
                <LocalAtmIcon />
                Transactions
              </button>
            </div>
            <div className="hed-btn">
              <button style={{ border: "solid 3px white" }}>
                <KeyboardDoubleArrowLeftIcon />
                Logout
              </button>
            </div>
          </div>
          {/* 1 */}
          {/* 2 */}
          <div id="hero">
            <div className="hero">
              <div className="her-bloc">
                <div className="balanc">
                  <div className="total">
                    <h3>Total Balance</h3>
                    <select>
                      <option value="">All Time</option>
                      <option value="">All Time</option>
                      <option value="">All Time</option>
                    </select>
                  </div>
                  <div className="w"></div>
                  <h2
                    style={{
                      color: "white",
                      fontWeight: "100",
                      fontSize: "20px",
                    }}
                  >
                    Ваша общая сумма
                    {" " +
                      data
                        .map((el) => el.hell)
                        .reduce((acc, curr) => +acc + +curr) +
                      " "}
                    сом
                  </h2>
                </div>
                <div className="balanc">
                  <div className="total">
                    <h3>Total Balance</h3>
                    <select>
                      <option value="">All Time</option>
                      <option value="">All Time</option>
                      <option value="">All Time</option>
                    </select>
                  </div>
                  <div className="w"></div>
                  <h2>1,80,000.00</h2>
                </div>
                <div className="balanc">
                  <div className="total">
                    <h3>Total Balance</h3>
                    <select>
                      <option value="">All Time</option>
                      <option value="">All Time</option>
                      <option value="">All Time</option>
                    </select>
                  </div>
                  <div className="w"></div>
                  <h2>1,80,000.00</h2>
                </div>
              </div>
              <div className="spen">
                {/* <LineChart
                      width={500}
                      height={300}
                      series={[
                        { data: pData, label: "pv" },
                        { data: uData, label: "uv" },
                      ]}
                      xAxis={[{ scaleType: "point", data: xLabels }]}
                    /> */}
                <h3 style={{ color: "white" }}>Your Spending Summary</h3>
              </div>
              <div className="card">
                <div className="card1">
                  <h2
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Your Cards
                  </h2>
                  <div className="card-btn1">
                    <button>
                      Balance
                      <VisibilityOffIcon sx={{ color: "white" }} />
                      <VisibilityIcon sx={{ color: "white" }} />
                    </button>
                    <div className="mon">
                      <AutoAwesomeIcon sx={{ color: "white" }} />
                    </div>
                  </div>
                  <div className="card-inp">
                    <input type="text" placeholder="123x xxxx xxxx xx44" />
                    <button>
                      GET CASH
                      <AddCardIcon />
                    </button>
                  </div>
                </div>
                <div className="card2">
                  <div className="card-btn1">
                    <button>
                      Balance
                      <VisibilityOffIcon sx={{ color: "white" }} />
                      <VisibilityIcon sx={{ color: "white" }} />
                    </button>
                    <div className="mon">
                      <AutoAwesomeIcon sx={{ color: "white" }} />
                    </div>
                  </div>
                  <div className="card-inp">
                    <input
                      onChange={(e) =>
                        setValues({ ...values, money: e.target.value })
                      }
                      type="text"
                      placeholder="Ведите номер телефона"
                    />
                    <input
                      onChange={(e) =>
                        setValues({ ...values, hell: e.target.value })
                      }
                      type="text"
                      placeholder="Сколько хотите перевести ?"
                    />
                    <button onClick={() => addMoney()}>
                      ADD CASH
                      <AddCardIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
        </div>
        <div id="seader">
          <div className="container">
            <div className="seader">
              <div className="ser-text">
                <div>
                  {data.length > 0 ? (
                    data.map((el, idx) => (
                      <div className="sera" key={idx}>
                        <button
                          style={{ background: "none", alignItems: "center" }}
                          onClick={() => dispatch(deleteFink(el.id))}
                        >
                          <DeleteForeverIcon sx={{ color: "white" }} />
                        </button>
                        <h3 style={{ color: "white" }}>{el.money} </h3>
                        <h3
                          style={{ color: "white" }}
                        >{`Пополнение ${el.hell} сом`}</h3>
                        <h3 style={{ color: "white" }}>{el.date}</h3>
                      </div>
                    ))
                  ) : (
                    <h1 style={{ color: "white" }}>Loading...</h1>
                  )}
                </div>
              </div>
            </div>
            <div className="e"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
