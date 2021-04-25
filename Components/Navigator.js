/*This page is for navigation is like a root on our application
Make sure every package is on your computer before running

Requirements:
-package npm install @react-navigation/stack
-import from folder pages {Login/indexM/ Camera}
*/

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Index";
import index from "./AboutUs";
import Camera from "./Camera";
import Album from "./Album";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Gryffindor"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: "#000000",
            height: 60,
          },
          headerTitleAlign: "center",
          headerTitleStyle: { marginBottom: 30, height: 80 },
          headerTintColor: "#ffd700",

          title: (
            <Image
              source={require("../assets/title.png")}
              style={{ height: 50, width: 180, marginTop: -4 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="About us"
        component={index}
        options={{
          headerStyle: {
            backgroundColor: "#000000",
            height: 60,
          },
          headerTitleAlign: "center",
          headerTitleStyle: { height: 80 },
          headerTintColor: "#ffd700",
          title: (
            <Image
              source={require("../assets/title.png")}
              style={{ height: 40, width: 180 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Album"
        component={Album}
        options={{
          headerStyle: {
            backgroundColor: "#000000",
            height: 60,
          },
          headerTitleAlign: "center",
          headerTitleStyle: { height: 80 },
          headerTintColor: "#ffd700",
          title: (
            <Image
              source={require("../assets/title.png")}
              style={{ height: 40, width: 180 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="camera"
        component={Camera}
        options={{
          headerStyle: {
            backgroundColor: "black",
            height: 60,
          },
          headerTitleAlign: "center",
          headerTitleStyle: { color:'#000000'},
          headerTintColor: "#ffd700",
        }}
      />
    </Stack.Navigator>
  );
}
