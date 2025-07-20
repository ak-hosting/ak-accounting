# AK Accounting - Dockerfile
# Basierend auf nginx für optimale Performance

FROM nginx:alpine

# Metadaten
LABEL maintainer="a.koc <ak@ak-pro.com>"
LABEL description="AK Accounting - Muhasebe ve Mali Müşavirlik Web Sitesi Şablonu"
LABEL version="1.0.0"

# Arbeitsverzeichnis setzen
WORKDIR /usr/share/nginx/html

# Nginx-Konfiguration kopieren
COPY nginx.conf /etc/nginx/nginx.conf

# Website-Dateien kopieren
COPY index.html .
COPY assets/ ./assets/
COPY README.md .
COPY LICENSE .

# Berechtigungen setzen
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Port 80 exponieren
EXPOSE 80

# Nginx starten
CMD ["nginx", "-g", "daemon off;"]

# Health Check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1 