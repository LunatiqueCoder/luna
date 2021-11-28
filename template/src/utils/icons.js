import AntDesign_ttf from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import Entypo_ttf from 'react-native-vector-icons/Fonts/Entypo.ttf';
import EvilIcons_ttf from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import Feather_ttf from 'react-native-vector-icons/Fonts/Feather.ttf';
import FontAwesome_ttf from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Fontisto_ttf from 'react-native-vector-icons/Fonts/Fontisto.ttf';
import Foundation_ttf from 'react-native-vector-icons/Fonts/Foundation.ttf';
import Ionicons_ttf from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialIcons_ttf from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import MaterialCommunityIcons_ttf from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import Octicons_ttf from 'react-native-vector-icons/Fonts/Octicons.ttf';
import Zocial_ttf from 'react-native-vector-icons/Fonts/Zocial.ttf';
import SimpleLineIcons_ttf from 'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';

const IconsCSS = `
@font-face {
  src: url(${AntDesign_ttf});
  font-family: AntDesign;
}
@font-face {
  src: url(${Entypo_ttf});
  font-family: Entypo;
}
@font-face {
  src: url(${EvilIcons_ttf});
  font-family: EvilIcons;
}
@font-face {
  src: url(${Feather_ttf});
  font-family: Feather;
}
@font-face {
  src: url(${FontAwesome_ttf});
  font-family: FontAwesome;
}
@font-face {
  src: url(${Fontisto_ttf});
  font-family: Fontisto;
}
@font-face {
  src: url(${Foundation_ttf});
  font-family: Foundation;
}
@font-face {
  src: url(${Ionicons_ttf});
  font-family: Ionicons;
}
@font-face {
  src: url(${MaterialIcons_ttf});
  font-family: Materialicons;
}
@font-face {
  src: url(${MaterialCommunityIcons_ttf});
  font-family: MaterialCommunityIcons;
}
@font-face {
  src: url(${Octicons_ttf});
  font-family: Octicons;
}
@font-face {
  src: url(${Zocial_ttf});
  font-family: Zocial;
}
@font-face {
  src: url(${SimpleLineIcons_ttf});
  font-family: SimpleLineIcons;
}
`;

const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = IconsCSS;
} else {
  style.appendChild(document.createTextNode(IconsCSS));
}

document.head.appendChild(style);
