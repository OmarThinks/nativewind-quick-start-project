import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <View className=" w-[100px] h-[100px] bg-green-400 border-[4px] rounded-lg border-black" />
    </View>
  );
}
