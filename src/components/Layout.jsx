import React from 'react'
import { IconHome, IconIg } from './Icons'
import styled from 'styled-components'

const Layout = ({ children }) => {
    return (
        <Container>
            <header></header>
            <div className="sidebar">
                <div className='brand'>
                    <img src="./logo.png" alt="" />
                    <h1>NazarPropiedades</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">
                                <IconHome />
                                <span>Inicio</span>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <p>APPS & AI</p>
                        <div></div>
                    </div>
                    <ul>
                        <li>
                            <a href="/">
                                <IconIg />
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <IconIg />
                                <span>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <main>
                {children}
            </main>
        </Container>
    )
}

export default Layout

const Container = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 70px 1fr;
    grid-template-rows: 50px 1fr;
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        z-index: 90;
        background-color: #F4F5FA;
        background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    }
    
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        width: 70px;
        z-index: 100;
        display: flex;
        flex-direction: column;

        .brand{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 20px 0;
            >img{
                width: 30px;
            }
            >h1{
                display: none;
            }
        }

        >nav{
            display: flex;
            flex-direction: column;
            gap: 24px;
            >div{
                width: 100%;
                padding-left: 20px;
                >p{
                    display: none;
                }
                >div{
                    height: 1px;
                    width: 20px;
                    background-color: #3a354147;
                }
            }
            >ul{
                width: 60px;
                display: flex;
                flex-direction: column;
                gap: 6px;
                li{
                    a{
                        padding-left: 20px;
                        height: 44px;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        border-top-right-radius: 100%;
                        border-bottom-right-radius: 100%;
                        span{
                            display: none;
                        }

                        >svg{
                            width: 26px;
                            height: 26px;
                            color: #50565fde;
                        }

                        &:hover{
                            background-color: rgba(58, 53, 65, 0.04);
                        }
                    }
                }
            }
        }
    }

    >main{
        width: 100%;
        grid-row: 2/3;
        grid-column: 2/3;
        padding: 14px;
    }

    @media (min-width: 800px) {
        grid-template-columns: 260px 1fr;
        grid-template-rows: 64px 1fr;
        header{
            height: 64px;
        }

        .sidebar{
            width: 260px;
            .brand{
                justify-content: start;
                gap: 10px;
                padding: 20px;
                >h1{
                    display: inline-block;
                    font-size: 16px;
                    font-weight: 700;
                }
            }
        }

        >main{
            padding: 24px;
        }
    }

`