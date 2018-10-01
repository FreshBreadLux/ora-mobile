import React from 'react'
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Ionicons, Octicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

/*
  TODO: This is a placeholder presentational standin; I need to make it functional
*/
const GroupPrayerPresenter = ({ navigation }) => {
  return (
  <View style={ss.whiteContainer}>
    <SafeAreaView style={ss.invisiContainer}>
      <ScrollView>
        <View style={ss.whiteBackground}>
          <View style={[ss.row, ss.spaceBetween]}>
            <Text style={[ss.tagLine, ss.greyText, {paddingLeft: 10}]}>Reflection</Text>
            <TouchableOpacity style={ss.padding10} onPress={() => navigation.goBack()}>
              <Ionicons
                name="md-close-circle"
                size={26}
                style={{color: '#aaa'}} />
            </TouchableOpacity>
          </View>
          <View style={[ss.fullWidth, ss.center, ss.padding10]}>
            <Image
              style={{height: 100, width: 100, borderRadius: 50, resizeMode: 'cover'}}
              source={require('../../../assets/images/father-john-baptist.jpg')} />
          </View>
          <Text style={[ss.padding10, ss.fullWidth, ss.centerText, {fontFamily: 'ralewayBold', fontSize: 18}]}>Father John Baptist</Text>
          <Text style={[ss.fullWidth, ss.padding15, ss.centerText, {fontFamily: 'ralewayBold', fontSize: 18}]}>A Reflection on Jesus's Special Care for the Poor</Text>
          <Text style={[ss.padding10, ss.flex1, ss.body]}>This is a reflection on Jesus's special care for the poor. We're so used to the idea of Jesus caring for the poor that we sometimes forget just how shocking some of His actions were.{'\n\n'}Jesus's special attention to the poor can help us better understand the nature of God, as well as how we are called to follow after Him.</Text>
          <View style={[ss.row, ss.fullWidth, ss.center, ss.marginTop20, ss.marginBottom20]}>
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
          <View style={[ss.row, ss.padding10, ss.spaceAround]}>
            <TouchableOpacity style={[ss.smallWhiteButton, {width: '40%'}]}>
              <Text style={ss.smallButtonText}>SEND CARD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ss.smallBlueButton, {width: '40%'}]}>
              <Text style={[ss.smallButtonText, ss.whiteText]}>SEND PRAYER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </View>
)}

export default GroupPrayerPresenter

/*
  <View style={ss.whiteContainer}>
    <SafeAreaView style={ss.invisiContainer}>
      <ScrollView>
        <View style={ss.whiteBackground}>
          <View style={[ss.row, ss.spaceBetween]}>
            <View style={[ss.row, ss.center]}>
              <View style={[ss.padding4, {paddingLeft: 10, paddingRight: 10}]}>
                <Image
                  style={{height: 30, width: 30, borderRadius: 15, resizeMode: 'cover'}}
                  source={require('../../../assets/images/bobby-headshot.jpg')} />
              </View>
              <Text style={[ss.tagLine, ss.greyText]}>Prayer of Gratitude</Text>
            </View>
            <TouchableOpacity style={ss.padding10} onPress={() => navigation.goBack()}>
              <Ionicons
                name="md-close-circle"
                size={26}
                style={{color: '#aaa'}} />
            </TouchableOpacity>
          </View>
          <Image
            style={{width: imageSize, height: imageSize, resizeMode: 'cover'}}
            source={require('../../../assets/images/community-group.jpg')} />
          <Text style={[ss.padding10, {fontFamily: 'raleway', fontSize: 18}]}>Bobby Lux</Text>
          <Text style={[ss.fullWidth, ss.padding15, ss.centerText, {fontFamily: 'ralewayBold', fontSize: 18}]}>Praise and Thanksgiving for My Small Group</Text>
          <Text style={[ss.padding10, ss.flex1, ss.body]}>I wanted to take the time to thank God for my small group. Being a part of this community has really helped me grow closer to Jesus, and I'm so grateful for it. Let's all pray that more people get the chance to experience the transforming effects of Jesus's saving love.</Text>
          <View style={[ss.row, ss.fullWidth, ss.center, ss.marginTop20, ss.marginBottom20]}>
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
          <View style={[ss.row, ss.padding10, ss.spaceAround]}>
            <TouchableOpacity style={[ss.smallWhiteButton, {width: '40%'}]}>
              <Text style={ss.smallButtonText}>SEND CARD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ss.smallBlueButton, {width: '40%'}]}>
              <Text style={[ss.smallButtonText, ss.whiteText]}>SEND PRAYER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </View>
*/

/*
  <View style={ss.whiteContainer}>
    <SafeAreaView style={ss.invisiContainer}>
      <ScrollView>
        <View style={ss.whiteBackground}>
          <View style={[ss.row, ss.spaceBetween]}>
            <Text style={[ss.tagLine, ss.greyText, {paddingLeft: 10}]}>Prayer Request</Text>
            <TouchableOpacity style={ss.padding10} onPress={() => navigation.goBack()}>
              <Ionicons
                name="md-close-circle"
                size={26}
                style={{color: '#aaa'}} />
            </TouchableOpacity>
          </View>
          <View style={[ss.fullWidth, ss.center, ss.padding10]}>
            <Image
              style={{height: 100, width: 100, borderRadius: 50, resizeMode: 'cover'}}
              source={require('../../../assets/images/blue-question-mark.png')} />
          </View>
          <Text style={[ss.padding10, ss.fullWidth, ss.centerText, {fontFamily: 'ralewayBold', fontSize: 18}]}>Anonymous Request</Text>
          <Text style={[ss.fullWidth, ss.padding15, ss.centerText, {fontFamily: 'ralewayBold', fontSize: 18}]}>Struggles with Selfishness</Text>
          <Text style={[ss.padding10, ss.flex1, ss.body]}>I recently got engaged, and I'm incredibly happy and excited. However, the engagement is also making me realize how selfish I can be. I want to be the best spouse that I can be, and I'm really saddened every time I realize how much I'm placing myself at the center of things, instead of God first and my future spouse next. Please pray for me, that I would grow in self-sacrifice.</Text>
          <View style={[ss.row, ss.fullWidth, ss.center, ss.marginTop20, ss.marginBottom20]}>
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
          <View style={[ss.row, ss.padding10, ss.spaceAround]}>
            <TouchableOpacity style={[ss.smallWhiteButton, {width: '40%'}]}>
              <Text style={ss.smallButtonText}>SEND CARD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ss.smallBlueButton, {width: '40%'}]}>
              <Text style={[ss.smallButtonText, ss.whiteText]}>SEND PRAYER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </View>
*/
