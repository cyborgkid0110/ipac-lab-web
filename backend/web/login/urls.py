from django.contrib import admin
from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView 

urlpatterns=[

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/logout',views.logout, name = 'logout' ),
    path('api/register',views.signup, name = 'singup' ),
    path('api/password',views.change_password, name = 'change_password'),
    path('api/password/reset',views.reset_password, name="reset_password")
]