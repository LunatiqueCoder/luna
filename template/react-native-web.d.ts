// This file is adapted from: https://github.com/necolas/react-native-web/issues/832#issuecomment-1027393818

import {MouseEvent, UIEvent, FocusEvent, ReactNode} from 'react';
export * from 'react-native';

declare module 'react-native' {
  namespace AppRegistry {
    function getApplication(string): {getStyleElement: () => ReactNode};
  }

  // The following list is sourced from:
  // - https://github.com/necolas/react-native-web/blob/0.17.5/packages/react-native-web/src/types/styles.js#L76
  type CursorValue =
    | 'alias'
    | 'all-scroll'
    | 'auto'
    | 'cell'
    | 'context-menu'
    | 'copy'
    | 'crosshair'
    | 'default'
    | 'grab'
    | 'grabbing'
    | 'help'
    | 'pointer'
    | 'progress'
    | 'wait'
    | 'text'
    | 'vertical-text'
    | 'move'
    | 'none'
    | 'no-drop'
    | 'not-allowed'
    | 'zoom-in'
    | 'zoom-out'
    | 'col-resize'
    | 'e-resize'
    | 'ew-resize'
    | 'n-resize'
    | 'ne-resize'
    | 'ns-resize'
    | 'nw-resize'
    | 'row-resize'
    | 's-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'w-resize'
    | 'nesw-resize'
    | 'nwse-resize';

  // This list is the combination of the following two lists:
  // - https://github.com/necolas/react-native-web/blob/0.17.5/packages/react-native-web/src/modules/AccessibilityUtil/propsToAriaRole.js#L10
  // - https://github.com/necolas/react-native-web/blob/0.17.5/packages/react-native-web/src/modules/AccessibilityUtil/propsToAccessibilityComponent.js#L12
  // Plus the single hard-coded value "label" from here:
  // - https://github.com/necolas/react-native-web/blob/0.17.5/packages/react-native-web/src/modules/AccessibilityUtil/propsToAccessibilityComponent.js#L36
  type WebAccessibilityRole =
    | 'adjustable'
    | 'article'
    | 'banner'
    | 'blockquote'
    | 'button'
    | 'code'
    | 'complementary'
    | 'contentinfo'
    | 'deletion'
    | 'emphasis'
    | 'figure'
    | 'form'
    | 'header'
    | 'image'
    | 'imagebutton'
    | 'insertion'
    | 'keyboardkey'
    | 'label'
    | 'link'
    | 'list'
    | 'listitem'
    | 'main'
    | 'navigation'
    | 'none'
    | 'region'
    | 'search'
    | 'strong'
    | 'summary'
    | 'text';

  interface PressableStateCallbackType {
    hovered?: boolean;
    focused?: boolean;
  }

  interface ViewProps {
    accessibilityRole?: WebAccessibilityRole;
    href?: string;
    hrefAttrs?: {
      target?: '_blank' | '_self' | '_top' | 'blank' | 'self' | 'top';
      rel?: string;
      download?: boolean;
    };
    onMouseDown?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseUp?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseEnter?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onFocus?: (event: FocusEvent<HTMLDivElement>) => void;
    onScroll?: (event: UIEvent<HTMLDivElement, UIEvent>) => void;
    // For compatibility with RNW internals
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
  }

  interface TextProps {
    dir?: 'ltr' | 'rtl' | 'auto';
    focusable?: boolean;
    accessibilityRole?: WebAccessibilityRole;
    accessibilityState?: {
      busy?: boolean;
      checked?: boolean | 'mixed';
      disabled?: boolean;
      expanded?: boolean;
      grabbed?: boolean;
      hidden?: boolean;
      invalid?: boolean;
      pressed?: boolean;
      readonly?: boolean;
      required?: boolean;
      selected?: boolean;
    };
    href?: string;
    hrefAttrs?: {
      target?: '_blank' | '_self' | '_top' | 'blank' | 'self' | 'top';
      rel?: string;
      download?: boolean;
    };
    onMouseEnter?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onFocus?: (event: FocusEvent<HTMLDivElement>) => void;
    // For compatibility with RNW internals
    onMoveShouldSetResponder?: unknown;
    onMoveShouldSetResponderCapture?: unknown;
    onResponderEnd?: unknown;
    onResponderGrant?: unknown;
    onResponderMove?: unknown;
    onResponderReject?: unknown;
    onResponderRelease?: unknown;
    onResponderStart?: unknown;
    onResponderTerminate?: unknown;
    onResponderTerminationRequest?: unknown;
    onScrollShouldSetResponder?: unknown;
    onScrollShouldSetResponderCapture?: unknown;
    onSelectionChangeShouldSetResponder?: unknown;
    onSelectionChangeShouldSetResponderCapture?: unknown;
    onStartShouldSetResponder?: unknown;
    onStartShouldSetResponderCapture?: unknown;
  }

  interface TouchableOpacityProps {
    accessibilityRole?: WebAccessibilityRole;
    href?: string;
    hrefAttrs?: {
      target?: '_blank' | '_self' | '_top' | 'blank' | 'self' | 'top';
      rel?: string;
      download?: boolean;
    };
    nativeID?: string;
    onMouseEnter?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }

  interface CheckBoxProps {
    color?: string | null;
  }

  interface ViewStyle {
    cursor?: CursorValue;
    transitionProperty?: string;
    display?: 'flex' | 'inline-flex' | 'none';
    outlineWidth?: number | string;
    boxShadow?: string;
    visibility?: 'hidden' | 'visible' | 'collapse' | 'initial';
    position?: 'absolute' | 'relative' | 'fixed';
  }

  interface TextStyle {
    // The following list is sourced from:
    // - https://github.com/necolas/react-native-web/blob/0.17.5/packages/react-native-web/src/types/styles.js#L128
    userSelect?: 'all' | 'auto' | 'contain' | 'none' | 'text';
  }
}
