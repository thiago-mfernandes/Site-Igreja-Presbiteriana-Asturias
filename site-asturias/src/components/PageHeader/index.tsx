import { useLocation } from "react-router-dom";
import { usePageHeaderTitle } from "../../hooks/usePageHeaderTitle";
import { Title } from "../Title";
import { PageHeaderContainer } from "./styles";

export function PageHeader() {

  let pageTitle = usePageHeaderTitle();
  let { pathname } = useLocation();

  return (
    <PageHeaderContainer path={pathname}>
      <Title>
        {pageTitle}
      </Title>
    </PageHeaderContainer>
  );
}