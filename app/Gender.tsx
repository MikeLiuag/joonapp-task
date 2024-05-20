import { router } from "expo-router";
import { useState } from "react";
import { XStack, YStack } from "tamagui";
import Button from "@/components/Button";
import { GENDERS } from "@/constants/Gender";
import Text from "@/components/Text";
import useStore from "@/store";

export default function Gender() {
  const [genderNumber, setGenderNumber] = useState<number>(
    GENDERS.indexOf(useStore((state) => state.gender))
  );
  const setStoreState = useStore((state) => state.setStoreState);

  const onClickNext = () => {
    setStoreState("gender", GENDERS[genderNumber]);
    router.push("/Children");
  };

  return (
    <YStack
      backgroundColor="#fff"
      h="100%"
      justifyContent="center"
      padding="$4"
    >
      <Text text="What is your gender?" variant="heading" />
      <XStack gap="$2" marginTop="$4">
        {GENDERS.map((gen, idx) => (
          <Button
            key={`btn_${gen}`}
            onPress={() => setGenderNumber(idx)}
            size="small"
            text={gen}
            variant={idx === genderNumber ? "secondary" : "tertiary"}
          />
        ))}
      </XStack>
      <XStack marginTop="$8">
        <Button
          onPress={onClickNext}
          text="Next"
          variant={genderNumber > -1 ? "primary" : "disabled"}
        />
      </XStack>
    </YStack>
  );
}
