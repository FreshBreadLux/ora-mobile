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
  addPadding: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceAround: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  title: {
    fontFamily: 'open-sans',
    fontSize: 90,
    color: '#fff'
  },
  subject: {
    fontFamily: 'open-sans',
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  body: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 7,
    borderRadius: 7,
  },
  button: {
    padding: 15,
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: 'open-sans',
    fontSize: 18,
    color: '#fff'
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3
  },
  fullWidth: {
    width: '100%'
  }
})

export default styles
