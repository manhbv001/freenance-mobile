import { Center, Heading, ScrollView, VStack } from "native-base";
import TransactionItem from "./TransactionItem";

const fakeData = [
  {
    id: "123",
    amount: 500000,
    type: 0,
    description: "This is description",
    category: "invest",
  },
  {
    id: "1234",
    amount: 450000,
    type: 1,
    description: "This is description",
    category: "food",
  },
  {
    id: "1236",
    amount: 260000,
    type: 0,
    description: "This is description",
    category: "intertain",
  },
  {
    id: "12366",
    amount: 500000,
    type: 1,
    description: "This is description",
    category: "shopping",
  },
];

export default function TransactionList() {
  return (
    <ScrollView>
      <Center mt="3" mb="4">
        <Heading fontSize="lg">Transaction</Heading>
      </Center>
      <VStack flex="1">
        {fakeData.map((item) => (
          <TransactionItem key={item.id} data={item} />
        ))}
      </VStack>
    </ScrollView>
  );
}
