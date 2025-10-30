/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string;
  // add other env vars you use
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
