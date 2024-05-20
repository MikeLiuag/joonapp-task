import { router } from "expo-router";
import { useState } from "react";
import { XStack, YStack } from "tamagui";
import Button from "@/components/Button";
import Text from "@/components/Text";
import TextInput from "@/components/TextInput";
import useStore from "@/store";

export default function Name() {
  const [name, setName] = useState<string>(useStore((state) => state.name));
  const setStoreState = useStore((state) => state.setStoreState);

  const onClickNext = () => {
    setStoreState("name", name);
    router.push("/Gender");
  };

  return (
    <YStack
      backgroundColor="#fff"
      h="100%"
      justifyContent="center"
      padding="$4"
    >
      <Text text="What is your name?" variant="heading" />
      <XStack>
        <TextInput
          onChangeText={setName}
          placeholder="Eg. Kevin"
          value={name}
        />
      </XStack>
      <XStack marginTop="$8">
        <Button
          onPress={onClickNext}
          text="Next"
          variant={name.length > 0 ? "primary" : "disabled"}
        />
      </XStack>
    </YStack>
  );
}
