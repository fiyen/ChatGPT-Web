'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

// 获取配置信息的函数
function getConfig(key) {
	const config = {
		port: 3200,  // 端口号，确保没有被占用
		mysql_config: {  // MySQL配置信息
			dialect: 'mysql',
			host: 'containers-us-west-71.railway.app',  // 数据库主机地址
			port: 5879,  // 数据库端口号，默认3306
			username: 'root',  // 数据库用户名
			password: 'HRIMdSaAYugS52Ux5Qkm',  // 数据库密码
			database: 'railway',  // 数据库名称
			timezone: '+08:00',
			dialectOptions: {
				dateStrings: true,
				typeCast: true
			}
		},
		redis_config: {  // Redis配置信息，一般不用改
			type: 'redis',
			host: 'containers-us-west-127.railway.app',
			port: 8069,
			password: 'hByk4Nph07jNdQFC3MlQ'
		},
		email: 'admin@163.com',  // 邮件地址
		email_config: {  // 邮件配置信息
			host: 'smtp.163.com',  // SMTP服务器地址
			port: 25,  // SMTP服务器端口号
			ignoreTLS: true,  // 是否忽略TLS
			secure: false,  // 是否使用安全连接
			auth: {
				user: 'admin@163.com',  // SMTP服务器用户名
				pass: ''  // SMTP服务器密码
			}
		}
	};
	if (key) {
		return config[key];
	}
	return config;
}

exports.default = {
	getConfig
};

//# sourceMappingURL=index.js.map
