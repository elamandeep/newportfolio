/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PROJECTID: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }