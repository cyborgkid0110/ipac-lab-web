from django.contrib import admin
from django.urls import path
from . import views 

urlpatterns=[
    path('api/login',views.login, name = 'login' ),
    path('api/logout',views.logout, name = 'logout' ),
    path('api/register',views.signup, name = 'singup' ),
    path('api/password',views.change_password, name = 'change_password'),
    path('api/password/reset',views.reset_password, name="reset_password")
]