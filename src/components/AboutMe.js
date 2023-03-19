import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
    return (
        <div>
            <Container id='aboutme' className="tentang">
                <Row className="align-items-center p-3">
                    <h3 className='ps-4' data-aos="fade-right">Tentang Saya</h3>
                    <Col md={6} className="" data-aos="fade-right">
                        <Card className="bg-transparent border-0 p-3 ">
                            <h2>Yuk, Belajar bareng berbagi ilmu seputar teknologi😁</h2>
                            <p className='text-slate-500'>Seorang mahasiswa semester 5 jurusan Sistem Informasi Universitas Bina Sarana Informatika. Memiliki ketertarikan mendalam dalam dunia desain dan pemrograman terutama website. Menyukai akan hal - hal baru dan memiliki kemampuan komunikasi yang baik. Sedang mencari kesempatan untuk mengembangkan kemampuan untuk menambah pengetahuan dan wawasan saya dalam bidang desain dan pemrograman website.
                            </p>
                        </Card>
                    </Col>

                    <Col md={6} className="" data-aos="fade-left">
                        <Card className="bg-transparent border-0 p-3">
                            <h2>Mari Berteman</h2>
                            <p className='text-slate-500'>Hallo Guys, untuk mengenal lebih dekat. yuk, perbanyak relasi dan silaturahmi.</p>
                            <div className="d-flex fa-xl" data-aos-duration="500">
                                <div className="mySosmed m-2 p-3 border rounded-circle hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-100 hover:scale-125 transition duration-700 ease-in-out">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </div>
                                <div className="mySosmed m-2 p-3 border rounded-circle hover:bg-blue-900 scale-100 hover:scale-125 transition duration-700 ease-in-out">
                                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                </div>
                                <div className="mySosmed m-2 p-3 border rounded-circle hover:bg-blue-500 scale-100 hover:scale-125 transition duration-700 ease-in-out">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                </div>
                                <div className="mySosmed m-2 p-3 border rounded-circle hover:bg-[#7e22ce] scale-100 hover:scale-125 transition duration-700 ease-in-out">
                                    <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default AboutMe