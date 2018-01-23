import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import styles from '../StyleSheet'
import { LinearGradient } from 'expo'

const ManageFollowScroll = ({ screenProps, navigation }) => (
  <View style={styles.invisiContainer}>
    <View style={styles.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/Rome-Follows.jpg')}
        style={styles.backgroundImage}
      />
    </View>
    {!screenProps.userId
    ? <SafeAreaView style={styles.invisiContainer}>
        <View style={[styles.invisiContainer, styles.padding15]}>
          <View style={[styles.flex1, styles.center]}>
          <TouchableOpacity
            style={[styles.button, styles.fullWidth]}
            onPress={() => navigation.navigate('Submit')}>
              <Text style={[styles.buttonText, styles.centerText]}>please login to manage your follows</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    : <SafeAreaView style={styles.invisiContainer}>
        <View style={styles.backgroundImageFrame}>
          <LinearGradient
            colors={['#fff', 'transparent']}
            start={[0.5, 0.2]}
            style={styles.flex1} />
        </View>
        <View style={[styles.invisiContainer, styles.padding15]}>
          <View style={styles.invisiContainer}>
            <View style={[styles.center, styles.titleBottomBorder]}>
              <Text style={styles.font24}>FOLLOWS</Text>
            </View>
            {screenProps.follows && screenProps.follows.length
            ? <View style={[styles.flex1, styles.center]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}>
                { screenProps.follows.map(follow => (
                  <TouchableOpacity
                    style={[styles.fullWidth, styles.padding15, styles.opacityContainer, styles.marginTop]}
                    key={follow.id}
                    onPress={() => {
                      navigation.navigate('MyFollow', { follow })
                    }}>
                    <Text
                      numberOfLines={1}
                      style={styles.font20}>{follow.subject}</Text>
                    <Text
                      numberOfLines={1}
                      style={styles.font16}>{follow.body}</Text>
                  </TouchableOpacity>
                ))}
                </ScrollView>
              </View>
            : <View style={[styles.flex1, styles.center]}>
                <TouchableOpacity
                style={[styles.button, styles.fullWidth]}
                onPress={() => navigation.navigate('Accept')}>
                  <Text style={[styles.buttonText, styles.centerText]}>when you follow prayers, they will be listed here</Text>
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
