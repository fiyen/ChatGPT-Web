FROM node:18 as builder

WORKDIR /app

COPY . .

# 安装依赖
RUN yarn install

# 打包
RUN yarn build

FROM nginx:latest

# 复制打包好的dist目录到Nginx容器中
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制自定义的Nginx配置文件到容器中
COPY nginx.conf /etc/nginx/nginx.conf

# 设置启动脚本为可执行
COPY start.sh /start.sh
RUN chmod +x /start.sh

# 暴露容器的80端口
EXPOSE 80

# 启动Nginx和前端网页
CMD ["/start.sh"]

