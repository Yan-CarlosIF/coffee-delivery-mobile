import CoffeeCup from "@/assets/CoffeeCup.png";
import { Coffee as CoffeeType } from "@/shared/Coffee";
import { THEME } from "@/theme";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "@tamagui/lucide-icons";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Button, Image, Stack, Text, XStack, YStack } from "tamagui";

export default function Coffee() {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<{ params: { coffee: CoffeeType } }>>();

  const { description, name, price, tags } = params.coffee;

  return (
    <YStack backgroundColor="white" flex={1}>
      {/* Header */}
      <YStack
        paddingHorizontal={32}
        paddingTop={28}
        height="70%"
        backgroundColor={THEME.colors["gray-100"]}
      >
        <XStack
          paddingVertical={28}
          alignItems="center"
          justifyContent="space-between"
        >
          <TouchableOpacity onPress={goBack}>
            <ArrowLeft size={24} color={THEME.colors["gray-900"]} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ShoppingCart
              size={20}
              fill={THEME.colors.yellow}
              color={THEME.colors.yellow}
            />
          </TouchableOpacity>
        </XStack>

        <YStack marginTop={12}>
          <XStack
            paddingVertical={6}
            paddingHorizontal={10}
            borderRadius={12}
            backgroundColor={THEME.colors["gray-200"]}
            alignSelf="flex-start"
          >
            <Text
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize={10}
            >
              {tags[0]}
            </Text>
          </XStack>

          <XStack
            alignItems="center"
            justifyContent="space-between"
            marginTop={4}
          >
            <Text
              fontSize={24}
              fontFamily={THEME.fonts.baloo2}
              color={THEME.colors["gray-900"]}
            >
              {name}
            </Text>

            <Text fontSize={14} color={THEME.colors.yellow}>
              R${" "}
              <Text
                alignSelf="flex-start"
                fontSize={32}
                fontFamily={THEME.fonts.baloo2}
                color={THEME.colors.yellow}
              >
                {price.toFixed(2).replace(".", ",")}
              </Text>
            </Text>
          </XStack>

          <Text marginTop={8} fontSize={16} color={THEME.colors["gray-500"]}>
            {description}
          </Text>
        </YStack>
        <Stack
          marginBottom={-120}
          alignItems="center"
          flex={1}
          justifyContent="center"
        >
          <Image src={CoffeeCup} />
        </Stack>
      </YStack>
      <YStack paddingHorizontal={32} marginTop={42}>
        <Text fontSize={14} color={THEME.colors["gray-400"]}>
          Selecione o tamanho:
        </Text>
        <XStack marginTop={12} gap={8}>
          <Button flex={1} backgroundColor={THEME.colors["gray-800"]}>
            <Text fontSize={12}>114ml</Text>
          </Button>
          <Button flex={1} backgroundColor={THEME.colors["gray-800"]}>
            <Text fontSize={12}>140ml</Text>
          </Button>
          <Button flex={1} backgroundColor={THEME.colors["gray-800"]}>
            <Text fontSize={12}>227ml</Text>
          </Button>
        </XStack>
        <XStack
          backgroundColor={THEME.colors["gray-800"]}
          marginTop={24}
          marginBottom={12}
          padding={8}
          gap={20}
          borderRadius={8}
          alignItems="center"
          justifyContent="space-between"
        >
          <XStack paddingHorizontal={12} alignItems="center" gap={10}>
            <TouchableOpacity>
              <Minus color={THEME.colors.purple} />
            </TouchableOpacity>

            <Text fontSize={16}>1</Text>

            <TouchableOpacity>
              <Plus color={THEME.colors.purple} />
            </TouchableOpacity>
          </XStack>
          <Button
            height={46}
            backgroundColor={THEME.colors["purple-dark"]}
            borderRadius={6}
            flex={1}
          >
            <Text color="white" fontWeight="bold">
              ADICIONAR
            </Text>
          </Button>
        </XStack>
      </YStack>
    </YStack>
  );
}
