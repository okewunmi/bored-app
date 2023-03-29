import styled from "styled-components";
import photo from "../../assets/img-5.jpg";
export const Wrapper = styled.div`
  padding: 2rem 5rem;

  h2 {
    text-transform: uppercase;
  }
`;
export const Content = styled.div`
  height: 25rem;
  background: (--white);
  display: flex;
  color: var(--black);
  justify-content: space-between;

  .center {
    width: 50%;
    background: linear-gradient(
        to right bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.5)
      ),
      url(${photo});
    background-size: 100%, cover;
    background-position: center;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    color: var(--white);

    &--box {
      background: red;
      padding: 0 1rem;
      display: flex;
      justify-content: flex-start;
      text-transform: uppercase;
      width: 6rem;
    }
    &--link {
      color: var(--white);
      p {
        font-size: 1.4rem;
        text-align: center;
      }
    }

    &--txt {
      font-size: 0.7rem;
      font-weight: 100;
    }
    &--time {
      display: flex;
      align-self: center;
      justify-content: space-evenly;
      text-transform: uppercase;
    }
  }
  .left {
    width: 25%;
    display: flex;
    flex-direction: column;
    color: var(--black);

    .text {
      padding-right: 1.3rem;
    }

    &-head {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      color: var(--grey);
    }
    &-txt {
      color: black;
      margin-top: -1.7rem;

      &--head {
        color: black;
        font-size: 0.85rem;
        line-height: 1.4;
      }
    }
    &-icon {
      color: red;
      font-size: 1rem;
    }
    &-time {
      display: flex;
      width: 73%;
      text-transform: uppercase;
      justify-content: space-between;
      margin-top: -1.3rem;

      p {
        font-size: 0.75rem;
        font-weight: 400;
      }
    }
  }
  .minute {
    color: var(--grey);
  }
  .blue-grey {
    color: var(--Blue-Gray);
  }

  .right {
    width: 25%;
  }
`;
