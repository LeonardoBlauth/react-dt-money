import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7.5rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 8px;
    color: var(--text-title);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  .highlight-background-green {
    background: var(--green);
    color: #FFF;
  }

  .highlight-background-red {
    background: var(--red);
    color: #FFF;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);

    .total {
      display: none;
    }
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);

    .deposits, .withdraws {
      display: none;
    }

    .total {
      display: block;
    }
  }
`