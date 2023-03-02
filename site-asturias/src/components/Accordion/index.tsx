import { useState } from "react";
import { Wrapper, AccordionContainer, Content, Item, Title } from "./styles";
import { CaretDown, CaretUp } from "phosphor-react";
import { AccordionProps } from "./interfaces";

export function Accordion({ content, id, title }: AccordionProps){

  const [isOpen, setIsOpen] = useState(false);
  function handleAccordion(){
    setIsOpen(!isOpen)
  }

  return(
    <Wrapper>
      <AccordionContainer>
        <Item 
          key={id} 
          onClick={handleAccordion}
        >
          <Title>
            {title}
            <span>{isOpen ? <CaretUp /> : <CaretDown /> }</span>
          </Title>
          <Content isActive={isOpen}>
            {content}
          </Content>
        </Item>
      </AccordionContainer>
    </Wrapper>
  );
}