from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.home_page, name='home_page'),
	url(r'^doodle/', views.doodle_page, name='doodle'),
	url(r'^archive/', views.archive_page, name='archive'),
	url(r'^archive/post/(?P<pk>\d+)/$', views.update_detail, name='update_detail'),
]