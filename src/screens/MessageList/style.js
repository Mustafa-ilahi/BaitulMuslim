import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#68a063',
    padding: sizes.screenHeight * 0.03,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'space-between',
  },
  backButton: {
    paddingRight: 10,
  },
  backText: {
    fontSize: 20,
    color: '#fff',
  },

  userName: {
    fontSize: fontSize.h5,
    color: '#fff',
    // fontWeight: 'bold',
  },
  headerBack: {
    height: sizes.screenHeight * 0.051,
    width: sizes.screenHeight * 0.051,
  },
  notifIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  notifBadge: {
    backgroundColor: '#519259',
    width: sizes.screenHeight * 0.03,
    height: sizes.screenHeight * 0.03,
    borderRadius: sizes.screenHeight * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  greenView: {
    // backgroundColor: '#C0EFBA',
    padding: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E8E1D9',
    // marginBottom: sizes.screenHeight * 0.01,
  },

  profileImage: {
    width: sizes.screenHeight * 0.081,
    height: sizes.screenHeight * 0.08,
    resizeMode: 'contain',
    borderRadius: sizes.screenWidth * 0.5,
  },
  id: {
    color: colors.grayText,
    fontSize: fontSize.h6,
    fontWeight: '600',
    left: sizes.screenWidth * 0.03,
  },
  messageText: {
    color: colors.grayText,
    // fontSize: fontSize.h6,
    // fontWeight: '600',
    left: sizes.screenWidth * 0.03,
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '600',
    left: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.03,
  },
});
