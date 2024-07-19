import { useState } from "react";

function App() {
  // Khai báo state
  const [count, setCount] = useState(5);
  // count => là biến số
  // setCount => hàm để cập nhật state count
  const [isTurnOn, setIsTurnOn] = useState(false);
  const [studentsList, setStudentsList] = useState([
    {
      id: 1,
      name: "SonTVA",
      class: "FE41",
    },
    {
      id: 2,
      name: "CNguyenVan",
      class: "FE42",
    },
    {
      id: 3,
      name: "DNguyenVan",
      class: "FE43",
    },
  ]);

  const handleDeleteStudent = (id) => {
    const newStudentList = studentsList.filter(
      (_student) => _student.id !== id
    );
    setStudentsList(newStudentList);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleToggleTurnOn = () => {
    setIsTurnOn(!isTurnOn);
  };

  const renderListStudent = (students) => {
    return students.map((_student) => {
      return (
        <tr key={_student.id}>
          <td>{_student.id}</td>
          <td>{_student.name}</td>
          <td>{_student.class}</td>
          <td>
            <button onClick={() => handleDeleteStudent(_student.id)}>
              Del
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="App">
      <button onClick={handleDecrement}>Decrement</button>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      {/* App Tat/Bat dien */}
      <div>
        <button onClick={handleToggleTurnOn}>
          Công tắc: {isTurnOn ? "Bật" : "Tắt"}
        </button>
        <img
          width={200}
          height={200}
          src={
            isTurnOn
              ? "https://img.pikbest.com/origin/09/23/03/844pIkbEsTHgK.png!w700wp"
              : "https://img.pikbest.com/png-images/drawing-light-bulb-icon-vector-graphic-element-light-bulb-idea-logo-vector-illustration_1656872.png!f305cw"
          }
          alt="#"
        />
      </div>

      {/* App DSSV */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderListStudent(studentsList)}</tbody>
      </table>
    </div>
  );
}

export default App;
