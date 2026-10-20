import { buttonVariants } from '@lumibook/admin/components/ui/button';
import { Separator } from '@lumibook/admin/components/ui/separator';
import { cn } from '@lumibook/admin/utils';
import { ChevronRightIcon, MailWarningIcon } from 'lucide-react';

type Channel = 'stable' | 'canary' | 'beta' | 'internal';

const appNames = {
  stable: '识光',
  canary: '识光 Canary',
  beta: '识光 Beta',
  internal: '识光 Internal',
} satisfies Record<Channel, string>;
const appName = appNames[BUILD_CONFIG.appBuildType];

const links = [
  {
    href: BUILD_CONFIG.githubUrl,
    icon: <MailWarningIcon size={20} />,
    label: '反馈问题',
  },
];

export function AboutLumiBook() {
  return (
    <div className="flex flex-col h-full gap-3 py-5 px-6 w-full">
      <div className="flex items-center">
        <span className="text-xl font-semibold">关于识光</span>
      </div>
      <div className="overflow-y-auto space-y-[10px]">
        <div className="flex flex-col rounded-md border">
          {links.map(({ href, icon, label }, index) => (
            <div key={label + index}>
              <a
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'justify-between cursor-pointer w-full'
                )}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-3">
                  {icon}
                  <span>{label}</span>
                </div>
                <div>
                  <ChevronRightIcon size={20} />
                </div>
              </a>
              {index < links.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3 text-sm font-normal text-muted-foreground">
        <div>{`App Version: ${appName} ${BUILD_CONFIG.appVersion}`}</div>
        <div>{`Editor Version: ${BUILD_CONFIG.editorVersion}`}</div>
      </div>
    </div>
  );
}
