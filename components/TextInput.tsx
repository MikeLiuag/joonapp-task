import { Input } from "tamagui";

type TextInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  readonly?: boolean;
};
export default function TextInput(props: TextInputProps) {
  const { value, onChangeText, placeholder = "", readonly = false } = props;
  return (
    <Input
      placeholder={placeholder}
      marginTop="$4"
      backgroundColor="#f0f0f0"
      borderColor="#fff"
      color="#2a2a2a"
      placeholderTextColor={"#d4d4d7"}
      value={value}
      onChangeText={onChangeText}
      readOnly={readonly}
      flex={1}
    />
  );
}
