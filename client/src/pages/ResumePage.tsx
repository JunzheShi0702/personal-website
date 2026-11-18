import { Download } from 'lucide-react'
import { profile } from '../content/siteContent'
import { Button } from '../components/ui/Button'
import { PageHeader } from '../components/ui/PageHeader'

export function ResumePage() {
  return (
    <>
      <PageHeader title="CV">
        <div className="flex flex-wrap gap-3">
          <Button
            variant="primary"
            href={profile.cv}
            download
            icon={<Download aria-hidden="true" strokeWidth={1.75} className="h-4 w-4" />}
          >
            Download PDF
          </Button>
          <Button href={profile.cv} external>
            Open in a new tab
          </Button>
        </div>
      </PageHeader>

      <div className="mt-10 overflow-hidden rounded-lg border border-rule bg-paper-raised">
        <iframe
          src={profile.cv}
          title={`${profile.name} CV (PDF)`}
          className="block h-[80vh] min-h-[32rem] w-full"
        />
      </div>
    </>
  )
}
