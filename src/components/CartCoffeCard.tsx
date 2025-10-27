import { CartCoffee } from "@/shared/CartCoffee";
import { THEME } from "@/theme";
import { Minus, Plus, Trash2 } from "@tamagui/lucide-icons";
import { TouchableOpacity } from "react-native";
import { Button, ButtonIcon, Image, Text, XStack, YStack } from "tamagui";

type CartCoffeeCardProps = {
  coffee: CartCoffee;
};

export function CartCoffeCard({ coffee }: CartCoffeeCardProps) {
  return (
    <XStack
      borderBottomWidth={1}
      borderBottomColor={THEME.colors["gray-700"]}
      gap={16}
      paddingHorizontal={32}
      alignItems="center"
      paddingVertical={16}
    >
      <Image width={64} height={64} src={coffee.image} />
      <YStack flex={1}>
        <XStack justifyContent="space-between">
          <Text
            maxWidth={180}
            textOverflow="ellipsis"
            numberOfLines={1}
            color={THEME.colors["gray-100"]}
            fontSize={16}
          >
            {coffee.name}
          </Text>
          <Text
            fontFamily={THEME.fonts.baloo2}
            color={THEME.colors["gray-100"]}
            fontSize={16}
          >
            R$ {coffee.price.toFixed(2).replace(".", ",")}
          </Text>
        </XStack>
        <Text color={THEME.colors["gray-400"]}>{coffee.size}</Text>
        <XStack alignItems="center" marginTop={8} gap={8}>
          <XStack
            width={100}
            height={36}
            paddingHorizontal={8}
            justifyContent="space-between"
            alignItems="center"
            borderRadius={6}
            borderWidth={1}
            borderColor={THEME.colors["gray-600"]}
          >
            <TouchableOpacity style={{ height: 36, justifyContent: "center" }}>
              <Minus size={20} color={THEME.colors.purple} />
            </TouchableOpacity>
            <Text color={THEME.colors["gray-100"]} fontSize={16}>
              1
            </Text>
            <TouchableOpacity style={{ height: 36, justifyContent: "center" }}>
              <Plus size={20} color={THEME.colors.purple} />
            </TouchableOpacity>
          </XStack>
          <Button backgroundColor={THEME.colors["gray-700"]} size={36}>
            <ButtonIcon>
              <Trash2 color={THEME.colors.purple} />
            </ButtonIcon>
          </Button>
        </XStack>
      </YStack>
    </XStack>
  );
}
