import { View, Text } from 'react-native'
import {useState} from 'react';
import { NFTTitle,ETHPrice } from './SubInfo';
import { FONTS,SIZES,assets, COLORS } from '../constants';

const DetailsDesc = ({data}) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);
  return (
    <>
        <View style={{
            width:"100%",
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            padding:SIZES.small
        }}>
        <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.extraLarge}
            subTitleSize={SIZES.font}
        >
        </NFTTitle>
        <ETHPrice price={data.price} />
        </View>
        <View style={{marginVertical:SIZES.extraLarge * 1.5,padding:SIZES.small}}>
            <Text style={{
                fontFamily:FONTS.semiBold,
                color:COLORS.primary,
                fontSize:SIZES.font
            }}>Description</Text>
            <View style={{marginTop:SIZES.base}}>
                <Text style={{
                    fontFamily:FONTS.regular,
                    color:COLORS.secondary,
                    fontSize:SIZES.small,
                    lineHeight:SIZES.large
                }}>{text}{!readMore && "..."}</Text>
            </View>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >{readMore ? "  Show Less" : "  Read More"}</Text>
            {data.bids.length > 0 && (
                <Text style={{
                    fontFamily:FONTS.semiBold,
                    fontSize:SIZES.font,
                    color:COLORS.primary
                }}>Current Bid</Text>
            )}
        </View>
    </>

  )
}

export default DetailsDesc