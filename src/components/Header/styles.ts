import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;

    font-size: 1rem;
    color: #FFF;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 8px;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      margin-left: 0.25rem;
    }
  }

  @media (max-width: 660px) {
    button {
      padding: 0 1.5rem;
      span {
        display: none;
      }
    }
  }
`