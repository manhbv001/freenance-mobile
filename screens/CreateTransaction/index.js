import { useNavigation } from '@react-navigation/native';
import {
  AddIcon,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  TextArea,
  useTheme,
  WarningOutlineIcon
} from 'native-base';
import { useEffect, useMemo, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import navigationConfig from '../../ configs/navigation.config';
import { useToastMessage } from '../../hooks/toast.hook';
import categoryServices from '../../services/category.services';
import transactionServices from '../../services/transaction.services';
import { numberWithCommas } from '../../utils/numer.util';

export default function CreateTransactionScreen() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { showToast } = useToastMessage();

  const [category, setCategory] = useState();
  const [amount, setAmount] = useState();
  const [note, setNote] = useState();

  const [categories, setCategories] = useState([]);

  const handleAmountChange = (value) => setAmount(value);
  const handleNoteChange = (value) => setNote(value);

  const inputProps = useMemo(() => {
    return {
      size: '2xl',
      focusOutlineColor: 'none',
      backgroundColor: 'white',
      variant: 'outline',
      fontSize: 18,
    };
  }, []);

  const handleSubmit = () => {
    const payload = {
      note,
      amount: +amount,
      timestamp: new Date(),
      categoryId: category,
    };

    transactionServices
      .createTransaction(payload)
      .then(() => {
        showToast('', 'Success!');
        navigate(navigationConfig.Screens.Home);
      })
      .catch((e) => {
        console.log(JSON.stringify(e));
      });
  };

  useEffect(() => {
    categoryServices
      .getAllCategories()
      .then((response) => {
        if (response.success) {
          setCategories(response.data);
        } else {
          console.log(response);
        }
      })
      .catch((e) => console.log(JSON.stringify(e)));
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Flex style={{ flex: 1, justifyContent: 'space-around' }}>
            <Box style={style.background} padding={4} alignItems="center">
              <FormControl style={style.formControl}>
                <FormControl.Label fontSize="sm">Amount</FormControl.Label>
                <Input
                  {...inputProps}
                  value={numberWithCommas(amount || '')}
                  keyboardType="numeric"
                  onChangeText={handleAmountChange}
                />
                <FormControl.HelperText>
                  Amount of the transaction
                </FormControl.HelperText>
              </FormControl>
              <Flex w="100%" flexDir="row" alignItems="center">
                <Box flexGrow={1}>
                  <FormControl style={style.formControl} isRequired>
                    <FormControl.Label>Choose category</FormControl.Label>
                    <Select
                      accessibilityLabel="Category"
                      placeholder="Category"
                      size="2xl"
                      fontSize={18}
                      boxSize="1.5"
                      onValueChange={setCategory}
                    >
                      {categories.map((e) => (
                        <Select.Item key={e.id} label={e.name} value={e.id} />
                      ))}
                    </Select>
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      Please make a selection!
                    </FormControl.ErrorMessage>
                  </FormControl>
                </Box>
                <Button
                  style={{
                    transform: [{ translateY: 3 }],
                    borderRadius: '50%',
                  }}
                  flexShrink={0}
                  w="39"
                  h="39"
                  ml={4}
                  onPress={() =>
                    navigate(navigationConfig.Screens.CreateCategory)
                  }
                >
                  <AddIcon color="white" />
                </Button>
              </Flex>
              <FormControl flexGrow={1} style={style.formControl}>
                <FormControl.Label fontSize="sm">Note</FormControl.Label>
                <TextArea
                  {...inputProps}
                  fontSize="sm"
                  onChangeText={handleNoteChange}
                />
              </FormControl>
              <Button
                w="100%"
                size="lg"
                backgroundColor={colors.primary[500]}
                onPress={handleSubmit}
              >
                Save
              </Button>
            </Box>
          </Flex>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  formControl: {
    marginBottom: 24,
  },
  input: {
    fontsize: 14,
    backgroundColor: 'none',
  },
});
