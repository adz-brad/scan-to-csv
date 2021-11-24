import React, { useEffect, useState } from "react"
import { Dimensions } from 'react-native'
import { NativeBaseProvider, Icon, IconButton, HStack } from "native-base"
import { MaterialIcons } from '@expo/vector-icons'
import { TopNav, BottomNav, NavButton } from "./components/nav"
import { Main } from './components/layout'
import { ItemList, NewItem } from './components/item'
import { RequiredInput } from "./components/form"

const App = () => {

  const ItemButton = ({ onPress, icon, color, hoverPress, ml, mr }) => {
    return(
        <IconButton
            onPress={onPress}
            icon={<Icon as={icon}/>} 
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
            shadow: "3"
            }}
            _pressed={{
            bg: `${hoverPress}`,
            shadow: "3"
            }}
            _ios={{
            _icon: {
                size: "md",
            },
            }}
        />
    )
}

  let deviceWidth = Dimensions.get('window').width
  let deviceHeight = Dimensions.get('window').height
  
  const [ newItem, setNewItem ] = useState(false);

  const [ itemList, setItemList ] = useState([]);

  const [ lotNumber, setLotNumber ] = useState('');

  const [ itemName, setItemName ] = useState('');
 
  const [ itemID, setItemID ] = useState('');
  
  useEffect(() => {
    setItemID(String(`Lot-${lotNumber}-${Math.floor(Math.random() * 10000000)}`).replace(/\s+/g, ''))
  }, [ lotNumber ] );

  const [ itemObject, setItemObject ] = useState({});

  useEffect(() => {
    setItemObject({
      itemID: itemID,
      lotNumber: lotNumber,
      itemName: itemName
    })
  }, [ lotNumber, itemName ])

  useEffect(() => {
    console.log(itemID, lotNumber, itemName);
  }, [ lotNumber, itemName ])

  const addItem = async () => {
    console.log(lotNumber);
    await setItemList(itemList.concat(itemObject));
    setNewItem(false)
  }

  return (

    <NativeBaseProvider>

      <TopNav
        height={deviceHeight*0.12}
        width={deviceWidth}
      />

      <Main
        top={deviceHeight*0.12 + 4}
        height={deviceHeight*0.76}
        width={deviceWidth}
      >
        <ItemList items={itemList} width={deviceWidth} />

        <NewItem 
          onOpen={newItem} 
          onClose={() => setNewItem(false)} 
          addItem={() => addItem()}
        >
          <HStack>
            <RequiredInput
              type="number"
              keyboardType="numeric"
              label="Item Lot Number"
              icon={<MaterialIcons name="tag" />}
              placeholder="Lot Number"
              errorMessage="Lot number is required."
              value={lotNumber}
              onChange={setLotNumber}
            />
            <ItemButton 
                            icon={<MaterialIcons name="photo-camera" />}
                            color="green.700"
                            hoverPress="green.600:alpha.60"
                            mx="2"
                        />
          </HStack>

          <HStack>
            <RequiredInput
              type="text"
              label="Item Name"
              icon={<MaterialIcons name="tag" />}
              placeholder="Item Name"
              errorMessage="Item name is required."
              value={itemName}
              onChange={setItemName}
            />
            <ItemButton 
                            icon={<MaterialIcons name="photo-camera" />}
                            color="green.700"
                            hoverPress="green.600:alpha.60"
                            mx="2"
                        />
          </HStack>

        </NewItem>

      </Main>

      <BottomNav height={deviceHeight*0.1} width={deviceWidth}>
        <NavButton
          icon={<MaterialIcons name="create" />} 
          onPress={() => setNewItem(true)}
        />
        <NavButton
          icon={<MaterialIcons name="playlist-add" />} 
          onPress={() => console.log('Import CSV')}
        />
        <NavButton
          icon={<MaterialIcons name="save" />} 
          onPress={() => console.log('Export CSV')}
        />
        <NavButton
          icon={<MaterialIcons name="forward-to-inbox" />} 
          onPress={() => console.log('Send CSV')}
        />
      </BottomNav>

    </NativeBaseProvider>

  )
}

export default App;
