import { test } from '@affine-test/kit/mobile';
import { expect, type Page } from '@playwright/test';

const openDocInfoModal = async (page: Page) => {
  await page.click('[data-testid="detail-page-header-more-button"]');
  await expect(page.getByRole('dialog')).toBeVisible();

  const viewInfo = page.getByRole('button', { name: 'view info' });
  const viewInfoBox = await viewInfo.boundingBox();
  expect(viewInfoBox).not.toBeNull();
  if (!viewInfoBox) throw new Error('View info action has no layout box');
  await page.touchscreen.tap(
    viewInfoBox.x + viewInfoBox.width / 2,
    viewInfoBox.y + viewInfoBox.height / 2
  );
  await expect(page.getByTestId('mobile-menu-back-button')).toBeVisible();
};

test.beforeEach(async ({ page }) => {
  const docsTab = page.locator('#app-tabs').getByRole('tab', { name: 'all' });
  await expect(docsTab).toBeVisible();
  await docsTab.click();
  await page.getByTestId('doc-list-item').first().click();
  await expect(page.locator('.affine-page-viewport')).toBeVisible();
});

test('can open page view more menu', async ({ page }) => {
  await page.click('[data-testid="detail-page-header-more-button"]');
  await expect(page.getByRole('dialog')).toBeVisible();
});

test('switch to edgeless mode', async ({ page }) => {
  await page.click('[data-testid="detail-page-header-more-button"]');
  await expect(page.getByRole('dialog')).toBeVisible();

  const switchMode = page.getByRole('button', {
    name: '默认为无界模式',
  });
  const switchModeBox = await switchMode.boundingBox();
  expect(switchModeBox).not.toBeNull();
  if (!switchModeBox) throw new Error('Switch mode action has no layout box');
  await page.touchscreen.tap(
    switchModeBox.x + switchModeBox.width / 2,
    switchModeBox.y + switchModeBox.height / 2
  );
  await expect(page.locator('.affine-edgeless-viewport')).toBeVisible();
});

test('can show doc info', async ({ page }) => {
  await openDocInfoModal(page);
  await expect(page.getByRole('dialog')).toContainText('创建时间');
  await expect(page.getByRole('dialog')).toContainText('更新时间');
});

test('can add text property', async ({ page }) => {
  await openDocInfoModal(page);

  await expect(page.getByRole('button', { name: '添加属性' })).toBeVisible();

  await page.getByRole('button', { name: '添加属性' }).click();
  await page.getByRole('button', { name: '文本' }).click();

  await expect(
    page.getByTestId('mobile-menu-back-button').last()
  ).toBeVisible();
  await page.getByTestId('mobile-menu-back-button').last().click();

  await expect(page.getByTestId('mobile-menu-back-button')).toBeVisible();
});
