#!/bin/sh     
sudo git checkout Start
sudo git pull origin Start
sudo pipenv install
sudo pipenv shell
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
sudo systemctl restart nginx
sudo systemctl restart gunicorn
