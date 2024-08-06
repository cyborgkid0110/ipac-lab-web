from django.db import models

class Activity(models.Model):

    time = models.DateField()
    content = models.TextField()

    def __str__(self):
        return self.content