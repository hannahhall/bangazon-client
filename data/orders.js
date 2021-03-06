import { fetchWithResponse } from './fetcher'

export function getCart() {
  return fetchWithResponse('api/orders/current', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function getOrders() {
  return fetchWithResponse('api/orders', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function completeCurrentOrder(orderId, paymentTypeId) {
  return fetchWithResponse(`api/orders/${orderId}/complete`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({paymentTypeId})
  })
}
