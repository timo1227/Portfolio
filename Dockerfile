FROM node:19-alpine3.16
WORKDIR /ReactPortfolio
ENV PATH /ReactPortfolio/node_modules/.bin:$PATH
COPY . .
RUN npm run build
CMD ["npm", "next start"]
EXPOSE 3000