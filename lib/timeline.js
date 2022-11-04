import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const timelineDirectory = path.join(process.cwd(), 'pagecontents/timeline');

export function getSortedTimelineData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(timelineDirectory);
  const allTimelineData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(timelineDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = remark()
    .use(html)
    .process(matterResult.content);
  const content = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      content,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allTimelineData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}