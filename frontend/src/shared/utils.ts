import ParsedUrl from "./types";

/**
 * Parses a string url in order to obtain some information.
 *
 * @param url - The string form of an url to be parsed
 * @returns An object containing `domain`, `scheme`,`path` and `location`
 */
const parseUrl = (url: string): ParsedUrl => {
  const parsedUrl = new URL(url);

  const domain = parsedUrl.origin;
  const scheme = parsedUrl.protocol.replace(":", "");
  const path = parsedUrl.pathname;
  const location = path.substring(path.lastIndexOf("/") + 1);

  return { domain, scheme, path, location };
};

export { parseUrl };
