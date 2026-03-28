import React from "react";
import { Card, Row, Col, Table, Button, Progress } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { FaPeopleGroup } from "react-icons/fa6";
const chartData = [
  { name: "Male", 2023: 100, 2024: 30, 2025: 50 },
  { name: "Female", 2023: 60, 2024: 20, 2025: 80 },
  { name: "Grade 1", 2023: 65, 2024: 60, 2025: 50 },
  { name: "Grade 2", 2023: 25, 2024: 70, 2025: 85 },
  { name: "Grade 3", 2023: 30, 2024: 55, 2025: 60 },
  { name: "Grade 4", 2023: 40, 2024: 65, 2025: 75 },
  { name: "Grade 5", 2023: 35, 2024: 75, 2025: 90 },
  { name: "Grade 6", 2023: 54, 2024: 80, 2025: 60 },
];

const data = [
  { id: 1, name: "nov", role: "admin" },
  { id: 2, name: "Pov", role: "Teacher" },
  { id: 3, name: "Nareth", role: "Teacher" },
  { id: 4, name: "Panith", role: "Teacher" },
];

const columns = [
  { title: "ID", dataIndex: "id" },
  { title: "Name", dataIndex: "name" },
  { title: "Role", dataIndex: "role" }
];

const DashboardPage = () => {
  return (
    <div style={{ padding: 20, background: "#f7fcf7", minHeight: "100vh" }}>
      
      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false}>
            <h4>Total Students</h4>
            <h2>100</h2>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <h4>Total Teachers</h4>
            <h2>50</h2>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <h4>Total Staff</h4>
            <h2>20</h2>
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <h4>Total Users</h4>
            <h2>80</h2>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20,background:" #327832" }}>
        
        {/* Bar Chart */}
        <Col span={16}>
          <Card title="Student Distribution" bordered={false}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}
               margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                <XAxis dataKey="name"  angle={-30} textAnchor="end"/>
                <YAxis />
                <Tooltip />
                <Bar dataKey="2023" fill="#8884d8" />
                <Bar dataKey="2024" fill="#82ca9d" />
                <Bar dataKey="2025" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="User Role Distribution" bordered={false}>
            <div style={{ textAlign: "center" }}>
              <Progress type="circle" percent={25} strokeColor="red" />
              <p style={{ marginTop: 10 }}>Completed</p>
            </div>
          </Card>
        </Col>
      </Row>

      <Card title="Recent Users" bordered={false} style={{ marginTop: 20 }}>
        <Table columns={columns} dataSource={data} rowKey="id" />
        <Button type="primary" style={{ marginTop: 16 }}>
          Add User
        </Button>
      </Card>
    </div>
  );
};

export default DashboardPage;