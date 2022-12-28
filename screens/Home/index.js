import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import TransactionList from '../../components/Transaction/TransactionList';
import MainLayout from '../../layouts/main';
import transactionServices from '../../services/transaction.services';

export default function HomeScreen() {
  const [txs, setTxs] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    transactionServices
      .getAllTransactions()
      .then((response) => {
        if (response.success) {
          setTxs(
            response.data.map((e) => ({
              id: e.id,
              amount: e.amount,
              type: e.category.type,
              category: e.category.name,
              description: e.note,
            })),
          );
        } else {
          console.log(response);
        }
      })
      .catch((e) => {
        console.log(JSON.stringify(e));
      });
  }, [isFocused]);

  return (
    <MainLayout>
      <View style={{ flexGrow: 1 }}>
        <TransactionList data={txs} />
      </View>
    </MainLayout>
  );
}
