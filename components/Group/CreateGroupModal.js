import { Button, FormControl, Input, Modal } from "native-base";
import { useState } from "react";
import groupServices from "../../services/group.services";

export default function CreateGroupModal({ status, onOpen, onClose }) {
  const [name, setName] = useState();

  const handleSubmit = () => {
    groupServices
      .createGroup({
        name,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(e => console.log(JSON.stringify(e)))
      .finally(() => {
        onClose();
      });
  };

  return (
    <Modal size="xl" isOpen={status} onClose={onClose}>
      <Modal.Content maxWidth="90%">
        <Modal.CloseButton />
        <Modal.Header>Create new group</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input onChangeText={setName} />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Note</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={onClose}>
              Cancel
            </Button>
            <Button onPress={handleSubmit}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
