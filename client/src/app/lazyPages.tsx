import { lazy } from 'react'

// Less-visited pages with videos or a PDF load on demand.
export const AtlasCaseStudyPage = lazy(() =>
  import('../pages/AtlasCaseStudyPage').then((module) => ({ default: module.AtlasCaseStudyPage })),
)
export const PdrCaseStudyPage = lazy(() =>
  import('../pages/PdrCaseStudyPage').then((module) => ({ default: module.PdrCaseStudyPage })),
)
export const ReachProjectPage = lazy(() =>
  import('../pages/ReachProjectPage').then((module) => ({ default: module.ReachProjectPage })),
)
export const ResumePage = lazy(() =>
  import('../pages/ResumePage').then((module) => ({ default: module.ResumePage })),
)
