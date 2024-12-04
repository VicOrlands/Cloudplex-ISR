import { marked } from "marked";
import * as cheerio from "cheerio";

// get date in locale string format
export function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

// get first paragraph of contents
export function extractFirstParagraph(markdown) {
    const html = marked.parse(markdown);
    const doc = cheerio.load(html);
    const firstParagraph = doc("p").first().text();
    return firstParagraph?.slice(0, 300) || "";
}