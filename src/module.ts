import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel)
  .setPanelOptions((builder) => {
    return builder
      .addTextInput({
        path: 'text',
        name: 'Simple text option',
        description: 'Description of panel option',
        defaultValue: 'Default value of text input option',
      })
      .addBooleanSwitch({
        path: 'showSeriesCount',
        name: 'Show series counter',
        defaultValue: false,
      })
      .addRadio({
        path: 'seriesCountSize',
        defaultValue: 'sm',
        name: 'Series counter size',
        settings: {
          options: [
            {
              value: 'sm',
              label: 'Small',
            },
            {
              value: 'md',
              label: 'Medium',
            },
            {
              value: 'lg',
              label: 'Large',
            },
          ],
        },
        showIf: (config) => config.showSeriesCount,
      });
  })
  .setMigrationHandler((panel) => {
    console.log('Set migration handler running');

    // with scenes (11.3) panel.targets is empty
    // without scenes panels.targets should contain the queries
    console.log('If this panel has a query (which shuold have) the following console.log should print its target');
    console.log('Targets', panel.targets);
    return panel.options;
  });
