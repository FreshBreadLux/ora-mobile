import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const ManageMyPrayer = ({ screenProps, navigation }) => (
  <View style={[styles.container, {backgroundColor: '#fff'}]}>
    {!screenProps.userId
      ? <View style={styles.center}>
          <Text>Please login to manage your prayers</Text>
        </View>
      : <View style={styles.container}>
          {screenProps.prayers && screenProps.prayers.length
            ? <View style={styles.addPadding}>
                <ScrollView
                  showsVerticalScrollIndicator={false}>
                { screenProps.prayers.map(prayer => (
                  <TouchableOpacity
                    key={prayer.id}
                    onPress={() => navigation.navigate('MyPrayer', { prayer })}>
                    <View style={[styles.fullWidth, styles.listBottomBorder]}>
                      <Text
                        numberOfLines={1}
                        style={[styles.buttonText, { color: '#000' }]}>{prayer.subject}</Text>
                      <Text
                        numberOfLines={2}
                        style={styles.body}>
                        {prayer.body}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              </View>
            : <View style={styles.center}>
                <Text>When you submit prayers, they will be listed here.</Text>
              </View>
          }
        </View>
    }
  </View>
)

export default ManageMyPrayer
