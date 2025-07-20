# AK Accounting - Makefile
# Basit komutlar için Makefile

.PHONY: help start dev build docker-build docker-run docker-compose clean install

# Varsayılan hedef
help:
	@echo "AK Accounting - Kullanılabilir Komutlar:"
	@echo "  make start     - Python HTTP sunucusu başlat (port 8000)"
	@echo "  make dev       - Geliştirme sunucusu başlat"
	@echo "  make serve     - Node.js serve ile başlat"
	@echo "  make build     - Projeyi derle"
	@echo "  make docker-build - Docker image oluştur"
	@echo "  make docker-run   - Docker container çalıştır"
	@echo "  make docker-compose - Docker Compose ile başlat"
	@echo "  make clean     - Geçici dosyaları temizle"
	@echo "  make install   - Bağımlılıkları yükle"

# Python HTTP sunucusu başlat
start:
	@echo "Python HTTP sunucusu başlatılıyor (http://localhost:8000)..."
	python -m http.server 8000

# Geliştirme sunucusu
dev: start

# Node.js serve ile başlat
serve:
	@echo "Node.js serve ile başlatılıyor..."
	npx serve . -p 8000

# Projeyi derle
build:
	@echo "Proje derleniyor..."
	@echo "Build tamamlandı - statik dosyalar hazır"

# Docker image oluştur
docker-build:
	@echo "Docker image oluşturuluyor..."
	docker build -t ak-accounting .

# Docker container çalıştır
docker-run:
	@echo "Docker container çalıştırılıyor (http://localhost:8080)..."
	docker run -p 8080:80 ak-accounting

# Docker Compose ile başlat
docker-compose:
	@echo "Docker Compose ile başlatılıyor..."
	docker-compose up -d

# Docker Compose durdur
docker-compose-down:
	@echo "Docker Compose durduruluyor..."
	docker-compose down

# Geçici dosyaları temizle
clean:
	@echo "Geçici dosyalar temizleniyor..."
	find . -name "*.pyc" -delete
	find . -name "__pycache__" -type d -exec rm -rf {} + 2>/dev/null || true
	find . -name ".DS_Store" -delete
	@echo "Temizlik tamamlandı"

# Bağımlılıkları yükle
install:
	@echo "Bağımlılıklar yükleniyor..."
	npm install
	@echo "Bağımlılıklar yüklendi"

# Git repository'yi başlat
git-init:
	@echo "Git repository başlatılıyor..."
	git init
	git add .
	git commit -m "Initial commit: AK Accounting website template"
	@echo "Git repository başlatıldı"

# Projeyi test et
test:
	@echo "Proje test ediliyor..."
	@echo "HTML dosyası kontrol ediliyor..."
	@if [ -f "index.html" ]; then echo "✓ index.html mevcut"; else echo "✗ index.html eksik"; fi
	@if [ -f "assets/css/style.css" ]; then echo "✓ style.css mevcut"; else echo "✗ style.css eksik"; fi
	@if [ -f "assets/js/script.js" ]; then echo "✓ script.js mevcut"; else echo "✗ script.js eksik"; fi
	@if [ -f "README.md" ]; then echo "✓ README.md mevcut"; else echo "✗ README.md eksik"; fi
	@echo "Test tamamlandı"

# Proje durumunu göster
status:
	@echo "AK Accounting Proje Durumu:"
	@echo "=========================="
	@ls -la
	@echo ""
	@echo "Assets klasörü:"
	@ls -la assets/ 2>/dev/null || echo "assets/ klasörü bulunamadı"
	@echo ""
	@echo "Docker durumu:"
	@docker ps -a --filter "name=ak-accounting" 2>/dev/null || echo "Docker çalışmıyor"

# Yardım
help:
	@echo "AK Accounting - Kullanılabilir Komutlar:"
	@echo "========================================"
	@echo "  make start     - Python HTTP sunucusu başlat (port 8000)"
	@echo "  make dev       - Geliştirme sunucusu başlat"
	@echo "  make serve     - Node.js serve ile başlat"
	@echo "  make build     - Projeyi derle"
	@echo "  make docker-build - Docker image oluştur"
	@echo "  make docker-run   - Docker container çalıştır"
	@echo "  make docker-compose - Docker Compose ile başlat"
	@echo "  make clean     - Geçici dosyaları temizle"
	@echo "  make install   - Bağımlılıkları yükle"
	@echo "  make git-init  - Git repository başlat"
	@echo "  make test      - Projeyi test et"
	@echo "  make status    - Proje durumunu göster"
	@echo "  make help      - Bu yardım mesajını göster" 