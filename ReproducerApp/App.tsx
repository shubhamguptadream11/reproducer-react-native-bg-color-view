import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

/**
 * Repro for bug with View and Text losing backgroundColor on iOS, when
 * borderStyle is "dashed" or "dotted" and borderWidth is 0.
 */

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.testComponent}>Text Component</Text>
        <View style={styles.testComponent}>
          <Text>View Component</Text>
        </View>
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  testComponent: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
    borderStyle: 'dashed', //  repros bug with borderWidth: 0
    // borderStyle: 'dotted', // repros bug with borderWidth: 0
    // borderStyle: 'solid', // works fine
    // borderWidth: 0, //  repros bug with borderStyle: "dashed" or "dotted"
    // borderWidth: 0.1, // works fine
  },
});
