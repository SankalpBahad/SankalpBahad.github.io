import React, {useContext} from "react";
import "./Publication.scss";
import {publicationSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import AchievementCard from "../../components/achievementCard/AchievementCard";
export default function Publication() {
  const {isDark} = useContext(StyleContext);
  if (!publicationSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {publicationSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {publicationSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {publicationSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
