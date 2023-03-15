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

    :hover {
        opacity: 0.6;

    }
`;

export const Content = styled.div`
  background: var(--MedGrey);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  width: 23rem;
  min-height: 28rem;
  border-radius: 15px;
  padding: 0.1rem 1.7rem;
  font-weight: 300;

  .white {
    color: var(--white);
  }
  .small {
    font-size: 10px;
    line-height: 1;
    padding-right: 2rem;
  }
  .box {
    color: #ea2222;
    display: flex;
    align-items: center;
    border-bottom: 1px solid Grey;
    // margin-bottom:-.10rem;
    margin-top: -0.9rem;

    :first-child {
      line-height: 1.2;
      border-top: 1px solid Grey;
    }
    p {
      width: 200px;
      padding-left: 0.6rem;
      color: var(--white);
      font-family: "Spectral", serif;
    }
  }
  a {
    text-decoration: none;
    color: var(--white);
  }
  .space {
    padding-left: 3.2rem;
  }
  .space-x1 {
    padding-left: 2.1rem;
  }
  .space-x4 {
    padding-left: 0.5rem;
  }
  .space-x2 {
    padding-left: 0.1rem;
  }
  .space-x5 {
    padding-left: 1rem;
  }

  .heading {
    color: var(--lightGrey);
    font-weight: bold;
    font-size: var(--fontBig);
    align-self: center;
    margin-bottom: -5px;
    padding-bottom: 0.5rem;
  }
  .white {
    color: var(--white);
  }
`;
