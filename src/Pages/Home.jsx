import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from '../assets/images/experience.png'
import Subtitle from "../shared/Subtitle";



import SearchBar from "../shared/SearchBar";
import ServiceList from "../Services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonaryImagesGallery from "../components/Image-gallery/MasonaryImagesGallery";
import Newsletter from "../shared/Newsletter";


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Befor You Go"} />
                  <img src={worldImg} alt=""  />
                </div>
                <h1>
                  Traveling opens the door to creating {""}{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
                  zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                  bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
                  zethaak met letters nam en ze door elkaar husselde om een
                  font-catalogus te maken. Het heeft niet alleen vijf eeuwen
                  overleefd maar is ook, vrijwel onveranderd, overgenomen in
                  elektronische letterzetting. Het is in de jaren '60 populair
                  geworden met de introductie van Letraset vellen met Lorem
                  Ipsum passages en meer recentelijk door desktop publishing
                  software zoals Aldus PageMaker die versies van Lorem Ipsum
                  bevatten.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  {" "}
                  With our all experience <br /> we will serve you{" "}
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br/> 
                  Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'gallery'}/>
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
            <MasonaryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
      <section>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
