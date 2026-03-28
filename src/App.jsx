import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import RouteNotFound from './page/error-page/404';
import MainLayout from './component/layout/MainLayout';
import MainLayoutLogin from './component/layout/MainLayoutLogin';
import LoginPage from './page/auth/LoginPage';
import DashboradPage from './page/Dashborad/DashboradPage';
import ReportPage from './page/report/ReportPage';
import SettingPage from './page/setting/SettingPage';
import GradePage from './page/studentInfo/GradePage';
import ClassPage from './page/studentInfo/ClassPage';
import DetailPage from './page/studentInfo/DetailPage';
import TeacherPage from './page/attendance/TeacherPage';
import StudentPage from './page/attendance/StudentPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>

        <Route path="/" element={<DashboradPage/>} />
        <Route>
          <Route path="/studentInfo"/>
          <Route path="/detail" element={<DetailPage/>} />
          <Route path="/class" element={<ClassPage/>} />
          <Route path="/grade" element={<GradePage/>} />
        </Route>
        <Route>
        <Route path="/attendance" />
           <Route path="/teacher" element={<TeacherPage/>} />
           <Route path="/student" element={<StudentPage/>} />
        </Route>
        <Route path="/report" element={<ReportPage/>} />
        <Route path="/setting" element={<SettingPage/>} />
        <Route path="*" element={<RouteNotFound/>} />
        </Route>

        <Route element={<MainLayoutLogin/>}>

        <Route path="/login" element={<LoginPage/>} />

        </Route>
      </Routes>  
    </BrowserRouter>
  );
};

export default App
