import { Center, Heading, ScrollView, VStack } from 'native-base';
import TransactionItem from './TransactionItem';

export default function TransactionList({ data }) {
  return (
    <ScrollView>
      <Center mt="3" mb="4">
        <Heading fontSize="lg">Transaction</Heading>
      </Center>
      <VStack flex="1">
        {data.map((item) => (
          <TransactionItem key={item.id} data={item} />
        ))}
      </VStack>
    </ScrollView>
  );
}
