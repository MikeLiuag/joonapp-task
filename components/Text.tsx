import { Text as BaseText } from "tamagui";
type TextProps = {
  variant?: "heading" | "body" | "description";
  color?: string;
  text: string;
};
export default function Text(props: TextProps) {
  const { variant = "body", color = "#2a2a2a", text } = props;
  switch (variant) {
    case "heading":
      return (
        <BaseText
          color={color}
          fontSize={"$8"}
          fontWeight={"bold"}
          textAlign="center"
        >
          {text}
        </BaseText>
      );
    case "body":
      return (
        <BaseText color={color} fontSize={"$5"} fontWeight={"bold"}>
          {text}
        </BaseText>
      );
    case "description":
      return (
        <BaseText color={color} fontSize={"$3"}>
          {text}
        </BaseText>
      );
  }
}
