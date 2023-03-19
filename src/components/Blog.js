import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import edutech from '../images/edutech.jpg'
import pasarpolis from '../images/pasarpolis.jpg'

const Blog = () => {
    return (
        <div>
            <Container id='blog' className='artikelContainer pb-5'>
                <Row className='p-4'>
                    <Col className='text-center mt-5' md={{ span: 6, offset: 3 }}>
                        <div data-aos="fade-up">
                            <h5>Blog</h5>
                            <h1>Tulisan Terkini</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="m-1 align-items-center">
                    <Col md={6} className="" data-aos="zoom-in-right">
                        <Card className="bg-transparent mt-4 p-2 border">
                            <Card.Img className='p-3' variant="top" src={edutech} />
                            <Card.Body>
                                <Card.Title className='text-white'>UX Case Study - Edu Tech Zona Belajar</Card.Title>
                                <Card.Text>
                                    <p className='text-slate-400'>Disclaimer: UX Case study ini merupakan bagian dari tugas pembelajaran dari program UI/UX Design Mastery yang telah dikerjakan selama 7 minggu selama mengikuti program yang diberikan oleh Skilvul, untuk mempersiapkan para perserta dalam mengerjakan tantangan yang akan diberikan oleh Chalenge partners dari skilvul.</p>
                                </Card.Text>
                                <button className="p-2 rounded-2 transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" variant="primary">Selengakapnya</button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} className="" data-aos="zoom-in-left">
                        <Card className="bg-transparent mt-4  p-2 border">
                            <Card.Img className='p-3' variant="top" src={pasarpolis} />
                            <Card.Body>
                                <Card.Title className='text-white'>UX Case Study - Final Project PasarPolis: Employe Healt Insurance</Card.Title>
                                <Card.Text>
                                    <p className='text-slate-400'>Disclaimer : Project ini merupakan bagian dari program Skilvul Kampus Merdeka UI/UX Design Batch 3 - 2022 yang diadakan oleh Kemdikbud Ristek Kampus Merdeka dengan Skilvul (Skilvul.com). Project ini dikerjakan berdasarkan tantangan yang diberikan oleh Chalengen Partner (PasarPolis).</p>
                                </Card.Text>
                                <button className="p-2 rounded-2 transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" variant="primary">Selengakapnya</button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Blog