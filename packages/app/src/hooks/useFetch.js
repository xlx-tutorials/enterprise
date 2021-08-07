// const [listData, setListData] = useState([])

const { BASE_URL } = require('constants/config')
const { useState, useEffect } = require('react')

function formatUrl(url = '') {
  const pattern = /^(\/)/
  if (url.match(pattern)) {
    return url
  }
  return `/${url}`
}

function useFetch(url, { defaultData } = {}) {
  const [data, setData] = useState(defaultData)

  useEffect(
    function fetchListData() {
      fetch(`${BASE_URL}${formatUrl(url)}`)
        .then((res) => res.json())
        .then(setData)
    },
    [url]
  )

  return {
    data,
  }
}

export { useFetch }
