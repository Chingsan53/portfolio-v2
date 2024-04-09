import { Fragment } from "react";
import "./home.styles.css";

const Home = () => {
  return (
    <Fragment>
      <div className="main-component">
        <div className="profile">
          <h2>Hello, It's Chingsan here.</h2>
          <img
            src="https://placehold.co/600x400.png"
            alt="profile"
            className="profile-pic"
          />
        </div>
        <div className="works">
          <h2>Work Experiences</h2>
          <div className="works-container">
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 1</h3>
            </div>
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 2</h3>
            </div>
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 3</h3>
            </div>
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 4</h3>
            </div>
          </div>
        </div>
        <div className="education">
          <h2>Educations</h2>
          <div className="works-container">
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 1</h3>
            </div>
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 2</h3>
            </div>
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 3</h3>
            </div>
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 4</h3>
            </div>
          </div>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          <div className="works-container">
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 1</h3>
            </div>
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 2</h3>
            </div>
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 3</h3>
            </div>
            <div className="work-1">
              <img
                src="https://placehold.co/600x400.png"
                alt="works"
                className="work-pic"
              />
              <h3>Work 4</h3>
            </div>
          </div>
        </div>
        <div className="contact"></div>
      </div>
    </Fragment>
  );
};

export default Home;
