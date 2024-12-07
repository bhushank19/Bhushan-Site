import displayVsCode from "./components/apps/vscode";
import { displayTerminal } from "./components/apps/terminal";
import { displaySettings } from "./components/apps/settings";
import { displayChrome } from "./components/apps/chrome";
import { displayTrash } from "./components/apps/trash";
// import { displayGedit } from "./components/apps/gedit";
import { displayAboutBhushan } from "./components/apps/srj";

const apps = [
  {
    id: "chrome",
    title: "Google Chrome",
    icon: `${process.env.PUBLIC_URL}/themes/Yaru/apps/chrome.png`,
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "about-bhushan",
    title: "About Bhushan",
    icon: `${process.env.PUBLIC_URL}/themes/Yaru/system/user-home.svg`,
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutBhushan,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: `${process.env.PUBLIC_URL}/themes/Yaru/apps/vscode.png`,
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayVsCode,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: `${process.env.PUBLIC_URL}/themes/Yaru/apps/bash.png`,
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },
  {
    id: "settings",
    title: "Settings",
    icon: `${process.env.PUBLIC_URL}/themes/Yaru/apps/settings.png`,
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "trash",
    title: "Trash",
    icon: `${process.env.PUBLIC_URL}/themes/Yaru/system/trash.png`,
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayTrash,
  },
  // {
  //   id: "gedit",
  //   title: "Send a Message",
  //   icon: "./themes/Yaru/apps/contacts.png",
  //   disabled: false,
  //   favourite: false,
  //   desktop_shortcut: true,
  //   screen: displayGedit,
  // },
];

export default apps;
