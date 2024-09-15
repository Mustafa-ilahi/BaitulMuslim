import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    // height: sizes.screenHeight,
  },
  title: {
    fontSize: fontSize.h4,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.greenBg,
    marginBottom: sizes.screenHeight * 0.03,
  },
  card: {
    backgroundColor: '#20B70D',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    borderColor: '#FFD700',
    borderWidth: 3,
    elevation: 5,
    width:sizes.screenWidth*0.9,
    alignSelf:'center',
    marginBottom:sizes.screenHeight*0.03
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    color: colors.white,
  },
  starImage: {
    width: sizes.screenWidth*0.2,
    height: sizes.screenHeight*0.1,
    position:'absolute',
    left:sizes.screenWidth*0.67,
    marginLeft: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FAA61A',
    textAlign: 'center',
  },
  benefits: {
    marginVertical: 10,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: sizes.screenWidth * 0.05,
  },
  benefitText: {
    fontSize: 14,
    color: colors.grayText,
    marginVertical: 2,
  },
  button: {
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: sizes.screenWidth*0.03,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff', // White text inside the button
    fontSize: 16,
    fontWeight: 'bold',
  },
});
