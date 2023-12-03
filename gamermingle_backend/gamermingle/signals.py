# signals.py in your app directory

from django.contrib.auth.models import update_last_login
from django.contrib.auth.signals import user_logged_in

user_logged_in.connect(update_last_login)
