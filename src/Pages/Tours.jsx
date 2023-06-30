import React, {useState,useEffect} from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tours.css";
import { Col, Container, Row } from "reactstrap";


import TourCard from "./../shared/TourCard";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import tourData from "./../assets/data/tours";
import { BASE_URL } from "../utils/config";

const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  const {data:tours, loading, error}= (`${BASE_URL}/tours`)
  const {data:tourCount} = (`${BASE_URL}/tours/search/getTourCount`)


  

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map(tour => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default Tours;
