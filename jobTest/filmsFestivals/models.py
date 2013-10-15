#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from datetime import date

class Festival(models.Model):
	name = models.CharField(max_length=128, verbose_name=u'Название')
	country = models.ForeignKey('Country', verbose_name=u'Страна')
	date_of_start = models.DateField(blank=True, default=date.today())


class Country(models.Model):
	name = models.CharField(max_length=32, verbose_name=u'Название')

	def __unicode__(self):
		return self.name
