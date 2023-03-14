import { Title } from "@/components/Title";
import { FormContainer } from "../styles";
import { useForm, ValidationError } from '@formspree/react';
import { Text } from "@/components/Text";


export function FormMore() {
  // endpoint ipasturias: 
  // https://formspree.io/f/mlekbqeg

  const [state, handleSubmit] = useForm("mlekbqeg");

  if (state.succeeded) {
    return <Text>Obrigado pelo contato. Responderemos o mais breve possível!</Text>
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Title>
          Saiba mais sobre Jesus
        </Title>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Seu nome..."
          required
          minLength={3}
          maxLength={100}
        />
        <ValidationError
          prefix="name"
          field="name"
          errors={state.errors}
        />
        <input
          required
          minLength={3}
          maxLength={80}
          id="email"
          type="email"
          name="email"
          placeholder="seunome@gmail.com"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Sua mensagem..."
          minLength={2}
          maxLength={500}
        />
        <ValidationError
          prefix="message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </FormContainer>
    </>
  );
}