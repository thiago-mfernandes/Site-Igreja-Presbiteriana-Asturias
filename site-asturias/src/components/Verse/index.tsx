import { Text } from "../Text";
import { VerseContent } from "./styles";

interface VerseProps {
  verse: string;
  citation: string;
  changeColorOfBorderLeft?: boolean;
}

export function Verse({ citation, verse, changeColorOfBorderLeft }: VerseProps){
  return (
    
    <VerseContent changeColorOfBorderLeft={changeColorOfBorderLeft}>
      <Text>
        {verse}
      </Text>
      <cite>
        {citation}
      </cite>   
    </VerseContent>
  );
}