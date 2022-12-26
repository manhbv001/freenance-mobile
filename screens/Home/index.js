import { Text, View } from "react-native";
import TransactionList from "../../components/Transaction/TransactionList";
import MainLayout from "../../layouts/main";

export default function HomeScreen({ navigation }) {
  return (
    <MainLayout navigation={navigation}>
      <View style={{ flexGrow: 1 }}>
        <TransactionList />
      </View>
    </MainLayout>
  );
}
