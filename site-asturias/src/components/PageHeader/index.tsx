import { useRouter } from "next/router";
import { usePageHeaderTitle } from "@/hooks/usePageHeaderTitle";
import { Title } from "@/components/Title";
import { PageHeaderContainer } from "./styles";

export function PageHeader() {

  let pageTitle = usePageHeaderTitle();
  let { pathname } = useRouter();

  return (
    <PageHeaderContainer path={pathname}>
      <Title>
        {pageTitle}
      </Title>
    </PageHeaderContainer>
  );
}