/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import I18n from './i18n/i18n';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LocalizedHeader from './LocalizedHeader';
import LocalizedReloadInstructions from './LocalizedReloadInstructions';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
	/* Debug?
	import { getLanguages } from 'react-native-i18n';

	getLanguages().then(languages => {
		console.log("showing languages");
		console.log(languages); // ['en-US', 'en']
	});
	*/
	//I18n.defaultLocale = "fr";
	// For test purposes only, set the locale, and see your text change to the new language.
	// I18n.locale = 'fr';
	return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <LocalizedHeader text={I18n.t('welcome')}/>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{I18n.t('step_one')}</Text>
              <Text style={styles.sectionDescription}>
			  {I18n.t('edit_instr1')} <Text style={styles.highlight}>{I18n.t('edit_instr2')}</Text> {I18n.t('edit_instr3')}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{I18n.t('see_results')}</Text>
              <Text style={styles.sectionDescription}>
                <LocalizedReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{I18n.t('debug')}</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{I18n.t('learn_more')}</Text>
              <Text style={styles.sectionDescription}>
			  {I18n.t('do_next')}
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
