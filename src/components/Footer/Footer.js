import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" data-scroll data-scroll-speed={-7}>
      <div className="contact">
        <div className="bloc">
          <h1>How We Are</h1>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              illo saepe nemo unde explicabo quia magni, inventore autem
              veritatis. Beatae?
            </p>
          </div>
          <p>Mitchel C. D.</p>
          <p>"Leaving Earth"</p>
        </div>

        <div className="bloc">
          <h1>Contact Us</h1>
          <div>
            <p>The Dixit Gallery of SF</p>
            <p>trabelbeyond@gmail.com</p>
          </div>
          <p>+33 95039494</p>
          <p>San-Francisco, USA</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
