import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from '../StyleSheet'

const ManagePrayerScroll = ({ screenProps, navigation }) => (
  <SafeAreaView style={styles.whiteContainer}>
    <View style={[styles.whiteContainer, styles.padding15]}>
      {!screenProps.userId
        ? <View style={[styles.flex1, styles.center]}>
            <Text style={styles.font16}>Please login to manage your prayers</Text>
          </View>
        : <View style={styles.invisiContainer}>
            <View style={[styles.center, styles.titleBottomBorder]}>
              <Text style={styles.font24}>Prayers</Text>
            </View>
            {screenProps.prayers && screenProps.prayers.length
              ? <View style={[styles.flex1, styles.center]}>
                  <ScrollView
                    style={[styles.flex1]}
                    showsVerticalScrollIndicator={false}>
                  { screenProps.prayers.map(prayer => (
                      <TouchableOpacity
                        style={styles.fullWidth}
                        key={prayer.id}
                        onPress={() => navigation.navigate('MyPrayer', { prayer })}>
                        <View style={[styles.fullWidth, styles.listBottomBorder]}>
                          <Text
                            numberOfLines={1}
                            style={styles.font20}>{prayer.subject}</Text>
                          <Text
                            numberOfLines={1}
                            style={styles.font16}>
                            {prayer.body}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              : <View style={[styles.flex1, styles.center]}>
                  <Text style={[styles.font16, styles.centerText]}>When you submit prayers, they will be listed here.</Text>
                </View>
            }
          </View>
      }
    </View>
  </SafeAreaView>
)

export default ManagePrayerScroll
