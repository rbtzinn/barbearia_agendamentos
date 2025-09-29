import * as S from './styles';

type DayToggleProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export default function DayToggle({ label, selected, onClick }: DayToggleProps) {
  return (
    <S.ToggleButton type="button" selected={selected} onClick={onClick}>
      {label}
    </S.ToggleButton>
  );
}