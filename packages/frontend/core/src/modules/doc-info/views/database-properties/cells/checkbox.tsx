import { CheckboxValue } from '@lumibook/core/components/workspace-property-types/checkbox';
import type { LiveData } from '@lumibook/infra';
import { useLiveData } from '@lumibook/infra';

import type { DatabaseCellRendererProps } from '../../../types';

export const CheckboxCell = ({
  cell,
  rowId,
  dataSource,
  onChange,
}: DatabaseCellRendererProps) => {
  const value = useLiveData(cell.value$ as LiveData<boolean>);
  return (
    <CheckboxValue
      // todo(pengx17): better internal impl
      value={value ? 'true' : 'false'}
      onChange={v => {
        dataSource.cellValueChange(rowId, cell.property.id, v === 'true');
        onChange?.(v === 'true');
      }}
    />
  );
};
