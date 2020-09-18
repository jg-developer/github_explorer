import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 800px;

  display: flex;

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 1px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    @media (max-width: 600px) {
      height: 50px;
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    color: #ffffff;
    font-weight: bold;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    transition: background-color 0.2s;

    @media (max-width: 600px) {
      height: 50px;
      padding: 20px;
      display: flex;
      align-items: center;
    }

    &:hover {
      background: ${shade(0.1, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    margin-top: 60px;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all linear 0.2s;

    &:hover {
      transform: translateX(10px);
      box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      object-fit: cover;
      object-position: center center;
      border-radius: 50%;
      background: #dcdcdc;
    }

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        color: #3d3d4d;
        font-size: 20px;

        @media (max-width: 600px) {
          font-size: 18px;
        }
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        margin-top: 4px;

        @media (max-width: 600px) {
          font-size: 16px;
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
