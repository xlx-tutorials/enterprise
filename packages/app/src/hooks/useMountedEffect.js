import { useEffect, useRef } from 'react'

export default function useMountedEffect(callback, dependencies = []) {
  const mountedRef = useRef(false)

  useEffect(function detectStateChange() {
    if (mountedRef.current) {
      callback()
    }
    mountedRef.current = true
  }, dependencies)
}
