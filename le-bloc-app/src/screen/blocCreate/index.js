import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form";

export default function BlocCreation() {
  const fields = [
    {
      type: "text",
      value: "",
      placeholder: "spot",
      key: "spot",
    },
    {
      type: "text",
      value: "",
      placeholder: "cotation",
      key: "cotation",
    },
    {
      type: "text",
      value: "",
      placeholder: "description",
      key: "description",
    },
    {
      type: "text",
      value: "",
      placeholder: "url",
      key: "url",
    },
    {
      type: "text",
      value: "",
      placeholder: "img",
      key: "img",
    },
  ];

  return (
    <div>
      <h1>Bloc creation</h1>
      <Form
        fields={fields}
        button="Create"
        request="tryCreateBloc"
        redirect="/home"
      />
    </div>
  );
}
