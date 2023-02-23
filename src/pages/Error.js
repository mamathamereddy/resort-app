import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Hero hero="errorHero">
      <Banner tittle="404 Error" subtitle="Page Not found">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
}

export default Error;
