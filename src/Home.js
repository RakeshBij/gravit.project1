import React from "react";
// import "./App.css";
import { useNavigate } from "react-router-dom";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

// const url =
//   "https://gravitinfosystems.com/Development/Astrolekha2/Admin/API_Call/GetAstrologers";

const Home = ({ data }) => {
  const navigate = useNavigate();
  //   const api = async () => {
  //     const form = new FormData();
  //     form.append("Token", "ddhssskldsflkj98747");
  //     form.append("Type", "Chat");
  //     form.append("Category", "All");
  //     form.append("Selected_Cat", "1");
  //     const res = await axios.post(url, form);
  //     console.log(res);
  //   };
  console.log(data);
  //   useEffect(() => {
  //     api();
  //     console.log("hi");
  //   }, []);
  return (
    <>
      <div className="container">
        {/* nav baar */}
        <nav className="navbar">
          <ul className="nav-ul">
            <li className="nav-li ">
              <img
                src="https://astrotalk.com/assets/images/astrotalk_logo.png"
                alt="astrology"
              />
            </li>
            <li className="nav-li ">
              <div className="nav-div-container">
                <div className="nav-div">About us</div>
                <div className="nav-div">Free Kundali</div>
                <div className="nav-div">Horoscope</div>
                <div className="nav-div log">Sign up</div>
              </div>
            </li>
          </ul>
        </nav>

        {/* main section */}
        <div className="main">
          {data.map((d) => (
            <div className="main-child">
              <div
                className="child-1"
                onClick={() => {
                  navigate("/details/" + d.Astrologer_id);
                }}
              >
                <img src={d.ProfilePic} alt="Kamini" className="astro-img" />

                <div
                  className="star"
                  style={{ fontSize: "14px", color: "#727272" }}
                >
                  ★ ★ ★ ★ ★{" "}
                </div>
                <div className="order">8714 orders</div>
              </div>

              <div
                className="child-2"
                onClick={() => {
                  navigate("/details/" + d.Astrologer_id);
                }}
              >
                <div className="child-2-name">{d.First_name}</div>
                <div className="child-2-name-ved">{d.Core_skills}</div>
                <div className="child-2-lang">{d.Language}</div>
                <div className="child-2-experience">
                  Exp : {d.Experience} Years
                </div>
                <div
                  className="child-2-cost"
                  style={{
                    fontWeight: "bold",
                    color: d.Chat_price === "0" ? "red" : "#727272",
                  }}
                >
                  {d.Chat_price > 0 ? "₹ " + d.Chat_price + "/min" : "FREE"}
                </div>
              </div>

              <div className="child-3">
                <div className="child-3-1">
                  <img
                    src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/Chat_with_astrologers/tick_icon.png"
                    alt=""
                  />
                </div>
                <div className="child-3-2">
                  <button
                    className="chat-btn"
                    style={{
                      color: d.Chat_Avail_status === "Online" ? "green" : "red",
                      border:
                        d.Chat_Avail_status === "Online"
                          ? "1px solid green"
                          : "1px solid red",
                    }}
                  >
                    Chat
                  </button>
                  <span className="wait" style={{ color: "red" }}>
                    {" "}
                    {d.Chat_Avail_status === "Online" ? "  " : "Wait - 5m"}{" "}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer class="kilimanjaro_area">
        {/* <!-- Top Footer Area Start --> */}
        <div class="foo_top_header_one section_padding_100_70">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="kilimanjaro_part">
                  <h5 className="foot-head">About Us</h5>
                  <p className="foot-para">
                    Astrotalk is the best astrology website for online Astrology
                    predictions. Talk to Astrologer on call and get answers to
                    all your worries by seeing the future life through Astrology
                    Kundli Predictions from the best Astrologers from India. Get
                    best future predictions related to Marriage, love life,
                    Career or Health over call, chat, query or report.
                  </p>
                </div>
                <div class="kilimanjaro_part m-top-15">
                  <h5 className="foot-head">Social Links</h5>
                  <ul class="kilimanjaro_social_links">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>{" "}
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-pinterest" aria-hidden="true"></i>{" "}
                        Pinterest
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-youtube" aria-hidden="true"></i> YouTube
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>{" "}
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3">
                <div class="kilimanjaro_part">
                  <h5 className="foot-head">Quick Contact</h5>
                  <div class="kilimanjaro_single_contact_info">
                    <p className="foot-para">
                      +255 255 54 53 52, +255 255 53 52 51
                    </p>
                  </div>
                  <div class="kilimanjaro_single_contact_info">
                    <p className="foot-para">
                      support@email.com, company@email.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom Area Start --> */}
      </footer>
    </>
  );
};

export default Home;
