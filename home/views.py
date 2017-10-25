from django.shortcuts import render, get_object_or_404

# Create your views here.
def home_page(request):
	return render(request, 'home/home_page.html')

def doodle_page(request):
	return render(request, 'home/doodle.html')