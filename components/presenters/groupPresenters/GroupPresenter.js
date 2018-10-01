import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

/*
  TODO: This is a placeholder presentational standin; I need to make it functional
*/
const GroupPresenter = ({ navigation }) => {
  const { width } = Dimensions.get('window')
  const imageSize = width
  return (
    <View style={ss.invisiContainer}>
      <View style={[ss.row, ss.spaceAround, ss.bottomBorder, ss.whiteBackground]}>
        <TouchableOpacity style={[ss.flex1, ss.center, ss.padding10]}>
          <Ionicons
            name="md-chatboxes"
            size={26}
            style={{color: '#000'}} />
        </TouchableOpacity>
        <TouchableOpacity style={[ss.flex1, ss.center, ss.padding10]}>
          <Octicons
            name="pin"
            size={26}
            style={{color: '#aaa'}} />
        </TouchableOpacity>
        <TouchableOpacity style={[ss.flex1, ss.center, ss.padding10]}>
          <Ionicons
            name="md-bookmarks"
            size={26}
            style={{color: '#aaa'}} />
        </TouchableOpacity>
        <TouchableOpacity style={[ss.flex1, ss.center, ss.padding10]}>
          <Ionicons
            name="md-mail"
            size={26}
            style={{color: '#aaa'}} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity activeOpacity={1}>
          <View style={[ss.row, ss.spaceBetween, ss.whiteBackground]}>
            <View style={ss.row}>
              <View style={[ss.padding4, {paddingLeft: 10, paddingRight: 10}]}>
                <Image
                  style={{height: 30, width: 30, borderRadius: 15, resizeMode: 'cover'}}
                  source={require('../../../assets/images/bobby-headshot.jpg')} />
              </View>
              <View>
                <Text style={{fontFamily: 'ralewayBold', fontSize: 15}}>Bobby Lux</Text>
                <Text style={[ss.subBody, ss.greyText]}>Prayer Request</Text>
              </View>
            </View>
            <Ionicons
              name="md-more"
              size={26}
              style={ss.padding10} />
          </View>
          <Image
            style={{width: imageSize, height: imageSize, resizeMode: 'cover'}}
            source={require('../../../assets/images/community-group.jpg')} />
          <View style={[ss.whiteBackground, {paddingBottom: 30}]}>
            <View style={[ss.row, ss.spaceBetween]}>
              <Text style={[ss.padding10, {fontFamily: 'ralewayBold', fontSize: 18}]}>Bobby Lux</Text>
              <View style={ss.row}>
                <TouchableOpacity style={[ss.padding10, {paddingBottom: 0, paddingTop: 0}]}>
                  <Octicons
                    name="pin"
                    size={26}
                    style={{color: '#000'}} />
                </TouchableOpacity>
                <TouchableOpacity style={[ss.padding10, {paddingBottom: 0, paddingTop: 0}]}>
                  <Ionicons
                    name="md-alarm"
                    size={26}
                    style={{color: '#000'}} />
                </TouchableOpacity>
              </View>
            </View>
            <Text numberOfLines={2} style={{fontFamily: 'ralewayBold', fontSize: 15, paddingLeft: 10, paddingRight: 10}}>The Health and Spiritual Vitality of My New Bible Study</Text>
            <View style={[ss.row, ss.flex1, ss.spaceBetween]}>
              <Text numberOfLines={3} style={[ss.padding10, ss.flex1, {paddingTop: 0, fontFamily: 'raleway', fontSize: 15}]}>My new Bible Study will be starting soon, and I wanted to start praying for a healthy and spiritually active group. As the leader of the group, I really want to make sure that I'm open to God working through me and the other people in my group. I'd really appreciate your prayers for me and the other members as we look forward to the start of the group sessions.</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                style={{color: '#555', paddingRight: 10}} />
            </View>
            <View style={[ss.row, ss.padding10, ss.spaceAround]}>
              <TouchableOpacity style={[ss.smallWhiteButton, {width: '40%'}]}>
                <Text style={ss.smallButtonText}>SEND CARD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[ss.smallBlueButton, {width: '40%'}]}>
                <Text style={[ss.smallButtonText, ss.whiteText]}>SEND PRAYER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('GroupPrayer')}>
          <View style={ss.whiteBackground}>
            <View style={[ss.row, ss.spaceBetween, ss.whiteBackground]}>
              <View style={{paddingLeft: 10}}>
                <Text style={{fontFamily: 'ralewayBold', fontSize: 15}}>Bobby Lux</Text>
                <Text style={[ss.subBody, ss.greyText]}>Prayer Request</Text>
              </View>
              <Ionicons
                name="md-more"
                size={26}
                style={ss.padding10} />
            </View>
            <View style={[ss.fullWidth, ss.center, ss.padding10]}>
              <Image
                style={{height: 100, width: 100, borderRadius: 50, resizeMode: 'cover'}}
                source={require('../../../assets/images/bobby-headshot.jpg')} />
            </View>
            <View style={[ss.row, ss.spaceBetween]}>
              <Text style={[ss.padding10, {fontFamily: 'ralewayBold', fontSize: 18}]}>Bobby Lux</Text>
              <View style={ss.row}>
                <TouchableOpacity style={[ss.padding10, {paddingBottom: 0, paddingTop: 0}]}>
                  <Octicons
                    name="pin"
                    size={26}
                    style={{color: '#000'}} />
                </TouchableOpacity>
                <TouchableOpacity style={[ss.padding10, {paddingBottom: 0, paddingTop: 0}]}>
                  <Ionicons
                    name="md-alarm"
                    size={26}
                    style={{color: '#000'}} />
                </TouchableOpacity>
              </View>
            </View>
            <Text numberOfLines={2} style={{fontFamily: 'ralewayBold', fontSize: 15, paddingLeft: 10, paddingRight: 10}}>My Upcoming Mission Trip to Mexico</Text>
            <View style={[ss.row, ss.flex1, ss.spaceBetween]}>
              <Text numberOfLines={3} style={[ss.padding10, ss.flex1, {paddingTop: 0, fontFamily: 'raleway', fontSize: 15}]}>I'm heading to Mexico in a few weeks to build houses for families. I'd really appreciate your prayers for a safe trip. Please pray that I would grow in grace and charity by humbling myself and become a gospel servant for these families.</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={20}
                style={{color: '#555', paddingRight: 10}} />
            </View>
            <View style={[ss.row, ss.padding10, ss.spaceAround]}>
              <TouchableOpacity style={[ss.smallWhiteButton, {width: '40%'}]}>
                <Text style={ss.smallButtonText}>SEND CARD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[ss.smallBlueButton, {width: '40%'}]}>
                <Text style={[ss.smallButtonText, ss.whiteText]}>SEND PRAYER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default GroupPresenter
