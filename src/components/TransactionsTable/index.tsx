import { Trash } from "phosphor-react";
import { useTransactions } from "../../hooks/useTransactions";

import { Card, Container } from "./styles";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date | string;
}

export function TransactionTable() {
  const { transactions, deleteTransaction } = useTransactions();

  function getAmount(transaction: Transaction) {
    return transaction.amount > 0 && transaction.type === "withdraw"
      ? -transaction.amount
      : transaction.amount;
  }

  return (
    <Container>
      {transactions.length ? (
        <>
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
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(getAmount(transaction))}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                      <div>
                      {new Intl.DateTimeFormat("pt-BR").format(
                        new Date(transaction.createdAt)
                      )}
                      <button
                        className="trash-button"
                        onMouseDown={() => deleteTransaction(transaction)}
                      >
                        <Trash size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
                <header className="header-list">
                  <h2>Listagem</h2>
                  <span>
                    {transactions.length} {transactions.length > 1 ? 'items' : 'item'}
                  </span>
                </header>
          {transactions.map((transaction) => {
            return (
              <Card key={transaction.id}>
                <header>
                  <div>
                    {transaction.title}
                    <button
                      className="trash-button"
                      onMouseDown={() => deleteTransaction(transaction)}
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                  <strong className={getAmount(transaction) < 0 ? 'withdraw' : 'deposit'}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(getAmount(transaction))}
                  </strong>
                </header>
                <div>
                  <span>{transaction.category}</span>
                  <span>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createdAt)
                    )}
                  </span>
                </div>
              </Card>
            );
          })}
        </>
      ) : (
        <div className="without-transactions">
          <p>Não há registros de transações cadastradas</p>
          <p>Crie registros para organizar suas finanças</p>
        </div>
      )}
    </Container>
  );
}
