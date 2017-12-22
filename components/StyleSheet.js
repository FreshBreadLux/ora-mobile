import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
   },
   backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
   },
   cover: {
    flex: 1,
    backgroundColor: 'transparent',
   },
   center: {
    justifyContent: 'center',
    alignItems: 'center',
   },
   title: {
     fontFamily: 'open-sans',
     fontSize: 80,
     color: '#fff'
   }
})

export default styles
