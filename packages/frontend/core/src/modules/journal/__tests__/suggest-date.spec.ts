/**
 * @vitest-environment happy-dom
 */

import { JOURNAL_DATE_FORMAT } from '@lumibook/core/modules/journal';
import { I18n } from '@lumibook/i18n';
import dayjs from 'dayjs';
import { afterEach, describe, expect, test, vi } from 'vitest';

vi.mock('emoji-mart', () => {
  return {
    Picker: vi.fn(),
  };
});

import { suggestJournalDate } from '../suggest-journal-date';

const weekDayName = (index: number) =>
  new Intl.DateTimeFormat(I18n.language, { weekday: 'long' }).format(
    new Date(2024, 0, index)
  );

describe('suggestJournalDate', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  test('today', () => {
    expect(suggestJournalDate('t')).toEqual({
      dateString: dayjs().format(JOURNAL_DATE_FORMAT),
      alias: I18n.t('com.affine.today'),
    });
  });

  test('yesterday', () => {
    expect(suggestJournalDate('y')).toEqual({
      dateString: dayjs().subtract(1, 'day').format(JOURNAL_DATE_FORMAT),
      alias: I18n.t('com.affine.yesterday'),
    });
  });

  test('tomorrow', () => {
    expect(suggestJournalDate('tm')).toEqual({
      dateString: dayjs().add(1, 'day').format(JOURNAL_DATE_FORMAT),
      alias: I18n.t('com.affine.tomorrow'),
    });
  });

  test.each([
    { index: 1, name: 'monday' },
    { index: 2, name: 'tuesday' },
    { index: 3, name: 'wednesday' },
    { index: 4, name: 'thursday' },
    { index: 5, name: 'friday' },
  ])('last week - $name', ({ index }) => {
    const alias = I18n.t('com.affine.last-week', {
      weekday: weekDayName(index),
    });
    expect(suggestJournalDate(alias)).toEqual({
      dateString: dayjs()
        .subtract(1, 'week')
        .startOf('week')
        .add(index, 'day')
        .format(JOURNAL_DATE_FORMAT),
      alias,
    });
  });

  test.each([
    { index: 1, name: 'monday' },
    { index: 2, name: 'tuesday' },
    { index: 3, name: 'wednesday' },
    { index: 4, name: 'thursday' },
    { index: 5, name: 'friday' },
  ])('next week - $name', ({ index }) => {
    const alias = I18n.t('com.affine.next-week', {
      weekday: weekDayName(index),
    });
    expect(suggestJournalDate(alias)).toEqual({
      dateString: dayjs()
        .add(1, 'week')
        .startOf('week')
        .add(index, 'day')
        .format(JOURNAL_DATE_FORMAT),
      alias,
    });
  });

  test.each([
    {
      now: new Date(2026, 8, 16, 12, 0, 0),
      query: 'dec',
      expected: '2026-12-16',
    },
    {
      now: new Date(2026, 8, 16, 12, 0, 0),
      query: 'dec 10',
      expected: '2026-12-10',
    },
    {
      now: new Date(2026, 8, 16, 12, 0, 0),
      query: 'feb 30',
      expected: '2026-02-16',
    },
    {
      now: new Date(2026, 0, 31, 12, 0, 0),
      query: 'feb',
      expected: '2026-02-28',
    },
    {
      now: new Date(2028, 0, 31, 12, 0, 0),
      query: 'feb',
      expected: '2028-02-29',
    },
    {
      now: new Date(2028, 8, 16, 12, 0, 0),
      query: 'feb 29',
      expected: '2028-02-29',
    },
  ])('$query resolves to $expected', ({ now, query, expected }) => {
    vi.useFakeTimers();
    vi.setSystemTime(now);

    expect(suggestJournalDate(query)).toEqual({
      dateString: expected,
    });
  });
});
