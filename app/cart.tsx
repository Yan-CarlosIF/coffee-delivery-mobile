import { CartCoffeCard } from "@/components/CartCoffeCard";
import { CartCoffee } from "@/shared/CartCoffee";
import { THEME } from "@/theme";
import { ArrowLeft, ShoppingCart } from "@tamagui/lucide-icons";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { Button, Text, View, XStack, YStack } from "tamagui";

const HAS_ITEMS = true;

export default function Cart() {
  const COFFEES = [
    {
      id: "1",
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos.",
      price: 9.9,
      tags: ["tradicional"],
      image: require("../src/assets/coffees/Type=Latte.png"),
      quantity: 1,
      size: "227ml",
    } as CartCoffee,
  ];

  const { goBack, navigate } = useNavigation();

  const handleNavigateToCatalog = () => navigate("catalog");

  return (
    <YStack backgroundColor="white" flex={1}>
      <XStack
        justifyContent="space-between"
        alignItems="center"
        paddingVertical={28}
        paddingHorizontal={32}
        borderBottomColor={THEME.colors["gray-700"]}
        borderBottomWidth={1}
      >
        <TouchableOpacity style={{ width: 32 }} onPress={goBack}>
          <ArrowLeft size={24} />
        </TouchableOpacity>

        <Text
          color={THEME.colors["gray-200"]}
          fontFamily={THEME.fonts.baloo2}
          fontSize={18}
        >
          Carrinho
        </Text>
        <View width={32} />
      </XStack>
      {HAS_ITEMS ? (
        <>
          <Animated.FlatList
            data={COFFEES}
            keyExtractor={(item) => item.id}
            renderItem={({ item: coffee }) => <CartCoffeCard coffee={coffee} />}
          />
          <YStack
            shadowColor={THEME.colors["gray-100"]}
            boxShadow="0px -2px 16px rgba(0, 0, 0, 0.08)"
            paddingHorizontal={32}
            paddingVertical={32}
          >
            <XStack alignItems="center" justifyContent="space-between">
              <Text>Valor total</Text>
              <Text fontSize={20} fontFamily={THEME.fonts.baloo2}>
                R$ 9,90
              </Text>
            </XStack>
            <Button
              pressStyle={{
                backgroundColor: THEME.colors.yellow,
              }}
              backgroundColor={THEME.colors["yellow-dark"]}
              color="white"
              marginTop={24}
              fontWeight="bold"
              height={46}
            >
              CONFIRMAR PEDIDO
            </Button>
          </YStack>
        </>
      ) : (
        <YStack alignItems="center" paddingHorizontal={64}>
          <ShoppingCart
            marginTop={84}
            size={24}
            color={THEME.colors["gray-500"]}
            fill={THEME.colors["gray-500"]}
          />
          <Text marginTop={8} color={THEME.colors["gray-400"]}>
            Seu carrinho está vazio
          </Text>
          <Button
            pressStyle={{
              backgroundColor: THEME.colors.purple,
            }}
            marginTop={32}
            width="100%"
            backgroundColor={THEME.colors["purple-dark"]}
            color="white"
            fontWeight="bold"
            onPress={handleNavigateToCatalog}
          >
            VER CATÁLOGO
          </Button>
        </YStack>
      )}
    </YStack>
  );
}
