import styled from "styled-components";
import img from './assets/plantilla.png'

const App = () => {
  return (
    <Container>
      <div className="container__lg">
        <div className="container__main">
          <form>
            <div>
              <p>Condicion</p>
              <input type="text" placeholder="Ej. ALQUILER" id="condition" required />
            </div>
            <div>
              <p>Ubicacion</p>
              <input type="text" placeholder="Ej. VILLA PALMARES" id="location" required />
            </div>
            <div>
              <p>Departamento</p>
              <input type="text" placeholder="Ej. Godoy Cruz - Mendoza" id="zone" required />
            </div>
            <div className="datos">
              <div>
                <p>Superficie</p>
                <input type="number" placeholder="Ej. 150" id="surface" required />
              </div>
              <div>
                <p>Cochera</p>
                <input type="text" placeholder="Ej. Cochera Doble" id="garage" required />
              </div>
            </div>
            <div className="datos">
              <div>
                <p>Habitaciones</p>
                <input type="number" placeholder="Ej. 2" id="bed" required />
              </div>
              <div>
                <p>Baños</p>
                <input type="number" placeholder="Ej. 2" id="bath" required />
              </div>
            </div>
          </form>
          <div className="img__container">
            <p className="img__text">Seleecionar Imagen</p>
            <img id="originalImage" alt="" />
            <img src={img} alt="" />
            <input id="upload" type="file" />
          </div>
          <button id="download">Descargar</button>
          <a id="actionDowload" download></a>
          <div id="mobile__image__container" style={{ visibility: 'hidden' }}>
            <p>Hola</p>
            <img id="mobile__image" />
          </div>
        </div>
        <canvas id="canvas"></canvas>
      </div>
    </Container>
  )
}

export default App


const Container = styled.div`
        .container__lg {
          width: 100%;
        max-width: 1600px;
        margin: auto;
    }

        .container__main {
          display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 50px;
        gap: 30px;
        padding: 20vh 5vw;
        justify-content: center;

        @media (max-width: 800px) {
          grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 50px;
        }

        @media (max-width: 500px) {
          grid-template-rows: 1fr 350px 50px;
        }
    }

        #download {
          width: 100%;
        height: 100%;
        grid-column: 1/3;
        border: solid 2px #000;
        background-color: #1b1b1b;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }

        form {
          width: 100%;
        background-color: #fefbf6;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // display: grid;
        // grid-template-rows: repeat(5, 1fr);
        padding: 40px 30px;

        @media (max-width: 800px) {
          grid-column: 1/3;
            // gap: 20px;
            // .datos{
          //     flex-direction: column;
          // }

          // div{
          //     input{
          //         margin-top: 10px;
          //     }
          // }
        }

        @media (max-width: 500px) {
          gap: 20px;

        .datos {
          flex-direction: column;
            }

        div {
          input {
          margin-top: 10px;
                }
            }
        }

        .datos {
          display: flex;
        gap: 20px;
        }

        div {
          width: 100%;

        p {
          font-size: 18px;
        color: #be4436;

            }

        input {
          width: 100%;
        border: none;
        background-color: #fcf7ef;
        padding: 10px 5px;
        border-bottom: solid 2px #be4436;
        margin-top: 20px;
            }
        }
    }

        .img__container {
          width: 100%;
        background-color: #be4436;
        position: relative;
        transition: all .4s ease-in-out;

        @media (max-width: 800px) {
          grid-column: 1/3;
        }

        input {
          width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        background-color: aqua;
        z-index: 5;
        top: 0;
        left: 0;

        }

        .img__text {
          z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 15px 20px;
        border: dashed 2px black;
        border-radius: 10px;
        font-weight: 700;
        }

        div {
          width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;

        p {
          position: absolute;
        color: #ffffff;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;

        &:nth-of-type(1) {
          font-size: 22px;
        bottom: 83px;
        left: 40px;
                }

        &:nth-of-type(2) {
          font-size: 18px;
        bottom: 63px;
        left: 40px;
                }

        &:nth-of-type(3) {
          font-size: 19px;
        bottom: 43px;
        left: 40px;
                }

        &:nth-of-type(4) {
          font-size: 14px;
        bottom: 130px;
        left: 470px;
                }

        &:nth-of-type(5) {
          font-size: 12px;
        bottom: 83px;

        max-width: 55px;
        height: 26px;
        left: 470px;
                }

        &:nth-of-type(6) {
          font-size: 12px;
        bottom: 53px;
        left: 470px;
                }

        &:nth-of-type(7) {
          font-size: 12px;
        bottom: 18px;
        left: 470px;
                }

            }
        }


        img {
          z-index: 3;
        position: relative;
        width: 100%;
        height: 100%;
        }

        #originalImage {
          z-index: 2;
        position: absolute;
        object-fit: cover;
        }

        &:hover {
          background-color: #e9b3ad;

        .img__text {
          color: #be4436;
        border: solid 2px #be4436;
            }
        }
    }

        #mobile__image__container {
          width: 100%;
        // background-color: red;
        grid-column: 1/3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
        max-width: 400px;
        }
    }

        `;