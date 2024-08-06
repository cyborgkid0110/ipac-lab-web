from django.db import models

# Create your models here.
class Publication(models.Model):

    author = models.CharField(max_length=100)
    year = models.IntegerField()
    name = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.name