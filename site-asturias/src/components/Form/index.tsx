import { LinkButton } from "../LinkButton";
import { Title } from "../Title";
import { FormContainer } from "./styles";

export function Form(){
  return (
    <FormContainer>
      <Title>
        Formulário
      </Title>
      <input type="text" placeholder="nome"/>
      <input type="email" placeholder="nome@email.com"/>
      <textarea placeholder="mensagem..."></textarea>
      <LinkButton variantBackgroundColor="green">Enviar</LinkButton>
    </FormContainer>
  );
}