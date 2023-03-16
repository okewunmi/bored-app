import React, { useState, useEffect } from "react";
import { Wrapper, Content } from "./Card.styles";
import { HiUserGroup } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { IoIosConstruct } from "react-icons/io";
import { ImAccessibility } from "react-icons/im";
import { GiCash } from "react-icons/gi";
import { TbArrowsRandom } from "react-icons/tb";

const url = "http://www.boredapi.com/api/activity/";
// const url = process.env.REACT_APP_API_KEY;
const Card = () => {
  const [bored, setBored] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchRadomBore = async () => {
    const reponse = await fetch(url);
    const data = await reponse.json();
    setBored(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRadomBore();
  }, []);

  const { activity, type, participants, price, link, accessibility } = bored;
  return (
    <Wrapper>
      <Content>
        <p className="heading">Fight Boredom </p>
        <section>
          <div className="box">
            <div className="box-icon">
              <TbArrowsRandom />
              <h4>Activity : </h4>
            </div>
            <span className="space-x1">
              <p>{activity || "Cook something together with someone"}</p>
            </span>
          </div>
          <div className="box">
            <div className="box-icon">
              <IoIosConstruct />
              <h4>Type :</h4>
            </div>
            <p>
              <span className="space"> {type || "cooking"}</span>
            </p>
          </div>
          <div className="box">
            <div className="box-icon">
              <HiUserGroup />
              <h4> Participant :</h4>
            </div>
            <p>
              <span className="space-x4">
                {participants || 1} {participants <= 1 ? "person" : "people"}
              </span>
              <span> needed</span>
            </p>
          </div>
          <div className="box">
            <div className="box-icon">
              <GiCash />
              <h4>Amount : </h4>
            </div>
            <p>
              <span className="space-x1">
                {price === 0 ? "free" : price} {price === 0 ? "" : "dollar"}
              </span>
            </p>
          </div>
          <div className="box">
            <div className="box-icon">
              <FiExternalLink />
              <h4>Link : </h4>
            </div>

            <p className="small">
              <a target="_blank" rel="noopener noreferrer" href={link}>
                {link.slice(0, 25) || "no link"}
              </a>
            </p>
          </div>
          <div className="box">
            <div className="box-icon">
              <ImAccessibility />
              <h4>Accessibility :</h4>
            </div>
            <p>{accessibility === 0.0 ? "most accessible" : "accessible"}</p>
          </div>
        </section>
        <button type="button" className="btn" onClick={fetchRadomBore}>
          {loading ? "generating..." : "Random activities"}
        </button>
      </Content>
    </Wrapper>
  );
};

export default Card;
