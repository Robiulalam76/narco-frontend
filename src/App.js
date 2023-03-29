import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes/Routes";
import './fonts/ArbFONTS-The-Sans-Plain.otf'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
