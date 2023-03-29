import React from "react";
import { Wrapper, Content } from "./Archive.styles";
import { TbPointFilled } from "react-icons/tb";

const Archive = () => {
  return (
    <Wrapper>
      <h2>Crypto News</h2>

      <Content>
        <div className="left">
          <div className="text">
            <div className="left-head">
              <TbPointFilled className="left-icon" />
              <p className="left-text">hot topic</p>
            </div>
            <div className="left-txt">
              <h4 className="left-txt--head">
                Indian Crypto Companies Migrate Amidst Unclear Regulations
              </h4>
            </div>
            <div className="left-time">
              <p className="minute">30 Minute ago</p>
              <p>
                by: <span className="blue-grey">Redacción </span>
              </p>
            </div>
          </div>
          <div className="text">
            <div className="left-head">
              <TbPointFilled className="left-icon" />
              <p className="left-text">hot topic</p>
            </div>
            <div className="left-txt">
              <h4 className="left-txt--head">
                Indian Crypto Companies Migrate Amidst Unclear Regulations
              </h4>
            </div>
            <div className="left-time">
              <p className="minute">30 Minute ago</p>
              <p>
                by: <span className="blue-grey">Redacción </span>
              </p>
            </div>
          </div>
          <div className="text">
            <div className="left-head">
              <TbPointFilled className="left-icon" />
              <p className="left-text">hot topic</p>
            </div>
            <div className="left-txt">
              <h4 className="left-txt--head">
                Indian Crypto Companies Migrate Amidst Unclear Regulations
              </h4>
            </div>
            <div className="left-time">
              <p className="minute">30 Minute ago</p>
              <p>
                by: <span className="blue-grey">Redacción </span>
              </p>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="center--box">
            <p className="center--txt">hot topic</p>
          </div>
          <div className="center--text">
            <a href="w" className="center--link">
              <p>
                Google's Pixel 7 and 7 Pro’s design gets revealed even more with
                fresh crisp renders
              </p>
            </a>
            <div className="center--time">
              <p className="center--minute">30 Minute ago</p>
              <p>
                by: <span className="blue-grey">Redacción Willianm </span>
              </p>
            </div>
          </div>
        </div>
        <div className="right">3</div>
      </Content>
    </Wrapper>
  );
};

export default Archive;
