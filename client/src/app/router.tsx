import { createBrowserRouter, Navigate } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { AskJunzhePage } from '../pages/AskJunzhePage'
import { AtlasCaseStudyPage } from '../pages/AtlasCaseStudyPage'
import { HomePage } from '../pages/HomePage'
import { PdrCaseStudyPage } from '../pages/PdrCaseStudyPage'
import { ResearchPage } from '../pages/ResearchPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects/atlas', element: <AtlasCaseStudyPage /> },
      { path: 'projects/pdr-ai', element: <PdrCaseStudyPage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: 'publications', element: <Navigate to="/research#publications" replace /> },
      { path: 'resume', element: <Navigate to='/#resume' replace /> },
      { path: 'contact', element: <Navigate to='/#contact' replace /> },
      { path: 'ask-junzhe', element: <AskJunzhePage /> },
    ],
  },
])
