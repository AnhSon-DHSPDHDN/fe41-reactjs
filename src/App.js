import { useEffect, useState } from "react";
import { TaskApis } from "./apis/taskApis";
import "./App.css";
import { Button, Table, Flex, Modal, Form, Input, message } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Task Name",
    dataIndex: "taskName",
    key: "taskName",
  },
  {
    title: "Create By",
    dataIndex: "createBy",
    key: "createBy",
  },
  {
    title: "Action",
    key: "action",
    render: () => {
      return (
        <Flex gap={10}>
          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </Flex>
      );
    },
  },
];

const initialFormValue = {
  taskName: "",
  createBy: "",
};

function App() {
  const [tasksData, setTasksData] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [form] = Form.useForm();

  const handleFetchAllTask = async () => {
    const data = await TaskApis.getAllTasks();
    setTasksData(data);
  };

  useEffect(() => {
    handleFetchAllTask();
  }, []);

  const onFinish = async (values) => {
    await TaskApis.createTask(values);
    await handleFetchAllTask();
    setIsShowForm(false);
    form.resetFields();
    message.success("Add task Success!!");
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h1>Task Management</h1>
      <Button type="primary" onClick={() => setIsShowForm(true)}>
        Add Task
      </Button>
      <Table dataSource={tasksData} columns={columns} rowKey={"id"} />;
      <Modal
        title={"Add Task"}
        open={isShowForm}
        onCancel={() => setIsShowForm(false)}
        onOk={() => form.submit()}
      >
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={initialFormValue}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Task Name"
            name="taskName"
            rules={[
              {
                required: true,
                message: "Please input your task name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Create By"
            name="createBy"
            rules={[
              {
                required: true,
                message: "Please input your create by!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
