import "./services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  const code = <FontAwesomeIcon icon={faCode} />;
  const laptop = <FontAwesomeIcon icon={faLaptop} />;
  const mobile = <FontAwesomeIcon icon={faMobile} />;
  return (
    <>
      <section className="section">
        <div className="section-title">
          <h1>Victory Month`s Offers</h1>
        </div>
        <div className="container">
          <div className="software-solution">
            <div className="icon-wrapper">
              <div className="icon">
                <i className="">{mobile}</i>
              </div>
            </div>
            <div className="contents">
              <h1>Let us develop a brain with A.I.</h1>
              <br />
              <p>
                t quod inventore fugit possimus error perspiciatis consectetur
                esse adipisci, doloremque id rem? Magni recusandae corporis
                dolorum non obcaecati accusantium totam repudiandae numquam
                alias possimus doloribus atque delectus, unde enim aliquam hic
                ducimus adipisci. Eius neque tenetur animi deserunt qui. Rerum
                natus molestias odio, a similique nulla laborum nemo tenetur,
                corporis sequi unde quis voluptatem laboriosam laudantium quam
                repudiandae, doloribus officia eos accusamus aliquid, at optio
                tempore aliquam? Ipsum ratione consequatur, deserunt minus ipsa
                provident illum! Commodi, dignissimos aliquam inventore
                quibusdam debitis voluptatem veritatis magnam sapiente placeat
                dolorem quos nihil vero, ea iste. Provident ducimus eum ullam
                consectetur quidem ut aperiam incidunt, earum veritatis totam
                reiciendis a fuga, consequatur eius quod debitis deserunt, minus
                delectus illum. Odio, soluta praesentium corrupti voluptate
                facilis ut esse corporis iste necessitatibus perspiciatis nam
                nihil perferendis veniam quibusdam provident at deserunt?
                Voluptatem inventore voluptatibus vero quos id iusto earum optio
                ipsam, maiores delectus ab accusamus, sint nulla quaerat odit
                ipsum praesentium illo ex natus corrupti, nam, quis cumque. Ea
                dolore fugit facere itaque aperiam blanditiis doloribus, dolores
                ut aspernatur, sit possimus.
              </p>
            </div>
          </div>
          <div className="software-solution">
            <div className="icon-wrapper">
              <div className="icon">
                <i className="">{laptop}</i>
              </div>
            </div>
            <div className="contents">
              <h1>Design Responsive</h1>
              <br />
              <p>
                t quod inventore fugit possimus error perspiciatis consectetur
                esse adipisci, doloremque id rem? Magni recusandae corporis
                dolorum non obcaecati accusantium totam repudiandae numquam
                alias possimus doloribus atque delectus, unde enim aliquam hic
                ducimus adipisci. Eius neque tenetur animi deserunt qui. Rerum
                natus molestias odio, a similique nulla laborum nemo tenetur,
                corporis sequi unde quis voluptatem laboriosam laudantium quam
                repudiandae, doloribus officia eos accusamus aliquid, at optio
                tempore aliquam? Ipsum ratione consequatur, deserunt minus ipsa
                provident illum! Commodi, dignissimos aliquam inventore
                quibusdam debitis voluptatem veritatis magnam sapiente placeat
                dolorem quos nihil vero, ea iste. Provident ducimus eum ullam
                consectetur quidem ut aperiam incidunt, earum veritatis totam
                reiciendis a fuga, consequatur eius quod debitis deserunt, minus
                delectus illum. Odio, soluta praesentium corrupti voluptate
                facilis ut esse corporis iste necessitatibus perspiciatis nam
                nihil perferendis veniam quibusdam provident at deserunt?
                Voluptatem inventore voluptatibus vero quos id iusto earum optio
                ipsam, maiores delectus ab accusamus, sint nulla quaerat odit
                ipsum praesentium illo ex natus corrupti, nam, quis cumque. Ea
                dolore fugit facere itaque aperiam blanditiis doloribus, dolores
                ut aspernatur, sit possimus.
              </p>
            </div>
          </div>
          <div className="software-solution">
            <div className="icon-wrapper">
              <div className="icon">
                <i className="">{code}</i>
              </div>
            </div>
            <div className="contents">
              <h1>Code your website raw</h1>
              <br />
              <p>
                t quod inventore fugit possimus error perspiciatis consectetur
                esse adipisci, doloremque id rem? Magni recusandae corporis
                dolorum non obcaecati accusantium totam repudiandae numquam
                alias possimus doloribus atque delectus, unde enim aliquam hic
                ducimus adipisci. Eius neque tenetur animi deserunt qui. Rerum
                natus molestias odio, a similique nulla laborum nemo tenetur,
                corporis sequi unde quis voluptatem laboriosam laudantium quam
                repudiandae, doloribus officia eos accusamus aliquid, at optio
                tempore aliquam? Ipsum ratione consequatur, deserunt minus ipsa
                provident illum! Commodi, dignissimos aliquam inventore
                quibusdam debitis voluptatem veritatis magnam sapiente placeat
                dolorem quos nihil vero, ea iste. Provident ducimus eum ullam
                consectetur quidem ut aperiam incidunt, earum veritatis totam
                reiciendis a fuga, consequatur eius quod debitis deserunt, minus
                delectus illum. Odio, soluta praesentium corrupti voluptate
                facilis ut esse corporis iste necessitatibus perspiciatis nam
                nihil perferendis veniam quibusdam provident at deserunt?
                Voluptatem inventore voluptatibus vero quos id iusto earum optio
                ipsam, maiores delectus ab accusamus, sint nulla quaerat odit
                ipsum praesentium illo ex natus corrupti, nam, quis cumque. Ea
                dolore fugit facere itaque aperiam blanditiis doloribus, dolores
                ut aspernatur, sit possimus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
