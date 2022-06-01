export const apiUrl = 'https://dogsapi.origamid.dev/json'

export const TOKEN_POST = (body) => {
  return {
    url: `${apiUrl}/jwt-auth/v1/token`,
    data: body,
  }
}

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: `${apiUrl}/jwt-auth/v1/token/validate`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
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

export const USER_POST = (body) => {
  return {
    url: `${apiUrl}/api/user`,
    data: body,
  }
}

export const PHOTO_POST = (formData, token) => {
  return {
    url: `${apiUrl}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData
    },
  }
}

export const PHOTOS_GET = ({page, total, user}) => {
  return {
    url: `${apiUrl}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    },
  }
}

export const PHOTO_GET = (id) => {
  return {
    url: `${apiUrl}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    },
  }
}
