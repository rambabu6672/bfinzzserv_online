import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import TermsAndConditions from "./Components/TermsAndConditions";

const App = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <BrowserRouter>
        <Routes>
          {/* Terms and comditions */}
          <Route path="/" element={<Layout />}>
            <Route index element={<TermsAndConditions />} />
            {/* Offer */}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
