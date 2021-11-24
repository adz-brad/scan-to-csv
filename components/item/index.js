import React from "react";
import {
  Box,
  Modal,
  FlatList,
  Text,
  Icon,
  IconButton,
  VStack,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const ItemButton = ({ onPress, icon, color, hoverPress, ml, mr }) => {
  return (
    <IconButton
      onPress={onPress}
      icon={<Icon as={icon} />}
      borderRadius="full"
      bg={color}
      shadow={3}
      ml={ml}
      mr={mr}
      _icon={{
        color: "coolGray.100",
        size: "sm",
      }}
      _hover={{
        bg: `${hoverPress}`,
        shadow: "3",
      }}
      _pressed={{
        bg: `${hoverPress}`,
        shadow: "3",
      }}
      _ios={{
        _icon: {
          size: "md",
        },
      }}
    />
  );
};

const ItemList = ({ items, width }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Box
          width={width}
          display="flex"
          flexDirection="row"
          alignItems="center"
          borderBottomWidth="1"
          borderColor="coolGray.200"
          p="1"
        >
          <VStack ml="1">
            <Text fontSize="md" fontWeight="semibold" color="coolGray.900">
              Lot # {item.lotNumber}
            </Text>
            <Text color="coolGray.700">{item.itemName}</Text>
          </VStack>

          <ItemButton
            icon={<MaterialIcons name="create" />}
            onPress={console.log(`Edit Item ${item.lotNumber}`)}
            color="green.700"
            hoverPress="green.600:alpha.60"
            ml="auto"
            mr="1"
          />
          <ItemButton
            icon={<MaterialIcons name="delete" />}
            onPress={console.log(`Delete Item ${item.lotNumber}`)}
            color="red.700"
            hoverPress="red.600:alpha.60"
            ml="1"
            mr="2"
          />
        </Box>
      )}
      keyExtractor={(item) => item.itemID}
    />
  );
};

const NewItem = ({ onOpen, onClose, addItem, children }) => {
  return (
    <Modal isOpen={onOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Add New Item</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blueGray" onPress={addItem}>
              Add Item
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export { ItemList, NewItem };
