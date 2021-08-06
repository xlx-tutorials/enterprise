function formatUrl(url = '') {
  const pattern = /^(\/)/
  if (url.match(pattern)) {
    return url
  }
  return `/${url}`
}

console.log( formatUrl('hello') )
