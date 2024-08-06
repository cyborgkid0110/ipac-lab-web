from django.db import models

class MemberLab(models.Model):

    username = models.CharField(max_length=100)
    course = models.CharField(max_length=20)
    majors = models.TextField()
    research_topic = models.TextField()

    def __str__(self):
        return self.username