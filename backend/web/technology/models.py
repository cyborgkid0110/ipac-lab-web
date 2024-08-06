from django.db import models

class Technology(models.Model):

    name = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.name