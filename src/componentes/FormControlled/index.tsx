import React, { useEffect, useState } from "react";
import Input from "./Input";
import { ValidationError } from "yup";
import * as yup from "yup";
import { Form, ButtonForm } from "./styles";
import axios from "axios";
import { date } from "yup/lib/locale";

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
  release_date: date,
  trailer: "",
  poster: "",
  genre: [],
};

const UserForm = () => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [picture, setPicture] = useState({});

  const onChangePicture = (e) => {
    console.log("picture: ", picture);
    if (e.target.files.length) {
      setPicture(URL.createObjectURL(e.target.files[0]));
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      return false;
    }
  };
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

  useEffect(() => {
    validate();
  }, [form]);

  console.log(errors);

  console.log("form", form);

  const onChange = (e) => {
    e.persist();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    var bodyFormData = new FormData();
    for (let key in form) {
      bodyFormData.append(key, form[key]);
    }

    await axios({
      method: "post",
      url: "http://localhost:3000/create",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <>
      <Form action="/profile" method="post" encType="multipart/form-data">
        <div className="form-group">
          <Input
            name="name"
            error={errors["name"]}
            onChange={onChange}
            label="Nome"
          />
        </div>
        <div className="form-group">
          <Input
            name="original_language"
            onChange={onChange}
            label="Língua original"
            error={errors["original_language"]}
          />
        </div>

        <div className="form-group">
          <Input
            name="original_title"
            onChange={onChange}
            label="Título Original"
            error={errors["original_title"]}
          />
        </div>
        <div className="form-group">
          <Input
            name="overview"
            onChange={onChange}
            label="Sinopse"
            error={errors["overview"]}
          />
        </div>
        <div className="form-group">
          <Input
            name="original_title"
            onChange={onChange}
            label="Título Original"
            error={errors["original_title"]}
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
            name="trailer"
            onChange={onChange}
            label="Trailer"
            error={errors["trailer"]}
          />
        </div>
        <div className="form-group">
          <Input
            type="file"
            accept="image/*"
            name="poster"
            onChange={onChangePicture}
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
