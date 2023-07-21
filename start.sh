#!/bin/bash

# 启动Nginx
nginx -g "daemon off;" &

# 启动前端网页
cd /usr/share/nginx/html
python -m SimpleHTTPServer 8080
