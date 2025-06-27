import React from "react";
import "../../assets/css/bootstrap.css";
import { Link } from "react-router-dom";
function Four04() {
  return (
    <>
      <section>
        <div className="fluid-continer">
          <div className="row justify-content-center">
            <div className="col-sm-6 ">
              <h1 style={{ fontWeight: "bold", color: "red" }}>
                <br />
                <br />
                404 <br />
                Oops! Not Here mate 😔
              </h1>
              <h2>
                <Link to="/">
                <small>apple clone home page?</small>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Four04;
