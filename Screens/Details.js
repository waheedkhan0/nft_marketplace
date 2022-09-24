import React from 'react'
import { Text, View,Image,FlatList,SafeAreaView,StatusBar } from 'react-native';
import { COLORS,FONTS,SIZES,assets, SHADOWS } from '../constants';
import { CircleButton,RectButton,SubInfo,FocusedStatusBar,DetailDesc,DetailsBid } from '../components';


const DetailsHeader = ({data,navigation}) => {
  return (
    <View style={{width:"100%",height:373}}>
      <Image source={data.image} style={{width:"100%",height:"100%"}} resizeMode="cover" />
      <CircleButton imgUrl={assets.left} handlePress={()=> navigation.goBack()} left={15} top={StatusBar.currentHeight+10}  />
      <CircleButton imgUrl={assets.heart} handlePress={()=> navigation.goBack()} right={15} top={StatusBar.currentHeight+10}  />
    </View>
  )
}


const Details = ({route,navigation}) => {
    const {data} = route.params;
  return (
    <SafeAreaView style={{flex:1}}>
        <FocusedStatusBar 
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
            />

        <View style={
            {
                width:"100%",
                position:"absolute",
                bottom:0,
                paddingVertical:SIZES.font,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'rgba(255,255,255,0.5)',
                zIndex:1
            }}>
            <RectButton 
              minWidth={170}
              fontSize={SIZES.large}
              btnText="Place a Bid"
              {...SHADOWS.dark}  
                />
        </View>
    <FlatList 
        data={data.bids}
        renderItem={({item})=> <DetailsBid bid={item} /> }
        keyExtractor = {(item)=> item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:SIZES.extraLarge}}
        ListHeaderComponent={
            () => (
                <React.Fragment>
                    <DetailsHeader data={data} navigation={navigation} />
                    <SubInfo />
                </React.Fragment>
            )
        }
    />
    </SafeAreaView>
  )
}

export default Details