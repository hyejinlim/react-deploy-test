import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
const Login = React.lazy(() => import('~/pages/Login/Login'));
function Router() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        {/* {render(Routes)} */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Fragment>
  );
}
export default Router;
