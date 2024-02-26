import styled from "styled-components";

function AddTextButton({ canvasRef }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const fields = new window.FormData(e.target)
        const garage = fields.get("garage").split(' ')
        test(fields, "condition", 71, 865, 39)
        test(fields, "location", 71, 910, 33)
        test(fields, "zone", 71, 945, 35)
        test(fields, "surface", 921, 800, 23, 'm2')
        test(fields, "garage", 921, 865, 22, garage[0], true)
        test(fields, "garage", 921, 890, 22, garage[1], true)
        test(fields, "bed", 921, 950, 22)
        test(fields, "bath", 921, 1025, 22)
    };

    const test = (fields, valueName, x, y, fontSize, text, state) => {
        let value = ''
        const canvas = canvasRef.current;
        if (!state) {
            value = fields.get(valueName)
        }
        const newText = new fabric.Text(text ? value + text : value, {
            left: x,
            top: y,
            fill: 'white',
            fontFamily: 'Arial',
            fontSize: fontSize,
            fontWeight: 'bold',

        });
        canvas.add(newText);
    }


    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <p>Condicion</p>
                <input type="text" placeholder="Ej. ALQUILER" name="condition" required />
            </div>
            <div>
                <p>Ubicacion</p>
                <input type="text" placeholder="Ej. VILLA PALMARES" name="location" required />
            </div>
            <div>
                <p>Departamento</p>
                <input type="text" placeholder="Ej. Godoy Cruz - Mendoza" name="zone" required />
            </div>
            <div className="datos">
                <div>
                    <p>Superficie</p>
                    <input type="number" placeholder="Ej. 150" name="surface" required />
                </div>
                <div>
                    <p>Cochera</p>
                    <input type="text" placeholder="Ej. Cochera Doble" name="garage" required />
                </div>
            </div>
            <div className="datos">
                <div>
                    <p>Habitaciones</p>
                    <input type="number" placeholder="Ej. 2" name="bed" required />
                </div>
                <div>
                    <p>Baños</p>
                    <input type="number" placeholder="Ej. 2" name="bath" required />
                </div>
            </div>
            <button type="submit">Añadir Texto al Canvas</button>

        </Form>
    );
}
{/* <button onClick={() => addTextToCanvas("Hello, world!")}>Añadir Texto al Canvas</button> */ }

export default AddTextButton;


const Form = styled.form`
    


`