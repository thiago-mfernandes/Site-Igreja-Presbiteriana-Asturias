import { Text } from "../Text";
import { VerseProps } from "./interfaces";
import { VerseContent } from "./styles";


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