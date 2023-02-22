import { Text } from "../Text";
import { VerseContent } from "./styles";

interface VerseProps {
  verse: string;
  citation: string;
}

export function Verse({ citation, verse }: VerseProps){
  return (
    
    <VerseContent>
      <Text>
        {verse}
      </Text>
      <cite>
        {citation}
      </cite>   
    </VerseContent>
  );
}