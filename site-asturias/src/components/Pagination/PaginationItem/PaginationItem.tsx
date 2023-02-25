import { StyledButton } from "./styles";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
  if(isCurrent) {
    return (
      <StyledButton disabled >
        {number}
      </StyledButton>
    )
  }

  return (
    <StyledButton onClick={() => onPageChange(number)}>
      {number}
    </StyledButton>
  )
}