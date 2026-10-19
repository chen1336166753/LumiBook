import { ScrollArea } from '@lumibook/admin/components/ui/scroll-area';

import { Header } from '../header';
import { AboutLumiBook } from './about';

export function ConfigPage() {
  return (
    <div className="h-dvh flex-1 space-y-1 flex-col flex">
      <Header title="Server" />
      <ScrollArea>
        <AboutLumiBook />
      </ScrollArea>
    </div>
  );
}

export { ConfigPage as Component };
