export default function cutString(string = "", length = 100) {
  if (!string) {
    return "";
  }
  return string.length < length ? string : `${string.substr(0, string.substr(0, length - 3).lastIndexOf(" "))}...`;
}
