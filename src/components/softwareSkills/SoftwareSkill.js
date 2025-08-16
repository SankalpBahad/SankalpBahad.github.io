import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {/* The list is replaced by a flex container */}
        <div className="skill-container">
          {skillsSection.softwareSkills.map((skill, i) => {
            return (
              // Each skill is now a styled span (our "box")
              <span key={i} className="skill-tag">
                {skill.skillName}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}