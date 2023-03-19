import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';



const Skill = () => {
    return (
        <div>
            <Container id='skill' className='skill mb-5'>
                <Row className='gap-2'>
                    <Col className='text-center mt-5' md={{ span: 6, offset: 3 }}>
                        <div data-aos="fade-up">
                            <h5>Skill</h5>
                            <h1>Kemampuan</h1>
                        </div>
                        <div className='d-flex justify-content-center pt-5'>
                            <div className='m-3'>
                                <h3>Html</h3>
                                <CircularProgressbar value={80} />
                            </div>
                            <div className='m-3'>
                                <h3>Css</h3>
                                <CircularProgressbar value={60} />
                            </div>
                            <div className='m-3'>
                                <h3>Javasript</h3>
                                <CircularProgressbar value={40} />
                            </div>
                            <div className='m-3'>
                                <h3>React Js</h3>
                                <CircularProgressbar value={60} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skill