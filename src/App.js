import { useEffect, useState } from "react";
import { TaskApis } from "./apis/taskApis";
import "./App.css";
import { Button, Table, Flex, Modal, Form, Input, message } from "antd";

const initialFormValue = {
  taskName: "",
  createBy: "",
};

function App() {
  const [tasksData, setTasksData] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [editTaskState, setEditTaskState] = useState({
    isEditMode: false,
    taskId: null,
  });
  const [form] = Form.useForm();
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
      render: (_record) => {
        return (
          <Flex gap={10}>
            <Button onClick={() => handleOpenEditTask(_record)}>Edit</Button>
            <Button danger onClick={() => handleDeleteTaskById(_record.id)}>
              Delete
            </Button>
          </Flex>
        );
      },
    },
  ];

  const handleOpenEditTask = (task) => {
    setIsShowForm(true);
    setEditTaskState({
      isEditMode: true,
      taskId: task.id,
    });
    form.setFieldsValue({
      taskName: task.taskName,
      createBy: task.createBy,
    });
  };

  const handleFetchAllTask = async () => {
    const data = await TaskApis.getAllTasks();
    setTasksData(data);
  };

  const handleDeleteTaskById = async (taskId) => {
    await TaskApis.deleteTaskById(taskId);
    await handleFetchAllTask();
    message.success("Deleted task done!");
  };

  useEffect(() => {
    handleFetchAllTask();
  }, []);

  const onFinish = async (values) => {
    if (editTaskState.isEditMode) {
      await TaskApis.updateTaskById(editTaskState.taskId, values);
      message.success("Edit Task Success!!");
    } else {
      await TaskApis.createTask(values);
      message.success("Add task Success!!");
    }
    setIsShowForm(false);
    form.resetFields();
    await handleFetchAllTask();
    setEditTaskState({
      isEditMode: false,
      taskId: null,
    });
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h1>Task Management</h1>
      <Button type="primary" onClick={() => setIsShowForm(true)}>
        Add Task
      </Button>
      <Table dataSource={tasksData} columns={columns} rowKey={"id"} />;
      <Modal
        title={editTaskState.isEditMode ? "Edit Task" : "Add Task"}
        open={isShowForm}
        onCancel={() => {
          setIsShowForm(false);
          setEditTaskState({
            isEditMode: false,
            taskId: null,
          });
          form.resetFields();
        }}
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
