/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly PROJECTID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

