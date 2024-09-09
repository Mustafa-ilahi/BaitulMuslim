import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    height: sizes.screenHeight,
  },
  backButton: {
    marginBottom: 20,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#5BC0DE',
    padding: sizes.screenHeight * 0.02,
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },
  btnText: {
    color: colors.white,
    fontSize: fontSize.h5,
    left:sizes.screenWidth*0.02
  },
  btnIcon: {
    height: sizes.screenHeight * 0.05,
    width: sizes.screenHeight * 0.05,
    right:sizes.screenWidth*0.02

  },
});
