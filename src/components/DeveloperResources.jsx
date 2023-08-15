import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const developerResources = [
  {
    href: '/smartcontract',
    name: 'Smart Contracts',
    description: 'Resources to develop smart contracts on the Neo blockchain.',
  },
  {
    href: '/nodes',
    name: 'Neo Nodes',
    description: 'Nodes of the Neo blockchain.',
  },
  {
    href: '/tooling',
    name: 'Tooling',
    description: 'Various tools for developers on the Neo blockchain.',
  },
  {
    href: '/grants',
    name: 'Grants',
    description: 'Grants for developers on the Neo blockchain.',
  },
  {
    href: '/tutorials',
    name: 'Tutorials & Documentation',
    description:
      'Tutorials and documentation for developers on the Neo blockchain.',
  },
  {
    href: '/neofs',
    name: 'NeoFS',
    description:
      'A distributed, decentralized object storage network on the Neo blockchain.',
  },
  {
    href: '/oracle',
    name: 'Native Oracle',
    description:
      'Oracle for smart contracts natively built on the Neo blockchain.',
  },
  {
    href: '/neons',
    name: 'Neo Name Service',
    description: 'A distributed open naming system based on Neo blockchain.',
  },
]

export function DeveloperResources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="developer-resources">
        Developer Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {developerResources.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
