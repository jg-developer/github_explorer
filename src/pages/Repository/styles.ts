import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center center;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
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
