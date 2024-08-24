import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.screenWidth * 0.1,
    paddingTop: sizes.screenHeight * 0.05,
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  logo: {
    height: sizes.screenHeight * 0.131,
    width: sizes.screenHeight * 0.115,
    marginBottom: sizes.screenHeight * 0.01,
  },
  title: {
    fontSize: fontSize.h3,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.02,
  },
  orText: {
    marginHorizontal: sizes.screenWidth * 0.02,
    color: colors.green,
  },
  googleButton: {
    width: '100%',
    backgroundColor: colors.blue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes.screenHeight * 0.008,
    paddingHorizontal: sizes.screenWidth * 0.1,
    marginVertical: sizes.screenHeight * 0.025,
  },
  googleButtonText: {
    fontSize: fontSize.large,
    color: colors.white,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: sizes.screenHeight * 0.02,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.green,
  },
  input: {
    width: '100%',
    padding: sizes.screenHeight * 0.01,
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenHeight * 0.018,
    backgroundColor: colors.white,
    color: colors.black,
  },
  registerButton: {
    backgroundColor: colors.blue,
    paddingVertical: sizes.screenHeight * 0.008,
    paddingHorizontal: sizes.screenWidth * 0.06,
    borderRadius: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
  },
  registerButtonText: {
    color: colors.white,
    fontSize: fontSize.large,
  },
  textContainer: {
    // marginVertical: sizes.screenHeight * 0.02,
  },
  loginText: {
    fontSize: fontSize.medium,
    color: colors.black,
    textAlign: 'center',
    marginVertical: sizes.screenHeight * 0.001,
  },
  loginLink: {
    color: colors.white,
    backgroundColor: colors.blue,
    padding: sizes.screenHeight * 0.004,
    borderRadius: sizes.screenWidth * 0.02,
  },
  top: {
    top: sizes.screenHeight * 0.008,
  },
  registerLink: {
    color: colors.black,
    backgroundColor: colors.yellow,
    padding: sizes.screenHeight * 0.008,
    borderRadius: sizes.screenWidth * 0.03,
  },
  whatsappLink: {
    color: colors.green,
  },
  noticeText: {
    color: colors.black,
    textAlign: 'center',
    padding: sizes.screenHeight * 0.03,
    backgroundColor: colors.lightOrange,
    borderRadius: sizes.screenWidth * 0.08,
    fontSize: fontSize.medium,
  },

  noticeTop: {
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bg: {
    backgroundColor: colors.disabledBg2,
    padding: sizes.screenHeight * 0.001,
    borderRadius: sizes.screenWidth * 0.03,
  },
  whatsappIcon: {
    height: sizes.screenHeight * 0.041,
    width: sizes.screenHeight * 0.041,
    marginEnd: sizes.screenWidth * 0.01,
  },
  inputTop: {
    marginTop: sizes.screenHeight * 0.02,
  },
});
