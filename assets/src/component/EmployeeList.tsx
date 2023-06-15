import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Typography } from 'antd';
const { Title } = Typography;

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);
  
  const columns: ColumnsType<IEmployee> = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            type="primary"
            onClick={() => viewEmployee(record)}
          >View</Button>
          <Button
            type="default"
            onClick={() => onEdit(record)}
          >Edit</Button>
          <Button 
            type="primary" 
            danger
            onClick={() => onDeleteClickHnd(record)}
          >Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <article>
        <Title level={2}>Employee List</Title>
      </article>

      <Table columns={columns} dataSource={list} />

      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;
