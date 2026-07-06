import { createBrowserRouter, Navigate } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { AtlasCaseStudyPage } from '../pages/AtlasCaseStudyPage'
import { HomePage } from '../pages/HomePage'
import { PdrCaseStudyPage } from '../pages/PdrCaseStudyPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { PublicationsPage } from '../pages/PublicationsPage'
import { ReachProjectPage } from '../pages/ReachProjectPage'
import { ResearchPage } from '../pages/ResearchPage'
import { ResumePage } from '../pages/ResumePage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/atlas', element: <AtlasCaseStudyPage /> },
      { path: 'projects/pdr-ai', element: <PdrCaseStudyPage /> },
      { path: 'projects/reach', element: <ReachProjectPage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: 'publications', element: <PublicationsPage /> },
      { path: 'cv', element: <ResumePage /> },
      { path: 'resume', element: <Navigate to="/cv" replace /> },
      { path: 'contact', element: <Navigate to='/#contact' replace /> },
      { path: 'ask-junzhe', element: <Navigate to="/" replace /> },
    ],
  },
])
