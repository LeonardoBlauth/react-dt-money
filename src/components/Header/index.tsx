import { PlusCircle } from 'phosphor-react';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <button type="button" onMouseDown={onOpenNewTransactionModal}>
          <span>
            Nova transação
          </span>
          <PlusCircle size={20} />
        </button>

        
      </Content>
    </Container>
  )
}