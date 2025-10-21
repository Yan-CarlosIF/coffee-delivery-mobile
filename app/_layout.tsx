import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { defaultConfig } from "@tamagui/config/v4";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { createTamagui, TamaguiProvider } from "tamagui";

const tamaguiConfig = createTamagui(defaultConfig);

export default function RootLayout() {
  useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Baloo2_700Bold,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig} disableInjectCSS>
        <Stack screenOptions={{ headerShown: false }} />
      </TamaguiProvider>
    </SafeAreaView>
  );
}
