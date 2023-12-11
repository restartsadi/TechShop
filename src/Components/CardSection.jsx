import "./cardSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pitler from "../Assets/img/pitler.png";
import touch from "../Assets/img/touch.png";
import locate from "../Assets/img/locate.png";
import umbreapp from "../Assets/img/umbreapp.png";
import hippo from "../Assets/img/hippo.png";
import pardio from "../Assets/img/pardio.png";
import banadediki from "../Assets/img/banadediki.png";
import bizcorner from "../Assets/img/bizcorner.png";
import arabul from "../Assets/img/arabul.png";

const CardSection = () => {
  return (
    <>
      <div className="wrapper container">
        <div className="featured-work">
          <div className="row first_row">
            <div className="col-md-3"></div>
            <div className="col-md-6 heading">
              <h1>System`s launched recent`s</h1>
              <p>
                Here you can find some of our latest works, to see the details
                of these works just click the System`s launched recent`s.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>

          <div className="row second_row">
            <div className="col-md-4">
              <a href="#">
                <img src={pitler} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src={touch} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src={locate} alt="" />
              </a>
            </div>
          </div>
          <div className="row third_row">
            <div className="col-md-4">
              <a href="#">
                <img src={umbreapp} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src={hippo} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src={pardio} alt="" />
              </a>
            </div>
          </div>
          <div className="row fourth_row">
            <div className="col-md-4">
              <a href="#">
                <img src={banadediki} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src={bizcorner} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src={arabul} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
