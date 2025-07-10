import { useQuery } from '@tanstack/react-query'
import type { GetRooomsResponse } from './types/get-rooms-response'

export function useRooms() {
  return useQuery<GetRooomsResponse>({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result = await response.json()

      return result
    },
  })
}
