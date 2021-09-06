// const host = "http://10.101.12.21:8080";
const host = ''

const post = (url, params = {}) => {
  let newUrl = host + url
  if (Object.keys(params).length > 0) {
    return fetch(newUrl, {
      method: 'post',
      headers: { 
        'content-type': 'application/json',
        Authorization: localStorage.getItem('accesstoken'),
      },
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json()
    }).catch((e) => {
      console.log(e)
    })
  } else {
    return fetch(newUrl, {
      method: 'post',
      headers: { 
        'content-type': 'application/json',
        Authorization: localStorage.getItem('accesstoken'),
      },
    }).then((res) => {
      return res.json()
    })
      .catch((e) => {
        console.log(e)
      })
  }
}
const get = (url, params = {}) => {
  let newUrl = host + url;
  
  if (Object.keys(params).length > 0) {
    newUrl = url + '?'
    Object.keys(params).forEach((item) => {
      newUrl += `${item}=${params[item]}&`
    })
    newUrl = newUrl.substring(0, newUrl.length - 1)
  }
  
  return fetch(newUrl, {
    method: 'get',
    headers: { 
      Authorization: localStorage.getItem('accesstoken'),
    },
  }).then((res) => {
    return res.json()
  }).catch((e) => {
    console.log(e)
  })
};

const post_formdata = (url, params = {}) => {
  let newUrl = host + url
  if (Object.keys(params).length > 0) {
    let data = new FormData()
    Object.keys(params).forEach((item) => {
      data.append(item, params[item])
    })
    return fetch(newUrl, {
      method: 'post',
      headers: { 
        // 'content-type': 'application/form-data',
        Authorization: localStorage.getItem('accesstoken')
      },
      body: data
    }).then((res) => {
      return res.json()
    }).catch((e) => {
      console.log(e)
    })
  } else {
    return fetch(newUrl, {
      method: 'post',
      headers: { 
        'content-type': 'application/form-data',
        Authorization: localStorage.getItem('accesstoken')
      },
    }).then((res) => {
      return res.json()
    })
      .catch((e) => {
        console.log(e)
      })
  }
}

export { get, post, post_formdata }