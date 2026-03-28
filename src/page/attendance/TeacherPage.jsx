import React from 'react';
import { 
  Layout, Typography, Card, Row, Col, Select, DatePicker, 
  Button, Table, Radio, Tag, Space, Avatar, Input, Tooltip, message 
} from 'antd';
import { 
  SearchOutlined, UserOutlined, MoonOutlined, 
  FileExcelOutlined, PrinterOutlined, SaveOutlined,
  CheckCircleOutlined, InfoCircleOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const TeacherPage = () => {
  const studentsData = [
    { key: '1', id: '024555', name: 'ព្រំ ពៅ', gender: 'ប្រុស', status: 'present' },
    { key: '2', id: '024556', name: 'សុក នៅ', gender: 'ប្រុស', status: 'late' },
    { key: '3', id: '024557', name: 'អ៊ុក ណារ៉េត', gender: 'ប្រុស', status: 'absent' },
    { key: '4', id: '024558', name: 'ញុង ផានិត', gender: 'ប្រុស', status: 'permission' },
  ];

  const handleExport = () => {
    message.loading('កំពុងរៀបចំឯកសារ Excel...', 1.5)
      .then(() => message.success('ទាញយកបានជោគជ័យ!'));
  };

  const columns = [
    { title: '#', dataIndex: 'key', width: 60, align: 'center' },
    { title: 'អត្តលេខ', dataIndex: 'id', width: 100 },
    { title: 'ឈ្មោះសិស្ស', dataIndex: 'name', render: (text) => <Text strong>{text}</Text> },
    { title: 'ភេទ', dataIndex: 'gender', width: 80 },
    {
      title: 'ស្ថានភាពវត្តមាន',
      key: 'attendance',
      render: (_, record) => (
        <Radio.Group defaultValue={record.status} buttonStyle="solid" size="middle">
          <Radio.Button value="present" style={{ borderLeft: '1px solid #d9d9d9' }}>វត្តមាន</Radio.Button>
          <Radio.Button value="late">យឺត</Radio.Button>
          <Radio.Button value="absent">អវត្តមាន</Radio.Button>
          <Radio.Button value="permission">ច្បាប់</Radio.Button>
        </Radio.Group>
      ),
    },
    { title: 'ម៉ោងចូល', width: 120, render: () => <Input placeholder="07:00 AM" /> },
    { title: 'កំណត់ចំណាំ', render: () => <Input placeholder="បញ្ជាក់ផ្សេងៗ..." /> },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f4f7f9' }}>
      <Header style={{ background: '#fff', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
        <div>
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>វត្តមានគ្រូ</Title>
          <Text type="secondary">ប្រព័ន្ធគ្រប់គ្រងវត្តមានគ្រូប្រចាំថ្ងៃ</Text>
        </div>
      </Header>

      <Content style={{ padding: '24px 40px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          {/* Dashboard Summary Mini Cards */}
          <Row gutter={16} style={{ marginBottom: '20px' }}>
            <Col span={6}><Card size="small" bordered={false}><Text type="secondary">សរុប</Text> <Title level={4} style={{ margin: 0 }}>៤ នាក់</Title></Card></Col>
            <Col span={6}><Card size="small" bordered={false}><Text type="success">វត្តមាន</Text> <Title level={4} style={{ margin: 0, color: '#52c41a' }}>២ នាក់</Title></Card></Col>
            <Col span={6}><Card size="small" bordered={false}><Text type="danger">អវត្តមាន</Text> <Title level={4} style={{ margin: 0, color: '#ff4d4f' }}>១ នាក់</Title></Card></Col>
            <Col span={6}><Card size="small" bordered={false}><Text style={{ color: '#faad14' }}>ច្បាប់</Text> <Title level={4} style={{ margin: 0, color: '#faad14' }}>១ នាក់</Title></Card></Col>
          </Row>

          {/* Filter Card */}
          <Card style={{ marginBottom: '20px', borderRadius: '10px' }}>
            <Row gutter={20} align="bottom">
              <Col span={5}><Text strong>ថ្នាក់</Text><Select defaultValue="" style={{ width: '100%', marginTop: 8 }}><Select.Option value="">ថ្នាក់ទី​ ១</Select.Option></Select></Col>
              <Col span={5}><Text strong>ផ្នែក</Text><Select defaultValue="ក" style={{ width: '100%', marginTop: 8 }}><Select.Option value="ក">ក</Select.Option></Select></Col>
              <Col span={6}><Text strong>កាលបរិច្ឆេទ</Text><DatePicker defaultValue={dayjs()} format="DD/MM/YYYY" style={{ width: '100%', marginTop: 8 }} /></Col>
              <Col span={8} style={{ textAlign: 'right' }}>
                <Space>
                  <Button icon={<SearchOutlined />} type="primary">ស្វែងរក</Button>
                  <Button icon={<PrinterOutlined />}>បោះពុម្ព</Button>
                  <Button icon={<FileExcelOutlined />} onClick={handleExport} style={{ color: '#217346', borderColor: '#217346' }}>Excel</Button>
                </Space>
              </Col>
            </Row>
          </Card>

          {/* Table Card */}
          <Card 
            title={<span><CheckCircleOutlined style={{ color: '#52c41a' }} /> បញ្ជីឈ្មោះគ្រូសម្រាប់កត់វត្តមាន</span>}
            bodyStyle={{ padding: 0 }}
            style={{ borderRadius: '10px', overflow: 'hidden' }}
          >
            <Table 
              columns={columns} 
              dataSource={studentsData} 
              pagination={false}
              size="middle"
            />
            <div style={{ padding: '20px', textAlign: 'right', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
              <Space size="middle">
                <Button size="large">បោះបង់</Button>
                <Button type="primary" size="large" icon={<SaveOutlined />} style={{ minWidth: 160 }}>រក្សាទុកវត្តមាន</Button>
              </Space>
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default TeacherPage;