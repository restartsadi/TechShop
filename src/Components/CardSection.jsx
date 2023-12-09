import "./cardSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CardSection = () => {
  return (
    <>
      <div className="wrapper container">
        <div className="featured-work">
          <div className="row first_row">
            <div className="col-md-3"></div>
            <div className="col-md-6 heading">
              <h1>featured work</h1>
              <p>
                Here you can find some of our latest works, to see the details
                of these works just click the thumbnails below.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>

          <div className="row second_row">
            <div className="col-md-4">
              <a href="#">
                <img src="src/Assets/img/pitler.png" alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src="src/Assets/img/touch.png" alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src="src/Assets/img/locate.png" alt="" />
              </a>
            </div>
          </div>
          <div className="row third_row">
            <div className="col-md-4">
              <a href="#">
                <img src="src/Assets/img/umbreapp.png" alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src="src/Assets/img/hippo.png" alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src="src/Assets/img/pardio.png" alt="" />
              </a>
            </div>
          </div>
          <div className="row fourth_row">
            <div className="col-md-4">
              <a href="#">
                <img src="src/Assets/img/banadediki.png" alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src="src/Assets/img/biz%20corner.png" alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="#">
                <img src="src/Assets/img/arabul.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
