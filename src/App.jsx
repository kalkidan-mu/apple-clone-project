import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainS from "./MainS";
import {Routes,Route} from "react-router-dom";
import Iphone from "./pages/iphone/iphone";
import Four04 from "./pages/Four04/Four04";
import SharedLayout from "./pages/SharedLayout";
import SingleAppleProduct from "./pages/SingleAppleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<MainS />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<SingleAppleProduct/>} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;

