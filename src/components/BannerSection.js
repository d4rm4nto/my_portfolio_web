import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import bannner from '../components/image/bannner.png'
import Typewriter from 'typewriter-effect';

const NavigationBar = () => {


    return (
        <div className='mt-5'>
            <Container className='bannerContainer'>
                <Row className="m-1 align-items-center">
                    <Col sm md={6}>
                        <Card className="mainBanner bg-transparent border-0">
                            <h4>Holla👋, Semuaaa...!!</h4>
                            <h1>Drm_Devjr</h1>
                            <h2>
                                <Typewriter options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 20,
                                    strings: [
                                        "Mahasiswa & Karyawan Swasta", "Junior Front End Web Developer"
                                    ],
                                }} /></h2>
                            <p className='text-slate-500'>Mahasiswa Fakultas Teknik & Informatika | Sistem Informasi Universitas Bina Sarana Informatika | Yogyakarta</p>
                            <div>
                                <button className="p-2 rounded-2 transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" variant="primary">Download CV</button>{' '}
                            </div>
                        </Card>
                    </Col>

                    <Col sm md={6}>
                        <Card className="mt-2 mb-2 bg-transparent animate-pulse border-0">
                            <img className='w-auto h-auto ps-5' src={bannner} alt="banner" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default NavigationBar

