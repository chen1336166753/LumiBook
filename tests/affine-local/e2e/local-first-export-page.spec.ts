import { test } from '@affine-test/kit/playwright';
import { openHomePage } from '@affine-test/kit/utils/load-page';
import {
  clickNewPageButton,
  clickPageMoreActions,
  getBlockSuiteEditorTitle,
  waitForEditorLoad,
} from '@affine-test/kit/utils/page-logic';
import { expect } from '@playwright/test';

test.skip('New a page ,then open it and export html', async ({
  page,
  workspace,
}) => {
  await openHomePage(page);
  await waitForEditorLoad(page);
  await clickNewPageButton(page);
  await getBlockSuiteEditorTitle(page).click();
  await page
    .getByPlaceholder('标题')
    .fill('this is a new page to export html content');
  await page.getByTestId('all-pages').click();

  const cell = page.getByRole('cell', {
    name: 'this is a new page to export html content',
  });
  await expect(cell).toBeVisible();

  await cell.click();
  await clickPageMoreActions(page);
  const exportParentBtn = page.getByRole('tooltip', {
    name: 'Add to favorites Convert to Edgeless Export Delete',
  });
  await exportParentBtn.click();
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: '导出为 HTML' }).click(),
  ]);
  expect(download.suggestedFilename()).toBe(
    'this is a new page to export html content.html'
  );
  const currentWorkspace = await workspace.current();

  expect(currentWorkspace.meta.flavour).toContain('local');
});

test.skip('New a page ,then open it and export markdown', async ({
  page,
  workspace,
}) => {
  await clickNewPageButton(page);
  await getBlockSuiteEditorTitle(page).click();
  await page
    .getByPlaceholder('标题')
    .fill('this is a new page to export markdown content');
  await page.getByTestId('all-pages').click();
  const cell = page.getByRole('cell', {
    name: 'this is a new page to export markdown content',
  });
  await expect(cell).toBeVisible();

  await cell.click();
  await clickPageMoreActions(page);
  const exportParentBtn = page.getByRole('tooltip', {
    name: 'Add to favorites Convert to Edgeless Export Delete',
  });
  await exportParentBtn.click();
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: '导出为 Markdown' }).click(),
  ]);
  expect(download.suggestedFilename()).toBe(
    'this is a new page to export markdown content.md'
  );
  const currentWorkspace = await workspace.current();

  expect(currentWorkspace.meta.flavour).toContain('local');
});
