import React from "react";

const Details = ({ data }) => {
  const id = window.location.pathname.split("/").at(-1);

  const pa = data.find((d) => d.Astrologer_id === id);
  return (
    <>
      <div className="container">
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
      </div>

      <div className="container">
        <div className="outline">
          <div className="person">
            <div className="person-photo">
              <img src={pa.ProfilePic} alt="" className="person-img" />
            </div>
            <div className="person-info">
              <div>
                <h1 className="person-name">{pa.First_name}</h1>
                <img
                  src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/astrologer_profile/verified.webp"
                  alt=""
                />
              </div>

              <div className="person-astro text">{pa.Core_skills}</div>
              <div className="person-lang text">{pa.Language}</div>
              <div className="exp text"> Exp : {pa.Experience} Years</div>
              <div className="person-price">
                <span className="price-bold">₹ {pa.Chat_price}</span> /min
              </div>
              <div className="person-call text">
                <div className="person-call-1 pc">
                  <div className="call">
                    <img
                      src="https://astrotalk.com/assets/images/astrologer_profile/chat_profile.png"
                      alt=""
                      className="icon-img"
                    />
                  </div>
                  <div className="call-1">
                    <b className="bold">51K</b>
                  </div>
                  <div className="call-2">mins</div>
                </div>
                <div className="person-call-1 pc">
                  <div className="call">
                    <img
                      src="https://astrotalk.com/assets/images/astrologer_profile/call_profile.png"
                      alt=""
                      className="icon-img"
                    />
                  </div>
                  <div className="call-1">
                    <b className="bold">24K</b>
                  </div>
                  <div className="call-2">mins</div>
                </div>
                <div className="person-call-1 pc">
                  <div className="call">
                    <img
                      src="https://astrotalk.com/assets/images/astrologer_profile/video_profile.png"
                      alt=""
                      className="icon-img"
                    />
                  </div>
                  <div className="call-1">
                    <b className="bold">0</b>
                  </div>
                  <div className="call-2">mins</div>
                </div>
              </div>
              <div className="person-chat text">
                <div className="start-call fd start">
                  <div>
                    <img
                      src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/astrolger/offline-status-chat.png"
                      alt=""
                      className="icon-imgs"
                    />
                  </div>
                  <div className="chat-info">
                    <div className="start-c">Start call</div>
                    <div className="online-in">online in 35 min</div>
                  </div>
                </div>
                <div className="start-call fd start">
                  <div>
                    <img
                      src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/20x20/assets/images/astrolger/offline-status-call.png"
                      alt=""
                      className="icon-imgs"
                    />
                  </div>
                  <div className="chat-info">
                    <div className="start-c">Start call</div>
                    <div className="online-in">online in 35 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-me">About</div>
          <p className="about-me-para">{pa.About}</p>
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

export default Details;
