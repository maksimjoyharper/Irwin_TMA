import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
