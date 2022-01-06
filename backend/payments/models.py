from django.db import models

class Customer(models.Model):
    first_name = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255)
    customer_id = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.email