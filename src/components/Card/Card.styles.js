import styled from "styled-components";

export const Wrapper = styled.div`
/* background: var(--darkGrey); */
justify-content:center;
align-items: center;
display:flex;
flex-direction: column;
height:100vh;
overflow: hidden;
flex-wrap:wrap;


.btn {
    /* margin-top:-3.7rem; */
  //  background: #ea2222;
    width:13rem;
    padding: .5rem .8rem;
    color: #1c1c1c;
    font-weight:bold;
    border:0;
    font-size: var(--fontSmall);
    /* display:block; */
    border-radius:10rem;
    outline:1px solid var(--lightGrey);
    outline-offset: 3px;
    align-self:center;
    cursor: pointer;
    transition: all 0.3s;

    @media screen and (max-width: 390px) {
    margin-top: -1.5rem;
  }

    :hover {
        opacity: 0.6;

    }
`;

export const Content = styled.div`
  background: var(--MedGrey);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 23rem;
  min-height: 28rem;
  border-radius: 15px;
  padding: 0.1rem 1.8rem;
  font-weight: 300;

  @media screen and (max-width: 390px) {
    width: 21rem;
    padding: 0.1rem 1.1rem;
  }
  @media screen and (max-width: 350px) {
    width: 20rem;
    padding: 0.1rem 0.8rem;
  }
  .white {
    color: var(--white);
  }
  .width {
    font-size: 10px;
  }
  .box {
    color: #ea2222;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid Grey;
    margin-top: -0.9rem;

    &-icon {
      display: flex;
      align-items: center;
    }

    :first-child {
      line-height: 1.2;
      border-top: 1px solid Grey;
    }

    h4 {
      font-size: 0.9rem;
      /* font-weight: 600; */
      color: var(--white);
      padding-left: 0.3rem;

      @media screen and (max-width: 390px) {
        font-size: 0.8rem;
      }
    }
    p {
      width: 200px;
      padding-left: 0.5rem;
      color: var(--white);
    }
  }
  a {
    text-decoration: none;
    width: 200px;
    color: var(--white);

    @media screen and (max-width: 390px) {
      width: 150px;
      text-overflow: clip;
    }
  }

  .heading {
    color: var(--lightGrey);
    font-weight: bold;
    font-size: var(--fontBig);
    align-self: center;
    margin-bottom: -5px;
    padding-bottom: 0.5rem;

    @media screen and (max-width: 390px) {
      font-size: var(--fontMed);
    }
  }
  .white {
    color: var(--white);
  }
`;
