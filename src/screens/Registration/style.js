import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    padding: sizes.screenHeight * 0.03,
    alignItems: 'center',
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
  googleButton: {
    backgroundColor: colors.blue,
    paddingVertical: sizes.screenHeight * 0.008,
    paddingHorizontal: sizes.screenWidth * 0.1,
    borderRadius: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.02,
  },
  googleButtonText: {
    color: colors.white,
    fontSize: fontSize.large,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.03,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.green,
  },
  orText: {
    marginHorizontal: sizes.screenWidth * 0.02,
    color: colors.green,
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
  loginText: {
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.02,
  },
  loginLink: {
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
  top: {
    top: sizes.screenHeight * 0.006,
  },
});
