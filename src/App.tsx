import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { useEffect } from "react";

const App = () => {
  const accessToken = localStorage.getItem('accessToken')
  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken) navigate('/auth/sign-in')
  }, [])

  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
