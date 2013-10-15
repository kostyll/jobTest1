from django.shortcuts import render_to_response
from django.template import RequestContext
from filmsFestivals.models import Festival

def orderedFestivals(request):
	festivals = None
	if request.is_ajax():
		if request.method == 'POST':
			if request.POST['action'] == 'sort':
				if 'name' in request.POST['param']:
					if 'Asc' in request.POST['param']:
						festivals = Festival.objects.all().order_by('name')
						pass
					else:
						festivals = Festival.objects.all().order_by('-name')
						pass
				else:
					if 'Asc' in request.POST['param']:
						festivals = Festival.objects.all().order_by('date_of_start')
						pass
					else:
						festivals = Festival.objects.all().order_by('-date_of_start')
						pass
			if request.POST['action'] == 'filter':
				filter_text = request.POST['param']
				festivals = Festival.objects.filter(name__contains=filter_text)
				pass

		return render_to_response(
			"object_list.html",
			{"object_list": festivals},
			context_instance=RequestContext(request)
		)
	festivals = Festival.objects.all()
	return render_to_response(
			"index.html",
			{"object_list": festivals},
			context_instance=RequestContext(request)
		)

