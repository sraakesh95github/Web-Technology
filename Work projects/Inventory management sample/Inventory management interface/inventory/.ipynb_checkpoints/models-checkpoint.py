from django.db import models

# Create your models here.

# Create a class for Devices as tje super class
class Device(models.Model):
    
    # Declare Device as an abstract class in order for the migrations to note create an explicit table class
    class Meta:
        abstract = True
    
    type = models.CharField(max_length=100, blank=False)
    price = models.IntegerField()
    
    choices = (
        ('SOLD', 'Item already purchased'),
        ('AVAILABLE', 'Item ready to be purchased'),
        ('RESTOCKING', 'Item restocking in few days')
    )
    
    status = models.CharField(max_length=10, default="SOLD", choices = choices)
    issues = models.CharField(max_length=100, default="No issues")
    
    def __str__(self):
         return 'Type: {0} Price: {1}'.format(self.type, self.price)


class Laptop(Device):
    pass

class Desktop(Device):
    pass

class Mobile(Device):
    pass