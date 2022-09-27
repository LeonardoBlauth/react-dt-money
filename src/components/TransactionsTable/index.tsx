import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date | string;
}

export function TransactionTable() {
  const { transactions } = useTransactions();

  function getAmount(transaction: Transaction) {
    return transaction.amount > 0 && transaction.type === 'withdraw' ? - transaction.amount : transaction.amount
  }

  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(getAmount(transaction))}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}