const Setting = {
  address: 'http://localhost:3000/',
  // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29yZSI6eyJzdW0iOjEwMCwiZGlzdGFuY2UiOjEwLCJncmFkZVBvaW50QXZlcmFnZSI6MjAsInF1b3RhIjo0MCwidGVybSI6MzB9LCJzdGF0dXMiOiIxIiwiaXNVc2VyIjp0cnVlLCJfaWQiOiI2MDMwZGIxNGYzNGNlNjRmMzFjNjU3MDIiLCJyZW50Ijp7InBhaWQiOmZhbHNlfSwiZW1haWwiOiJlaHNhbkByYXljaGF0LmlvIiwidXNlcm5hbWUiOiJlaHNhbiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMjBUMDk6NDk6MDguMTk3WiIsImNyZWF0ZWRBdCI6IjIwMjEtMDItMjBUMDk6NDk6MDguMTk3WiIsImlhdCI6MTYxNDMzODIyNCwiZXhwIjoxNjE0NDI0NjI0fQ.mGc9ubWtI6mQvLq87GgyK2-q58H0NeW_dJ_FNhKLL7g'
  token: localStorage.getItem('token')
};

const URL = {
  about: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  contracts: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  donators: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  employee: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  history: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  news: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  partners: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  sponsers: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  uploads: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  user: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  visions: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
  youtube: {
    create: Setting.address.concat(''),
    find: Setting.address.concat(''),
    findOne: Setting.address.concat(''),
    update: Setting.address.concat(''),
    remove: Setting.address.concat(''),
  },
};


function getFields(...args) {
  let fields = {};
  for (let item of args) {
    Object.assign(fields, { [item]: $(`#${item}`).val() });
  }
  console.log({ fields });
  return fields;
}

async function sendRequest(method, url, data = {}, headers = {}, redirect = null) {
  try {
    const result = await axios({
      method,
      url,
      data,
      headers: {
        authorization: Setting.token,
        ...headers
      }
    });

    if (redirect) {
      alert('عملیات با موفقیت انجام شد.');
      window.location.href = url;
    }

    console.log(result);
    return result;
  } catch (err) {
    console.log(err.message);
    alert('خطایی رخ داده لطفا دوباره امتحان کنید.');
  }
}

function signIn(email, password, url) {
  axios.post('http://stage.raychat.io:1680/auth/login', {
    email: 'ghader55@raychat.io',
    password: '123456'
  },
    { withCredentials: true }
  )
    .then(res => {
      localStorage.setItem('token', res.data.token);
      window.location.href = url;
    })
    .catch(err => console.log(`error : ${err.message}`));
  // axios.post(Setting.address.concat('authorization/signin'), {
  //   email,
  //   password
  // })
  //   .then(res => {
  //     localStorage.setItem('token', res.data.token);
  //     window.location.href = url;
  //   })
  //   .catch(err => console.log(`error : ${err.message}`));

}

function signUp(username, password, email, url) {
  axios.post(`${Setting.address}signup`, {
    username,
    password,
    email
  })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      window.location.href = url;
    })
    .catch(err => alert(`error: ${err.message}`));
}

