from django.db import models

# Create your models here.

class Details(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=11)
    company = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self) -> str:
        return self.first_name