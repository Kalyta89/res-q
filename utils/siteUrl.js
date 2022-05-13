export function getSiteUrl(url) {
  if (url == false) {
    return null;
  }

  if (url.startsWith("http")) {
    return url;
  }

  return `https://www.${url}`;
}
