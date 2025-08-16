import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* <Fade left duration={1000}>
          <div className="skills-image-div">
             <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTUxY2R1bTQwaTVjMnN0MWFjNWhhcDFwMmpoZW1tb2xoOWF4ZWtheiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dWesBcTLavkZuG35MI/giphy.gif" width="800" height="500"/>
          </div>
        </Fade> */}
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
            <SoftwareSkill />
          </div>
        </Fade>
      </div>
    </div>
  );
}
