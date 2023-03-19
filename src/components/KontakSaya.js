import React from 'react'
import { Container, Col, Row, Card, Button, Form } from 'react-bootstrap'

const KontakSaya = () => {
    return (
        <div>
            <Container id='contact' className='mt-5 mb-5 pb-5'>
                <Row className='p-5'>
                    <Col className='mt-5' md={{ span: 6, offset: 3 }}>
                        <div className='text-center' data-aos="fade-up">
                            <h5>Kontak</h5>
                            <h1>Hubungi Saya</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="nama" data-aos="zoom-out-up">
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" placeholder="Masukan Nama Anda" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="" data-aos="zoom-out-up">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukan Email Anda" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" data-aos="zoom-out-up">
                                <Form.Label>Pesan</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Pesan" />
                            </Form.Group>

                            <button className="p-2 rounded-2 scale-110 hover:scale-125 transition duration-700 ease-in-out bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 " data-aos="zoom-out-up" variant="primary">Kirim Pesan</button>{' '}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KontakSaya