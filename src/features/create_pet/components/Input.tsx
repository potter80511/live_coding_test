import styles from 'styled-components';

const StyledLabel = styles.label`
  display: block;
`;

type InputProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

const Input = (props: InputProps) => {
  const {
    label,
    value,
    onChange,
  } = props;

  return <div>
    <StyledLabel>{label}</StyledLabel>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
}

export default Input;
