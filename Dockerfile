FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_BASE_PATH=/
ARG VITE_SITE_URL=https://uniq-home.com
ARG VITE_WARRANTY_ACTIVATION_URL=https://baohanh.simi.vn/kich-hoat-bao-hanh
ARG VITE_WARRANTY_LOOKUP_URL=https://baohanh.simi.vn/bao-hanh

ENV VITE_BASE_PATH=${VITE_BASE_PATH}
ENV VITE_SITE_URL=${VITE_SITE_URL}
ENV VITE_WARRANTY_ACTIVATION_URL=${VITE_WARRANTY_ACTIVATION_URL}
ENV VITE_WARRANTY_LOOKUP_URL=${VITE_WARRANTY_LOOKUP_URL}

RUN npm run build

FROM nginx:1.27-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
