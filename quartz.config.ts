import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import * as Component from "./quartz/components"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Draft", /**🐧 */
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "thdngan.github.io/palaeo",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Libre Baskerville", /** Schibsted Grotesk, Chelsea Market*/
        body: "Inter", /**Source Sans Pro, Roboto Serif */
        code: "JetBrains Mono", /**IBM Plex Mono */
      },
      colors: {
        lightMode: {
          light: "#FFFFFF", /**faf8f8 for background                                             ; #FFFFFF*/
          lightgray: "rgba(117, 129, 107,0.4)", /**e5e5e5 for background of search and borders   ; rgba(117, 129, 107,0.4)*/
          gray: "#7C8B95", /**b8b8b8 for date and reading time, graph links, heavier borders     ; #7C8B95*/
          darkgray: "#000000", /**4e4e4e for text                                                ; #000000*/
          dark: "#2b2b2b", /**2b2b2b for headings and icons                                      ; #1F4172*/
          secondary: "#6C5A37", /**284b63 for titles and links, current graph node               ; #6C5A37*/
          tertiary: "#48a9a6", /**84a59d for when hovering above link                            ; #457B9D*/
          highlight: "rgba(117, 129, 107, 0.15)", /**rgba(143, 159, 169, 0.15) for background of internal link   ; rgba(117, 129, 107, 0.15)*/

          nodefirst: "#3e4e50",
          nodesecond: "#9c7ca5",
          nodethird: "#ceff1a",

          wikiheading: "#c8d0ca",
          wikibackground: "#ebebeb",
          wikiborder: "#a3a3a3",

          gradient1: "#310979",
          gradient2: "#00d4ff",
          italic: "#1F1F1F",
        },
        darkMode: {
          light: "#2F3037", /**161618 ,#0d1210, 1A2421, #141716*/
          lightgray: "rgba(224, 224, 224,0.25)",
          gray: "#b8b8b8",
          darkgray: "#EAEAEA",
          dark: "#FFFFFF",     /* ECBC55, ECB159, F5B700, C2C2C2*/
          secondary: "#86b8b5", /*85CFCB, dda169 */
          tertiary: "#709997",
          highlight: "rgba(166, 221, 219, 0.1)",

          nodefirst: "#35827d",
          nodesecond: "#9ad6d2",
          nodethird: "#d2940f",

          wikiheading: "#67796b",
          wikibackground: "#42434d",
          wikiborder: "#a3a3a3",

          gradient1: "#00e2ff",
          gradient2: "#f5b0ff",
          italic: "#EAEAEA",
        },
      },
    },
  },
// #9E1946: amaranth purple
// #AA6373: china rose
// #FF9F1C: orange peel
// #e08300: fulvous (orange)

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      // Plugin.Remark42({ host: "https://thdngan.github.io/arboretum/", site_id: "remark", no_footer: true }),
      Plugin.Quoting(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Remark42({ host: "https://thdngan.github.io/palaeo/", site_id: "remark", theme: "dark", no_footer: true }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
