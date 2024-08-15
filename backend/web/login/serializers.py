from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from .models import Publication, Activities, Technology, Memberlab
from rest_framework.reverse import reverse

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    confirm_pass = serializers.CharField(required = True )
    nick_name = serializers.CharField(required = True)
    username = serializers.EmailField(required = True)
    
    class Meta:
        model = User
        fields = ['username', 'password','confirm_pass', 'nick_name']

    def validate_username(self,data):
        if User.objects.filter(username = data).exists():
            raise serializers.ValidationError("Email exists.")
        return data
    
    def validate(self,data):

        try:
            validate_password(data.get('password'), self.instance)
        except serializers.ValidationError as e:
            raise serializers.ValidationError(str(e))
        
        if data.get('password') != data.get('confirm_pass'):
            raise serializers.ValidationError("Password not match")
        
        data['password'] = make_password(data.get('password'))
        return data
    
    def create(self, data):
        data.pop('confirm_pass', None)  
        return super().create(data)


class ChangePassWord(serializers.Serializer):

    old_pass = serializers.CharField(required = True)
    new_pass = serializers.CharField(required = True)
    confirm_pass = serializers.CharField(required = True)


class ResetPassWord(serializers.Serializer):
    
    username = serializers.CharField(required=True)

    def validate(self, data):
       
        username = data.get('username')

        if not User.objects.filter(username = username).exists():
            raise serializers.ValidationError("This email does not exist.")
        
        return data


class Publicationserializer(serializers.ModelSerializer):

    url = serializers.SerializerMethodField(read_only=True)
    update_url = serializers.SerializerMethodField(read_only=True)
    delete_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Publication
        fields =  ['url', 'update_url', 'delete_url', 'id', 'author', 'year', 'title', 'content']
    
    def get_url(self, obj):

        request = self.context.get('request')
        if request is None:
            return None
        return reverse('detail_publication', kwargs = {'pk' : obj.pk}, request = request)
    
    def get_update_url(self, obj):
        
        request = self.context.get('request')
        if request is None:
            return None
        return reverse('update_publication', kwargs = {'pk' : obj.pk}, request = request)
    
    def get_delete_url(self, obj):
        
        request = self.context.get('request')
        if request is None:
            return None
        return reverse('delete_publication', kwargs = {'pk' : obj.pk}, request = request)


class Technologyserializer(serializers.ModelSerializer):
    
    update_url = serializers.SerializerMethodField(read_only=True)
    delete_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Technology
        fields =  ['update_url', 'delete_url', 'id', 'name', 'content']
    
    def get_update_url(self, obj):
        
        request = self.context.get('request')
        if request is None:
            return None
        return reverse('update_technology', kwargs = {'pk' : obj.pk}, request = request)
    
    def get_delete_url(self, obj):
        
        request = self.context.get('request')
        if request is None:
            return None
        return reverse('delete_technology', kwargs = {'pk' : obj.pk}, request = request)


class Activitiesserializer(serializers.ModelSerializer):
    
    update_url = serializers.SerializerMethodField(read_only=True)
    delete_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Activities
        fields =  ['update_url', 'delete_url', 'id', 'time', 'content']
    
    def get_update_url(self, obj):
        
        request = self.context.get('request')
        if request is None:
            return None
        return reverse('update_activities', kwargs = {'pk' : obj.pk}, request = request)
    
    def get_delete_url(self, obj):
        
        request = self.context.get('request')
        if request is None:
            return None
        return reverse('delete_activities', kwargs = {'pk' : obj.pk}, request = request)
    
class Memberlabserializer(serializers.ModelSerializer):
    
    update_url = serializers.SerializerMethodField(read_only=True)
    delete_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Memberlab
        fields =  ['update_url', 'delete_url', 'id', 'username', 'course', 'majors', 'research_topic', 'image']
    
    def get_update_url(self, obj):
        
        request = self.context.get('request')
        if request is None:
            return None
        return reverse('update_member', kwargs = {'pk' : obj.pk}, request = request)
    
    def get_delete_url(self, obj):
        
        request = self.context.get('request')
        if request is None:
            return None
        return reverse('delete_member', kwargs = {'pk' : obj.pk}, request = request)
