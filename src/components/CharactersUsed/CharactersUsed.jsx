import styles from "./CharactersUsed.module.css";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const CharactersUsed = ({ useNumbers, useSymbols, onChange}) => {
  return (
    <div>
      <CustomCheckbox 
        title="Numbers"
        name="numbers"
        checked={useNumbers}
        onChange={e => onChange(e.target.name)}
      />
      <CustomCheckbox 
        title="Symbols"
        name="symbols"
        checked={useSymbols}
        onChange={e => onChange(e.target.name)}
      />
    </div>
  );
}

export default CharactersUsed;