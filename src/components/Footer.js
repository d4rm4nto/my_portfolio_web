import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <Container className='footerr'>
                <Row className='p-5' data-aos-offset="300">
                    <Col md={4} data-aos="fade-right" data-aos-duration="200">
                        <div className='mb-2 pt-2'>
                            <h2>DRM_DevJr</h2>
                        </div>
                        <div className='pt-3'>
                            <h5>Hubungi Saya</h5>
                            <p>darmanto2098@gmail.com <br /> Kulon Progo, Yogyakarta, Indonesia</p>
                        </div>
                    </Col>

                    <Col md={4} data-aos="fade-right" data-aos-duration="500">
                        <div className='pt-4'>
                            <h5>Kategori Artikel</h5>
                        </div>
                        <div className=' mt-2'>
                            <p>Programing</p>
                            <p>Teknologi</p>
                            <p>UI/UX Desain</p>
                            <p>Gaya Hidup</p>
                        </div>
                    </Col>

                    <Col md={4} data-aos="fade-right" data-aos-duration="700">
                        <div className='pt-4'>
                            <h5>Tautan</h5>
                        </div>
                        <div className='mt-2'>
                            <a className='block text-decoration-none text-white' href="#home">Beranda</a>
                            <a className='block text-decoration-none text-white mt-3' href="#aboutme">Tentang Saya</a>
                            <a className='block text-decoration-none text-white mt-3' href="#portfolio">Portfolio</a>
                            <a className='block text-decoration-none text-white mt-3' href="#skill">Skill</a>
                            <a className='block text-decoration-none text-white mt-3' href="#blog">Blog</a>
                            <a className='block text-decoration-none text-white mt-3 mb-3' href="#kontak">Kontak</a>
                        </div>
                    </Col>
                    <hr />
                </Row>
                <Row className='p-5 text-center'>
                    <Col md={{ span: 6, offset: 3 }} data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <div className="d-flex fa-lg justify-content-center">
                            <div className="mySosmed m-2 p-3 border rounded-circle hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-100 hover:scale-125 transition duration-700 ease-in-out">
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </div>
                            <div className="mySosmed m-2 p-3 border rounded-circle scale-100 hover:scale-125 transition duration-700 ease-in-out hover:bg-blue-900">
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                            </div>
                            <div className="mySosmed m-2 p-3 border rounded-circle hover:bg-blue-500 scale-100 hover:scale-125 transition duration-700 ease-in-out">
                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                            </div>
                            <div className="mySosmed m-2 p-3 border rounded-circle hover:bg-[#7e22ce] scale-100 hover:scale-125 transition duration-700 ease-in-out">
                                <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Dibuat dengan ❤️ oleh DRM_DevJr, menggunakan React Js, React Boostrap & Tailwind CSS</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Footer

