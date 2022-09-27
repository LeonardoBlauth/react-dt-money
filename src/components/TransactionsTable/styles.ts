import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);
      text-overflow: ellipsis;

      &:first-child{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;

        color: var(--text-title);
      }

      &:last-child{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;

        padding: 1rem;

        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

    @media (max-width: 660px) {
      display: none;
    }
  }

  .header-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h2 {
      font-size: 1.25rem;
      line-height: 1.875rem;

      color: var(--text-title);
    }

    span {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.313rem;

      color: var(--text-body);
    }
  }

  .trash-button {
            background: transparent;
            border: 0;
  
            transition: color 0.2s;
           
            svg {
              display: flex;
              align-items: center;
              margin-left: 1rem;
            
              &:hover {
                color: var(--red);
              }
            }
          }

  .without-transactions {
    height: 30rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      text-align: center;
      font-weight: 700;
      line-height: 1.4rem;
      color: var(--text-body);
    }
  }

  @media (min-width: 661px) {
    .header-list {
      display: none;
    }
  }
`

export const Card = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 8px;
  color: var(--text-title);

  &+ div {
    margin-top: 0.5rem;
  }

  header {
    display: flex;
    flex-direction: column;
    color: var(--text-title);

    div {
      margin: 0rem;
    }

    strong {
      margin-top: 0.125rem;
      font-size: 1.25rem;
      line-height: 1.875rem;
    }

    .deposit {
      color: var(--green-dark);
    }

    .withdraw {
      color: var(--red-dark);
    }
  }

  div {
    margin-top: 1.188rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--text-body);
  }

  @media (min-width: 661px) {
    display: none;
  }
`