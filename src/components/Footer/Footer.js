import React from "react";
import "./Footer.css";

// const addresses = [
//   {
//     town: "Amsterdam",
//     address: "IJpromenade 1, 1031 KT Amsterdam, Netherlands",
//     phone: "+312 058 91400",
//     email: "amsterdam@webunlocked.co",
//   },
//   {
//     town: "London",
//     address: "Westminster, London SW1A 0AA, United Kingdom",
//     phone: "+442 072 468350",
//     email: "london@webunlocked.co",
//   },
//   {
//     town: "Zürich",
//     address: "Museumstrasse 2, 8001 Zürich, Switzerland",
//     phone: "+414 421 86511",
//     email: "zurich@webunlocked.co",
//   },
// ];

function Footer() {
  return (
    <div className="footer" data-scroll data-scroll-speed={-7}>
      <div className="contact">
        <div className="bloc">
          <h1>Description</h1>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              illo saepe nemo unde explicabo quia magni, inventore autem
              veritatis. Beatae?
            </p>
          </div>
          <p>phone</p>
          <p>email</p>
        </div>

        <div className="bloc">
          <h1>Description</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              accusamus consequatur nobis quam ut quasi enim facere obcaecati
              rerum! Perferendis!
            </p>
          </div>
          <p>phone</p>
          <p>email</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
