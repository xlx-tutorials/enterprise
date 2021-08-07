import { NumberParam, useQueryParams } from 'use-query-params'

function useFilterQuery() {
  const [query, setQuery] = useQueryParams({
    street: NumberParam,
    industry: NumberParam,
  })

  function clear() {
    setQuery(
      Object.fromEntries(Object.keys(query).map((key) => [key, undefined]))
    )
  }

  return {
    query,
    setQuery,
    clear,
  }
}

export { useFilterQuery }
