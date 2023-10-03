import React, { useEffect, useState, useContext } from 'react';
import { Button, Image, Row } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { fetchOneDevice, deleteDevice } from '../http/deviceApi';
import { Context } from '../index';
import jwt_decode from 'jwt-decode';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '../css/DevicePage.css';
import '../css/index.css';





const DeviceCharacteristics = ({ info }) => (
    <Row className="d-flex flex-column m-3">
        <h4>Опис проекту</h4>
        {info.map((info, index) =>
            <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                {info.title}: {info.description}
            </Row>
        )}
    </Row>
);

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] });
    const [deviceImages, setDeviceImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const { id } = useParams();
    const history = useHistory();
    const { user } = useContext(Context);

    const token = localStorage.getItem('token');
    let userRole = '';

    if(token) {
        try {
            const decodedToken = jwt_decode(token);
            userRole = decodedToken.role;
        } catch(e) {
            console.error("Error decoding the token", e);
        }
    }


    const imageUrls = deviceImages.map(img => process.env.REACT_APP_API_URL + img.imageUrl);

    useEffect(() => {
        fetchOneDevice(id).then(data => {
            setDevice(data);
            setDeviceImages(data.deviceImages || []);
        });
    }, []);

    const handleDelete = async () => {
        try {
            await deleteDevice(id);
            history.push('/devices');
        } catch (error) {
            console.error('Error deleting device:', error);
        }
    };

    // console.log(imageUrls);


    return (
        <div className="bg-black text-light">
            <div className="d-flex  flex-column align-items-center">
                <h3 className="text-center">{device.name}</h3>
                <hr className="super-hr"/>
            </div>

            <hr/>

            {/*<Swiper*/}
            {/*    spaceBetween={1}*/}
            {/*    slidesPerView={7}*/}
            {/*    // navigation*/}
            {/*    pagination={{ clickable: true }}*/}
            {/*>*/}
            {/*    {deviceImages.map((img, index) => (*/}
            {/*        <SwiperSlide key={index} className="swiper-block">*/}
            {/*            <Image*/}
            {/*                className="swiper-image"*/}
            {/*                style={{ cursor: 'pointer',*/}
            {/*                        objectFit: 'cover'*/}
            {/*            }}*/}
            {/*                // width={256} // Adjust the width and height as needed*/}
            {/*                // height={256}*/}
            {/*                src={imageUrls[index]}*/}
            {/*                onClick={() => {*/}
            {/*                    setIsOpen(true);*/}
            {/*                    setPhotoIndex(index);*/}
            {/*                }}*/}
            {/*            />*/}
            {/*        </SwiperSlide>*/}
            {/*    ))}*/}
            {/*</Swiper>*/}
            <div className="carousel">
                <div className="pictures">
                    {deviceImages.map((img, index) => (
                        <div key={index}>
                            <Image
                                style={{ cursor: 'pointer' }}
                                width={100}
                                height={100}
                                src={imageUrls[index]}
                                onClick={() => {
                                    setIsOpen(true);
                                    setPhotoIndex(index);
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={imageUrls[photoIndex]}
                    nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
                    prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imageUrls.length)}
                />
            )}

            <DeviceCharacteristics info={device.info} />

            {userRole === 'ADMIN' && user.isAuth && (
                <Button variant="danger" onClick={handleDelete}>Видалити пристрій</Button>
            )}


        </div>
    );
};

export default DevicePage;
