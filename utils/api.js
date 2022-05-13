import { getSourceUrl } from "@/utils/url";

export async function fetchAPI(path, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const requestUrl = getSourceUrl(path);
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    throw new Error(`An error occurred while fetching data from "${requestUrl}": ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

export async function getData(url) {
  try {
    const pagesData = await fetchAPI(url);

    // Make sure we found something, otherwise return null
    if (pagesData == null || pagesData.length === 0) {
      return null;
    }

    return pagesData;
  } catch (err) {
    console.log("Failed to execute getData:", err.message);
    return null;
  }
}

export async function fetchUrl(url, options) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`An error occurred while fetching data from "${url}": ${response.statusText}`);
    }
    const data = await response.json();

    // Make sure we found something, otherwise return null
    if (data == null || data.length === 0) {
      return null;
    }

    return data;
  } catch (err) {
    console.log("Failed to execute fetchUrl:", err.message);
    return null;
  }
}
