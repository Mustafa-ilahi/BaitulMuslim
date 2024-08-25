import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  title: {
    fontSize: fontSize.h3,
    color: colors.black,
  },
  backButtonTop: {
    marginTop: sizes.screenHeight * 0.03,
    alignSelf: 'flex-start',
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  header: {
    borderWidth: 1,
    padding: sizes.screenHeight * 0.02,
    width: sizes.screenWidth,
    borderColor: colors.border,
  },
  headerText: {
    color: colors.borderColor,
    fontSize: fontSize.large,
    marginLeft: sizes.screenWidth * 0.1,
  },
  pictureCard: {
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.03,
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.3,
    borderRadius: sizes.screenWidth * 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  cameraBtn: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.01,
    right: sizes.screenHeight * 0.01,
  },
  cameraIcon: {
    height: sizes.screenHeight * 0.032,
    width: sizes.screenWidth * 0.073,
  },
  btn: {
    backgroundColor: colors.lightGreen,
    paddingVertical: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.8,
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.015,
    marginBottom: sizes.screenHeight * 0.015,
  },
  btnText: {
    color: colors.black,
    fontSize: fontSize.extraLarge,
  },

  saveBtn: {
    color: colors.white,
    backgroundColor: colors.greenBg,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  saveBtnText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  btnTop: {
    marginTop: sizes.screenHeight * 0.02,
  },
  instructionCard: {
    marginTop: sizes.screenHeight * 0.02,
    backgroundColor: colors.gray,
    height: sizes.screenHeight * 0.26,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenHeight * 0.02,
    padding: sizes.screenHeight * 0.02,
  },
  head: {
    textAlign: 'center',
    color: colors.grayText,
    fontSize: fontSize.small,
    marginBottom: sizes.screenHeight * 0.005,
  },
  content: {
    color: colors.grayText,
    fontSize: fontSize.small,
    marginBottom: sizes.screenHeight * 0.005,
  },
  loginText: {
    color: colors.grayText,
    fontSize: fontSize.small,
  },
  loginLink: {
    color: colors.blue,
    fontSize: fontSize.small,
  },
  top: {
    top: sizes.screenHeight * 0.001,
  },
  green: {
    color: colors.green,
  },
  red: {
    color: colors.red,
  },
});
