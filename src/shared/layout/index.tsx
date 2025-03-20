import { Outlet } from "react-router-dom";
import Header from "../../components/header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
