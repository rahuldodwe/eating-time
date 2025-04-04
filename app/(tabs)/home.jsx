import { View, Text, Image, Platform, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import homeBanner from "../../assets/images/homeBanner.png";
import { ScrollView } from "react-native";
import { restaurants, count } from "../../store/restaurants";
import { ActivityIndicator } from "react-native";

const Home = () => {

  const renderItem = ({item}) => (
    <TouchableOpacity className="bg-[#5f5f5f] max-h-64 max-w-xs flex justify-center rounded-lg p-4 mx-4 shadow-md " >
      <Image resizeMode="cover" source={{uri: item.image}} className="h-28 mt-2 mb-1 rounded-lg" />
      <Text className="text-white text-lg font-bold mb-2" >{item.name}</Text>
      <Text className="text-white text-base mb-2" >{item.address}</Text>
      <Text className="text-white text-base mb-2" >Open: {item.opening} - {item.closing}</Text>
    </TouchableOpacity>
  )


  return (
    <SafeAreaView style={[{ backgroundColor: "#2b2b2b"}, 
      Platform.OS=="android"&&{ paddingBottom: 50},
      Platform.OS=="ios"&&{ paddingBottom: 20},
      ]}>
      <View className="flex items-center">
        <View className="bg-[#5f5f5f] w-11/12 rounded-lg shadow-lg justify-between items-center flex flex-row p-2">
          <View className="flex flex-row">
            <Text className={`text-base h-10 pt-[${
              Platform.OS == "ios" ? 8: 6.5
            }] align-middle text-white`}>
              {" "}
              Welcome to{" "}
            </Text>
            <Image resizeMode="cover" className={"w-20 h-12"} source={logo} />
          </View>
        </View>
      </View>
      <ScrollView stickyHeaderIndices={[0]}>
        <ImageBackground resizeMode="cover" className={"my-4 w-full h-52 items-center justify-center bg-[#2b2b2b] "} source={homeBanner} >
            <View className="w-full p-4 shadow-lg" >
            <Text className="text-center text-3xl font-bold text-white">Eat with your loved ones</Text>
            </View>
        </ImageBackground>
        <View className="p-4 bg-[#2b2b2b] flex-row items-center" >
          <Text className="text-3xl text-white mr-2 font-semibold">
            Special Discount %
          </Text>
        </View>
        {
        restaurants.length > 0 ? 
        <FlatList data={restaurants} renderItem={renderItem} horizontal contentContainerStyle={{padding: 16}} showsHorizontalScrollIndicator={false} scrollEnabled={true} />   
        : <ActivityIndicator animating color={"#fb9b33"} />
      }
      <View className="p-4 bg-[#2b2b2b] flex-row items-center" >
          <Text className="text-3xl text-[#fb9b33] mr-2 font-semibold">
            Our Restaurants
          </Text>
        </View>
        {
        restaurants.length > 0 ? 
        <FlatList data={restaurants} renderItem={renderItem} horizontal contentContainerStyle={{padding: 16}} showsHorizontalScrollIndicator={false} scrollEnabled={true} />   
        : <ActivityIndicator animating color={"#fb9b33"} />
      }
     
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
