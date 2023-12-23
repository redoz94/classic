import React, { useEffect, useState } from "react";
import SliderImage from "./yarn carousel.png";
import SliderImage1 from "./carousel1.png";
import SliderImage2 from "./fiber.png";
import SliderImage3 from "./Export.png";
import BackSheet1 from "./rolls.png";
// import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HomeStyle from "./Home.module.css";
import BedSecImg from "./industury.png";
import ContainerImg from "./container.png";
import axios from "axios";
import ClassicLogo from "../../NavBar/classic textile logo.png";
import { Link } from "react-router-dom";
// import ExportImg from "./Export.png";


export default function Home(params) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [navbar, setNavbar] = useState(false);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const handleSubmit = () => {
    if (!name || !email || !message) {
      return window.alert("All Fields Required")
    }
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then((response) => {
      setName("");
      setEmail("");
      setMessage("");
      console.log(response?.data);
    }).catch(err => console.log(err?.message))
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative">
      {/* navbar starting here */}
      <nav
        className="w-full fixed top-0 left-0 right-0 z-10"
        style={{ background: "#9EC8B9" }}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link to="/">
                <img src={ClassicLogo} alt="" className="-my-7" style={{ height: '65px', width: "75px" }} />

              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BM8K0P6UhJnZ2UyM51c2aqLcsUMKsa6XvoGCaB6xXRQ7e6ee_ckHC4J7cTZo2f7M4OA&usqp=CAU"
                      //   src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5003-512.png"
                      width={30}
                      height={30}
                      style={{ color: "white" }}
                      alt="logo"
                    />
                  ) : (
                    <svg
                      class="w-6 h-6 text-white-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-lg text-white py-5 md:px-6 text-center border-b-2 md:border-b-0  md:hover:bg-transparent" id="profile">
                  <Link to="/#" onClick={() => { setNavbar(!navbar); scrollToSection('company-profile'); }}>
                    Company Profile
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0   md:hover:bg-transparent">
                  <Link
                    to="/#"
                    onClick={() => { setNavbar(!navbar); scrollToSection('our-associates'); }}
                  >
                    Our Associates
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0   md:hover:bg-transparent">
                  <Link
                    to="/#"
                    onClick={() => { setNavbar(!navbar); scrollToSection('shipment'); }}
                  >
                    Shipment Retrieval
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link
                    to="/#"
                    onClick={() => { setNavbar(!navbar); scrollToSection('importing'); }}
                  >
                    Importing Expertise
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link
                    to="/#"
                    onClick={() => { setNavbar(!navbar); scrollToSection('quality'); }}
                  >
                    Quality Fibre
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-5 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link
                    to="/#"
                    onClick={() => { setNavbar(!navbar); scrollToSection('contact'); }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* navbar end here */}

      <div className="-mt-1.5">
        <Carousel
          autoPlay={true}
          interval={3000} // Adjust the interval as needed (in milliseconds)
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          className={HomeStyle.main_height}
        >
          <div>
            <img src={SliderImage} alt="logo" style={{ height: '450px' }} />
          </div>
          <div>
            <img src={SliderImage1} alt="logo" style={{ height: '450px' }} />
          </div>
          <div>
            <img src={SliderImage2} alt="logo" style={{ height: '450px' }} />
          </div>
          <div>
            <img src={SliderImage3} alt="logo" style={{ height: '450px' }} />
          </div>
        </Carousel>
      </div>

      <div className="hidden lg:block">
        <div className={HomeStyle.main_center}>
          <h3 className="text-white shadow flex justify-center items-center h-full text-2xl text-center">Innovation is our core, textile is our heartbeat.</h3>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="py-16">
              <h1 className="text-4xl text-black font-bold" id="our-associates">Our Associates:</h1>
            </div>
            <h1 id="company-profile" class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Classic Textile Industries (Pvt) Ltd
              {/* <br class="hidden lg:inline-block" /> */}
              {/* readymade gluten */}
            </h1>
            <p class="mb-8 leading-relaxed text-justify">
              Classic Textile Industries - where time-honored craftsmanship meets modern excellence. We take immense pride in being the pioneers of quality textile manufacturing, driven by a rich legacy of passion, experience and expertise in the textile industry. With a dedication to innovation and a commitment to precision, our upcoming textile manufacturing firm promises to deliver fabrics of unparalleled beauty and functionality.
            </p>
            <div class="flex justify-center">
              <button onClick={() => scrollToSection('contact')} class="inline-flex text-white bg-[#9EC8B9] border-0 py-2 px-6 focus:outline-none hover:bg-[#9EC8B9] rounded text-lg">
                READ MORE
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded h-96 w-full"
              alt="hero"
              src={BackSheet1}
            />
          </div>
        </div>
      </section>


      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <img
              class="object-cover object-center rounded h-96 w-full"
              alt="hero"
              src={BedSecImg}
            />
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <h1 id="importing" class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
              Classic Textile Export
              {/* <br class="hidden lg:inline-block" /> */}
              {/* readymade gluten */}
            </h1>
            <p class="mb-8 leading-relaxed text-justify">
              With an unwavering commitment to quality and a global outlook, we worked for showcasing the finest textile products to international markets. Our range of premium fabrics, exquisite designs, through seamless production processes,  earned us a reputation as a trusted partner for businesses worldwide. From luxurious apparel textiles to versatile home furnishings, our export portfolio reflects our dedication to delivering excellence in every stitch. With an extensive distribution network and a team of passionate experts, we ensure timely delivery and customer satisfaction across borders. Join us in exploring the world of textile sophistication as we weave success together on the global stage.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font container mx-auto px-5">
        <h1 id="quality" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Textile Plus</h1>
        <p className="py-6 text-2xl">Business:</p>
      </section>


      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 id="shipment" class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
              Company Profile
              {/* <br class="hidden lg:inline-block" /> */}
              {/* readymade gluten */}
            </h1>
            <p class="mb-8 leading-relaxed text-justify">
              Primarily a textile trading company, over the past two decades we emerged as a leading importer of Polyester & Nylon Filament Yarn, Metallic Yarn, Polyester Staple Fiber, Polyester Fabrics and Pure Silk Yarn. Now Classic Textile has become one of the leading organisations, standing in the front line along with its national as well as global competitors. With the untiring and concerted efforts, the company achieved tremendous success in International Trading.
            </p>
            <p className="mb-8 leading-relaxed text-justify">
              Within a matter of years, our imports have reached greater volume, despite competition from other local companies. Classic Textile is well set to touch the highest in imports in years to come and compete successfully in our market and constantly capturing new products from all over the globe.
            </p>
            <p className="mb-8 leading-relaxed text-justify">
              We are also proudly representing many suppliers of Filament Yarn, Staple Fiber & Fabrics from China, Indonesia, Japan, Malaysia, Taiwan & Thailand.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded h-96 w-full"
              alt="hero"
              src={ContainerImg}
            />
          </div>
        </div>
      </section>

      <h1 id="contact" class="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900 text-center">
        Contact Us
      </h1>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-8  mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14481.306476746582!2d66.9890817!3d24.8526919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3158f9751900b%3A0x1e4939df99f040!2sGul%20Tower%20I.I%20Chundrigar%20Road!5e0!3m2!1sen!2s!4v1701927799061!5m2!1sen!2s" width="800" height="400" style={{ border: "0" }} lallowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
            ></iframe>

          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:mt-0" style={{marginTop:'30px'}}>
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Let’s work together
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Thank you for being so awesome and thinking about us.
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-[#9EC8B9] focus:ring-2 focus:ring-[#9EC8B9] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-[#9EC8B9] focus:ring-2 focus:ring-[#9EC8B9] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-[#9EC8B9] focus:ring-2 focus:ring-[#9EC8B9] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button onClick={handleSubmit} class="text-white bg-[#9EC8B9] border-0 py-2 px-6 focus:outline-none hover:bg-[#9EC8B9] rounded text-lg">
              Submit
            </button>
            <p class="text-xs text-[#9EC8B9] mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font"></section>
      <Footer />
    </div>
  );
}
