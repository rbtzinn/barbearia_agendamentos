import * as S from './styles';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <S.CheckboxContainer onClick={onChange}>
      <S.HiddenCheckbox type="checkbox" checked={checked} readOnly />
      <S.StyledCheckbox checked={checked}>
        {checked && '✔'}
      </S.StyledCheckbox>
      <span>{label}</span>
    </S.CheckboxContainer>
  );
}