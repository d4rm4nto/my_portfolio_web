import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import nikeweb from '../images/nikeweb.jpg'
import filmweb from '../images/filmweb.jpg'
import coffeeweb from '../images/coffeeweb.jpg'
import sikokemas from '../images/sikokemas.jpg'


const MyPortfolio = () => {
    return (
        <div>
            <Container id='portfolio' className='portfolio'>
                <Row>
                    <Col className='text-center' md={{ span: 6, offset: 3 }} >
                        <div data-aos="fade-up">
                            <h5>Portfolio</h5>
                            <h1>Project Terbaru</h1>
                        </div>
                    </Col>
                </Row>

                <Row className="m-1 align-items-center">
                    <Col md={6} className="">
                        <Card className="bg-transparent mt-4 border-0" data-aos="fade-up"
                            data-aos-duration="1000" data-aos-delay="300">
                            <Card.Img className='scale-100 hover:scale-110 ease-in duration-300 rounded-2 p-3' variant="top" src={filmweb} />
                            <Card.Body>
                                <Card.Title className='text-white'>DRMFILMS | Website Film</Card.Title>
                                <Card.Text className='text-slate-400'>
                                    Sebuah halman website landingpage sederhana yang dibuat menaggunakan library javascript React Js dan menggunakan framework html Bootsrap 5. Menggunakan animasi external dari AOS. data film diambil dari API TMDB dan menggunakan AXIOS.
                                </Card.Text >
                                <button className="p-2 rounded-2 transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" variant="primary">Lihat Detail</button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} className="">
                        <Card className="bg-transparent mt-4 border-0" data-aos="fade-up"
                            data-aos-duration="1000" data-aos-delay="400">
                            <Card.Img className='scale-100 hover:scale-110 ease-in duration-300 rounded-2 p-3' variant="top" src={nikeweb} />
                            <Card.Body>
                                <Card.Title className='text-white'>Website Nike with React JS & Bootstrap 5</Card.Title>
                                <Card.Text className='text-slate-400'>
                                    Website Ini dibuat menggunakan library javascript React js & framework html bootstrap 5. dengan animasi eksternal dari AOS Animation dengan sedikit sentuhan tailwind css.
                                </Card.Text>
                                <button className="p-2 rounded-2 transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" variant="primary">Lihat Detail</button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} className="">
                        <Card className="bg-transparent mt-4 border-0" data-aos="fade-up"
                            data-aos-duration="1000" data-aos-delay="300">
                            <Card.Img className='scale-100 hover:scale-110 ease-in duration-300 rounded-2 p-3' variant="top" src={coffeeweb} />
                            <Card.Body>
                                <Card.Title className='text-white'>Website Coffee</Card.Title>
                                <Card.Text className='text-slate-400'>
                                    Sebuah halaman website landingpage yang dibuat menggunakan framework html Bootsrap 5, CSS, dan  sedikit sentuhan javascript.
                                </Card.Text>
                                <button className="p-2 rounded-2 transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" variant="primary">Lihat Detail</button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} className="">
                        <Card className="bg-transparent mt-4 border-0" data-aos="fade-up"
                            data-aos-duration="1000" data-aos-delay="400">
                            <Card.Img className='scale-100 hover:scale-110 ease-in duration-300 rounded-2 p-3' variant="top" src={sikokemas} />
                            <Card.Body>
                                <Card.Title className='text-white'>SIKOKEMAS | Sistem Informasi Kesehatan Masyarakat</Card.Title>
                                <Card.Text className='text-slate-400'>
                                    Sebuah website Dinamis, yang dibuat menggunakan bahasa pemrograman PHP dengan framework CI3 dan menggunakan template free admin LTE yang tersedia.
                                </Card.Text>
                                <button className="p-2 rounded-2 transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" variant="primary">Lihat Detail</button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default MyPortfolio