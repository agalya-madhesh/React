import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/Reorder";
import WorkIcon from "@mui/icons-material/Reorder";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 -2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kannammal National Matriculation School, Palladam, Tirupur
          </h3>
          <p>Secondary School Leaving Certificate </p> 
          <p>Percentage: 95%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 -2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kannammal National Matriculation School, Palladam, Tirupur
          </h3> 
          <p>Higher Secondary Certificate</p>
          <p>Percentage: 85% </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 -2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri Krishna Arts and Science College, Coimabtore
          </h3>
          <p>MSc Software Sysytems</p>
          <p>Percentage: 86%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 -2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Process Associate, Bright Bridge Infotech, Coimbatore
          </h3>
          <p>Skilled in optimizing processes and achieving goals</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Front-End Developer, Riverworld Technologies, Coimbatore
          </h3>
          <p>Skilled in crafting solid, scalable products with exceptional user experience</p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
