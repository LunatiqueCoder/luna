package com.projectname;

import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ProjectName";
  }

  /**
   * react-native-screens config (dependency of react-navigation)
   * This change is required to avoid crashes related to View state being not persisted
   * consistently across Activity restarts.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
