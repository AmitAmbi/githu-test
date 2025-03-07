import React from "react";
// import CountUp from "react-countup";
import styles from "./AboutUs.module.css";
import {
  FaUserFriends,
  FaCompress,
  FaAddressCard,
  FaClone,
  FaHandsHelping,
  FaUserGraduate,
  FaAngleDoubleUp,
  FaLinkedin,
} from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <section className={styles.about}>
      <div className={styles.Back}>
        <h1 style={{ textAlign: "left" }}>
          <span>“Knowledge is power,”- (Francis Bacon)</span> And we want to
          empower all our aspirants to succeed.
        </h1>
        <div className="imgWrapper">
          <div className={styles.right}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/about-us.png"
              width="522"
              height="380"
              alt="data science course"
            />
          </div>
        </div>
      </div>
      <div className={styles.MVDiv}>
        <div className={styles.MiddleDiv}>
          <div className={styles.FirstText}>
            <h3>Vision</h3>
            <p className={styles.list}>
              To lead the industrial training sector by generating demanding
              professionals with future proof technical skills and knowledge.
            </p>
            <div className={styles.DivIcon}>
              <div className={styles.iconBox}>
                <FaAddressCard
                  className={styles.BoxIconcard}
                  alt="data science course"
                />
                <p>Provide scopes to techies & non-techies all alike.</p>
              </div>
              <div className={styles.iconBox}>
                <FaClone className={styles.BoxIconclone} />
                <p>Ensure an extremely personalized learning experience.</p>
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <div className={styles.FirstImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/vision.png"
                width="517"
                height="330"
                alt="data science course"
              />
            </div>
          </div>
        </div>
        <div className={styles.FirstDiv}>
          <div className="imgWrapper">
            <div className={styles.FirstImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mission.png"
                width="517"
                height="380"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.FirstText}>
            <h3>Mission</h3>
            <p className={styles.list}>
              Safeguarding your career, even under the most unstable job market
              scenario, via the acquisition of emerging technology-based unique
              skills.
            </p>
            <div className={styles.DivIcon}>
              <div className={styles.iconBox}>
                <FaUserFriends
                  className={styles.BoxIconuser}
                  alt="data science course"
                />
                <p> Literate everyone with data science knowledge.</p>
              </div>
              <div className={styles.iconBox}>
                <FaCompress
                  className={styles.BoxIconcompress}
                  alt="data science course"
                />
                <p>
                  Bust the myth that only IT pros can have lucrative careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.FirstTextHead}>
        <h3>Our Core Team</h3>
      </div>
      <div className={styles.MainDiv}>
        <div className={styles.FirstDivMain}>
          <div className="imgWrapper">
            <div className={styles.FirstImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Krishna+Kumar+(1).jpg"
                width="440"
                height="313"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.FirstTextTop}>
            <div className={styles.iconHead}>
              <h3>
                Krishna Kumar <span className={styles.DesSpan}>(Founder)</span>
              </h3>
              <a
                href="https://www.linkedin.com/in/krishna-kumar-learnbay/"
                target="_blank"
              >
                <FaLinkedin className={styles.iconLink} />
              </a>
            </div>
            <p className={styles.list}>
              Skills are what distinguish a novice from a professional. But
              there is no such skill level that we can call "evergreen."
              Continuous skill development is the only way to survive in today's
              highly competitive job market. I want to lead all of the
              passionate professionals to the peak of their professionals. I
              want to establish Learnbay as the 'one-stop destination to learn,
              grow & lead.'
            </p>
          </div>
        </div>
        <div className={styles.FirstDivMain}>
          <div className="imgWrapper">
            <div className={styles.FirstImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Nisha+Kumari+(1).jpg"
                width="440"
                height="313"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.FirstTextTop}>
            <div className={styles.iconHead}>
              <h3>
                Nisha Kumari <span className={styles.DesSpan}>(CEO)</span>
              </h3>
              <a
                href="https://www.linkedin.com/in/nisha-kumari-94a733243/"
                target="_blank"
              >
                <FaLinkedin className={styles.iconLink} />
              </a>
            </div>
            <p className={styles.list}>
              I had a dream of building an educational institute offering a
              successful career to aspirants. Non-tech candidates lose hope of
              working for 2-3 years. My dream is to establish an organization
              beyond certification and create extremely demanding professionals.
              Data science is a promising future; my entire team is dedicated to
              training everyone in DS, AI, and full-stack knowledge. I don't
              want anyone to lose hope anymore.
            </p>
          </div>
        </div>
        <div className={styles.FirstDivMain}>
          <div className="imgWrapper">
            <div className={styles.FirstImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Abhishek+Gupta+(1).jpg"
                width="440"
                height="313"
                alt="data science course"
                className={styles.img12}
              />
            </div>
          </div>
          <div className={styles.FirstTextTop}>
            <div className={styles.iconHead}>
              <h3>
                Abhishek Gupta{" "}
                <span className={styles.DesSpan}>(Director)</span>
              </h3>
              <a
                href="https://www.linkedin.com/in/abhishek-gupta-716552115/"
                target="_blank"
              >
                <FaLinkedin className={styles.iconLink} />
              </a>
            </div>
            <p className={styles.list}>
              We work hard to ensure students achieve the ultimate success after
              course completion. They lose track of careers as "What now?" we
              save candidates from getting lost in the huge crowd. Our goal is
              to make sure everyone starts a successful career as DS, AI, and
              full-stack experts from Learnbay. More than certificates, we
              enhance our students' skills and knowledge, so they learn to earn
              through an ever-secure career.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Placement}>
        <div className={styles.OurPlacementDiv}>
          <h3>Placement Highlights</h3>
          <div className={styles.iconBoxP}>
            <div className={styles.iconBoxInner}>
              <BsGraphUp className={styles.BoxIcon} />
              <div>
                {/* <CountUp
                  end={250}
                  start={0}
                  delay={2}
                  duration={2}
                  suffix="%"
                  className={[styles.textStyle]}
                /> */}
                <p className={styles.list}>Highest Salary Hike</p>
              </div>
            </div>
            <div className={styles.iconBoxInner}>
              <FaAngleDoubleUp className={styles.BoxIcon} />
              <div>
                {/* <CountUp
                  end={97}
                  start={0}
                  delay={2}
                  duration={2}
                  suffix="%"
                  className={[styles.textStyle]}
                /> */}
                <p className={styles.list}>Average Salary Hike</p>
              </div>
            </div>
            <div className={styles.iconBoxInner}>
              <FaHandsHelping
                className={styles.BoxIcon}
                alt="data science course"
              />
              <div>
                {/* <CountUp
                  end={250}
                  start={0}
                  delay={2}
                  duration={2}
                  suffix="+"
                  className={[styles.textStyle]}
                /> */}
                <p className={styles.list}>Hiring Partners</p>
              </div>
            </div>
            <div className={styles.iconBoxInner}>
              <FaUserGraduate
                className={styles.BoxIcon}
                alt="data science course"
              />
              <div className={styles.CountBox}>
                {/* <CountUp
                  end={10000}
                  start={0}
                  delay={2}
                  duration={2}
                  suffix="+"
                  className={[styles.textStyle]}
                /> */}
                <p className={styles.list}>Careers Reshaped</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
