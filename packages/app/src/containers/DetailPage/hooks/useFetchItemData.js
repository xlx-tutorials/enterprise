import { useFetch } from 'hooks/useFetch'

function useFetchItemData(id) {
  const { data } = useFetch(`http://localhost:5000/enterprises/${id}`)

  return {
    data,
  }
}

export { useFetchItemData }
