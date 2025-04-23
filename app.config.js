
export default {
  expo: {
    name: 'project',
    slug: 'project',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'myapp',
    deepLinking:true,
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    extra: {
      googleWebClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      versionCode: 1,
      package: 'com.anonymous.project',
      googleServicesFile: "./google-services.json",
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './src/assets/images/favicon.png',
    },
    plugins: [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      'expo-router',
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            buildToolsVersion: '35.0.0',
          },
          ios: {
            deploymentTarget: '15.1',
          },
        },
      ],
      [
        'expo-splash-screen',
        {
          image: './src/assets/images/spotify.png',
          resizeMode: 'contain',
          backgroundColor: '#131313',
        },
      ]
      
    ],
    experiments: {
      typedRoutes: true,
    },
  },
};
