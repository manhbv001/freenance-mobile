import { useNavigation } from '@react-navigation/native';
import { Flex } from 'native-base';
import { Dimensions, StyleSheet, View } from 'react-native';
import Actions from './Actions';

export default function MainLayout({ children }) {
  const navigation = useNavigation();

  const handleActionClick = (screen, data) => {
    navigation.navigate(screen);
  };

  return (
    <View height="100%">
      <Flex height="100%" justifyContent="space-between">
        <View style={style.body}>{children}</View>
        <View style={style.action}>
          <Actions onActionClick={handleActionClick} />
        </View>
      </Flex>
    </View>
  );
}

const style = StyleSheet.create({
  action: {
    height: 64,
    flexShrink: 0,
  },
  body: {
    flexGrow: 1,
    height: Dimensions.get('window').height - 64,
  },
});
