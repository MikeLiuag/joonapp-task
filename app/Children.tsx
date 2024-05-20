import { Plus, Edit3, Check, Trash2, XCircle } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ToastAndroid } from "react-native";
import { XStack, YStack, Button as BaseButton, ScrollView } from "tamagui";
import { v4 as uuidv4 } from "uuid";
import Text from "@/components/Text";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import useStore from "@/store";
import { ChildrenType } from "@/types/childrenTypes";
import "react-native-get-random-values";

type ChildrenItemProps = {
  initialText: string;
  onChangeText: (value: string) => void;
  onRemoveItem: () => void;
};

function ChildrenItem(props: ChildrenItemProps) {
  const { initialText, onChangeText, onRemoveItem } = props;

  const [text, setText] = useState<string>(initialText);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onPressChangeText = () => {
    onChangeText(text);
    setIsEdit((edit) => !edit);
  };

  const onPressEdit = () => {
    setIsEdit((edit) => !edit);
  };

  const onPressCancel = () => {
    setText(initialText);
    setIsEdit((edit) => !edit);
  };

  const onPressRemove = () => {
    onRemoveItem();
  };

  return (
    <XStack alignItems="center" gap="$2">
      <TextInput
        onChangeText={setText}
        placeholder=""
        readonly={!isEdit}
        value={text}
      />
      <BaseButton
        backgroundColor={"#7d82f5"}
        icon={!isEdit ? Edit3 : Check}
        marginTop="$4"
        onPress={isEdit ? onPressChangeText : onPressEdit}
      ></BaseButton>
      <BaseButton
        backgroundColor="#dc2578"
        icon={!isEdit ? Trash2 : XCircle}
        marginTop="$4"
        onPress={isEdit ? onPressCancel : onPressRemove}
      ></BaseButton>
    </XStack>
  );
}
export default function Children() {
  const [children, setChildren] = useState<ChildrenType>(
    useStore((state) => state.children)
  );
  const setStoreState = useStore((state) => state.setStoreState);

  const onClickNext = () => {
    setStoreState("children", children);
    router.push("/Account");
  };

  const onChangeItem = (idx: number, text: string) => {
    setChildren((children) => {
      const newChildren = [...children];
      newChildren[idx].text = text;
      return newChildren;
    });
    ToastAndroid.show("Children updated!", ToastAndroid.SHORT);
  };

  const onRemoveItem = (idx: number) => {
    setChildren((children) => {
      const newChildren = [...children];
      newChildren.splice(idx, 1);
      return newChildren;
    });
    ToastAndroid.show("Children removed!", ToastAndroid.SHORT);
  };

  const onClickAdd = () => {
    setChildren((children) => {
      const newChildren = [...children];
      newChildren.push({
        id: uuidv4(),
        text: "",
      });
      return newChildren;
    });
    ToastAndroid.show("New children added!", ToastAndroid.SHORT);
  };

  return (
    <ScrollView backgroundColor="#fff">
      <YStack padding="$4" justifyContent="center" paddingBottom="$16">
        <Text text="Add your children" variant="heading" />
        {children.map((item, idx) => (
          <ChildrenItem
            key={item.id}
            initialText={item.text}
            onChangeText={(text) => onChangeItem(idx, text)}
            onRemoveItem={() => onRemoveItem(idx)}
          />
        ))}
        <BaseButton
          alignSelf="center"
          icon={Plus}
          size="$4"
          w="60%"
          backgroundColor="#fff"
          color="#7d82f5"
          borderRadius={32}
          borderColor={"#e4ecf3"}
          onPress={onClickAdd}
          mt={"$8"}
        >
          Add Child
        </BaseButton>
        <XStack position="absolute" bottom="$8" left="$4">
          <Button onPress={onClickNext} variant={"primary"} text="Done" />
        </XStack>
      </YStack>
    </ScrollView>
  );
}
