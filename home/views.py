from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Update 

# Create your views here.
def home_page(request):
	latest_update = Update.objects.latest('published_date')
	return render(request, 'home/home_page.html', {'update': latest_update})

def doodle_page(request):
	return render(request, 'home/doodle.html')

def archive_page(request):
	updates = Update.objects.order_by('-published_date')
	return render(request, 'home/archive.html', {'updates': updates})

def update_detail(request, pk):
	update = get_object_or_404(Update, pk=pk)
	return render(request, 'home/update_detail.html', {'update': update})