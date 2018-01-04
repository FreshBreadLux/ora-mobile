import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const ManageMyPrayer = ({ screenProps, navigation }) => (
  <View style={styles.container}>
    {!screenProps.userId
      ? <View style={styles.center}>
          <Text>Please login to manage your prayers</Text>
        </View>
      : <View style={styles.container}>
          {!screenProps.prayers
            ? <View style={styles.center}>
                <Text>When you submit prayers, they will be listed here.</Text>
              </View>
            : <View style={styles.addPadding}>
                <ScrollView>
                { screenProps.prayers.map(prayer => (
                  <TouchableOpacity
                    key={prayer.id}
                    onPress={() => navigation.navigate('MyPrayer', { prayer })}>
                    <View style={[styles.fullWidth, styles.listBottomBorder]}>
                      <Text style={[styles.buttonText, { color: '#000' }]}>{prayer.subject}</Text>
                      <Text style={styles.body} numberOfLines={2}>{prayer.body}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          }
        </View>
    }
  </View>
)

export default ManageMyPrayer
