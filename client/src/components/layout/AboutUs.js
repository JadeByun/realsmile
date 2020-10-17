import React, { Fragment } from 'react';

const AboutUs = () => {
  return (
    <Fragment>
          <section className="about-us">
      <img
        src="./img/logo-big.png"
        alt="RealSmile logo"
        className="about-us__logo"
      />
      <div className="about-us__content">
        <h1 className="heading-primary u-center-text">
          True Job Matching, RealSmile
        </h1>
        <p className="u-margin-top-small">
          RealSmile.net matches jobs for people who work in the restaurant
          business. Due to the nature of this industry, work hours vary, which
          can lead to difficulty in lookding for a job. Find the right job by
          automatically matching with job listings for when they are available.
          Whether they are looking for temporary or permanent positions, or full
          time or part time positions. Set your availability now.
        </p>
      </div>
    </section>
    </Fragment>
  )
}

export default AboutUs;