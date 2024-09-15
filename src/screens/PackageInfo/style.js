import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    height: sizes.screenHeight,
  },
  title: {
    fontSize: fontSize.h4,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.greenBg,
    marginBottom: sizes.screenHeight * 0.03,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: sizes.screenWidth * 0.05,
    padding: 15,
    margin: 20,
    borderColor: '#FFD700',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  planSection: {
    backgroundColor: colors.gray,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planText: {
    fontSize: 12,
    color: '#1d8e17',
  },
  price: {
    fontSize: 12,
    color: colors.grayText,
  },
  divider: {
    marginVertical: 5,
  },
  infoText: {
    fontSize: 12,
    color: '#7e7e7e', 
    marginVertical: 2,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  summaryText: {
    fontSize: 14,
    color: '#000000',
  },
  summaryTextRight: {
    fontSize: 14,
    color: colors.grayText, 
    textAlign: 'right',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000', 
  },
  totalTextRight: {
    fontSize: 14,
    color: colors.black,
    textAlign: 'right',
  },
  button: {
    backgroundColor: colors.blue, 
    padding: 8,
    borderRadius: sizes.screenWidth*0.05,
    alignItems: 'center',
    marginTop: 10,
    width:sizes.screenWidth*0.4,
    alignSelf:'center'
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  top: {
    marginTop: sizes.screenHeight * 0.02,
  },
});
