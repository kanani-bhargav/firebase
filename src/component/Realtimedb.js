import { Form, Alert } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../contex/UserAuthContext";
import { child, get, ref } from "firebase/database";
import { realtimeDB } from "./Firebase";

const Realtimedb = () => {
  const {putData}=useUserAuth()
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const addData=()=>{
    putData("root",{name,age})
  }
  const getData=()=>{
    const dbRef = ref(realtimeDB);
    get(child(dbRef, `user`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <div className="mt-5">
     <h1 className="text-uppercase">Real time database</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="button" onClick={addData}>
            Add data
          </Button>
          <Button variant="primary" type="button" onClick={getData}>
            get data
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Realtimedb;
