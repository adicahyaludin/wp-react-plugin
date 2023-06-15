// import { useEffect, useState } from "react";
// import AddEmployee from "./AddEmployee";
// import EditEmployee from "./EditEmployee";
// import { IEmployee, PageEnum } from "./Employee.type";
// import EmployeeList from "./EmployeeList";
// import "./Home.style.css";
// import { Button, Space, Table } from 'antd';
// import { Typography } from 'antd';
// const { Title } = Typography;

import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Layout2 from "../pages/Layout";
import Home2 from "../pages/Home2";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";

const Home = () => {
  // const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  // const [shownPage, setShownPage] = useState(PageEnum.list);
  // const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

  // useEffect(() => {
  //   const listInString = window.localStorage.getItem("EmployeeList");
  //   if (listInString) {
  //     _setEmployeeList(JSON.parse(listInString));
  //   }
  // }, []);

  // const onAddEmployeeClickHnd = () => {
  //   setShownPage(PageEnum.add);
  // };

  // const showListPage = () => {
  //   setShownPage(PageEnum.list);
  // };

  // const _setEmployeeList = (list: IEmployee[]) => {
  //   setEmployeeList(list);
  //   window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  // };

  // const addEmployee = (data: IEmployee) => {
  //   _setEmployeeList([...employeeList, data]);
  // };

  // const deleteEmployee = (data: IEmployee) => {
  //   // To Index from array i,e employeeList
  //   // Splice that
  //   // Update new record

  //   const indexToDelete = employeeList.indexOf(data);
  //   const tempList = [...employeeList];

  //   tempList.splice(indexToDelete, 1);
  //   _setEmployeeList(tempList);
  // };

  // const editEmployeeData = (data: IEmployee) => {
  //   setShownPage(PageEnum.edit);
  //   setDataToEdit(data);
  // };

  // const updateData = (data: IEmployee) => {
  //   const filteredData = employeeList.filter((x) => x.id === data.id)[0];
  //   const indexOfRecord = employeeList.indexOf(filteredData);
  //   const tempData = [...employeeList];
  //   tempData[indexOfRecord] = data;
  //   _setEmployeeList(tempData);
  // };

  return (
    <>
      {/* <article className="article-header">
        <header>
          <Title>React: Simple CRUD Application</Title>
        </header>
      </article>
      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <Button 
              type="primary"
              onClick={onAddEmployeeClickHnd}
            >Add Employee</Button>
            
            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addEmployee}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section> */}
      <BrowserRouter>
        <Routes>
          <Route path="/wp-react/" element={<Layout2 />}>
            <Route index element={<Home2 />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
