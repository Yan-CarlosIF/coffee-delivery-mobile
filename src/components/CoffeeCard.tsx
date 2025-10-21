import { THEME } from "@/theme";
import { Card, Image, Text, XStack } from "tamagui";

type CoffeeCardProps = {
  imageSrc: string;
  type: string;
  name: string;
  description: string;
  price: number;
};

export function CoffeeCard({
  imageSrc,
  type,
  description,
  name,
  price,
}: CoffeeCardProps) {
  return (
    <Card
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
      <Text marginTop={12} fontFamily={THEME.fonts.baloo2} fontSize={16}>
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
