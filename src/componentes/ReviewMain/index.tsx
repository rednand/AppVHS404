import { Back, MainReview, CardReview, InputButton } from './styles';

const ReviewMain = () => {
  return (
    <Back>
      <MainReview>
        <InputButton>
          <input type="text" />
          <button onClick={(e) => console.log('teste')}></button>
        </InputButton>
        <CardReview>
          <div className="card">teste</div>
          <div className="card">teste</div>
        </CardReview>
      </MainReview>
    </Back>
  );
};

export default ReviewMain;
