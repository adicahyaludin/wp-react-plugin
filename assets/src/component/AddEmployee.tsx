import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";
import { Typography } from 'antd';
const { Title } = Typography;
import { Button, Space, Table } from 'antd';

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <Title level={2}>Add Employee Form</Title>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
        </div>
        <div>
          <label>Email Add. : </label>
          <input type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <br />
          <Space size="middle">
            <Button 
              type="default"
              onClick={onBackBtnClickHnd}
            >Back</Button>
            <Button
              type="primary" htmlType="submit"
            >Add Employee</Button>
          </Space>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
