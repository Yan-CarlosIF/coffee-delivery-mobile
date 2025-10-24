import { THEME } from "@/theme";
import { Card, Image, Text, XStack, YStack } from "tamagui";

type CoffeeCardProps = {
  imageSrc: string;
  type: string;
  name: string;
  description: string;
  price: number;
  style?: "vertical" | "horizontal";
};

export function CoffeeCard({
  imageSrc,
  type,
  description,
  name,
  price,
  style = "vertical",
}: CoffeeCardProps) {
  if (style === "horizontal")
    return (
      <Card
        borderWidth={1}
        flexDirection="row"
        borderTopLeftRadius={6}
        borderTopRightRadius={36}
        borderBottomLeftRadius={36}
        borderBottomRightRadius={6}
        maxHeight={120}
        paddingBottom={16}
        borderColor={THEME.colors["gray-700"]}
        backgroundColor={THEME.colors["gray-900"]}
        elevation={1}
        shadowColor="#000"
        shadowOffset={{ width: 4, height: 4 }}
        shadowOpacity={0.5}
        shadowRadius={20}
      >
        <Card.Header paddingHorizontal={12} marginTop={-36}>
          <Image src={imageSrc} width={96} height={96} />
        </Card.Header>
        <YStack>
          <Text
            color={THEME.colors["gray-200"]}
            marginTop={12}
            fontFamily={THEME.fonts.baloo2}
            fontSize={18}
          >
            {name}
          </Text>
          <Text
            maxWidth={180}
            wordWrap="break-word"
            numberOfLines={2}
            fontSize={12}
            marginBottom={8}
            color={THEME.colors["gray-400"]}
          >
            {description}
          </Text>

          <Text
            marginTop="auto"
            color={THEME.colors["yellow-dark"]}
            fontSize={14}
          >
            R${" "}
            <Text
              color={THEME.colors["yellow-dark"]}
              fontSize={24}
              fontFamily={THEME.fonts.robotoBold}
            >
              {price.toFixed(2).replace(".", ",")}
            </Text>
          </Text>
        </YStack>
      </Card>
    );

  return (
    <Card
      borderWidth={1}
      borderTopLeftRadius={6}
      borderTopRightRadius={36}
      borderBottomLeftRadius={36}
      borderBottomRightRadius={6}
      maxWidth={216}
      paddingHorizontal={16}
      paddingBottom={16}
      alignItems="center"
      borderColor={THEME.colors["gray-700"]}
      backgroundColor={THEME.colors["gray-900"]}
      elevation={3}
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 6 }}
      shadowOpacity={0.3}
      shadowRadius={10}
    >
      <Card.Header marginTop={-48}>
        <Image src={imageSrc} width={120} height={120} />
      </Card.Header>
      <XStack
        paddingVertical={4}
        paddingHorizontal={8}
        borderRadius={999}
        backgroundColor={THEME.colors["purple-light"]}
      >
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          fontSize={12}
          fontFamily={THEME.fonts.robotoBold}
          color={THEME.colors["purple-dark"]}
        >
          {type}
        </Text>
      </XStack>
      <Text
        marginTop={12}
        color={THEME.colors["gray-200"]}
        fontFamily={THEME.fonts.baloo2}
        fontSize={16}
      >
        {name}
      </Text>
      <Text fontSize={12} color={THEME.colors["gray-400"]} textAlign="center">
        {description}
      </Text>

      <Text color={THEME.colors["yellow-dark"]} marginTop={20} fontSize={14}>
        R${" "}
        <Text
          color={THEME.colors["yellow-dark"]}
          fontSize={24}
          fontFamily={THEME.fonts.robotoBold}
        >
          {price.toFixed(2).replace(".", ",")}
        </Text>
      </Text>
    </Card>
  );
}
