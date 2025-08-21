import { client, user_user } from '@/index'
import { describe, expect, it } from 'bun:test'

describe('#GET_USER', () => {
  it('Get user and log it', async () => {
    // Set the config for the client with the Base URL and API key
    client.setConfig({
      baseUrl: 'https://www.breadcrumb.cash/api',
      // Replace with your cookie connect.sid / if you have one
      headers: {
        Cookie: `connect.sid=<connect.sid>`,
      },
    })

    // Use the internal method to call the API
    const response = await user_user({
      path: {
        x_user_id: '1941253809302593536',
      },
      query: {
        include_smart_followers: 'false',
        include_smart_follower_history: 'false',
      },
    })

    // Log the response
    console.log('API response data:', response.data)
    expect(response.data?.x_username).toBe('breadcrumbcash')
  })
})
