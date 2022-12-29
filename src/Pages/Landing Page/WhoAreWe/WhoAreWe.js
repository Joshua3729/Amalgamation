import classes from "./WhoAreWe.module.css";
import logo from "../../../Assets/Images/logo2.png";

const WhoAreWe = (props) => {
  return (
    <div className={classes.WhoAreWe}>
      <div className={classes.innerWrapper}>
        <div className={classes.pointerWrapper}>WHO WE ARE</div>
        <div className={classes.whoAreWe_innerWrapper}>
          <div className={classes.companyImg}>
            <img
              src="https://graphicsfamily.com/wp-content/uploads/edd/2022/07/3D-office-wall-logo-mockup-with-dark-gray-wall-scaled.jpg"
              alt="logo"
            />
          </div>
          <div className={classes.textWrapper}>
            <h3 className={classes.whoWeAreHeader}>
              We are <span>AMALGAMATION GROUP PTY</span>
            </h3>
            <div className={classes.whoAreWe}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                praesentium est voluptas nam suscipit ea magni pariatur natus?
                Ea alias ducimus natus hic necessitatibus ut eligendi, quisquam
                iure dolores! Dolor. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi repudiandae consequuntur voluptatum laborum numquam
                blanditiis harum quisquam eius sed odit fugiat iusto fuga
                praesentium optio, eaque rerum! Provident similique accusantium
                nemo autem.
              </p>
              <p>
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora.
              </p>
              <p>
                Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus
                enim commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              </p>
              <p>
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
