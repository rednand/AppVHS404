import React, { useEffect, useState } from "react";
import Input from "./Input";
import { ValidationError } from "yup";
import * as yup from "yup";
import { Form, ButtonForm } from "./styles";
import axios from "axios";

export const FormValidations = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  overview: yup.string().required("Sinopse é obrigatório"),
  release_date: yup.date().notRequired(),
  trailer: yup.string().required("Trailer é obrigatório"),
  original_language: yup.string(),
  original_title: yup.string(),
  poster: yup.string(),
  genre: yup.array().notRequired().nullable(),
});

const initialFormState = {
  name: "",
  original_language: "",
  original_title: "",
  overview: "",
  release_date: Date,
  trailer: "",
  poster: "",
  genre: [],
};

const UserForm = () => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  console.log("errors", errors);
  console.log("form", form);

  const validate = async () => {
    try {
      await FormValidations.validate(form, { abortEarly: false });
      setErrors({});
    } catch (e) {
      if (e instanceof ValidationError) {
        const errors = {};
        e.inner.forEach((key) => {
          errors[key.path!] = key.message;
        });
        setErrors(errors);
      }
    }
  };

  const setInput = (newValue) => {
    setForm((form) => ({ ...form, ...newValue }));
  };

  useEffect(() => {
    validate();
  }, [form]);

  console.log(errors);

  console.log("form", form);

  const onSubmit = () => {
    var formData = new FormData();
    formData.append("poster", form.poster);
    formData.append("name", form.name);
    formData.append("original_language", form.original_language);
    formData.append("overview", form.overview);
    // formData.append("release_date", form.release_date);
    formData.append("trailer", form.trailer);
    // bodyFormData.append(" genre", form.genre);

    console.log("formData", formData);

    axios
      .post("http://localhost:3000/createteste", formData, {
        headers: {
          "Content-Type": "multipart/form-data;",
          Accept: "*/*",
        },
      
      });
  };
  return (
    <>
      <Form>
        <div className="form-group">
          <Input
            name="name"
            error={errors["name"]}
            onChange={(e) => setInput({ name: e.target.value })}
            label="Nome"
          />
        </div>
        <div className="form-group">
          <Input
            name="original_language"
            onChange={(e) => setInput({ original_language: e.target.value })}
            label="Língua original"
            error={errors["original_language"]}
          />
        </div>

        <div className="form-group">
          <Input
            name="original_title"
            onChange={(e) => setInput({ original_title: e.target.value })}
            label="Título Original"
            error={errors["original_title"]}
          />
        </div>
        <div className="form-group">
          <Input
            name="overview"
            onChange={(e) => setInput({ overview: e.target.value })}
            label="Sinopse"
            error={errors["overview"]}
          />
        </div>
        <div className="form-group">
          <Input
            name="original_title"
            onChange={(e) => setInput({ original_title: e.target.value })}
            label="Título Original"
            error={errors["original_title"]}
          />
        </div>
        <div className="form-group">
          <Input
            type="date"
            name="release_date"
            onChange={(e) => setInput({ release_date: e.target.value })}
            label="Lançamento"
            error={errors["release_date"]}
          />
        </div>
        <div className="form-group">
          <Input
            name="trailer"
            onChange={(e) => setInput({ trailer: e.target.value })}
            label="Trailer"
            error={errors["trailer"]}
          />
        </div>
        <div className="form-group">
          <Input
            type="file"
            name="poster"
            onChange={(e) => setInput({ poster: e.target.value })}
            label="Poster"
            error={errors["poster"]}
          />
        </div>
        <div className="form-group">
          <Input
            name="genre"
            onChange={(e) => setInput({ genre: e.target.value })}
            label="Genero"
            error={errors["genre"]}
          />
        </div>
        <div className="form-group">
          <ButtonForm
            type="button"
            onClick={onSubmit}
            className="btn btn-primary"
          >
            Cadastrar
          </ButtonForm>
        </div>
      </Form>
    </>
  );
};

export default UserForm;
