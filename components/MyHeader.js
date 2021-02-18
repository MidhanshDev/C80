import React from "react";
import { Header } from "react-native-elements";
const MyHeader = (props) => {
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
      }}
      backgroundColor="#475867"
    />
  );
};
export default MyHeader;
