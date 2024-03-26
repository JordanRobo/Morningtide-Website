// place files you want to import through the `$lib` alias in this folder.
import showdown from 'showdown';

export function formatMarkdown(markdownText: string) {
    const converter = new showdown.Converter();
    return converter.makeHtml(markdownText);
}