import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/thdngan",
      Email: "mailto:trinhhoangdieungan@gmail.com",
    },
    // config.plugins.transformers.find((e) => {e.name === "Remark42"})?.options
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.MobileOnly(Component.TagList()),
    // Component.Comments(),
    // Component.MobileOnly(Component.TableOfContents()),
    
  ],
  left: [
    // Component.DesktopOnly(Component.PageTitle()),
    // Component.MobileOnly(Component.PageTitleMobile()),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.TableOfContents(),
    // Component.DesktopOnly(
    //   Component.RecentNotes({
    //     title: "Recent Posts",
    //     limit: 2,
    //     filter: (f) =>
    //       f.slug!.startsWith("posts/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
    //     linkToMore: "posts/" as SimpleSlug,
    //   }),
    // ),
  //   Component.DesktopOnly(
  //   Component.RecentNotes({
  //     title: "Recent Notes",
  //     limit: 2,
  //     filter: (f) =>
  //       f.slug!.startsWith("notes/") && f.slug! !== "notes/index" && !f.frontmatter?.noindex,
  //     linkToMore: "notes/" as SimpleSlug,
  //   }),
  // ),

    // Component.DesktopOnly(Component.Explorer())
    ],
  right: [
    Component.Graph(),
  //   Component.DesktopOnly(
  //   Component.RecentNotes({
  //     title: "Topics",
  //     limit: 3,
  //     filter: (f) =>
  //       f.slug!.startsWith("subjects/") && f.slug! !== "subjects/index" && !f.frontmatter?.noindex,
  //     linkToMore: "subjects/" as SimpleSlug,
  //   }),
  // ),
  // Component.DesktopOnly(
  //   Component.RecentNotes({
  //     title: "Recent Notes",
  //     limit: 2,
  //     filter: (f) =>
  //       f.slug!.startsWith("notes/") && f.slug! !== "notes/index" && !f.frontmatter?.noindex,
  //     linkToMore: "notes/" as SimpleSlug,
  //   }),
  // ),
  // Component.Explorer(),
  // Component.DesktopOnly(Component.TagList()),
  Component.Backlinks(),
  // Component.DesktopOnly(Component.TagList()),
],
  
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.MobileOnly(Component.PageTitleMobile()),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
