from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import UserSerializer, ChangePassWord, ResetPassWord
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.core.mail import send_mail
from django.conf import settings
from django.utils.crypto import get_random_string
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError


@api_view(['POST'])
def login(request):

    try:
        user = User.objects.get(username = request.data['username'])
    except:
        return Response({"Message":"Username does not exits"},status=status.HTTP_404_NOT_FOUND)
    
    if not user.check_password(request.data['password']):
        return Response({"Message":"Password not correct"},status=status.HTTP_400_BAD_REQUEST)
    
    auth_login(request,user)
    return Response({"message":"Login Successful"},status = status.HTTP_202_ACCEPTED)



@api_view(['POST'])
def logout(request):

    auth_logout(request)
    return Response({"message":"Logout Successful"},status=status.HTTP_200_OK)


@api_view(['POST'])
def signup(request):

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():

        user=serializer.save()
        auth_login(request,user)
        return Response({"message": "Register successful"}, status=status.HTTP_201_CREATED)
        
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def change_password(request):

    serializer = ChangePassWord(data = request.data)

    if serializer.is_valid():

        old_pass = serializer.validated_data['old_pass']
        new_pass = serializer.validated_data['new_pass']
        confirm_pass = serializer.validated_data['confirm_pass']
        user = request.user
        
        if not user.check_password(old_pass):
            return Response({"message":"Password old not match"},status=status.HTTP_400_BAD_REQUEST)
        
        if new_pass != confirm_pass:
            return Response({"message":"Password new not match"},status=status.HTTP_400_BAD_REQUEST)
        
        try:
            validate_password(new_pass,user)
        except ValidationError as e:
            return Response({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        user.set_password(new_pass) 
        user.save()
        return Response({"message":"Password change successful"},status=status.HTTP_200_OK)

    return Response({"message":"Error, please fill in full ?"},status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def reset_password(request):

    serializer = ResetPassWord(data=request.data)
    
    if serializer.is_valid():

        email = serializer.validated_data['email']
        username = serializer.validated_data['username']
        user = User.objects.get(email=email,username=username)
        new_pass = get_random_string(length =8) 
        user.set_password(new_pass)
        user.save()

        subject = 'Hello from ADMIN'
        message = f'Hello {user.username} This is a new password: {new_pass}'
        email = user.email
        recipient_list = [email]
        send_mail(subject, message,settings.EMAIL_HOST_USER, recipient_list)
        return Response({"message":"New password is sent in email"})
    
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
