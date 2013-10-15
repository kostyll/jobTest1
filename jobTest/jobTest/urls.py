from __future__ import unicode_literals
from django.conf.urls import patterns, include, url
from django.contrib import admin
from filmsFestivals.views import orderedFestivals
from jobTest import settings

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'jobTest.views.home', name='home'),
    # url(r'^jobTest/', include('jobTest.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', orderedFestivals),
)

if settings.DEBUG:
	from django.contrib.staticfiles.urls import staticfiles_urlpatterns

	urlpatterns += staticfiles_urlpatterns()