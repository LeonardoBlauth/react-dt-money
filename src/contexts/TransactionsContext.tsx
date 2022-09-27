import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';
import { v4 as uuidv4 } from "uuid";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date | string;
}

interface TransactionContextType {
  transactions: Transaction[];
  createNewTransaction: (data: TransactionInput) => Promise<void>;
  deleteTransaction: (data: TransactionId) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
type TransactionId = Pick<Transaction, 'id'>;

export const TransactionsContext = createContext({} as TransactionContextType);


export function TransactionsContextProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createNewTransaction(data: TransactionInput) {
    const newTransaction = { id: uuidv4(), ...data, createdAt: new Date() };

    const response = await api.post('/transactions', newTransaction);
    const { transaction } = response.data;

    setTransactions((state) => [transaction, ...state]);
  }

  async function deleteTransaction(data: TransactionId) {
    const transactionId = data.id;

    await api.delete(`/transactions/${transactionId}`);

    const transactionWithOutDeleteOne = transactions.filter(transaction => transaction.id !== transactionId);

    setTransactions(transactionWithOutDeleteOne);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createNewTransaction, deleteTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}