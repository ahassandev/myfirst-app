import React, { useEffect } from "react";
import Progress from "../progress";

const skillsSection = ({ skill }) => {
  if (!skill || skill.length === 0) return null;
  return (
    <div>
      <section className="container px-16 mx-auto pb-10">
        <h2 className="text-4xl font-bold">{skill.heading}</h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          {skill.skills.map((item, index) => (
            <Progress
              key={index}
              skill={item.skill}
              percent={item.percent}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default skillsSection;
