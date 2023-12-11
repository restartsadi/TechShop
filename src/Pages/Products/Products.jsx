import "./products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import member1 from "../../Assets/img/member1.png";
import member2 from "../../Assets/img/member2.png";
import member3 from "../../Assets/img/member3.png";
import member4 from "../../Assets/img/member4.png";
import icon1 from "../../Assets/img/icon1.png";
import icon2 from "../../Assets/img/icon2.png";
import icon3 from "../../Assets/img/icon3.png";
import icon4 from "../../Assets/img/icon4.png";

export const Products = () => {
  return (
    <div className="Team">
      <div className="container">
        <div className="row first_row">
          <div className="col-md-6 heading">
            <h1>Our Availability</h1>
            <p>
              We are a hard working group,aim is to listen to your problems and
              to come up with the best solution possible. We follow the lates
              trends on the web to create custom talierd niche websites.
            </p>
          </div>
        </div>
        <div className="row second_row">
          <div className="col-md-3">
            <div className="content 1">
              <img src={member1} alt="" />
              <h4>Name surname</h4>
              <p>Land developer</p>
              <div className="icon">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content 2">
              <img src={member2} alt="" />
              <h4>Name surname</h4>
              <p>Land developer</p>
              <div className="icon">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content 3">
              <img src={member3} alt="" />
              <h4>Name surname</h4>
              <p>Land developer</p>
              <div className="icon">
                <img src={icon1} alt="#" />
                <img src={icon2} alt="#" />
                <img src={icon3} alt="#" />
                <img src={icon4} alt="#" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content 4">
              <img src={member4} alt="" />
              <h4>Name surname</h4>
              <p>Land developer</p>
              <div className="icon">
                <img src={icon1} alt="#" />
                <img src={icon2} alt="#" />
                <img src={icon3} alt="#" />
                <img src={icon4} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
