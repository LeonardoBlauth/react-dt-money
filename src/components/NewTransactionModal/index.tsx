import { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps { 
  isOpen: boolean;
  onRequestClose: () => void;
}

const newTransactionFormValidationSchema = zod.object({
  title: zod.string().trim().min(1, 'O título da transação precisa conter pelo menos 1 carácter'),
  amount: zod.number({
    invalid_type_error: "O campo valor deve ser um número"
  }),
  category: zod.string().min(1, 'A categoria da transação precisa conter pelo menos 1 carácter'),
})

type NewTransactionFormData = zod.infer<typeof newTransactionFormValidationSchema>

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createNewTransaction } = useTransactions();

  const [type, setType] = useState('deposit');

  const newTransactionForm = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionFormValidationSchema),
    defaultValues: {
      title: '',
      amount: 0.00,
      category: ''
    },
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = newTransactionForm
  
  async function handleCreateNewTransaction(data: NewTransactionFormData) {
    const newTransaction = { ...data, type };
    
    await createNewTransaction(newTransaction);

    reset();
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <h2>Cadastrar Transação</h2>

        <input
          className={errors.title ? 'with-error' : ''}
          placeholder="Título"
          {...register('title')}
        />

        <input
          type="number"
          className={errors.amount ? 'with-error' : ''}
          placeholder="Valor"
          {...register('amount', { valueAsNumber: true })}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"

          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        
        <input
          placeholder="Categoria"
          className={errors.category ? 'with-error' : ''}
          {...register('category')}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}