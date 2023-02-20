import { useLocation } from "react-router-dom";
import { Title } from "../Title";
import { PageHeaderContainer } from "./styles";

export function PageHeader() {
  let { pathname } = useLocation(); 

  return (
    <PageHeaderContainer path={pathname}>
      <Title>
        Somos a Igreja Presbiteriana Astúrias
      </Title>
    </PageHeaderContainer>
  );
}