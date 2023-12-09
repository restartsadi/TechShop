import "./banner.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  return (
    <div className="wrapper">
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 heading">
              <h1>
                let us make <br />
                your lives easier
              </h1>
              <p>
                We specialize in crafting awesome ideas for web, mobile and
                beyond.
              </p>
              <a href="#">
                <div className="circle-down">
                  <div className="inner-circle">
                    <div className="icon">
                      <p>
                        <img
                          src="src\Assets\img\icon.png"
                          alt="AAA bbb"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
