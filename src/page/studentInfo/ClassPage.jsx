import React, { useState } from 'react';
import { 
  Table, Tag, Space, Button, Input, Typography, Layout, 
  Card, Row, Col, Avatar, Modal, Form, InputNumber, message 
} from 'antd';
import { 
  SearchOutlined, PlusOutlined, DeleteOutlined, 
  MoreOutlined, UserOutlined, MoonOutlined, BookOutlined 
} from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const ClassPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  // ទិន្នន័យគំរូ
  const dataSource = [
    { key: '1', name: 'ថ្នាក់ទី ១', section: 'ក', room: '1', students: 50 },
    { key: '2', name: 'ថ្នាក់ទី ១', section: 'ខ', room: '1.1', students: 50 },
    { key: '3', name: 'ថ្នាក់ទី ២', section: 'ក', room: '2', students: 50 },
    { key: '4', name: 'ថ្នាក់ទី ២', section: 'ខ', room: '2.2', students: 50 },
    { key: '5', name: 'ថ្នាក់ទី ៣', section: 'ក', room: '3', students: 50 },
    { key: '6', name: 'ថ្នាក់ទី ៣', section: 'ខ', room: '3.3', students: 50 },
    { key: '7', name: 'ថ្នាក់ទី ៤', section: 'ក', room: '4', students: 50 },
    { key: '8', name: 'ថ្នាក់ទី ៤', section: 'ខ', room: '4.4', students: 50 },
    { key: '9', name: 'ថ្នាក់ទី ៥', section: 'ក', room: '5', students: 50 },
    { key: '10', name: 'ថ្នាក់ទី ៥', section: 'ខ', room: '5.5', students: 50 },
    { key: '11', name: 'ថ្នាក់ទី ៦', section: 'ក', room: '6', students: 50 },
    { key: '12', name: 'ថ្នាក់ទី ៦', section: 'ខ', room: '6.6', students: 50 },
  ];

  // បើក Modal
  const showModal = () => setIsModalOpen(true);

  // បិទ Modal និង Clear ទិន្នន័យក្នុង Form
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  // នៅពេលចុច Save ក្នុង Modal
  const onFinish = (values) => {
    console.log('ទិន្នន័យដែលបានបញ្ចូល:', values);
    message.success('បានរក្សាទុកថ្នាក់រៀនថ្មីដោយជោគជ័យ!');
    setIsModalOpen(false);
    form.resetFields();
  };

  const columns = [
    {
      title: 'រូបភាព',
      render: () => <Avatar shape="square" icon={<BookOutlined />} style={{ backgroundColor: '#e6f7ff', color: '#1890ff' }} />,
    },
    { title: 'ឈ្មោះថ្នាក់', dataIndex: 'name', key: 'name', render: (text) => <Text strong>{text}</Text> },
    { title: 'ផ្នែក', dataIndex: 'section', key: 'section', render: (text) => <Tag color="blue">{text}</Tag> },
    { title: 'លេខថ្នាក់', dataIndex: 'room', key: 'room' },
    { title: 'ចំនួនសិស្ស', dataIndex: 'students', key: 'students' },
    {
      title: 'សកម្មភាព',
      align: 'center',
      render: () => <Button type="text" icon={<MoreOutlined />} />,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      <Header style={{ background: '#fff', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Title level={4} style={{ margin: 0 }}>ការចូលរៀនរបស់សិស្ស</Title>
          <Text type="secondary">Class Management</Text>
        </div>
      </Header>

      <Content style={{ padding: '30px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <Row justify="space-between" style={{ marginBottom: '24px' }}>
            <Col>
              <Button type="primary" size="large" icon={<PlusOutlined />} onClick={showModal}>
                បន្ថែមថ្នាក់
              </Button>
            </Col>
            <Col span={8}>
              <Input prefix={<SearchOutlined />} placeholder="ស្វែងរកថ្នាក់រៀន..." size="large" />
            </Col>
          </Row>

          <Card style={{ borderRadius: '12px' }}>
            <Table rowSelection={{ type: 'checkbox' }} columns={columns} dataSource={dataSource} />
            <div style={{ marginTop: '-45px' }}>
               <Button danger icon={<DeleteOutlined />}>លុបដែលបានជ្រើសរើស</Button>
            </div>
          </Card>
        </div>

        {/* --- ផ្នែក Modal សម្រាប់បញ្ចូលទិន្នន័យថ្មី --- */}
        <Modal 
          title="បន្ថែមថ្នាក់រៀនថ្មី" 
          open={isModalOpen} 
          onCancel={handleCancel}
          footer={null} // ប្រើប៊ូតុងរបស់ Form ជំនួសវិញ
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{ marginTop: '20px' }}
          >
            <Form.Item 
              label="ឈ្មោះថ្នាក់" 
              name="name" 
              rules={[{ required: true, message: 'សូមបញ្ចូលឈ្មោះថ្នាក់!' }]}
            >
              <Input placeholder="ឧទាហរណ៍៖ ថ្នាក់ទី ៧" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="ផ្នែក" name="section">
                  <Input placeholder="ឧទាហរណ៍៖ ក ឬ ខ" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="លេខបន្ទប់" name="room">
                  <Input placeholder="លេខបន្ទប់" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="ចំនួនសិស្សអតិបរមា" name="students">
              <InputNumber style={{ width: '100%' }} min={1} placeholder="៥០" />
            </Form.Item>

            <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
              <Space>
                <Button onClick={handleCancel}>បោះបង់</Button>
                <Button type="primary" htmlType="submit">រក្សាទុក</Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default ClassPage;