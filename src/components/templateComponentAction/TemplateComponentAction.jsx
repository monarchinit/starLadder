import React from "react";
import refsImg from "../../assets/refsImg.js";

const TemplateComponentAction = prop => {
 
  return (
    <>
      <li
        style={{ backgroundImage: `url(${refsImg[prop.status]})` }}
        className="actionItem"
      >
        <div className="actionItem__wrapperHeader">
          <p className="actionItem__nameTurnir">{prop.nameTurnir}</p>
          <div className="actionItem__timeDate">
            <div
              style={{
                color: prop.status === "finished" && "#8F9A9D",
                backgroundImage:
                  prop.status === "live" && `url(${refsImg.play})`
              }}
              className="actionItem__timeStart"
            >
              {prop.timeStart}
            </div>
            <p
              style={{
                color: prop.status === "live" && "#FFFFFF"
              }}
              className="actionItem__dateStart"
            >
              {prop.status === "live" ? "WATCH LIVE!" : prop.dateStart}
            </p>
          </div>
        </div>
        <div className="actionItem__wrapperMain">
          <div className="actionItem__logoComandsWrapper">
            <div
              style={{
                backgroundImage: `url(${refsImg[prop.logoDiscipline[0]]})`,
                display: prop.logoDiscipline.length === 0 && "none"
              }}
              className="actionItem__logoDiscipline"
            ></div>
            <div
              style={{
                backgroundImage: `url(${refsImg[prop.logoComands[0]]})`,
                display: prop.logoComands.length === 0 && "none"
              }}
              className="actionItem__firstlogoComand"
            ></div>
            <div
              style={{
                backgroundImage: `url(${refsImg[prop.logoComands[1]]})`,
                display: prop.logoComands.length === 0 && "none"
              }}
              className="actionItem__secondlogoComand"
            ></div>
          </div>
          <div className="actionItem__wrapperNameKofRes">
            <div className="actionItem__firstInfoComand">
              <h5
                style={{
                  color: prop.comandOne.res < prop.comandTwo.res && "#8F9A9D"
                }}
                className="actionItem__name"
              >
                {prop.comandOne.name}
              </h5>
              <h5
                style={{
                  color: prop.comandTwo.res < prop.comandOne.res && "#8F9A9D"
                }}
                className="actionItem__name"
              >
                {prop.comandTwo.name}
              </h5>
            </div>
            <div className="actionItem__secondInfoComand">
              <div
                style={{
                  display: prop.matchNumber && "none"
                }}
                className="actionItem__valueWrapper"
              >
                <span
                  style={{
                    display: prop.comandOne.kof && "none",
                    color: prop.comandOne.res < prop.comandTwo.res && "#8F9A9D"
                  }}
                  className="actionItem__valueTotal"
                >
                  {prop.comandOne.res}
                </span>
                <span
                  style={{
                    display: prop.comandOne.res && "none"
                  }}
                  className="actionItem__value"
                >
                  {prop.comandOne.kof}
                </span>
              </div>
              <div
                style={{
                  display: prop.matchNumber && "none"
                }}
                className="actionItem__valueWrapper"
              >
                <span
                  style={{
                    display: prop.comandTwo.kof && "none",
                    color: prop.comandTwo.res < prop.comandOne.res && "#8F9A9D"
                  }}
                  className="actionItem__valueTotal"
                >
                  {prop.comandTwo.res}
                </span>
                <span
                  style={{
                    display: prop.comandTwo.res && "none"
                  }}
                  className="actionItem__value"
                >
                  {prop.comandOne.kof}
                </span>
              </div>
              <span
                style={{
                  color: prop.comandTwo.res < prop.comandOne.res && "#8F9A9D",
                  display: !prop.matchNumber && "none"
                }}
                className="actionItem__matchNumber"
              >
                {prop.matchNumber}
              </span>
            </div>
          </div>
          <div className="actionItem__generalInfoComand">
            <div>
              <div
                style={{
                  backgroundImage: prop.winner && `url(${refsImg.cup})`,
                  display: !prop.winner && "none"
                }}
                className="actionItem__systemFlag"
              ></div>
              <span className="actionItem__systemInfo">{prop.system}</span>
            </div>
            <span
              className="actionItem__logoPartner"
              style={{
                backgroundImage: `url(${refsImg[prop.logoPartner]})`,
                display: !prop.logoPartner && "none"
              }}
            ></span>
          </div>
        </div>
      </li>
    </>
  );
};

export default TemplateComponentAction;
