import { useFilterQuery } from 'containers/FilterBlock/hooks/useFilterQuery'
import { useFetch } from 'hooks/useFetch'
import { stringify } from 'query-string'

function useFetchListData() {
  const { query } = useFilterQuery()
  const { data } = useFetch(
    `/enterprises?${stringify({
      streetId: query.street,
      industryId: query.industry,
    })}`,
    {
      defaultData: [],
    }
  )

  return {
    data,
  }
}

export { useFetchListData }
