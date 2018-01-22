import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import styles from '../StyleSheet'
import { LinearGradient } from 'expo'

const ManagePrayerScroll = ({ screenProps, navigation }) => (
  <View style={styles.invisiContainer}>
    <View style={styles.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/Rome-Prayers.jpg')}
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
              <Text style={styles.buttonText}>Please login to manage your prayers</Text>
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
                  <Text style={styles.font24}>PRAYERS</Text>
                </View>
                {screenProps.prayers && screenProps.prayers.length
                  ? <View style={[styles.flex1, styles.center]}>
                      <ScrollView
                        style={[styles.flex1]}
                        showsVerticalScrollIndicator={false}>
                      { screenProps.prayers.map(prayer => (
                          <TouchableOpacity
                            style={[styles.fullWidth, styles.padding15, styles.opacityContainer, styles.marginTop]}
                            key={prayer.id}
                            onPress={() => navigation.navigate('MyPrayer', { prayer })}>
                            <Text
                              numberOfLines={1}
                              style={styles.font20}>{prayer.subject}</Text>
                            <Text
                              numberOfLines={1}
                              style={styles.font16}>
                              {prayer.body}</Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  : <View style={[styles.flex1, styles.center]}>
                      <Text style={[styles.font16, styles.centerText]}>When you submit prayers, they will be listed here.</Text>
                    </View>
                }
              </View>
        </View>
      </SafeAreaView>
    }
  </View>
)

export default ManagePrayerScroll
