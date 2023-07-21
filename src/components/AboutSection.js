import React from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <div className="container py-5 ">
        <div className="row p-3">
          <div className="col-md-6">
            <div className={styles.titleStyling}>
              <h2 className={styles.aboutTitleStyle}>ABOUT</h2>
              <span className={styles.skeletosStyle}>SKELETOS</span>
            </div>
            <h3 className={styles.contentText}>
              OUR MISSION IS TO HELP BUSINESSES TO GROW WITH MODERN TECHNOLOGY
              AND SIMPLIFY COMPLICATED WORK WITH OUR CUSTOMIZED SOFTWARE.
            </h3>
            <p className={styles.contentPara}>
              Build all the digital solutions under one cloud at Skeletos in the
              minimum time and best price. Skeletos helps you to transform your
              business with strategic and innovative customized software. This
              customized software will help you to reduce operational costs and
              create a unique brand experience for you. Our mission is to help
              businesses to grow with modern technology and simplify complicated
              work with our software. We are providing these latest tools and
              techniques in E-commerce, Healthcare, Banking, Hospitality,
              Manufacturing and Agriculture.
            </p>
            <button className="btn btn-lg btn-dark p-2">More</button>
          </div>

          <div className="col-md-6 text-center">
            <div className="row mt-5">
              <div className="col-md-6 mt-5">
                <div className="row justify-content-end">
                  <div className="col-8">
                    <div className="card pt-4">
                      <img
                        src="/images/contact.svg"
                        alt=""
                        className={styles.imgContainer}
                      />
                      <p>Contact us</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end my-3">
                  <div className="col-8">
                    <div className="card pt-4">
                      <img
                        src="/images/message.svg"
                        alt=""
                        className={styles.imgContainer}
                      />
                      <p>Discuss with Experts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-5">
                <div className="row mt-5">
                  <div className="col-8">
                    <div className="card pt-3">
                      <img
                        src="/images/data.svg"
                        alt=""
                        className={styles.imgContainer}
                      />
                      <p>Evaluate cost</p>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-8">
                    <div className="card pt-3">
                      <img
                        src="/images/start-up.svg"
                        alt=""
                        className={styles.imgContainer}
                      />
                      <p>Kick-off project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
