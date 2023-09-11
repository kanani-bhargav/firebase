import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { db } from "./Firebase";

const Firestore = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  const addData = async () => {
    try {
      await addDoc(collection(db, "user"), {
        name: name,
        age: age,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "user"));
    let result = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setData(result);
  };
  return (
    <div className="mt-5">
      <h1 className="text-uppercase">firebase database</h1>
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
        </div>
      </Form>
      <div className="mt-5">
        <Button variant="success" type="button" onClick={getData}>
          Get data
        </Button>
        <table className="table table-dark">
          <tbody>
            {data.map((val,id) => (
              <tr key={id}>
                <td>{val.name}</td>
                <td>{val.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Firestore;
