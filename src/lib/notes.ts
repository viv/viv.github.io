import {getCollection} from 'astro:content';

/**
 * Notes that should appear in listings and navigation.
 *
 * In production, posts whose publish date is still in the future are hidden,
 * so the series can be drip-fed by setting a future `date` in frontmatter. In
 * development the filter is disabled, so drafts can be previewed and reviewed.
 *
 * Note pages themselves are still built for every note (see the notes
 * `[...slug]` route), so a future-dated post is unlisted rather than missing,
 * and forward links to it do not break.
 */
export async function getPublishedNotes() {
    const all = await getCollection('notes');
    if (import.meta.env.DEV) return all;
    const now = Date.now();
    return all.filter((note) => note.data.date.getTime() <= now);
}
