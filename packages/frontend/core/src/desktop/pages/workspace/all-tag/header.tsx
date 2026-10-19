import { ExplorerNavigation } from '@lumibook/core/components/explorer/header/navigation';
import { Header } from '@lumibook/core/components/pure/header';

export const AllTagHeader = () => {
  return <Header left={<ExplorerNavigation active={'tags'} />} />;
};
