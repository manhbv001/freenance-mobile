import { Box, Center, Flex, Text, useTheme } from "native-base";
import { Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { baseColors } from "../../ configs/colors.config";
import { numberWithCommas } from "../../utils/numer.util";
export default function TransactionItem({ data }) {
  const { colors } = useTheme();

  const prefix = data.type === 0 ? "+" : "-";
  const color = data.type === 0 ? colors.tertiary[500] : colors.danger[500];
  const icon = data.type === 0 ? "arrowup" : "arrowdown";

  return (
    <View style={style.container}>
      <Flex flexDirection={"row"} alignItems="center">
        <Image
          style={style.symbol}
          source={require("../../assets/icons/transaction.png")}
        />
        <Box style={style.info}>
          <Flex flexDirection="row">
            <Text fontSize="lg" bold color={color}>
              {`${prefix}${numberWithCommas(data.amount)}`}
            </Text>
            <Text style={style.category}>{data.category}</Text>
          </Flex>
          <Text style={style.description}>{data.description}</Text>
        </Box>
        <Center style={style.labelIcon}>
          <Icon name={icon} size="22" color={color} />
        </Center>
      </Flex>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 12,
    paddingLeft: 16,
  },
  symbol: {
    width: 64,
    height: 64,
    borderRadius: "50%",
  },
  info: {
    paddingLeft: 16,
  },
  labelIcon: {
    marginLeft: "auto",
    marginRight: 16,
  },
  category: {
    backfaceVisibility: 1,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    alignSelf: "flex-start",
    backgroundColor: "rgba(230, 230, 230, 0.9)",
    overflow: "hidden",
    fontSize: 12,
    marginLeft: 8,
    transform: [{ translateY: 2 }],
  },
  description: {
    color: baseColors.textColor,
  },
});
