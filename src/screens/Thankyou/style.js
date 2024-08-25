import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  header: {
    borderWidth: 1,
    padding: sizes.screenHeight * 0.02,
    width: sizes.screenWidth,
    borderColor: colors.border,
    marginBottom: sizes.screenHeight * 0.2,
  },
  headerText: {
    color: colors.borderColor,
    fontSize: fontSize.large,
    marginLeft: sizes.screenWidth * 0.1,
  },
  successIcon: {
    height: sizes.screenHeight * 0.09,
    width: sizes.screenHeight * 0.09,
    marginBottom: sizes.screenHeight * 0.02,
  },
  content: {
    color: colors.grayText,
    fontSize: fontSize.medium,
    textAlign: 'center',
  },
  bold: {
    // fontWeight: '500',
  },
  padding: {
    padding: sizes.screenWidth * 0.04,
    paddingTop: sizes.screenHeight * 0.01,
  },
  saveBtn: {
    color: colors.white,
    backgroundColor: colors.greenBg,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.02,
    width: sizes.screenWidth * 0.4,
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
});
