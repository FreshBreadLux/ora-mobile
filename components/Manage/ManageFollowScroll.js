import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'

const ManageMyFollow = ({ screenProps, navigation }) => (
  <View style={styles.container}>
    {!screenProps.userId
      ? <View style={styles.center}>
          <Text>Please login to manage your follows</Text>
        </View>
      : <View style={styles.container}>
          {screenProps.follows && screenProps.follows.length
            ? <View style={styles.addPadding}>
                <ScrollView
                showsVerticalScrollIndicator={false}>
                { screenProps.follows.map(follow => (
                  <TouchableOpacity
                    key={follow.id}
                    onPress={() => navigation.navigate('MyFollow', { follow })}>
                    <View style={[styles.fullWidth, styles.listBottomBorder]}>
                      <Text style={[styles.buttonText, { color: '#000' }]}>{follow.subject}</Text>
                      <Text style={styles.body} numberOfLines={2}>{follow.body}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
                </ScrollView>
              </View>
            : <View style={styles.center}>
                <Text>When you follow prayers, they will be listed here.</Text>
              </View>
          }
        </View>
    }
  </View>
)

export default ManageMyFollow
