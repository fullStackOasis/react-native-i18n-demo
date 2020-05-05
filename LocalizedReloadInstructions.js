/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on react-native ReloadInstructions.js source.
 * @flow strict-local
 * @format
 */

import type {Node} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import React from 'react';
import I18n from './i18n/i18n';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

const LocalizedReloadInstructions: () => Node = Platform.select({
  ios: () => (
    <Text>
      {I18n.t('reload_instr1_ios')} <Text style={styles.highlight}>Cmd + R</Text> {I18n.t('reload_instr2_ios')}
    </Text>
  ),
  default: () => (
    <Text>
      {I18n.t('reload_instr1_android')} <Text style={styles.highlight}>R</Text> {I18n.t('reload_instr2_android')}
    </Text>
  ),
});

export default LocalizedReloadInstructions;
