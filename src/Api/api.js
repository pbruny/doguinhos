export const apiUrl = 'https://dogsapi.origamid.dev/json'

export const TOKEN_POST = (body) => {
  return {
    url: `${apiUrl}/jwt-auth/v1/token`,
    data: body,
  }
}

export const USER_GET = (token) => {
  return {
    url: `${apiUrl}/api/user`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  }
}
