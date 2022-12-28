import {
  AddIcon,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Radio,
  Select,
  Text,
  TextArea,
  useTheme,
  WarningOutlineIcon,
} from "native-base";
import { useEffect, useMemo, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import CreateGroupModal from "../../components/Group/CreateGroupModal";
import groupServices from "../../services/group.services";
import { numberWithCommas } from "../../utils/numer.util";

export default function CreateCategoryScreen() {
  const { colors } = useTheme();
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [note, setNote] = useState();

  const [groupModalStatus, setGroupModelStatus] = useState(false);
  const [groups, setGroups] = useState([]);

  const handleAmountChange = (value) => setAmount(value);
  const handleNameChange = (value) => setName(value);
  const handleNoteChange = (value) => setNote(value);
  const handleOpenGroupModal = () => setGroupModelStatus(true);
  const handleCloseGroupModal = () => setGroupModelStatus(false);

  const inputProps = useMemo(() => {
    return {
      size: "2xl",
      focusOutlineColor: "none",
      backgroundColor: "white",
      variant: "outline",
      fontSize: 18,
    };
  }, []);

  useEffect(() => {
    groupServices
      .getAllGroup()
      .then((response) => {
        if (response.success) {
          setGroups(response.data);
        } else {
          console.log(response);
        }
      })
      .catch((e) => console.log(JSON.stringify(e)));
  }, [groupModalStatus]);

  return (
    <>
      <CreateGroupModal
        onClose={handleCloseGroupModal}
        status={groupModalStatus}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Flex style={{ flex: 1, justifyContent: "space-around" }}>
            <Box style={style.background} padding={4} alignItems="center">
              <Flex flexDir="row" width="100%">
                <Box width="25%">
                  <Text>Avt</Text>
                </Box>
                <Box flexGrow={1}>
                  <FormControl isRequired style={style.formControl}>
                    <FormControl.Label fontSize="sm">Name</FormControl.Label>
                    <Input {...inputProps} onChangeText={handleNameChange} />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      You must enter category name
                    </FormControl.ErrorMessage>
                  </FormControl>
                </Box>
              </Flex>
              <FormControl isRequired style={style.formControl}>
                <FormControl.Label>Type</FormControl.Label>
                <Radio.Group name="type" flexDirection="row">
                  <Radio value={"0"}>Income</Radio>
                  <Radio style={{ marginLeft: 24 }} value={"1"}>
                    Expense
                  </Radio>
                </Radio.Group>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  You must select a category type.
                </FormControl.ErrorMessage>
              </FormControl>
              <Flex w="100%" flexDir="row" alignItems="center">
                <Box flexGrow={1}>
                  <FormControl style={style.formControl} isRequired>
                    <FormControl.Label>Choose group</FormControl.Label>
                    <Select
                      accessibilityLabel="Group"
                      placeholder="Group"
                      size="2xl"
                      fontSize={18}
                      boxSize="1.5"
                    >
                      {groups.map((e) => (
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
                    borderRadius: "50%",
                  }}
                  flexShrink={0}
                  w="39"
                  h="39"
                  ml={4}
                  onPress={handleOpenGroupModal}
                >
                  <AddIcon color="white" />
                </Button>
              </Flex>
              <FormControl style={style.formControl}>
                <FormControl.Label fontSize="sm">Budget</FormControl.Label>
                <Input
                  {...inputProps}
                  value={numberWithCommas(amount || "")}
                  keyboardType="numeric"
                  onChangeText={handleAmountChange}
                />
                <FormControl.HelperText>
                  The amount of money you intend to spend
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Try different from previous passwords.
                </FormControl.ErrorMessage>
              </FormControl>
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
                onPress={() => console.log("hello world")}
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
    backgroundColor: "white",
    flexGrow: 1,
  },
  formControl: {
    marginBottom: 24,
  },
  input: {
    fontsize: 14,
    backgroundColor: "none",
  },
});
