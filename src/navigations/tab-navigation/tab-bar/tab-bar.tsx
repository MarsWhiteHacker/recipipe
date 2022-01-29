import React, { VFC } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types'; // eslint-disable-line

import globalStyles from '~global/constants.style';
import { PlusSVG } from '~components/common/svg/plus-svg';
import { imagePicker } from './utils/iconPicker';
import { TabScreensType } from '../tab-navigation.keys';

export const TabBar: VFC<Props> = ({ state, navigation }) => {
  return (
    <View style={styles.wrapper}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              params: undefined,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableWithoutFeedback
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButtonWrapper}
            key={index}
          >
            <View
              style={[
                styles.tabButton,
                index === 1 && { marginRight: 50 },
                index === 2 && { marginLeft: 50 },
              ]}
            >
              {imagePicker(
                route.name as TabScreensType,
                isFocused
                  ? globalStyles.MAIN_COLOR
                  : globalStyles.DEFAULT_COLOR,
              )}
            </View>
          </TouchableWithoutFeedback>
        );
      })}
      <View style={styles.plusButtonWrapper}>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => alert('Pressed')}
        >
          <PlusSVG fill="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

type Props = {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  insets: EdgeInsets;
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: globalStyles.TAB_COLOR,
    width: '100%',
    height: globalStyles.TAB_HEIGHT,
    paddingBottom: 25,
    position: 'relative',
  },
  tabButtonWrapper: {
    flex: 1,
    height: '100%',
  },
  tabButton: {
    height: 60,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButtonWrapper: {
    position: 'absolute',
    top: -20,
    left: '50%',
    transform: [{ translateX: -30 }],
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: globalStyles.MAIN_COLOR,
  },
  plusButton: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
