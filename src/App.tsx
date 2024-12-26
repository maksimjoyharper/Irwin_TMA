import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
