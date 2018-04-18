import React from 'react'
import { connect } from 'react-redux'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { WebBrowser } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const DonatePresenter = ({ investmentTotal, firstName, lastName }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.whiteContainer, ss.padding15]}>
      <View style={[ss.addMedViewSpacing, ss.topBorder]}>
        {!investmentTotal
        ? <View>
            <Text style={ss.body}>Ora is a non-profit app, and it will always be free. This means that we rely on donations from our community to meet all operating expenses, from keeping the servers running to funding future projects. We hope to continue making tools for faith in a technology age that has other priorities, and we're inviting you to be a part of it.{'\n\n'}If you'd like to become a part of our team you can use the link below to sign up as a donor on our website.</Text>
            <View style={[ss.center, ss.addMedViewSpacing]}>
              <TouchableOpacity
                onPress={() => WebBrowser.openBrowserAsync('https://www.oraprayernetwork.com/donor-signup')}>
                <View style={[ss.row, ss.padding4]}>
                  <Text style={[ss.subBody, ss.darkBlueText, ss.paddingRight7]}>DONOR SIGNUP</Text>
                  <Ionicons
                    name="ios-arrow-forward"
                    size={18}
                    color="#1e3799" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        : <View>
            <Text style={ss.body}>Welcome back, {`${firstName}`}, and thank you so much for your continued support of Ora. We're luck to have you on the team. Please remember that you can reach out at any time at support@oraprayernetwork.com. We love hearing from you!</Text>
            <View style={[ss.row, ss.addLargeViewSpacing, ss.spaceBetween]}>
              <View>
                <Text style={ss.subHeader}>{`${firstName} ${lastName}`}</Text>
                <Text style={ss.subBody}>DONOR</Text>
              </View>
              <View>
                <Text style={[ss.header, ss.rightText]}>{`$${investmentTotal / 100}`}</Text>
                <Text style={[ss.subBody, ss.rightText]}>INVESTMENT TOTAL</Text>
              </View>
            </View>
            <View style={[ss.center, ss.addMedViewSpacing]}>
              <TouchableOpacity
                onPress={() => WebBrowser.openBrowserAsync('https://www.oraprayernetwork.com/manage-my-donations')}>
                <View style={[ss.row, ss.padding4]}>
                  <Text style={[ss.subBody, ss.darkBlueText, ss.paddingRight7]}>MY DONATIONS</Text>
                  <Ionicons
                    name="ios-arrow-forward"
                    size={18}
                    color="#1e3799" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    </View>
  </SafeAreaView>
)

const mapState = state => ({
  investmentTotal: state.userInfo.investmentTotal,
  firstName: state.userInfo.firstName,
  lastName: state.userInfo.lastName,
})

export default connect(mapState)(DonatePresenter)
