# 使用Node.js作为基础镜像
FROM node:14

# 在容器中创建一个工作目录
WORKDIR /app

# 将当前目录下的所有文件复制到容器的工作目录中
COPY . .

# 安装pm2
RUN npm install pm2 -g

# 进入到server目录
WORKDIR /app/server

# 启动进程
CMD ["pm2", "start", "index.js", "--name", "chatweb", "--watch"]
