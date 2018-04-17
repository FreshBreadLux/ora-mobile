import React from 'react'
import { connect } from 'react-redux'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { WebBrowser } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const DonatePresenter = ({ investmentTotal }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.whiteContainer, ss.padding15]}>
      <View style={[ss.addMedViewSpacing, ss.topBorder]}>
        <Text style={ss.body}>Ora is a non-profit app, and it will always be free. This means that we rely on donations from our community to meet all operating expenses, from keeping the servers running to funding future projects. We hope to continue making tools for faith in a technology age that has other priorities, and we're inviting you to be a part of it.{'\n\n'}If you'd like to become a part of our team you can use the link below to sign up as a donor on our website.</Text>
      </View>
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
  </SafeAreaView>
)

const mapState = state => ({
  investmentTotal: state.userInfo.investmentTotal
})

export default connect(mapState)(DonatePresenter)
