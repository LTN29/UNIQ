/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_WARRANTY_ACTIVATION_URL?: string;
  readonly VITE_WARRANTY_LOOKUP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
