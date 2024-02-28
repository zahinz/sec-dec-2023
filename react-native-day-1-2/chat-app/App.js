import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  RefreshControl,
} from "react-native";
import { useState } from "react";
import { Header, Paragraph, Small } from "./components/typography";

const MESSAGES = [
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 1",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 2",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 3",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 4",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 5",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 1",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 2",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 3",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 4",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 5",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 1",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 2",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 3",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 4",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 5",
    message: "Hello, World!",
  },
];

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  function onRefresh() {
    // this is a fake async function that simulates a network request
    console.log(MESSAGES, "Refreshing messages");
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View style={{ paddingHorizontal: 16 }}>
        <Header>Chats</Header>
        <View
          style={{
            paddingVertical: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Paragraph>Broadcast List</Paragraph>
          <Paragraph>Group Chats</Paragraph>
        </View>
        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingBottom: 32 }}
        >
          <View
            style={{
              height: 100,
              width: 200,
              backgroundColor: "lightgray",
              borderRadius: 8,
              marginRight: 16,
            }}
          />
          <View
            style={{
              height: 100,
              width: 200,
              backgroundColor: "lightgray",
              borderRadius: 8,
              marginRight: 16,
            }}
          />
          <View
            style={{
              height: 100,
              width: 200,
              backgroundColor: "lightgray",
              borderRadius: 8,
              marginRight: 16,
            }}
          />
        </ScrollView> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {MESSAGES.map((message, index) => (
            <MessageCard key={index} {...message} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function MessageCard({ image, name, message }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: -16,
      }}
    >
      <Image
        style={{ width: 50, height: 50, borderRadius: 1000 }}
        source={{
          uri: image || "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View>
        <Paragraph style={{ fontWeight: 600 }}>
          {name || "No name provided"}
        </Paragraph>
        <Small>{message || "No message provided"}</Small>
      </View>
    </View>
  );
}
