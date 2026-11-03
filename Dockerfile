FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html impressum.html datenschutz.html robots.txt sitemap.xml /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
