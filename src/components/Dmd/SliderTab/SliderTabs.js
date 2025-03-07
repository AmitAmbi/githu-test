import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SliderTab.module.css";
import Image from "next/image";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const SliderTabs = () => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState();
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Retail, setRetail] = useState(false);
  const [Oil, setOil] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 960) {
      setTab(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 960) {
      setOneYear(true);
    }
  }, [0]);

  return (
    <div className={styles.Course} id="course">
      <h2>Domain Electives</h2>
      <p className={styles.pTop}>Learnbay Advantage - How are we Different?</p>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setRetail(false);

              setOil(false);
            }}
            className={oneYear ? styles.ActiveSpan : styles.span}
          >
            BFSI
            {mobile ? oneYear ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {oneYear ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Understand the best practices for the finance sector.</h6>
                <p className={styles.para}>
                  Work on real-time projects using live data from companies like
                  J.P Morgan, HDFC, etc for building recommendation systems,
                  handling chatbots, and upcoming stock market prediction.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>240%</h4>
                    <p>Average Hike</p>
                  </div>
                  <div className={styles.middle}>
                    <h4>10K</h4>
                    <p>Trusted Learners</p>
                  </div>
                </div>
              </div>

              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/BFSI-min.webp"
                  width="350"
                  height="350"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
              setOil(false);

              setRetail(false);
            }}
            className={nonTech ? styles.ActiveSpan : styles.span}
          >
            Sales, Marketing & HR
            {mobile ? nonTech ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {nonTech ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Know data-driven consumer and market insights.</h6>
                <p className={styles.para}>
                  You will be wholly involved with the essential functional
                  aspects of a business, management, Operations, Finance, and
                  Research & Development with hands-on capstone projects.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>IBM</h4>
                    <p>Certification</p>
                  </div>
                  <div className={styles.middle}>
                    <h4>Global</h4>
                    <p>Accreditation</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/Sales-min.webp"
                  width="296"
                  height="345"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
              setOil(false);

              setRetail(false);
            }}
            className={Stack ? styles.ActiveSpan : styles.span}
          >
            Healthcare
            {mobile ? Stack ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Stack ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Incorporate future proof practices with Data Science and AI.
                </h6>
                <p className={styles.para}>
                  Any working professional choosing this domain with prior
                  experience will indeed be offered the maximum possible salary
                  hike and job security.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>20+</h4>
                    <p>Assignments </p>
                  </div>
                  <div className={styles.middle}>
                    <h4>Globally</h4>
                    <p>Recognized Certificate</p>
                  </div>
                </div>
              </div>
              <div className={styles.right} style={{ paddingBottom: "40px" }}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/Health-min.webp"
                  width="351"
                  height="332"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setOil(false);

              setRetail(true);

              console.log(Retail);
            }}
            className={Retail ? styles.ActiveSpan : styles.span}
          >
            Retail & E-commerce
            {mobile ? Retail ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Retail ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Gain a deeper understanding of business requirements and it's
                  functionalities.
                </h6>
                <p className={styles.para}>
                  With enhanced supply chain management and customer services,
                  e-commerce-related domains aid in improving the accuracy and
                  flexibility of the firm.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>Domain-Specific</h4>
                    <p>Training</p>
                  </div>
                  <div className={styles.middle}>
                    <h4> Project Certificate</h4>
                    <p> From IBM</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/Retail-min.webp"
                  width="314"
                  height="360"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);

              setOil(false);
              setRetail(false);
            }}
            className={Guarantee ? styles.ActiveSpan : styles.span}
          >
            Media and Hospitality
            {mobile ? Guarantee ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Guarantee ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Work on projects implemented for business growth.</h6>
                <p className={styles.para}>
                  Earn a better insight into areas like personalized marketing,
                  real-time analytics, revenue management, booking engines,
                  enhanced customer service, and identification of most valuable
                  customers.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>Special Classes</h4>
                    <p>For Non Programmers</p>
                  </div>
                  <div className={styles.middle}>
                    <h4>1:1 Daily</h4>
                    <p>Doubt Session</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/Media-min.webp"
                  width="296"
                  height="361"
                  layout="intrinsic"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setRetail(false);
              setGuarantee(false);
              setOil(false);

              setViewAll(true);
            }}
            className={viewAll ? styles.ActiveSpan : styles.span}
          >
            Manufacturing
            {mobile ? viewAll ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {viewAll ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Study about applications of DS & AI is applicable in
                  Manufacturing & Automotive.
                </h6>
                <p className={styles.para}>
                  A deeper understanding of the manufacturing and
                  telecommunication industries, where you learn in-depth about
                  robotics, novel materials, nanotechnology, computer-aided
                  design, and geomechanics.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>20+</h4>
                    <p>Case Studies </p>
                  </div>
                  <div className={styles.middle}>
                    <h4> IBM</h4>
                    <p> Certification</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/manufacturing-min.webp"
                  width="271"
                  height="353"
                  loading="lazy"
                  alt="Data Science Course"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setRetail(false);
              setGuarantee(false);
              setViewAll(false);

              setOil(true);
            }}
            className={Oil ? styles.ActiveSpan : styles.span}
          >
            Energy, Oil & Gas
            {mobile ? Oil ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Oil ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Understand how an industry expands exponentially with AI.
                </h6>
                <p className={styles.para}>
                  Pursue projects on recording sensors in seismic,
                  manufacturing, and exploration operations to Logging While
                  Drilling (LWD) technology, enabling real-time recording of
                  drilling data.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>1:1 Personal</h4>
                    <p>Mentorship</p>
                  </div>
                  <div className={styles.middle}>
                    <h4>1:1 Daily</h4>
                    <p>Doubt Session</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/energy-min.webp"
                  width={568}
                  height={412}
                  layout="intrinsic"
                  loading="lazy"
                  alt="Data Science Course"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.middlePanel}>
          {oneYear ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Understand the best practices for the finance sector.</h6>
                <p className={styles.para}>
                  Work on real-time projects using live data from companies like
                  J.P Morgan, HDFC, etc for building recommendation systems,
                  handling chatbots, and upcoming stock market prediction.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>240%</h4>
                    <p>Average Hike</p>
                  </div>
                  <div className={styles.middle}>
                    <h4>10K</h4>
                    <p>Trusted Learners</p>
                  </div>
                </div>
              </div>

              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/BFSI-min.webp"
                  width="450"
                  height="450"
                  loading="lazy"
                  alt="data science course"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {nonTech ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Know data-driven consumer and market insights.</h6>
                <p className={styles.para}>
                  You will be wholly involved with the essential functional
                  aspects of a business, management, Operations, Finance, and
                  Research & Development with hands-on capstone projects.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>IBM</h4>
                    <p>Certification</p>
                  </div>
                  <div className={styles.middle}>
                    <h4>Global</h4>
                    <p>Accreditation</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/Sales-min.webp"
                  width="450"
                  height="450"
                  loading="lazy"
                  alt="data science course"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {Guarantee ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Work on projects implemented for business growth.</h6>
                <p className={styles.para}>
                  Earn a better insight into areas like personalized marketing,
                  real-time analytics, revenue management, booking engines,
                  enhanced customer service, and identification of most valuable
                  customers.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>Special Classes</h4>
                    <p>For Non Programmers</p>
                  </div>
                  <div className={styles.middle}>
                    <h4>1:1 Daily</h4>
                    <p>Doubt Session</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/Media-min.webp"
                  width="450"
                  height="450"
                  layout="intrinsic"
                  loading="lazy"
                  alt="data science course"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {Stack ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Incorporate future proof practices with Data Science and AI.
                </h6>
                <p className={styles.para}>
                  Any working professional choosing this domain with prior
                  experience will indeed be offered the maximum possible salary
                  hike and job security.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>20+</h4>
                    <p>Assignments </p>
                  </div>
                  <div className={styles.middle}>
                    <h4>Globally</h4>
                    <p>Recognized Certificate</p>
                  </div>
                </div>
              </div>
              <div className={styles.right} style={{ paddingBottom: "40px" }}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/Health-min.webp"
                  width="450"
                  height="450"
                  loading="lazy"
                  alt="data science course"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {viewAll ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Study about applications of DS & AI is applicable in
                  Manufacturing & Automotive.
                </h6>
                <p className={styles.para}>
                  A deeper understanding of the manufacturing and
                  telecommunication industries, where you learn in-depth about
                  robotics, novel materials, nanotechnology, computer-aided
                  design, and geomechanics.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>20+</h4>
                    <p>Case Studies </p>
                  </div>
                  <div className={styles.middle}>
                    <h4> IBM</h4>
                    <p> Certification</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/manufacturing-min.webp"
                  width="450"
                  height="450"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {Retail ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Gain a deeper understanding of business requirements and it's
                  functionalities.
                </h6>
                <p className={styles.para}>
                  With enhanced supply chain management and customer services,
                  e-commerce-related domains aid in improving the accuracy and
                  flexibility of the firm.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>Domain-Specific</h4>
                    <p>Training</p>
                  </div>
                  <div className={styles.middle}>
                    <h4> Project Certificate</h4>
                    <p> From IBM</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/Retail-min.webp"
                  width="450"
                  height="450"
                  layout="intrinsic"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {Oil ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Understand how an industry expands exponentially with AI.
                </h6>
                <p className={styles.para}>
                  Pursue projects on recording sensors in seismic,
                  manufacturing, and exploration operations to Logging While
                  Drilling (LWD) technology, enabling real-time recording of
                  drilling data.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>1:1 Personal</h4>
                    <p>Mentorship</p>
                  </div>
                  <div className={styles.middle}>
                    <h4>1:1 Daily</h4>
                    <p>Doubt Session</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <img
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/DomainSlider/energy-min.webp"
                  width="450"
                  height="450"
                  layout="intrinsic"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderTabs;
