import CoffeeSeedImage from "@/assets/CoffeeSeed.png";
import CoffeeImage from "@/assets/coffees/Type=Latte.png";
import { CoffeeCard } from "@/components/CoffeeCard";
import COFFEES from "@/constants/coffees";
import { Coffee } from "@/shared/Coffee";
import { THEME } from "@/theme";
import { MapPin, ShoppingCart } from "@tamagui/lucide-icons";
import { useNavigation } from "expo-router";
import {
  Keyboard,
  SectionList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Image, Input, ScrollView, Text, XStack, YStack } from "tamagui";

export default function Index() {
  const { navigate } = useNavigation();

  function handleNavigateToCoffeeDetails(coffee: Coffee) {
    navigate("coffee", { coffee });
  }

  return (
    <ScrollView backgroundColor="white" flex={1}>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <YStack backgroundColor="white" flex={1}>
          {/* Header */}
          <YStack
            paddingHorizontal={32}
            paddingVertical={28}
            backgroundColor={THEME.colors["gray-100"]}
          >
            <XStack paddingVertical={28} justifyContent="space-between">
              <XStack alignItems="center" gap={4}>
                <MapPin size={20} color={THEME.colors.purple} />
                <Text color={THEME.colors["gray-900"]}>Porto Alegre, RS</Text>
              </XStack>
              <TouchableOpacity>
                <ShoppingCart
                  size={20}
                  fill={THEME.colors.yellow}
                  color={THEME.colors.yellow}
                />
              </TouchableOpacity>
            </XStack>

            <Text fontSize={20} fontFamily={THEME.fonts.baloo2} color="white">
              Encontre o café perfeito para qualquer hora do dia
            </Text>

            <XStack>
              <Input
                placeholder="Pesquisar"
                flex={1}
                marginTop={16}
                borderRadius={4}
                borderColor="transparent"
                placeholderTextColor={THEME.colors["gray-400"]}
                color={THEME.colors["gray-700"]}
                focusStyle={{
                  borderColor: THEME.colors["gray-300"],
                }}
                backgroundColor={THEME.colors["gray-200"]}
              />
            </XStack>
            <Image alignSelf="flex-end" src={CoffeeSeedImage} />
          </YStack>
          {/* Content */}

          <XStack paddingLeft={32} marginTop={-56}>
            <CoffeeCard
              name="Expresso Tradicional"
              description="Café expresso com o dobro de leite e espuma cremosa"
              imageSrc={CoffeeImage}
              type="Tradicional"
              price={9.9}
            />
          </XStack>

          <YStack marginTop={56} paddingHorizontal={32}>
            <Text
              fontSize={16}
              fontFamily={THEME.fonts.baloo2}
              color={THEME.colors["gray-300"]}
            >
              Nossos cafés
            </Text>

            {/* Filters */}
            <XStack marginTop={8} gap={8}>
              <XStack
                paddingVertical={4}
                paddingHorizontal={8}
                borderRadius={16}
                borderWidth={1}
                borderColor={THEME.colors["purple"]}
              >
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize={12}
                  color={THEME.colors["purple-dark"]}
                >
                  Tradicional
                </Text>
              </XStack>
              <XStack
                paddingVertical={4}
                paddingHorizontal={8}
                borderRadius={16}
                borderWidth={1}
                borderColor={THEME.colors["purple"]}
              >
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize={12}
                  color={THEME.colors["purple-dark"]}
                >
                  Doces
                </Text>
              </XStack>
              <XStack
                paddingVertical={4}
                paddingHorizontal={8}
                borderRadius={16}
                borderWidth={1}
                borderColor={THEME.colors["purple"]}
              >
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize={12}
                  color={THEME.colors["purple-dark"]}
                >
                  Especiais
                </Text>
              </XStack>
            </XStack>

            {/* Coffee List */}
            <SectionList
              sections={COFFEES}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CoffeeCard
                  onPress={() => handleNavigateToCoffeeDetails(item)}
                  style="horizontal"
                  name={item.name}
                  description={item.description}
                  imageSrc={item.image}
                  type={item.tags[0]}
                  price={item.price}
                />
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text
                  fontSize={18}
                  fontFamily={THEME.fonts.baloo2}
                  color={THEME.colors["gray-400"]}
                  marginTop={32}
                  marginBottom={32}
                >
                  {title}
                </Text>
              )}
              contentContainerStyle={{ paddingBottom: 96 }}
              showsVerticalScrollIndicator={false}
            />
          </YStack>
        </YStack>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
