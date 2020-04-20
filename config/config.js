module.exports = {
  environment: 'dev',
  database: {
    dbName: 'aaa',
    host: '107.175.144.203',
    port: 3306,
    user: 'aaa',
    password: 'NMjh2LXzMnxCPr52'
  },
  security: {
    secretKey: "secretKey",
    // 过期时间 1小时
    expiresIn: 60 * 60
  },
  wx: {
    appId: '',
    appSecret: '',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
}
