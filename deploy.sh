#!/bin/sh     
sudo git pull origin master
sudo pipenv install
sudo pipenv shell
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
sudo systemctl restart nginx
sudo systemctl restart gunicorn
