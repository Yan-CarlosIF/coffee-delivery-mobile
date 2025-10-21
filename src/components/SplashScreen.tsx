import LogoWithName from "@/assets/LogoWithName.png";
import { THEME } from "@/theme";
import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Image, Stack } from "tamagui";

const AnimatedImage = Animated.createAnimatedComponent(Image);

export function SplashScreen() {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.5, { duration: 800 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Stack
      backgroundColor={THEME.colors["purple"]}
      alignItems="center"
      justifyContent="center"
      flex={1}
    >
      <AnimatedImage
        source={LogoWithName}
        style={animatedStyle}
        width={200}
        height={200}
      />
    </Stack>
  );
}
