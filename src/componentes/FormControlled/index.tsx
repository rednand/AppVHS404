import React, { useEffect, useState } from 'react';
import Input from './Input';
import { Form, ButtonForm } from './styles';
import { useDispatch } from 'react-redux';
import { addInfoMovie } from '../../store/redux/actions';

const UserForm = () => {
  const [errors] = useState({});
  const dispatch = useDispatch();
  const [infomovie, setInfomovie] = useState({
    name: '',
    release_date: '',
    overview: '',
    fonte: '',
  });

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
            name="name"
            type="text"
            error={errors['name']}
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
