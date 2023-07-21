FROM node:18 as builder

WORKDIR /app

COPY . .

# 安装依赖
RUN yarn install

# 打包
RUN yarn build


# 使用nginx镜像作为基础镜像
FROM nginx:alpine-slim

# 将构建好的文件复制到nginx容器的默认静态资源目录
# COPY --from=0 /app/dist /usr/share/nginx/html
COPY from --builder app/dist /usr/share/nginx/html
COPY docker/default.conf /etc/nginx/conf.d/

# 暴露端口：80
EXPOSE 80

# 运行nginx
CMD ["nginx", "-g", "daemon off;"]

