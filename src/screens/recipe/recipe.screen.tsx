import React, { useState, VFC } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { ButtonBack } from '~components/common/button-header';
import { ButtonTab } from '~components/common/button-tab';
import { CardInfoExtended } from '~components/common/card-info-extended';
import { RatioImage } from '~components/common/ratio-image';
import { PencilSVG } from '~components/common/svg/pencil-svg';
import { SettingsSVG } from '~components/common/svg/settings-svg';
import { SettingsTabSVG } from '~components/common/svg/settingsTab-svg';
import { ShareSVG } from '~components/common/svg/share-svg';
import globalStyles from '~global/constants.style';
import { RouteRecipeScreenType } from '~navigations/stack-navigation-common/stack-navigation-category';
import { RecipeInfo } from './recipe-info';
import { RecipeIngredients } from './recipe-ingredients';
import { RecipeSteps } from './recipe-steps';

export const Recipe: VFC<Props> = ({ route, navigation }) => {
  const [active, setActive] = useState<'info' | 'ingredients' | 'steps'>(
    'info',
  );

  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.wrapper}>
          <RatioImage
            heightRatio={1}
            source={route.params.image}
            style={styles.image}
          />
          <ButtonBack
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            type="back"
          />
          <ButtonBack
            style={styles.likeButton}
            onPress={() => alert('Like!')}
            type="like"
          />
          <View style={styles.container}>
            <CardInfoExtended title={route.params.name} style={styles.card} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.headerButtons}>
            <ButtonTab
              name="Info"
              active={active === 'info'}
              style={[styles.notLastButton, styles.headerButton]}
              onPress={() => setActive('info')}
            />
            <ButtonTab
              name="Ingredients"
              active={active === 'ingredients'}
              style={[styles.notLastButton, styles.headerButton]}
              onPress={() => setActive('ingredients')}
            />
            <ButtonTab
              name="Steps"
              active={active === 'steps'}
              style={styles.headerButton}
              onPress={() => setActive('steps')}
            />
          </View>
          {active === 'info' && (
            <RecipeInfo text="This is a simple recipe of famous Catalana mousse which is used in various deserts " />
          )}
          {active === 'ingredients' && (
            <RecipeIngredients title={route.params.name} />
          )}
          {active === 'steps' && <RecipeSteps />}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <PencilSVG />
        <SettingsTabSVG />
        <ShareSVG />
        <SettingsSVG />
      </View>
    </>
  );
};

type Props = {
  route: RouteRecipeScreenType;
  navigation: any;
};

const styles = StyleSheet.create({
  scroll: {
    marginBottom: globalStyles.TAB_HEIGHT,
  },
  wrapper: {
    display: 'flex',
    position: 'relative',
    backgroundColor: globalStyles.BG_COLOR_MAIN,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  backButton: {
    position: 'absolute',
    left: 17,
    zIndex: 1,
    top: 60,
  },
  likeButton: {
    position: 'absolute',
    right: 17,
    zIndex: 1,
    top: 60,
  },
  container: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  card: {
    marginBottom: 12,
    marginTop: 350,
  },
  body: {
    backgroundColor: globalStyles.BG_COLOR_SECOND,
    flex: 1,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    paddingTop: 20,
  },
  headerButtons: {
    flexDirection: 'row',
    marginBottom: 21,
  },
  notLastButton: {
    marginRight: 8,
  },
  headerButton: {
    flexGrow: 1,
  },
  footer: {
    height: globalStyles.TAB_HEIGHT,
    backgroundColor: globalStyles.BG_COLOR_SECOND,
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    display: 'flex',
    paddingTop: 25,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
