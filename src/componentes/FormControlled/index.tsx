import React, { useEffect, useState } from 'react';
import Input from './Input';
import { Form, ButtonForm } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addInfoMovie } from '../../store/redux/actions';
import { getAllMovies } from '../../store/redux/actions';

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
  const [infomovie, setInfomovie] = useState({
    name: '',
    release_date: '',
    overview: '',
    fonte: '',
  });
  const todos = useSelector((state) => state['movies']);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

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
    dispatch(addInfoMovie(infomovie));
    setInfomovie({
      name: '',
      overview: '',
      release_date: '',
      fonte: '',
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
          style={{color: "#1C1C1C1"}}
            name="name"
            type="text"
            error={errors['name']}
            // onChange={onChange}
            label="Título"
            placeholder="Título"
            value={infomovie.name}
            onChange={(e) =>
              setInfomovie({ ...infomovie, name: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <Input
            name="overview"
            type="text"
            error={errors['overview']}
            label="Detalhes"
            placeholder="Detalhes"
            value={infomovie.overview}
            onChange={(e) =>
              setInfomovie({ ...infomovie, overview: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <Input
            name="release_date"
            type="date"
            error={errors['release_date']}
            placeholder="release_date"
            label="Data provável de lançamento"
            value={infomovie.release_date}
            onChange={(e) =>
              setInfomovie({ ...infomovie, release_date: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <Input
            name="fonte"
            type="text"
            error={errors['fonte']}
            label="Fonte (site)"
            placeholder="Fonte"
            value={infomovie.fonte}
            onChange={(e) =>
              setInfomovie({ ...infomovie, fonte: e.target.value })
            }
          />
        </div>
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
    </>
  );
};

export default UserForm;
