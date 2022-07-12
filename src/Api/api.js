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

export const COMMENT_POST = (id, body, token) => {
  return {
    url: `${apiUrl}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body)
    },
  }
}

export const PHOTO_DELETE = (id, token) => {
  return {
    url: `${apiUrl}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  }
}

export function PASSWORD_LOST(body) {
  return {
    url: `${apiUrl}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function PASSWORD_RESET(body) {
  return {
    url: `${apiUrl}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function STATS_GET(token) {
  return {
    url: `${apiUrl}/api/stats`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  }
}