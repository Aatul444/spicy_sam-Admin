import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.spicysam.web',
  appName: 'spicysamAdmin',
  webDir: 'dist/spicysam/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
