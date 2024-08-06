from django.db import models

# Create your models here.
class Activity(models.Model):

    time = models.DateField()
    content = models.TextField()

    def __str__(self):
        return self.content
    
class MemberLab(models.Model):

    username = models.CharField(max_length=100)
    course = models.CharField(max_length=20)
    majors = models.TextField()
    research_topic = models.TextField()

    def __str__(self):
        return self.username
    
class Publication(models.Model):

    author = models.CharField(max_length=100)
    year = models.IntegerField()
    name = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.name
    
class Technology(models.Model):

    name = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.name