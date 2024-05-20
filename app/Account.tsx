import { Mail, Lock, Eye, EyeOff, Check } from "@tamagui/lucide-icons";
import { useState } from "react";
import { Pressable } from "react-native";
import { XStack, YStack, Input, Checkbox } from "tamagui";
import Button from "@/components/Button";
import Text from "@/components/Text";
import { createAccount } from "@/services/user";
import useStore from "@/store";

type InputFieldProps = {
  title: string;
  placeholder: string;
  type: "email" | "password";
  value: string;
  onChangeText: (text: string) => void;
};

function InputField(props: InputFieldProps) {
  const { title, placeholder, type, value, onChangeText } = props;
  const [show, setShow] = useState<boolean>(false);

  return (
    <YStack>
      <Text text={title} />
      <XStack
        mt="$2"
        backgroundColor={"#f0f0f0"}
        borderRadius={16}
        alignItems="center"
        paddingHorizontal="$4"
      >
        {type === "email" && <Mail size="$1" color={"#9a9a9f"} />}
        {type === "password" && <Lock size="$1" color={"#9a9a9f"} />}
        <Input
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={type === "password" && !show}
          borderColor="transparent"
          borderWidth={0}
          backgroundColor="transparent"
          placeholderTextColor="#d7d7d7"
          placeholder={placeholder}
          flex={1}
          color={"#2a2a2a"}
        />
        {type === "password" && (
          <Pressable onPress={() => setShow((show) => !show)}>
            {show ? (
              <EyeOff size="$1" color={"#9a9a9f"} />
            ) : (
              <Eye size="$1" color={"#9a9a9f"} />
            )}
          </Pressable>
        )}
      </XStack>
    </YStack>
  );
}

export default function Gender() {
  const store = useStore();
  const { name, gender, children, setStoreState } = store;

  const [email, setEmail] = useState<string>(useStore((state) => state.email));
  const [password, setPassword] = useState<string>(
    useStore((state) => state.password)
  );
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onClickNext = () => {
    setStoreState("email", "example_email");
    setStoreState("password", "example_password");
    createAccount(
      name,
      gender,
      children.map((item) => item.text),
      email,
      password
    );
  };

  return (
    <YStack
      padding="$4"
      justifyContent="center"
      h="100%"
      backgroundColor="#fff"
    >
      <Text text="Create Your Account" variant="heading" />
      <YStack mt={"$6"}>
        <InputField
          value={email}
          type="email"
          onChangeText={setEmail}
          title="Email"
          placeholder="Email"
        />
      </YStack>
      <YStack mt={"$4"}>
        <InputField
          value={password}
          type="password"
          onChangeText={setPassword}
          title="Password"
          placeholder="Password"
        />
      </YStack>
      <XStack marginTop="$8">
        <Button
          onPress={onClickNext}
          variant={
            email.length > 0 && password.length > 0 && isChecked
              ? "primary"
              : "disabled"
          }
          text="Sign up"
        />
      </XStack>
      <XStack mt="$4" alignItems="center">
        <Checkbox
          size="$4"
          backgroundColor={"#7d82f5"}
          borderWidth={0}
          onCheckedChange={(checked) => {
            if (typeof checked === "boolean") setIsChecked(checked);
          }}
        >
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
        <YStack ml="$3">
          <Text text="I've read and accepcted" variant="description" />
          <Text
            text="Terms of Service and Privacy Policy"
            variant="description"
            color="#7d82f5"
          />
        </YStack>
      </XStack>
    </YStack>
  );
}
