import './App.css'
import ControlledForm from './Components/ControlledForm/ControlledForm'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HooksForm/HookForm'
import ProductManagement from './Components/ProductManagement/ProductManagement'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UnControlled from './Components/UnControlled/UnControlled'

function App() {


  return (
    <>
     <h1>Explore React Form</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <FormAction></FormAction> */}
     {/* <ControlledForm></ControlledForm> */}
     {/* {<UnControlled></UnControlled>} */}
     {/* <HookForm></HookForm> */}
     <ProductManagement></ProductManagement>
    </>
  )
}

export default App
