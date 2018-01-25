import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import ss from '../StyleSheet'
import { LinearGradient } from 'expo'

const ManageFollowScroll = ({ screenProps, navigation }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/Rome-Follows.jpg')}
        style={ss.backgroundImage}
      />
    </View>
    {!screenProps.userId
    ? <SafeAreaView style={ss.invisiContainer}>
        <View style={[ss.invisiContainer, ss.padding15]}>
          <View style={[ss.flex1, ss.center]}>
          <TouchableOpacity
            style={[ss.button, ss.fullWidth]}
            onPress={() => navigation.navigate('Submit')}>
              <Text style={[ss.buttonText, ss.centerText]}>please login to manage your follows</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    : <SafeAreaView style={ss.invisiContainer}>
        <View style={ss.backgroundImageFrame}>
          <LinearGradient
            colors={['transparent', 'transparent']}
            start={[0.5, 0.2]}
            style={ss.flex1} />
        </View>
        <View style={[ss.invisiContainer, ss.padding15]}>
          <View style={ss.invisiContainer}>
            <View style={[ss.center, ss.titleBottomBorder]}>
              <Text style={[ss.header, ss.whiteText]}>FOLLOWS</Text>
            </View>
            {screenProps.follows && screenProps.follows.length
            ? <View style={[ss.flex1, ss.center]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}>
                { screenProps.follows.map(follow => (
                  <TouchableOpacity
                    style={[ss.fullWidth, ss.padding15, ss.rowOpacity, ss.marginTop]}
                    key={follow.id}
                    onPress={() => {
                      navigation.navigate('MyFollow', { follow })
                    }}>
                    <Text
                      numberOfLines={1}
                      style={ss.subHeader}>{follow.subject}</Text>
                    <Text
                      numberOfLines={1}
                      style={ss.body}>{follow.body}</Text>
                  </TouchableOpacity>
                ))}
                </ScrollView>
              </View>
            : <View style={[ss.flex1, ss.center]}>
                <TouchableOpacity
                style={[ss.button, ss.fullWidth]}
                onPress={() => navigation.navigate('Accept')}>
                  <Text style={[ss.buttonText, ss.centerText]}>when you follow prayers, they will be listed here</Text>
                </TouchableOpacity>
              </View>
            }
            </View>
        </View>
      </SafeAreaView>
    }
  </View>
)


export default ManageFollowScroll
