import styled from 'styled-components';
import kakaoLogin from '../../assets/images/btnKakaoLogin.png';

const Login = () => {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_KEY}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <>
      <LoginBlock>
        <TopButton color="#fb4357">로그인</TopButton>
        <TopButton color="#898987">비회원 예매</TopButton>
        <TopButton color="#898987">비회원 예매 확인</TopButton>

        <InputBlock>
          <LoginInfo>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</LoginInfo>
          <LoginInput />
          <LoginInput />
          <LoginButton>로그인</LoginButton>
          <SocialLoginButton src={kakaoLogin} alt="kakaoLogin" onClick={loginHandler} />
        </InputBlock>
      </LoginBlock>
    </>
  );
};

const LoginBlock = styled.div`
  width: 1000px;
  margin: 30px auto;
`;

const TopButton = styled.button`
  background-color: ${props => props.color};
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  margin: 20px 3px 0 0;
  width: 110px;
  height: 35px;
  border: none;
  border-radius: 10px 10px 0 0;
`;

const InputBlock = styled.div`
  width: 500px;
  border-top: 2px solid #b5b5b5;
  border-bottom: 2px solid #b5b5b5;
  padding: 30px 0;
`;

const LoginInfo = styled.div`
  font-size: 13px;
  line-height: 1.2;
  color: #666666;
  font-weight: 400;
  margin-left: 100px;
  margin-bottom: 10px;
`;

const LoginInput = styled.input`
  width: 250px;
  height: 35px;
  border: 2px solid #b5b5b5;
  margin: 3px 0 3px 100px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline-style: none;
`;

const LoginButton = styled.button`
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  background-color: #fb4357;
  width: 259px;
  height: 35px;
  margin: 3px 0 3px 100px;
  border: 2px solid white;
`;

const SocialLoginButton = styled.img`
  width: 259px;
  margin: 3px 0 3px 100px;
`;

export default Login;
