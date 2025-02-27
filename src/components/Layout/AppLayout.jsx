import { Outlet } from "react-router-dom";
import Footer from '../UI/Footer'
import Header from '../UI/Hearder'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Add this to render nested routes */}
      <Footer />
    </>
  );
};

export default AppLayout