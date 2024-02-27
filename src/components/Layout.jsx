import React from 'react'
import { IconHome, IconIg } from './Icons'
import styled from 'styled-components'
import Home from '../sections/Home'
import img from '../assets/logo.png'

const Layout = ({ children }) => {
    return (
        <Container>
            <header>
                <div>
                    <img src={img} alt="" />
                    <h1>NazarPropiedades</h1>
                </div>
            </header>
            <div className='sidebar'>
                <nav>
                    <ul>
                        <li>
                            <a href="/">
                                <IconHome />
                                <span>Inicio</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <IconIg />
                                <span>Inicio</span>
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
    display: grid;
    grid-template-columns: 70px 1fr;
    grid-template-rows: 70px 1fr;
    height: 100vh;

    header{
        position: relative;
        z-index: 10;
        grid-column: 1/3;
        grid-row: 1/2;
        background-color: #FFFFFF;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        padding: 10px;
        box-sizing: border-box;
        div{
            height: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            >img{
                width: 50px;
            }
            >h1{
                font-size: 18px;
                visibility: hidden;
            }
        }
    }
    .sidebar{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        position: relative;
        z-index: 9;
        grid-column: 1/2;
        grid-row: 2/3;
        background-color: #FFFFFF;
        border-bottom-right-radius: 50px;
        nav{
            padding: 20px 0;
            ul{
                list-style: none;
                display: flex;
                flex-direction: column;
                width: 100%;
                li{
                    a{
                        padding: 20px 0;
                        display: block;
                        text-align: center;
                        text-decoration: none;
                        border-left: 2px solid #FFFFFF;
                        span{
                            display: none;
                        }
                        svg{
                            width: 30px;
                            height: 30px;
                            color: #b3b7b8;
                        }
                        
                        &:hover{
                            border-left: 2px solid #BE4436;
                            svg{
                                color: #BE4436;
                            }
                            span{
                                color: #BE4436;
                            }
                        }
                    }
                }
            }
        }
    }
    main{
        padding: 10px;
        position: relative;
        z-index: 8;
        grid-column: 2/3;
        grid-row: 2/3;
        background-color: #E8ECEF;
        overflow-y: scroll;
    }

    @media (min-width: 850px) {
        grid-template-columns: 250px 1fr;
        header{
            padding: 0 30px;
            div{
                h1{
                    visibility: visible;
                }
            }
        }
        .sidebar{

            nav{
                ul{
                    li{
                        a{
                            padding: 20px 30px;
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            span{
                                display: inline-block;
                                color: #B3B7B8;
                                font-size: 16px;
                                font-weight: 500;
                            }
                            svg{
                                stroke-width: 1px;
                            }
                        }
                    }
                }
            }
        }

        main{
            padding: 20px;
        }
    }
`