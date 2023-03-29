import React, { useState, useEffect } from "react";
import { Wrapper } from "./Header.styles";

import { MdOutlineLocationCity } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaCalendarAlt, FaNewspaper } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import photo1 from "../../assets/img-1.jpeg";
import photo2 from "../../assets/img-2.jpeg";
import photo3 from "../../assets/img-3.jpeg";
import photo4 from "../../assets/img-4.jpg";
import photo5 from "../../assets/preniun.jpg";
//const Api_Key = "8hm6temfzaJ10LpoVS5fpArANkGmFBxOkE2zKbw9";
const api_key = `?apikey=${process.env.REACT_APP_API_KEY}`;

const API_ENDPOINT = "https://newsdata.io/api/1/news";

const tempUrl =
  "https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng";

const Header = () => {
  const [news, setNews] = useState({});
  const [buttonValues, setButtonsValues] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState([]);
  // const [index, setIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const btnfetch = async (value) => {
    const reponse = await fetch(`${tempUrl}&category=${value}`);
    const data = await reponse.json();
    console.log(data.results);
    setNews(data.results[0]);
    setError(false);
    setButtonsValues((prevValues) => [...prevValues, value]);
  };
  const searchBtn = async (e) => {
    console.log("searching.......");
    e.preventDefault();
    const reponse = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&q=${searchTerm}`
    );
    const data = await reponse.json();
    setSearch(data.results);
    setLoading(false);
    setSearchTerm("");
  };

  useEffect(() => {
    btnfetch();
    searchBtn();
  }, []);

  const Next = () => {
    console.log("next");
  };
  const Prev = () => {
    console.log("prev");
  };

  const { creator, description, link, pubDate, title } = news;
  const dateString = pubDate;
  const newObject = new Date(dateString);
  const minute = newObject.getMinutes();
  const minuteFormated = minute.toString().padStart(2, "0");

  return (
    <Wrapper>
      <div className="nav">
        <div className="weather">
          <div className="right">
            <MdOutlineLocationCity className="icon" />
            <p>lagos</p>
          </div>
          <div className="flex">
            <TiWeatherPartlySunny className="icon" />
            <p>30 degree</p>
          </div>
        </div>
        <h2 className="logo">
          press<span>71</span>
        </h2>
        <div className="weather">
          <div className="right">
            <FaCalendarAlt className="icon" />
            <p>saturday</p>
          </div>
          <div className="flex">
            <FaNewspaper className="icon" />
            <p>today magasize</p>
          </div>
        </div>
      </div>
      {/* nav butttons */}

      <nav className="nav-section">
        <div className="nav-btn">
          <div>
            <TbPointFilled className=" " />
            <button onClick={() => btnfetch("Business")}>Business</button>
          </div>
          <div>
            <TbPointFilled className="hide " />
            <button onClick={() => btnfetch("Entertainment")}>
              Entertainment
            </button>
          </div>
          <div>
            <TbPointFilled className="hide" />
            <button onClick={() => btnfetch("Health")}>Health</button>
          </div>
          <div>
            <TbPointFilled className="hide" />
            <button onClick={() => btnfetch("Politics")}>Politics</button>
          </div>
          <div>
            <TbPointFilled className="hide" />
            <button onClick={() => btnfetch("Science")}>Science</button>
          </div>
          <div>
            <TbPointFilled className="hide" />
            <button onClick={() => btnfetch("Sports")}>Sports</button>
          </div>
          <div>
            <TbPointFilled className="hide" />
            <button onClick={() => btnfetch("Technology")}>Technology</button>
          </div>
          <div>
            <TbPointFilled className="hide" />
            <button onClick={() => btnfetch("World")}>World</button>
          </div>
        </div>
        <div className="nav-search">
          <form>
            <button
              type="submit"
              onClick={searchBtn}
              className="nav-search-btn"
            >
              <BiSearch />
            </button>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-search"
            ></input>
          </form>
        </div>
      </nav>
      <div className="content">
        <div className="text">
          <div className="heading">
            <TbPointFilled className="display icon-2" />
            <p>trending now</p>
          </div>
          <div className="title">
            <p className="title__head">
              <a target="_blank" rel="noopener noreferrer" href={link}>
                {title
                  ? title
                  : " NDLEA Intercepts Cannabis Concealed In Dried Onions At Lagos Airport"}
              </a>
            </p>

            <p className="title__txt">
              {description
                ? description.slice(0, 80).concat("....")
                : "The National Drug Law Enforcement Agency has intercepted 2.7kg of cannabis concealed...."}
            </p>
          </div>
          <div className="info">
            <div className="info__time">
              <TbPointFilled className="display icon-2" />
              <p>{pubDate ? minuteFormated : 30} Minutes Ago</p>
            </div>
            <div className="info__creator">
              <p>
                BY : <span>{creator ? creator : "Comfort Olusesi"}</span>
              </p>
            </div>
          </div>
          <div className="content__btn">
            <button className="btn" onClick={Next}>
              <HiArrowNarrowRight className="btn-width" />
            </button>
            <button className="btn" onClick={Prev}>
              <HiArrowNarrowLeft />
            </button>
          </div>
        </div>
        <div className="Premium">
          {search.map((index) => {
            const { link, pubDate, title, image_url, source_id } = index;
            const dateString = pubDate;
            const newObject = new Date(dateString);
            const minute = newObject.getHours();
            const hourFormated = minute.toString().padStart(2, "0");
            return (
              <article className="Premium__box" key={source_id}>
                <div className="Premium__img--box">
                  <div className="Premium__img--circle">
                    <p>2</p>
                  </div>
                  <img
                    src={image_url ? image_url : photo5}
                    alt="imageurl"
                    className="Premium__img"
                  />
                </div>

                <div className="Premium__content">
                  <div className="Premium__time">
                    <p className="grey">recent post</p>
                    <p className="blue-grey">{hourFormated} pm</p>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href={link}>
                    <p className="Premium__time-txt">
                      {title
                        ? title
                        : "Osimhen names player he wants to emulate"}
                    </p>
                  </a>
                </div>
              </article>
            );
          })}
          {!searchTerm && (
            <main>
              <div className="Premium__box">
                <div className="Premium__img--box">
                  <div className="Premium__img--circle">
                    <p>72</p>
                  </div>
                  <img src={photo4} alt="imageurl" className="Premium__img" />
                </div>
                <div className="Premium__content">
                  <div className="Premium__time">
                    <p className="grey">recent post</p>
                    <p className="blue-grey">9.00 pm</p>
                  </div>
                  <p className="Premium__time-txt">
                    Osimhen names player he wants to emulate
                  </p>
                </div>
              </div>
              <div className="Premium__box">
                <div className="Premium__img--box">
                  <div className="Premium__img--circle">
                    <p>12</p>
                  </div>
                  <img src={photo1} alt="imageurl" className="Premium__img" />
                </div>
                <div className="Premium__content">
                  <div className="Premium__time">
                    <p className="grey">recent post</p>
                    <p className="blue-grey">9.00 pm</p>
                  </div>
                  <p className="Premium__time-txt">
                    Osimhen names player he wants to emulate
                  </p>
                </div>
              </div>
              <div className="Premium__box">
                <div className="Premium__img--box">
                  <div className="Premium__img--circle">
                    <p>23</p>
                  </div>
                  <img src={photo4} alt="imageurl" className="Premium__img" />
                </div>
                <div className="Premium__content">
                  <div className="Premium__time">
                    <p className="grey">recent post</p>
                    <p className="blue-grey">9.00 pm</p>
                  </div>
                  <p className="Premium__time-txt">
                    Osimhen names player he wants to emulate
                  </p>
                </div>
              </div>
              <div className="Premium__box">
                <div className="Premium__img--box">
                  <div className="Premium__img--circle">
                    <p>10</p>
                  </div>
                  <img src={photo2} alt="imageurl" className="Premium__img" />
                </div>
                <div className="Premium__content">
                  <div className="Premium__time">
                    <p className="grey">recent post</p>
                    <p className="blue-grey">9.00 pm</p>
                  </div>
                  <p className="Premium__time-txt">
                    Osimhen names player he wants to emulate
                  </p>
                </div>
              </div>
            </main>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
