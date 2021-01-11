from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    
    # Display functionalities
    url(r'^display_laptop$', display_laptops, name='display_laptops'),
    # Arg 1 : regex param for search
    # Arg 2 : function name
    # Arg 3 : name for the functionality
    url(r'^display_desktop$', display_desktops, name='display_desktops'),
    url(r'^display_mobile$', display_mobiles, name='display_mobiles'),
    
    # Add functionalities
    url(r'^add_laptop', add_laptop, name='add_laptop'), # The regex replicates in the URL within the browser
    url(r'^add_desktop', add_desktop, name='add_desktop'),
    url(r'^add_mobile', add_mobile, name='add_mobile'),
    
    # Edit functionalities
    url(r'^edit_laptop/(?P<pk>\d*)', edit_laptop, name='edit_laptop'), # The regex replicates in the URL within the browser
    url(r'^edit_desktop/(?P<pk>\d*)', edit_desktop, name='edit_desktop'),
    url(r'^edit_mobile/(?P<pk>\d*)', edit_mobile, name='edit_mobile'),
    
    # Delete functionalities
    url(r'^delete_laptop/(?P<pk>\d*)', delete_laptop, name='delete_laptop'), # The regex replicates in the URL within the browser
    url(r'^delete_desktop/(?P<pk>\d*)', delete_desktop, name='delete_desktop'),
    url(r'^delete_mobile/(?P<pk>\d*)', delete_mobile, name='delete_mobile'),
]