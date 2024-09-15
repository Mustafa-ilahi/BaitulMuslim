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
    backgroundColor: '#F0BB62',
    padding: sizes.screenHeight * 0.03,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },
  backButton: {
    paddingRight: 10,
  },
  backText: {
    fontSize: 20,
    color: '#fff',
  },

  userName: {
    fontSize: fontSize.h6,
    color: '#E43A27',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  headerBack: {
    height: sizes.screenHeight * 0.051,
    width: sizes.screenHeight * 0.051,
  },
  warningIcon: {
    tintColor: '#DE2D10',
    alignSelf: 'center',
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.11,
    marginBottom: sizes.screenHeight * 0.02,
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80, 
  },
  warningSection: {
    alignItems: 'center',
    marginBottom: 20,
  },

  contentSection: {
    marginTop: 10,
  },
  contentText: {
    fontSize: fontSize.medium,
    lineHeight: 20,
    color: colors.grayText,
    marginBottom: 15,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#25D366',
    alignItems: 'center',
    padding: sizes.screenHeight * 0.006,
    width: sizes.screenWidth * 0.65,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.02,
    justifyContent: 'center',
  },
  whatsappIcon: {
    height: sizes.screenHeight * 0.041,
    width: sizes.screenHeight * 0.0411,
    marginEnd: sizes.screenWidth * 0.01,
  },
  btnText: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: fontSize.h6,
    fontWeight: '500',
  },
});
