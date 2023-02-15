import { Stack } from "@chakra-ui/react";
import { SquaresFour, Users, Table, Robot } from "phosphor-react"
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" alignItems="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={SquaresFour} href="/Dashboard">Dashboard</NavLink>
        <NavLink icon={Users} href="/users">Usuários</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={Table} href="/forms">Formulários</NavLink>
        <NavLink icon={Robot} href="/automation">Automação</NavLink>
      </NavSection>
    </Stack>
  );
}