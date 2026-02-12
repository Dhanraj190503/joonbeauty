import PageHeader from "../components/common/PageHeader";
import CTA from "../components/common/CTA";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../components/common/Heading";
import Pagination from "react-bootstrap/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import PaginationItem from "../components/common/PaginationItem";
import PaginationCard from "../components/our-projects/PaginationCard";
import { fetchProjects } from "../requests";
import { useEffect, useRef, useState } from "react";
import SEO from "../components/common/SEO";

const OurProjectsPage = ({pageName}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const projectsRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({
    page: queryParams.get("page") ? queryParams.get("page") : 1
  });


  const handlePaginationClick = (newSearchParams) => {
    setShouldScroll(true);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (shouldScroll && projectsRef.current) {
      setTimeout(() => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        setShouldScroll(false); 
      }, 100);
    }
  }, [searchParams, shouldScroll]);

  const { data: projects } = useQuery({
    queryKey: ["project-list", searchParams.toString()],
    queryFn: () => fetchProjects(searchParams),
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000, 
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    placeholderData: keepPreviousData()
  });

  return (
    <>
      <SEO pageName={pageName} />
      <PageHeader
        title="Our Projects"
        image="/media/images/common/header-banner.jpg"
        description="Explore our diverse portfolio of wind-solar hybrid energy projects across India."
        page="Our Projects"
        prevPages={[
          {
            pageName: "Home",
            pageLink: "/"
          }
        ]}
      />
      <section ref={projectsRef} className="our-project">
        <Container>
          <Row>
            <Col lg={5} data-aos="fade-up" data-aos-delay="200">
              <Heading tag="Projects" title="Build Clean Energy, One Project At A Time" />
            </Col>
            <Col lg={7} data-aos="fade-up" data-aos-delay="200">
              <div className="">
                <p>
                  Continuum Green Energy Limited has a portfolio of a capacity of approximately 4.7 GWp with projects comprising ~2.2 GWp operational, ~1.3 GWp
                  under construction and ~1.2 GWp of under development.
                </p>
                <p>
                  We started construction of wind farms that have dedicated evacuation infrastructure to high voltage grid transmission networks, designed to be
                  converted into wind-solar hybrid ("WSH") farms and wind solar-storage hybrid farms over time.
                </p>
              </div>
            </Col>
          </Row>
          {projects?.data && projects.data.length > 0 ? (
            <>
              <Row className="gy-sm-4 gy-3 mt-sm-5 mt-3">
                {projects?.data?.map((project, i) => (
                  <Col lg={6} key={i} data-aos="fade-up" data-aos-delay={100 + i * 10}>
                    <PaginationCard project={project} />
                  </Col>
                ))}
              </Row>
              {projects?.last_page > 1 && (
                <PaginationItem
                  setSearchParams={handlePaginationClick}
                  from={projects?.from}
                  to={projects?.to}
                  total={projects?.total}
                  links={projects?.links}
                  current_page={projects?.current_page}
                  last_page={projects?.last_page}
                />
              )}
            </>
          ) : (
            <>
              <section>
                <Container>
                  <Row>
                    <Col>
                      <p className="text-center">No projects found</p>
                    </Col>
                  </Row>
                </Container>
              </section>
            </>
          )}
        </Container>
      </section>
      <CTA />
    </>
  );
};

export default OurProjectsPage;