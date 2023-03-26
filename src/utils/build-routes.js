export function buildRoutePath(path) {
  const pathWithParam = path.replaceAll(/:([a-zA-Z]+)/g, '(?<$1>[a-z0-9\-_]+)')
  return new RegExp(`^${pathWithParam}(?<query>\\?(.*))?$`);
}