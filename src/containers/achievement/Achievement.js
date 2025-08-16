import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          {/* MODIFICATION START: Changed div to ul and wrapped card in li */}
          <ul className="achievement-list">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <li key={i}> {/* The key is now on the list item */}
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      footer: card.footerLink
                    }}
                  />
                </li>
              );
            })}
          </ul>
          {/* MODIFICATION END */}
        </div>
      </div>
    </Fade>
  );
}