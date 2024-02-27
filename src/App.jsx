import TemplateManager from "./components/TemplateManager"

const formStructure = [
  { value: '', name: 'condition', x: 71, y: 865, fontSize: 39 },
  { value: '', name: 'location', x: 71, y: 910, fontSize: 33 },
  { value: '', name: 'zone', x: 71, y: 945, fontSize: 35 },
  { value: '', name: 'surface', x: 921, y: 800, fontSize: 23 },
  { value: '', name: 'garage', x: 921, y: 865, fontSize: 22 },
  // {value: '', name: 'garage', x: 921, y: 890, fontSize: 22},
  { value: '', name: 'bed', x: 921, y: 950, fontSize: 22 },
  { value: '', name: 'bath', x: 921, y: 1025, fontSize: 22 },
]

const App = () => {
  return (
    <div>
      <TemplateManager templateImageUrl='./plantilla.png' formStructure={formStructure} />
    </div>
  )
}

export default App