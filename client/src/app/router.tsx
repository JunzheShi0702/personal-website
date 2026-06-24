import { createBrowserRouter, Navigate } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { AskJunzhePage } from '../pages/AskJunzhePage'
import { AtlasCaseStudyPage } from '../pages/AtlasCaseStudyPage'
import { HomePage } from '../pages/HomePage'
import { PdrCaseStudyPage } from '../pages/PdrCaseStudyPage'
import { PublicationsPage } from '../pages/PublicationsPage'
import { ResearchPage } from '../pages/ResearchPage'
import { ResumePage } from '../pages/ResumePage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects/atlas', element: <AtlasCaseStudyPage /> },
      { path: 'projects/pdr-ai', element: <PdrCaseStudyPage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: 'publications', element: <PublicationsPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'resume.pdf', element: <Navigate to='/resume' replace /> },
      { path: 'contact', element: <Navigate to='/#contact' replace /> },
      { path: 'ask-junzhe', element: <AskJunzhePage /> },
    ],
  },
])
