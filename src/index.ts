import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for eddienko/jupyterlab-colabinspired-theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@eddienko/jupyterlab-colab-theme:plugin-light',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@eddienko/jupyterlab-colabinspired-theme-light/index.css';

    manager.register({
      name: 'JupyterLab ColabInspired Light',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
