import { Box, Text, useToast } from 'native-base';

export const useToastMessage = () => {
  const toast = useToast();

  function showToast(status, message) {
    toast.show({
      placement: 'top',
      render: () => {
        return (
          <Box bg="white" px="2" py="1" rounded="sm" mb={5} padding={12}>
            <Text color="primary.400">{message}</Text>
          </Box>
        );
      },
    });
  }

  return { showToast };
};
