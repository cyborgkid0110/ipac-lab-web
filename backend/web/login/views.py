from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import UserSerializer, ChangePassWord, ResetPassWord
from django.core.mail import send_mail
from django.conf import settings
from django.utils.crypto import get_random_string
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from .models import Publication, Activities, Technology, Memberlab
from .serializers import Publicationserializer, Technologyserializer, Activitiesserializer, Memberlabserializer
from django.db.models import Max, Min

User = get_user_model()

@api_view(['POST'])
def logout(request):

    try:
        token = RefreshToken(request.data['refresh'])
        token.blacklist()
        return Response({"message":"Logout successful"}, status=status.HTTP_200_OK)
    except:
        return Response({"message":"Try logout again!"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signup(request):

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():

        user=serializer.save()
        return Response({"message": "Register successful"}, status=status.HTTP_201_CREATED)
        
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
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

        username = serializer.validated_data['username']
        user = User.objects.get(username=username)
        new_pass = get_random_string(length =8) 
        user.set_password(new_pass)
        user.save()

        subject = 'Hello from ADMIN'
        message = f'Hello user this is a new password: {new_pass}'
        email = user.username
        recipient_list = [email]
        send_mail(subject, message,settings.EMAIL_HOST_USER, recipient_list)
        return Response({"message":"New password is sent in email"})
    
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def publication(request):

    publications = Publication.objects.order_by('-year')
    serializer = Publicationserializer(publications, many = True, context = {'request':request})
    return Response(serializer.data, status = status.HTTP_200_OK)


@api_view(['GET'])
def detailPublication(request, pk):

    try:
        publication = Publication.objects.get(id=pk)
    except:
        return Response({"message":"Publication does not exist"}, status = status.HTTP_400_BAD_REQUEST)
 
    serializer = Publicationserializer(publication, context = {'request':request})
    return Response(serializer.data, status = status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes ([IsAuthenticated])
def addPublication(request):
   
    if request.user.is_superuser:

        serializer = Publicationserializer(data = request.data)
                
        if serializer.is_valid():

            serializer.save()
            return Response({"message":"Save successful"}, status = status.HTTP_200_OK)
                
        return Response({"message":"Not correct"}, status = status.HTTP_400_BAD_REQUEST)
            
    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updatePublication(request, pk):

    if request.user.is_superuser:

        try:
            publication = Publication.objects.get(id = pk)
        except:
            return Response({"message":"Publication does not exist"}, status = status.HTTP_400_BAD_REQUEST)
    
        serializer = Publicationserializer(publication, data = request.data)

        if serializer.is_valid():

            serializer.save()
            return Response({"message":"Update successfull"}, status = status.HTTP_200_OK)

        return Response({"message":"Update fail, Try again!"}, status = status.HTTP_400_BAD_REQUEST)
    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deletePublication(request, pk):
    
    if request.user.is_superuser:

        try:
            publication = Publication.objects.get(id = pk)
        except:
            return Response({"message":"Publication does not exist"}, status = status.HTTP_400_BAD_REQUEST)

        publication.delete()
        return Response({"message":"Delete successfull"},status = status.HTTP_200_OK)

    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def technology(request):

    technologys = Technology.objects.all()
    serializer = Technologyserializer(technologys, many = True, context = {'request':request})
    return Response(serializer.data, status = status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes ([IsAuthenticated])
def addTechnology(request):
   
    if request.user.is_superuser:

        serializer = Technologyserializer(data = request.data)
                
        if serializer.is_valid():

            serializer.save()
            return Response({"message":"Save successful"}, status = status.HTTP_200_OK)
                
        return Response({"message":"Not correct"}, status = status.HTTP_400_BAD_REQUEST)
            
    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateTechnology(request, pk):

    if request.user.is_superuser:

        try:
            technology = Technology.objects.get(id = pk)
        except:
            return Response({"message":"Technology does not exist"}, status = status.HTTP_400_BAD_REQUEST)
    
        serializer = Technologyserializer(technology, data = request.data)

        if serializer.is_valid():

            serializer.save()
            return Response({"message":"Update successfull"}, status = status.HTTP_200_OK)

        return Response({"message":"Update fail, Try again!"}, status = status.HTTP_400_BAD_REQUEST)
    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteTechnology(request, pk):
    
    if request.user.is_superuser:

        try:
           technology = Technology.objects.get(id = pk)
        except:
            return Response({"message":"Technology does not exist"}, status = status.HTTP_400_BAD_REQUEST)

        technology.delete()
        return Response({"message":"Delete successfull"},status = status.HTTP_200_OK)

    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def activities(request):

    activities = Activities.objects.order_by('-time')
    serializer = Activitiesserializer(activities, many = True, context = {'request':request})
    return Response(serializer.data, status = status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes ([IsAuthenticated])
def addActivities(request):
   
    if request.user.is_superuser:

        serializer =  Activitiesserializer(data = request.data)
                
        if serializer.is_valid():

            serializer.save()
            return Response({"message":"Save successful"}, status = status.HTTP_200_OK)
                
        return Response({"message":"Not correct"}, status = status.HTTP_400_BAD_REQUEST)
            
    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateActivities(request, pk):

    if request.user.is_superuser:

        try:
            activities = Activities.objects.get(id = pk)
        except:
            return Response({"message":"Technology does not exist"}, status = status.HTTP_400_BAD_REQUEST)
    
        serializer = Activitiesserializer(activities, data = request.data)

        if serializer.is_valid():

            serializer.save()
            return Response({"message":"Update successfull"}, status = status.HTTP_200_OK)

        return Response({"message":"Update fail, Try again!"}, status = status.HTTP_400_BAD_REQUEST)
    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteActivities(request, pk):
    
    if request.user.is_superuser:

        try:
          activities = Activities.objects.get(id = pk)
        except:
            return Response({"message":"Technology does not exist"}, status = status.HTTP_400_BAD_REQUEST)

        activities.delete()
        return Response({"message":"Delete successfull"},status = status.HTTP_200_OK)

    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def member(request):

    maxx = Memberlab.objects.aggregate(Max('course'))['course__max']
    minn = Memberlab.objects.aggregate(Min('course'))['course__min']
    my_dict = {}
    
    for i in range(minn,maxx+1):

        members = Memberlab.objects.filter(course=i)
        serializer = Memberlabserializer(members, many=True, context={'request': request})
        my_dict[i] = serializer.data

    return Response(my_dict, status = status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes ([IsAuthenticated])
def addMember(request):
   
    if request.user.is_superuser:

        serializer =  Memberlabserializer(data = request.data)
                
        if serializer.is_valid():

            serializer.save()
            return Response({"message":"Save successful"}, status = status.HTTP_200_OK)
                
        return Response({"message":"Not correct"}, status = status.HTTP_400_BAD_REQUEST)
            
    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateMember(request, pk):

    if request.user.is_superuser:

        try:
            members = Memberlab.objects.get(id = pk)
        except:
            return Response({"message":"Member does not exist"}, status = status.HTTP_400_BAD_REQUEST)
    
        serializer = Memberlabserializer(members, data = request.data)

        if serializer.is_valid():

            serializer.save()
            return Response({"message":"Update successfull"}, status = status.HTTP_200_OK)

        return Response({"message":"Update fail, Try again!"}, status = status.HTTP_400_BAD_REQUEST)
    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteMember(request, pk):
    
    if request.user.is_superuser:

        try:
          member = Memberlab.objects.get(id = pk)
        except:
            return Response({"message":"Member does not exist"}, status = status.HTTP_400_BAD_REQUEST)

        member.delete()
        return Response({"message":"Delete successfull"},status = status.HTTP_200_OK)

    return Response({"message":"You are not allowed"}, status = status.HTTP_400_BAD_REQUEST)