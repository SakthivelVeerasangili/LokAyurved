import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTty } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/images/logo.png";
import Welcome from "../assets/images/welcome.gif";
import Education from "../assets/images/education.jpg";
import Food from "../assets/images/food.jpg";
import Living from "../assets/images/living.jpg";
import National from "../assets/images/national.jpg";
import Radio from "../assets/images/radio.jpg";
import Why from "../assets/images/why-us.jpg";
import healthyLiving from "../assets/images/healthy-living-1.jpg";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import Team from "../assets/images/our-team.png";
import Human from "../assets/images/body.png";
import Food1 from "../assets/images/planning.png";
import Aging from "../assets/images/anti-aging.png";
import What1 from "../assets/images/what1.jpg";
import Yoga from "../assets/images/meditation.png";
import Do from "../assets/images/plan.png";
import Hope from "../assets/images/planning.png";
import Health from "../assets/images/health-concious.jpg";
import Wellness from "../assets/images/traveller-wellness.jpg";
import Natrual from "../assets/images/ayurveda-living.jpg";
import Family from "../assets/images/family.jpg";
import Medies from "../assets/images/home-remedies.jpg";
import Culture from "../assets/images/ayurveda-science.jpg";
import Invite from "../assets/images/invite-us.jpg";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

function Header() {
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 7) {
      counter = 1;
    }
  }, 5000);

  return (
    <div>
      <div className="global__container">
        <div className="header__top__container">
          <div className="header__left__info">
            <FontAwesomeIcon icon={faTty} />
            <a href="tel:+91 9318440221" id="number">
              +91 9318440221
            </a>
            | <FontAwesomeIcon icon={faEnvelope} />
            <a href="info@lokayurved.com" id="gmail">
              info@lokayurved.com
            </a>
          </div>
          <div className="header__right__info">
            <a href="https://www.lakshyapath.org/" id="project">
              Lakshya Path Project
            </a>{" "}
            |
            <a href="https://shatamcare.com/" id="covid__care">
              Shatam Ayurveda covid care center
            </a>
            <FontAwesomeIcon icon={faFacebook} beat id="fb" />
            <FontAwesomeIcon icon={faYoutube} beat id="youtube" />
          </div>
        </div>
        <div id="main__container">
          <div className="wrapper__container">
            <div className="header__container">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="navgation__container">
                <p>Home</p>
                <p>About</p>
                <p>Why AyurvedaLoka</p>
                <p>Services</p>
                <p>Invite Us</p>
                <p>programs</p>
                <p>Payment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider__container">
          <div className="slider">
            <div className="slides">
              <input type="radio" name="radio-btn" id="radio1" />
              <input type="radio" name="radio-btn" id="radio2" />
              <input type="radio" name="radio-btn" id="radio3" />
              <input type="radio" name="radio-btn" id="radio4" />
              <input type="radio" name="radio-btn" id="radio5" />
              <input type="radio" name="radio-btn" id="radio6" />
              <input type="radio" name="radio-btn" id="radio7" />
              <div className="slide first">
                <a href="https://www.lokayurved.com/why-us.php">
                  <img src={Welcome} alt="images" />
                </a>
              </div>
              <div className="slide">
                <a href="https://www.lokayurved.com/our-programs.php?cid=39&page=1">
                  <img src={Education} alt="images" />
                </a>
              </div>
              <div className="slide">
                <a href="https://www.lokayurved.com/our-programs.php?cid=38&page=1">
                  <img src={Food} alt="images" />
                </a>
              </div>
              <div className="slide">
                <a href="https://www.lokayurved.com/our-programs.php?cid=40&page=1">
                  <img src={Living} alt="images" />
                </a>
              </div>
              <div className="slide">
                <a href="https://www.lokayurved.com/our-programs.php?cid=46&page=1">
                  <img src={National} alt="images" />
                </a>
              </div>
              <div className="slide">
                <a href="https://www.lokayurved.com/our-programs.php?cid=47&page=1">
                  <img src={Radio} alt="images" />
                </a>
              </div>
              <div className="slide">
                <a href="https://www.lokayurved.com/why-us.php">
                  <img src={Why} alt="images" />
                </a>
              </div>
              <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
                <div className="auto-btn5"></div>
                <div className="auto-btn6"></div>
                <div className="auto-btn7"></div>
              </div>
            </div>
            <div className="navigation-manual">
              <label for="radio1" className="manual__btn" />
              <label for="radio2" className="manual__btn" />
              <label for="radio3" className="manual__btn" />
              <label for="radio4" className="manual__btn" />
              <label for="radio5" className="manual__btn" />
              <label for="radio6" className="manual__btn" />
              <label for="radio7" className="manual__btn" />
            </div>
          </div>
        </div>
        <div className="Our__container">
          <div className="split__our___container">
            <div className="our__motto">
              <FontAwesomeIcon icon={faFireFlameCurved} beat id="fire" />
              <h1 id="motto__h">Our Motto</h1>
              <p id="motto">
                Wellness Revolution through Protective and Promotive Ayurved.
              </p>
            </div>
            <div className="our__vision">
              <FontAwesomeIcon icon={faEye} beat id="eye" />
              <h1 id="vision__h">Our Vision</h1>
              <p id="vision">
                Ancient Ayurved Protective and Promotive health module's
                awareness to common man in current, scientific and realistic way
                which will help him to remain healthy.
              </p>
            </div>
            <div className="our__mission">
              <FontAwesomeIcon icon={faBullseye} beat id="target" />
              <h1 id="target__h">Our Mission</h1>
              <p id="mission">
                Classical Ayurved Protective and Promotive Health to all in
                Contemporary style.
              </p>
            </div>
          </div>
        </div>
        <div className="what__lokayurved">
          <div className="what__loka__contant">
            <h1>What is AyurvedaLoka?</h1>
            <h5 id="wellness__italic">The Wellness Revolution</h5>
            <h6 id="we__are__inspi">
              <a href="https://www.lokayurved.com/" id="link">
                WE'VE INSPIRED HUNDREDS OF PEOPLE!
              </a>
            </h6>
            <p id="about__loka">
            AyurvedaLoka is all about educating and experiencing individuals
              about ancient Ayurveda's timelessly true Protective and promotive
              health secrets suitable in today's style to remain healthy.
            </p>
          </div>
          <div className="what__loka__img">
            <img src={healthyLiving} alt="healthy living" />
          </div>
        </div>
        <div className="why__loka">
          <div className="trans__layer">
            <div className="why__loka__contant">
              <div className="why__loka__align">
                <h1>Why AyurvedaLoka</h1>
                <div className="hl">
                  <h3>
                    Yes!! The only person who can prevent your health is you,
                    but first you should know it right...
                  </h3>
                </div>
              </div>

              <a href="https://www.lokayurved.com/why-us.php" id="why__btn">
                KNOW MORE
              </a>
            </div>
          </div>
        </div>
        <div className="event__container">
          <div className="event__topic">
            <h1>
              Past events for converting Ancient Ayurveda Protective Health
              <br /> Knowledge into Today's living realities
            </h1>
            <div className="event__btn">
              <a href="https://www.lokayurved.com/our-programs.php" id="event">
                Past Events
              </a>
            </div>
          </div>
        </div>
        <div className="Our__team">
          <div className="team__container">
            <div className="team__img">
              <img src={Team} alt="team" id="team__img" />
            </div>
            <div className="team__contant">
              <h1 className="team__head">Our Team</h1>
              <h4 className="team__italic">
                We have wonderfull people in our team, whom with you would love
                to meet.
              </h4>
              <p id="team__para">
                We are a wellness concept provider team consisting of renowned
                Ayurved alumni Doctors of Gujarat Ayurved University and
                industry experienced engineers with intense passion for Ayurved.
                This entire team is working under the guidance of Ex-Principle &
                HoD Panchkarma, Gujarat Ayurved University and world renowned
                Ayurvedacharya Dr. Hitesh Jani, who has already given various
                concepts like Gauvigyan and GarbhVigyan to the society other
                than this Protective health concept.
              </p>
              <a
                id="team__btn"
                href="https://www.lokayurved.com/about-coordinator.php"
              >
                KNOW US
              </a>
            </div>
          </div>
        </div>
        <div className="services__container">
          <div className="services__topic">
            <h1>
              We offer full spectrum of services to help you to live healthy
              life.
            </h1>
            <div className="services__btn">
              <a
                href="https://www.lokayurved.com/our-services.php"
                id="services"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="lokayarved__program">
          <h1 id="program__heading">
            What you will take home from us after AyurvedaLoka Program?
          </h1>

          <div className="program__container">
            <div className="home__task__left">
              <div className="knowledge">
                <img src={Human} alt="human" />
                <div className="human__container">
                  <h4>Protective Health Knowledge</h4>
                  <p>
                    Knowledge about your body type and state of mind to keep it
                    fit.
                  </p>
                </div>
              </div>
              <div className="food__plan">
                <div className="food__img">
                  <img src={Food1} alt="food" />
                </div>
                <div className="food__container">
                  <h4>Food Plan</h4>
                  <p>
                    Your daily routine and seasonal food plan to prevent
                    disease.
                  </p>
                </div>
              </div>
              <div className="prevent__aging">
                <div className="aging__img">
                  <img src={Aging} alt="flower" />
                </div>
                <div className="aging__container">
                  <h4>Prevent Aging</h4>
                  <p>
                    Your every year Panchkarma/Cell level detox plan to prevent
                    disease and delay aging.
                  </p>
                </div>
              </div>
            </div>
            <div className="home__task__mid">
              <img src={What1} alt="morning" />
            </div>
            <div className="home__task__right">
              <div className="yoga">
                <img src={Yoga} alt="yoga" />
                <div className="yoga__container">
                  <h4>Health Transformation</h4>
                  <p>
                    Health Transformation by giving knowledge on connection
                    between your body, mind and soul.
                  </p>
                </div>
              </div>
              <div className="do__plan">
                <img src={Do} alt="do" />
                <div className="do__container">
                  <h4>Health Do's & Donot's</h4>
                  <p>
                    General list of do's and donot's to remain healthy as per
                    season, place, time and age
                  </p>
                </div>
              </div>
              <div className="hope__aging">
                <img src={Hope} alt="hope" />
                <div className="hope__container">
                  <h4>Support & Motivation</h4>
                  <p>How you can get connected with us for further guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="attend__container">
          <div className="attend__blur">
            <h1 id="attend__head">Who Should Attend?</h1>
            <div className="attend__plans">
              <div className="plan__fline">
                <div className="health">
                  <img id="healthimg" src={Health} alt="Health" />
                  <div className="overlay">
                    <h3>Who want to know the real ways of health prevention</h3>
                  </div>
                </div>
                <div className="wellness">
                  <img id="wellness" src={Wellness} alt="Wellness" />
                  <div className="overlay">
                    <h3>Travellers who want wellness thruough ayurveda.</h3>
                  </div>
                </div>
                <div className="natrual">
                  <img src={Natrual} alt="Natrual" id="natural" />
                  <div className="overlay">
                    <h3>Who are natural and healthy living lovers.</h3>
                  </div>
                </div>
              </div>
              <div className="plan__sline">
                <div className="family">
                  <img src={Family} alt="Family" id="family" />
                  <div className="overlay">
                    <h3>Who wants to keep their family and friends healthy.</h3>
                  </div>
                </div>
                <div className="medies">
                  <img src={Medies} alt="Medies" id="medies" />
                  <div className="overlay">
                    <h3>Who want to know about ayurvedic home remedies (dadi-nani ke nushke).</h3>
                  </div>
                </div>
                <div className="culture">
                  <img src={Culture} alt="Culture" id="culture" />
                  <div className="overlay">
                    <h3>Who are indian culture and traditional health science lovers.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="place__container">
          <div className="place__contant">
            <div className="place__img">
              <img src={Invite} alt="invite" id="invite" />
            </div>
            <div className="place__topic">
              <h1 className="invite__head">Invite us at your place.</h1>
              <h5 className="invite__italic">We'd love to visit you.</h5>
              <p className="invite__para">
                If you are a Wellness Resort, Missionary promoting Vedas,
                Wellness Provider organisation, Health NGO, Corporate who takes
                care of its Employee health and want to reduce medical bills
                expenses, Educational Institute who want to impart Protective
                Health education to their students, Social Health Reformer and
                all Health Conscious Individuals who want to know on how to do
                Health Prevention, then do invite us at your place for doing
                AyurvedaLoka Seminars and Customized Ayurveda Living Programs.
              </p>
              <a
                id="invite__btn"
                href="https://www.lokayurved.com/invite-us.php"
              >
                INVITE US
              </a>
            </div>
          </div>
        </div>
        {/* <section className="section section-work-data">
          <div className="container grid grid-four-column">
            <div>
              <h1 className="counter-numbers">36</h1>
              <p>MONTHS OF
                EXPERIENCE</p>
            </div>
            <div>
              <h1 className="counter-numbers">200</h1>
              <p>SUCCESSFUL
                  PROGRAMS</p>
            </div>
            <div>
              <h1 className="counter-numbers">50000</h1>
              <p>PEOPLE
              ATTENDED</p>
            </div>
            <div>
              <h1 className="counter-numbers">400</h1>
              <p>SUCCESSFUL
              SEMINARS</p>
            </div>
          </div>
        </section>
 */}
        <div className="details__container">
          <div className="trans__layer">
            <div className="details__detail">
              <div className="month">
                <h1 className="mount__count">36</h1>
                <h3>
                  MONTHS OF
                  <br /> EXPERIENCE
                </h3>
              </div>
              <div className="successful">
                <h1 className="successful__count">200</h1>
                <h3>
                  SUCCESSFUL <br />
                  PROGRAMS
                </h3>
              </div>
              <div className="attend__pepole">
                <h1 className="pepole__count">500000</h1>
                <h3>
                  PEOPLE
                  <br /> ATTEND
                </h3>
              </div>
              <div className="successful__seminars">
                <h1 className="seminars__count">400</h1>
                <h3>
                  SUCCESSFUL
                  <br /> SEMINARS
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="associates">
          <h1 id="associates__head">Our Associates</h1>
          <div className="associates__slider">
            <div className="imgslider"></div>
          </div>
        </div>
        <div className="footer">
          <div className="footer__container">
            <div className="footer__one">
              <img src={Logo} alt="logo" />
              <div className="contact">
                <FontAwesomeIcon icon={faTty} beat id="t"/>
                <h6>+91 9318440221</h6>
              </div>
              <div className="gmail__acc">
                <FontAwesomeIcon icon={faEnvelope} beat id="e" />
                <h6>info@lokayurved.com</h6>
              </div>
              <div className="location">
              <FontAwesomeIcon icon={faLocationDot} beat id="l" />
                <h6>
                  Ved Garbha Vihar, Ahmedabad Dwarka Highway, Lakhabaval Road,
                  Near Jamnagar Airport, Jamnagar, Gujarat, India
                </h6>
              </div>
              <a href="https://www.facebook.com/lokayurved/ ">
                <FontAwesomeIcon icon={faFacebook} beat />
              </a>
              <a href="https://www.youtube.com/channel/UCevNqc6vZpfjFYc1418ak7Q">
                <FontAwesomeIcon icon={faYoutube} beat />
              </a>
            </div>
            <div className="footer__two">
              <h2>OUR SERVICES</h2>
              <a href="https://www.lokayurved.com/our-services.php">
                <h6>Experiencing Ayurvedia Living (Lokayurved)®</h6>
              </a>
              <a href="https://www.lokayurved.com/our-services.php">
                <h6>
                  Seminars on Preventive and Promotive Health in India and
                  abroad.
                </h6>
              </a>
              <a href="https://www.lokayurved.com/our-services.php">
                <h6>Ayurveda Wellness Consultations to Wellness resorts.</h6>
              </a>
              <a href="https://www.lokayurved.com/our-services.php">
                <h6>
                  Individual Consultations for daily routine and diet plan
                </h6>
              </a>
              <a href="https://www.lokayurved.com/our-services.php">
                <h6>Consultations to start an Ayurveda Panchkarma Centre.</h6>
              </a>
              <a href="https://www.lokayurved.com/our-services.php">
                <h6>
                  Concept and Menu Design consultations to start an Ayurveda
                  Cafe.
                </h6>
              </a>
              <a href="https://www.lokayurved.com/our-services.php">
                <h6>
                  Preventive Health based Skill development course design
                  consultations.
                </h6>
              </a>
            </div>
            <div className="footer__three">
              <h2>USEFUL LINKS</h2>
              <a href="https://www.lokayurved.com/index.php">
                <h6>Home</h6>
              </a>
              <a href="https://www.lokayurved.com/why-us.php">
                <h6>Why LokAyurved?</h6>
              </a>
              <a href="https://www.lokayurved.com/about-creator.php">
                <h6>About Creator</h6>
              </a>
              <a href="https://www.lokayurved.com/about-coordinator.php">
                <h6>About Key Catalyst</h6>
              </a>
              <a href="https://www.lokayurved.com/invite-us.php">
                <h6>Invite Us</h6>
              </a>
            </div>
            <div className="footer__four">
              <a href="https://www.lokayurved.com/about-research-center.php">
                <h6>Wellness Research Center</h6>
              </a>
              <a href="https://www.lokayurved.com/our-services.php">
                <h6>Services</h6>
              </a>
              <a href="https://www.lokayurved.com/payment.php">
                <h6>Payment</h6>
              </a>
              <a href="https://www.lokayurved.com/upcoming-program.php">
                <h6>Upcoming Programs</h6>
              </a>
              <a href="https://www.lokayurved.com/our-programs.php">
                <h6>Glimpse of Past Events</h6>
              </a>
            </div>
          </div>
          <div className="copyright">
            <div className="copy__left">
              <h6>
                © 2019 AyurvedaLoka. All rights reserved. Designed and Developed
                by Mehta Websolution
              </h6>
            </div>
            <div className="copy__right">
              <a href="https://www.lokayurved.com/index.php">
                <h6>HOME</h6>
              </a>
              <a href="https://www.lokayurved.com/why-us.php">
                <h6>Why AyurvedaLoka?</h6>
              </a>
              <a href="https://www.lokayurved.com/invite-us.php">
                <h6>Invite Us</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
