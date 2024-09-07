import {StyleSheet} from 'react-native';
import {colors, sizes, fontSize} from '../../services';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: 250, // Adjust the height accordingly
    resizeMode: 'cover',
  },
  scrollView: {
    marginTop: -30, // This will pull the content slightly over the image
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff', // Ensuring the content background color
    overflow: 'hidden', // Ensures the content stays within the rounded corners
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  idSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  idText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  premiumBadge: {
    backgroundColor: colors.btnBg,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  premiumText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: fontSize.small,
    fontWeight: '600',
  },
  timeSection: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#A5F58A',
    paddingRight: sizes.screenWidth * 0.02,
    paddingLeft: sizes.screenWidth * 0.02,
    padding:sizes.screenHeight*0.01,
    borderRadius:sizes.screenWidth*0.02
  },
  activeTime: {
    color: colors.black,
  },
  menuSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  menuText: {
    fontSize: 16,
    color: '#555',
  },
  section: {
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
    color: '#555',
  },
  sectionText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 3,
  },
  buttonSection: {
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  actionButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
