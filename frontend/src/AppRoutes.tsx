import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Homepages from "./pages/Homepages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepages/>
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
