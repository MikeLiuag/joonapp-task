import { Button as BaseButton } from "tamagui";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "disabled";
  text: string;
  size?: "default" | "small";
  onPress: () => void;
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", text, size = "default", onPress } = props;
  switch (variant) {
    case "primary":
      return (
        <BaseButton
          backgroundColor="#008cc8"
          borderRadius={16}
          onPress={onPress}
          size={size === "default" ? "$4" : "$2"}
          w={size === "default" ? "100%" : "30%"}
        >
          {text}
        </BaseButton>
      );
    case "secondary":
      return (
        <BaseButton
          backgroundColor="#7d82f5"
          borderRadius={16}
          onPress={onPress}
          size={size === "default" ? "$4" : "$2"}
          flex={1}
        >
          {text}
        </BaseButton>
      );
    case "tertiary":
      return (
        <BaseButton
          backgroundColor="#c8d7e6"
          color={"#595e60"}
          borderRadius={16}
          onPress={onPress}
          size={size === "default" ? "$4" : "$2"}
          flex={1}
        >
          {text}
        </BaseButton>
      );
    case "disabled":
      return (
        <BaseButton
          backgroundColor="#f0f0f0"
          color={"#595e60"}
          borderRadius={16}
          onPress={onPress}
          size={size === "default" ? "$4" : "$2"}
          disabled={true}
          flex={1}
        >
          {text}
        </BaseButton>
      );
  }
}
