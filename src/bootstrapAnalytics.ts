/**
 * Optional Fathom Analytics for aggregate, low-cookie page views when
 * `VITE_FATHOM_SITE_ID` is set at build time. See https://usefathom.com/
 */
let fathomInjected = false

export function initFathom(): void {
  const siteId = import.meta.env.VITE_FATHOM_SITE_ID
  if (!siteId || typeof document === 'undefined' || fathomInjected) return
  const win = window as unknown as { fathom?: unknown }
  if (win.fathom) return
  fathomInjected = true
  const script = document.createElement('script')
  script.src = 'https://cdn.usefathom.com/script.js'
  script.setAttribute('data-site', siteId)
  script.setAttribute('data-spa', 'auto')
  script.async = true
  document.head.appendChild(script)
}
