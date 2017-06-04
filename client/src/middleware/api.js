const API_ROOT = 'http://localhost:3001/'

export const API = Symbol('API')

export const api = store => next => action => {
  if (action.type !== API) {
    return next(action)
  }
  else {
    const actionWith = data => {
      const finalAction = Object.assign({}, action, data)
      delete finalAction[action.method]
      delete finalAction[action.body]
      return finalAction
    }

    return fetch(`${API_ROOT}${action.endpoint}`, {
      method: `${action.method.toLowerCase()}`,
      body: `${action.body}`,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response =>
      response.json()
        .then(json => {
          if (!response.ok) {
            return Promise.reject(json)
          }
          next(actionWith({
            type: `${action.method}_SUCCESS`,
            json
          }))
        })
        .catch(error => next(actionWith({
          type: `${action.method}_FAILURE`,
          error
        })))
      )
  }

}
