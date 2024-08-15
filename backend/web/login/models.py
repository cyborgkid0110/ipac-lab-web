from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    nick_name = models.CharField(max_length=100)
    
class Publication(models.Model):

    author = models.CharField(max_length=200)
    year = models.IntegerField()
    title = models.TextField()
    content = models.TextField()

    def __str__(self):
        return self.author
    
class Technology(models.Model):

    name = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.name
    
class Activities(models.Model):

    time = models.DateField()
    content = models.TextField()

    def __str__(self):
        return self.content
    
class Memberlab(models.Model):
    
    username = models.CharField(max_length=200)
    course = models.IntegerField()
    majors = models.TextField()
    research_topic = models.TextField()
    image = models.ImageField(upload_to='images/',null = True, blank = True)

    def __str__(self):
        return self.username