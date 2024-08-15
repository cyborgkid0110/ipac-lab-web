from django.contrib import admin
from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenBlacklistView

urlpatterns=[

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),

    path('api/logout',views.logout, name = 'logout' ),
    path('api/register',views.signup, name = 'singup' ),
    path('api/password',views.change_password, name = 'change_password'),
    path('api/password/reset',views.reset_password, name="reset_password"),

    path('api/publication/get', views.publication, name="publication_list"),
    path('api/publication/get/<int:pk>',views.detailPublication,name="detail_publication"),
    path('api/publication/post',views.addPublication,name="add_publication"),
    path('api/publication/put/<int:pk>',views.updatePublication,name="update_publication"),
    path('api/publication/delete/<int:pk>',views.deletePublication,name="delete_publication"),

    path('api/technology/get', views.technology, name="technology_list"),
    path('api/technology/post',views.addTechnology,name="add_technology"),
    path('api/technology/put/<int:pk>',views.updateTechnology,name="update_technology"),
    path('api/technology/delete/<int:pk>',views.deleteTechnology,name="delete_technology"),

    path('api/activities/get', views.activities, name="activities_list"),
    path('api/activities/post',views.addActivities,name="add_activities"),
    path('api/activities/put/<int:pk>',views.updateActivities,name="update_activities"),
    path('api/activities/delete/<int:pk>',views.deleteActivities,name="delete_activities"),

    path('api/members/get', views.member, name="member_list"),
    path('api/members/post',views.addMember,name="add_member"),
    path('api/members/put/<int:pk>',views.updateMember,name="update_member"),
    path('api/members/delete/<int:pk>',views.deleteMember,name="delete_member"),
]