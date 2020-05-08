/**
 * @format
 */
import 'react-native';
import React from 'react';
import App from '../App';
import LocalizedHeader from '../LocalizedHeader';
import I18n from '../i18n/i18n';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('App renders strings in **French**', () => {
	I18n.locale = 'fr';
	const h = renderer
		.create(<App/>)
		.toJSON();
	expect(h).toMatchSnapshot();
});

it('App renders strings in **English**', () => {
	I18n.locale = 'en';
	const h = renderer
		.create(<App/>)
		.toJSON();
	expect(h).toMatchSnapshot();
});

