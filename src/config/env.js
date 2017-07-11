let baseUrl

if (process.env.NODE_ENV === 'development') { // 开发环境
  baseUrl = 'https://www.easy-mock.com/mock/59001276739ac1685205c220/example/'
} else { // 生产环境
  baseUrl = ''
}

export {
  baseUrl
}