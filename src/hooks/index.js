import { useState, useEffect } from 'react'

const useGetPayments = url => {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPayments(data))
      .catch(err => console.log(err))
  }, [])

  return payments
}

export default useGetPayments