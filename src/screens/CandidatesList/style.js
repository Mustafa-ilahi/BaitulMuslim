import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.02,
  },
  menuIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.035,
    alignSelf: 'flex-end',
  },
  heading: {
    color: colors.greenBg,
    fontSize: fontSize.h3,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.02,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.07,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.05,
    borderWidth: 1,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.85,
  },
  eyeicon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
    alignSelf: 'flex-end',
  },
  input: {
    width: sizes.screenWidth * 0.75,
    color: colors.black,
    marginStart: sizes.screenWidth * 0.02,
  },
  right: {
    right: sizes.screenWidth * 0.012,
  },
  cardTop: {
    marginTop: sizes.screenHeight * 0.05,
  },
  card: {
    backgroundColor: colors.cardBg,
    height: sizes.screenHeight * 0.38,
    borderRadius: sizes.screenWidth * 0.05,
    marginBottom: sizes.screenHeight * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  premiumBtn: {
    backgroundColor: colors.btnBg,
    padding: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.2,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'flex-end',
    top: sizes.screenHeight * 0.02,
    right: sizes.screenWidth * 0.02,
  },

  whiteText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: fontSize.small,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: sizes.screenWidth * 0.1,
  },
  content: {
    color: colors.grayText,
    fontSize: fontSize.h6,
    left: sizes.screenWidth * 0.015,
    fontWeight: '500',
    width: sizes.screenWidth * 0.45,
  },
  marginBottom: {
    marginBottom: sizes.screenHeight * 0.013,
  },
  icon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.041,
  },
  icon2: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.061,
  },
  contentId: {
    color: colors.grayText,
    fontSize: fontSize.h5,
    left: sizes.screenWidth * 0.1,
    fontWeight: '600',
    width: sizes.screenWidth * 0.45,
    bottom: sizes.screenWidth * 0.05,
  },
  msgBtn: {
    backgroundColor: colors.btnBg,
    padding: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.35,
    borderRadius: sizes.screenWidth * 0.03,
  },
  profilBtn: {
    backgroundColor: colors.blue,
    padding: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.35,
    borderRadius: sizes.screenWidth * 0.03,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: sizes.screenWidth * 0.03,
    paddingLeft: sizes.screenWidth * 0.03,
  },
  msgText: {
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSize.h6,
    fontWeight: '600',
  },
  profilText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.h6,
    fontWeight: '600',
  },
});
