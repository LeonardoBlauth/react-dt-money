import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws -= transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          Entradas
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          Saídas
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.withdraws)}</strong>
      </div>

      <div
        className={
          summary.total >= 0
            ? 'highlight-background-green'
            : 'highlight-background-red'
        }
      >
        <header>
          Total
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}