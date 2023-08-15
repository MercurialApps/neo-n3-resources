import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const userResources = [
  {
    href: '/wallets',
    name: 'Wallets',
    description: 'Wallets for Neo users.',
  },
  {
    href: '/explorers',
    name: 'Explorers',
    description: 'Neo blockchain explorers.',
  },
  {
    href: '/voting',
    name: 'Voting',
    description: 'Vote for candidates to get GAS yields.',
  },
  {
    href: '/apps',
    name: 'Apps',
    description: 'Apps on the Neo blockchain.',
  },
  {
    href: '/migration',
    name: 'Migration',
    description: 'Migrating from Neo Legacy to the Neo N3 chain.',
  },
  {
    href: '/exchanges',
    name: 'Exchanges',
    description: 'CEXs and DEXs supporting the Neo blockchain.',
  },
  {
    href: '/nogas',
    name: 'No GAS?',
    description: 'Have NEO tokens but no GAS tokens for transactions?.',
  },
]

export function UserResources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="user-resources">
        User Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {userResources.map((library) => (
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
