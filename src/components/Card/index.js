import React, { useState, useEffect } from "react";
import { Wrapper, Content } from "./Card.styles";
import { HiUserGroup } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { IoIosConstruct } from "react-icons/io";
import { ImAccessibility } from "react-icons/im";
import { GiCash } from "react-icons/gi";
import { TbArrowsRandom } from "react-icons/tb";

import { type } from "@testing-library/user-event/dist/type";

const url = "http://www.boredapi.com/api/activity/";

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

  const { activity, type, participants, price, link, key, accessibility } =
    bored;
  return (
    <Wrapper>
      <Content>
        <p className="heading">Fight Boredom </p>
        <section>
          <div className="box">
            <TbArrowsRandom />
            <h4>Activity : </h4>
            <span className="space-x1">
              <p>{activity || "Cook something together with someone"}</p>
            </span>
          </div>
          <div className="box">
            <IoIosConstruct />
            <h4>Type :</h4>
            <p>
              <span className="space"> {type || "cooking"}</span>
            </p>
          </div>
          <div className="box">
            <HiUserGroup />
            <h4> Participant :</h4>
            <p>
              <span className="space-x4">
                {participants || 1} {participants <= 1 ? "person" : "people"}
              </span>
              <span> needed</span>
            </p>
          </div>
          <div className="box">
            <GiCash />
            <h4>Amount : </h4>
            <p>
              <span className="space-x1">{price || 0.8} Dollars</span>
            </p>
          </div>
          <div className="box">
            <FiExternalLink />
            <h4>Link : </h4>
            <p className="small">
              <a target="_blank" rel="noopener noreferrer" href={link}>
                {link || ""}
              </a>
            </p>
          </div>
          <div className="box">
            <ImAccessibility />
            <h4>Accessible :</h4>
            <p>
              <span className="space-x5">
                {accessibility || 0.8} possibility{" "}
              </span>
            </p>
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
