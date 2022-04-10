import React, { useEffect, useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { ValidationError } from "yup";
import * as yup from "yup";
import { Form, ButtonForm } from "./styles";
import axios from "axios";
import { date } from "yup/lib/locale";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/redux/actions";
import { getAllMovies } from "../../store/redux/actions";

// export const FormValidations = yup.object().shape({
//   name: yup.string().required("Nome é obrigatório"),
//   overview: yup.string(),
//   release_date: yup.date().required().typeError("Data é obrigatória"),
//   trailer: yup.string(),
//   other_infos: yup.string(),
//   poster: yup.string(),
//   genre: yup.array().notRequired().nullable(),
// });

// const initialFormState = {
//   name: "",
//   overview: "",
//   release_date: yup.date,
//   trailer: "",
//   poster: "",
//   other_infos: "",
//   genre: "",
// };

const UserForm = () => {
  // const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: "",
    body: "",
  });
  const todos = useSelector((state) => state["movies"]);
  console.log("todos", todos);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  console.log("todo", todo);

  // const validate = async () => {
  //   try {
  //     await FormValidations.validate(form, { abortEarly: false });
  //     setErrors({});
  //   } catch (e) {
  //     if (e instanceof ValidationError) {
  //       const errors = {};
  //       e.inner.forEach((key) => {
  //         errors[key.path!] = key.message;
  //       });
  //       setErrors(errors);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   validate();
  // }, [form]);

  // const onChange = (e) => {
  //   e.persist();
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(form);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({
      title: "",
      body: "",
    });
  };

  return (
    <>
      <Form method="post">
        <h2 className="formInfo">
          Conte o que sabe sobre o lançamento de um filme:
        </h2>

        <div className="form-group">
          <Input
            name="name"
            type="text"
            error={errors["name"]}
            // onChange={onChange}
            label="Título"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <Input
            name="body"
            type="text"
            error={errors["body"]}
            // onChange={onChange}
            label="Body"
            value={todo.body}
            onChange={(e) => setTodo({ ...todo, body: e.target.value })}
          />
        </div>
        {/* <div className="form-group">
          <Input
            type="text"
            name="overview"
            onChange={onChange}
            label="Overview"
            error={errors["overview"]}
          />
        </div>
        <div className="form-group">
          <Input
            type="date"
            name="release_date"
            onChange={onChange}
            label="Lançamento"
            error={errors["release_date"]}
          />
        </div>

        <div className="form-group">
          <Input
            type="file"
            accept="image/*"
            name="poster"
            onChange={onChange}
            label="Poster"
            error={errors["poster"]}
          />
        </div>
        <div className="form-group">
          <Input
            name="genre"
            onChange={onChange}
            label="Genero"
            error={errors["genre"]}
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            name="trailer"
            onChange={onChange}
            label="Trailer - link"
            error={errors["trailer"]}
          />
        </div>
        <div className="form-group">
          <TextArea
            type="textArea"
            name="other_infos"
            onChange={onChange}
            label="Outras Informações"
            error={errors["other_infos"]}
          />
        </div> */}
        <div className="form-group">
          <ButtonForm
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Cadastrar
          </ButtonForm>
        </div>
      </Form>
      <p style={{ color: "#ffffff", textAlign: "center" }}>
        {todos.length > 0 ? "veio aí" : "não veio aí"}
        <div>
          {todos &&
            todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <span>
                    <div>{todo.id}</div>
                    <div style={{ color: "yellow" }}>{todo.name}</div>
                    <div> {todo.original_title}</div>
                  </span>
                </div>
              );
            })}
        </div>
      </p>
    </>
  );
};

export default UserForm;
