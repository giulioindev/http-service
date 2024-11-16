import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRequest from "./request-details/components/CreateRequest";
import ShareRequestDetail from "./request-details/components/ShareRequestDetail";
import Layout from "./shared/components/Layout";
import NotFound from "./shared/components/NotFound";

const App = () => {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CreateRequest />} />
            <Route path="/:id" element={<ShareRequestDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
};

export default App;
