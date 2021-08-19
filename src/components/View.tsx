import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

function View() {
  const data = useAppSelector((state) => state.userdata);
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log("data", data);

  const history = useHistory();

  const handleOk = () => {
    setIsModalVisible(false);
    history.push("/table");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={() => showModal()}>
        View
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Name is:{data.name} </p>
        <p>Email is:{data.email}</p>
        <p>Id is: {data.id}</p>
      </Modal>
    </div>
  );
}

export default View;
