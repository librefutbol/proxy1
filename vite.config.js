import { defineConfig } from 'vite';
import { UserConfig } from 'vite';

const config: UserConfig = defineConfig({
  base: '/<REPO_NAME>/', // replace <REPO_NAME> with the actual repository name
generate: {
    dir: 'dist', // output directory
  },
  // other Vite configuration options can be added here
});

export default config;