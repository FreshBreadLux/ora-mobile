import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const ManageMyFollow = ({ screenProps, navigation }) => (
  <View style={[styles.whiteContainer, styles.padding15]}>
    {!screenProps.userId
      ? <View style={[styles.flex1, styles.center]}>
          <Text style={styles.font16}>Please login to manage your follows</Text>
        </View>
      : <View style={styles.invisiContainer}>
          {screenProps.follows && screenProps.follows.length
            ? <View style={[styles.flex1, styles.center]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}>
                { screenProps.follows.map(follow => (
                  <TouchableOpacity
                    key={follow.id}
                    onPress={() => navigation.navigate('MyFollow', { follow })}>
                    <View style={[styles.fullWidth, styles.listBottomBorder]}>
                      <Text
                        numberOfLines={1}
                        style={styles.font20}>{follow.subject}</Text>
                      <Text
                        numberOfLines={1}
                        style={styles.font16}>{follow.body}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
                </ScrollView>
              </View>
            : <View style={[styles.flex1, styles.center]}>
                <Text style={[styles.font16, styles.centerText]}>When you follow prayers, they will be listed here.</Text>
              </View>
          }
        </View>
    }
  </View>
)

export default ManageMyFollow
