import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRequest from "./request-details/components/CreateRequest";
import Layout from "./shared/components/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CreateRequest />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default App;
