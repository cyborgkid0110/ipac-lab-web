from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):

    confirm_pass = serializers.CharField(required = True )
    class Meta:
        model = User
        fields = ['id','username', 'password','confirm_pass', 'email']

    def validate_username(self,data):
        if User.objects.filter(username = data).exists():
            raise serializers.ValidationError("Username exists.")
        return data

    def validate_email(self, data):
        if User.objects.filter(email = data).exists():
            raise serializers.ValidationError("This email exists.")
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
    email = serializers.EmailField(required=True)

    def validate(self, data):
        email = data.get('email')
        username = data.get('username')

        if not User.objects.filter(email=email,username = username).exists():
            raise serializers.ValidationError("This email or username does not exist.")
        
        return data
