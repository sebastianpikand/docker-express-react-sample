import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrimaryContainer from '../../components/containers/PrimaryContainer';

import GUIMenu from '../../components/navigation/GUIMenu';

import TypographyShowcase from '../../components/gui-showcase/TypographyShowcase';
import ColorsShowcase from '../../components/gui-showcase/ColorsShowcase';
import ButtonsShowcase from '../../components/gui-showcase/ButtonsShowcase';
import TextInputsShowcase from '../../components/gui-showcase/TextInputsShowcase';
import SelectsShowcase from '../../components/gui-showcase/SelectsShowcase';
import CheckboxesShowcase from '../../components/gui-showcase/CheckboxesShowcase';
import RadioGroupShowcase from '../../components/gui-showcase/RadioGroupShowcase';
import HighlightsShowcase from '../../components/gui-showcase/HighlightsShowcase';

import { showcaseContainer, showcaseWrapper } from './_guiPage.module.scss';

const GUIPage = () => {
  return (
    <PrimaryContainer>
      <div style={{ width: '100%' }}>
        <h1 className="mt-0">Graphical User Interface (GUI)</h1>
        <div className={showcaseWrapper}>
          <GUIMenu />
          <div className={showcaseContainer}>
            <Switch>
              <Route path="/gui/typography" component={TypographyShowcase} />
              <Route path="/gui/colors" component={ColorsShowcase} />
              <Route path="/gui/buttons" component={ButtonsShowcase} />
              <Route path="/gui/text-inputs" component={TextInputsShowcase} />
              <Route path="/gui/selects" component={SelectsShowcase} />
              <Route path="/gui/checkboxes" component={CheckboxesShowcase} />
              <Route path="/gui/radiogroups" component={RadioGroupShowcase} />
              <Route path="/gui/highlights" component={HighlightsShowcase} />
            </Switch>
          </div>
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default GUIPage;
