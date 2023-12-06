import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DepartmentPage } from '../Component/Department';
import { EmployeePage } from '../Component/Employee';
import { HomePage } from '../Component/Home';

export const AllRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {localStorage.getItem('token') && (
          <>
            <Route path="/department" element={<DepartmentPage />} />
            <Route path="/employee" element={<EmployeePage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
