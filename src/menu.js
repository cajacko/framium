const { app, Menu } = require('electron');
const { dispatch } = require('./store');
const showChangeUrl = require('./actions/showChangeUrl');

const template = [
  {
    label: 'Service',
    submenu: [
      {
        label: 'Change Service',
        click() {
          console.log('Click Change Service');
          dispatch(showChangeUrl());
        },
      },
    ],
  },
];

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services', submenu: [] },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' },
    ],
  });
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
