import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageHeader from '../comman/PageHeader'
import CdnImage from "../comman/CDNImage";
import ProductCard from '../comman/ProductCard';

const Home = () => {
  return (
    <section className="home">

      <div className="page-hedaer-wrappper">
        {/* <CdnImage className='bg-image' src='media/common/header-bg.png' ImageClass='w-100 h-100 object-fit-cover' /> */}
        <Container>
          <Row className='align-items-center gy-4'>
            <Col lg={6}>

              <PageHeader
                title="JoonBeauty Product"
                breadcrumb={[
                  { pageLink: '/', subPage: 'Home' },
                  { pageLink: '', subPage: 'All Product' },
                ]}
              />

            </Col>

            <Col lg={6}>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cupiditate sapiente ipsum illo quas ab? Nihil repellendus accusantium numquam temporibus ducimus alias neque soluta, porro molestiae, ea voluptatibus ab tempore?
              </p>
            </Col>

            <Col lg={12}>
              <p>Showing 1 to 13 out of 13 products.</p>
            </Col>

            <Col lg={4}>
              <ProductCard />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Home