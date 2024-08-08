from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model

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

