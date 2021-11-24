import React from "react";
import { StyleSheet } from "react-native";
import { Box, Image, Icon, IconButton } from "native-base";

const TopNav = ({ height, width }) => {
  const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: null,
    },
  });
  return (
    <Box
      position="absolute"
      top={4}
      height={height}
      width={width}
      display="flex"
      flexDirection="row"
      shadow={2}
      p="2"
      _text={{
        fontSize: "lg",
        fontWeight: "bold",
        color: "coolGray.900",
        letterSpacing: "md",
      }}
    >
      <Image
        source={require("../../assets/images/naalogo.png")}
        alt="Auction Logo"
        resizeMode="cover"
        style={styles.image}
      />
    </Box>
  );
};

const BottomNav = ({ height, width, children }) => {
  return (
    <Box
      position="absolute"
      bottom={0}
      height={height}
      width={width}
      display="flex"
      flexDirection="row"
      alignItems="center"
      p="2"
    >
      {children}
    </Box>
  );
};

const NavButton = ({ onPress, icon }) => {
  return (
    <IconButton
      onPress={onPress}
      icon={<Icon as={icon} />}
      borderRadius="full"
      bg="green.700"
      shadow={5}
      mx="auto"
      _icon={{
        color: "coolGray.100",
        size: "md",
      }}
      _hover={{
        bg: "green.800:alpha.60",
        shadow: "3",
      }}
      _pressed={{
        bg: "green.800:alpha.60",
        shadow: "3",
      }}
      _ios={{
        _icon: {
          size: "2xl",
        },
      }}
    />
  );
};

export { TopNav, BottomNav, NavButton };
