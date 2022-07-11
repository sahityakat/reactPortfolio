import React from "react";
import photo from "../../assets/images/subtitle-image.jpg";

function Project() {
  return (
    <section>
      <div className="flex-row">
        <div>
          <a
            href="https://github.com/sahityakat/noteTaker"
            id="footer"
            target="_blank" rel="noreferrer"
          >
            <h4>Note Taker</h4>
          </a>

          <img
            src={photo}
            alt="Note Taker"
            className="img-thumbnail mx-1"
            onClick={() =>
              window.open("https://github.com/sahityakat/noteTaker")
            }
          />
        </div>
        <div>
          <a
            href="https://github.com/sahityakat/weatherDashboard"
            id="footer"
            target="_blank" rel="noreferrer"
          >
            <h4>Weather Dashboard</h4>
          </a>

          <img
            src={photo}
            alt="Weather Dashboard"
            className="img-thumbnail mx-1"
            onClick={() =>
              window.open("https://github.com/sahityakat/weatherDashboard")
            }
          />
        </div>
      </div>
      <div className="flex-row">
        <div>
          <a
            href="https://github.com/sahityakat/readMeGenerator"
            id="footer"
            target="_blank" rel="noreferrer"
          >
            {" "}
            <h4>ReadMe Generator</h4>
          </a>

          <img
            src={photo}
            alt="ReadMe Generator"
            className="img-thumbnail mx-1"
            onClick={() =>
              window.open("https://github.com/sahityakat/readMeGenerator")
            }
          />
        </div>
        <div>
          <a
            href="https://github.com/sahityakat/workdayScheduler"
            id="footer"
            target="_blank" rel="noreferrer"
          >
            {" "}
            <h4>Workday Scheduler</h4>
          </a>

          <img
            src={photo}
            alt="Workday Scheduler"
            className="img-thumbnail mx-1"
            onClick={() =>
              window.open("https://github.com/sahityakat/workdayScheduler")
            }
          />
        </div>
      </div>
    </section>
  );
}
export default Project;
