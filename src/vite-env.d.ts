/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FATHOM_SITE_ID?: string
  /** e.g. mailto:instructor@ubc.ca?subject=... */
  readonly VITE_FEEDBACK_MAILTO?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
