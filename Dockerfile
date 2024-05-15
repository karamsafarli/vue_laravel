# # Use the official PHP image as base
# FROM php:8.2-fpm

# # Set the working directory inside the container
# WORKDIR /var/www/html

# # Install system dependencies
# RUN apt-get update && apt-get install -y \
#     git \
#     zip \
#     unzip \
#     libzip-dev \
#     libpng-dev \
#     libjpeg-dev \
#     libfreetype6-dev \
#     libonig-dev \
#     libxml2-dev \
#     libcurl4-openssl-dev \
#     libssl-dev \
#     libmcrypt-dev \
#     nano

# # Install PHP extensions
# RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip curl xml

# # Install Composer globally
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# # Copy the composer.json and composer.lock files to the working directory
# COPY composer.json composer.lock ./

# # Install project dependencies
# RUN composer install --no-scripts --no-autoloader

# # Copy the rest of the application code
# COPY . .

# # Generate the autoload files and cache
# RUN composer dump-autoload --optimize && \
#     php artisan config:cache && \
#     php artisan route:cache && \
#     php artisan view:cache

# # Set permissions
# RUN chown -R www-data:www-data /var/www/html && \
#     chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# # Expose port 9000 and start PHP-FPM server
# EXPOSE 9000
# CMD ["php-fpm"]

FROM php:8.2

RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    libssl-dev \
    libmcrypt-dev \
    nano

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo mbstring
WORKDIR /app
COPY . /app
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000
EXPOSE 8000