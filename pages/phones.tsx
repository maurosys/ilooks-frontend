import React, { useState } from 'react';
import HeaderFixed from '../components/Layout/HeaderFixed';
import Footer from '../components/Layout/Footer';
import Facility from '../components/shop-style-five/Facility';
import Details from '../components/Detalis';
import CardPhones from '../components/Cards/Phones'
import CardsAdd from '../components/Cards/Add'

const Phones = () => {
    const [address, setAddress] = useState([
        {   
            id: '1',
            nickname: 'Celular',
            phone: '(11) 94561-4696',
            description: '',
            primary: true,
        },
    ]);

    
    const handleChangePrimary = (id) => {
        const arrayAdress = address;
        arrayAdress.forEach(add => {
            add.id === id ? add.primary = true : add.primary = false;
        })
        setAddress([...arrayAdress])
    }


    return (
        <>
            <HeaderFixed />
            <section className="login-area ptb-60">
                <div className="container" style={{
                    marginTop: -35
                }}>
                    <h1>Meus telefones</h1>
                    <div className="container-order">
                        <div className="container-order-options">
                            <Details />
                        </div>

                        <div className="container-order-content">
                            {/* <h5>Endereços</h5> */}
                    
                            <div className="container-address-content">
                            {
                                address.map((phone, index) => {
                                    return (
                                        <div className="card" key={index}>
                                                <CardPhones 
                                                id={phone.id}
                                                nickname={phone.nickname}
                                                phone={phone.phone}
                                                description={phone.description}
                                                primary={phone.primary}
                                                handleChangePrimary={handleChangePrimary}
                                            />
                                        </div>
                                    )
                                })
                            }

                                <div className="card">
                                    <CardsAdd label="novo telefone" />
                                </div>
                            </div>
                            
                            
                        </div>
                        
    
                    </div>
                </div>
            </section>
            
            <Facility />
            
            <Footer />
        </>
    );
}

export default Phones;
