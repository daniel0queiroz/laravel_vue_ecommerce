FROM php:8.2-apache

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install dependencies for zip extension and composer
RUN apt-get update && apt-get install -y \
        libzip-dev \
        zlib1g-dev \
        zip \
        unzip \
        curl \
        git \
    && docker-php-ext-install zip \
    && docker-php-ext-install pdo pdo_mysql mysqli

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set working directory
WORKDIR /var/www/html

# Set Laravel public folder as Apache root
RUN sed -i 's#/var/www/html#/var/www/html/laravel_vue_ecommerce/public#g' /etc/apache2/sites-available/000-default.conf
