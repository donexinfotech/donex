from django.shortcuts import render
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.core.mail import send_mail

# Create your views here.

@method_decorator(csrf_exempt, name='dispatch')
class DetailsView(APIView):
    def get(self, request):
        try:
            obj = Details.objects.all()
            serializer = DetailsSerializer(obj, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({
                'status': False,
                'message' : 'No data'
            })
        
    def post(self, request):
        data = request.data
        serializer = DetailsSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            subject = 'welcome to DoneX info tech services'
            message = f'Hi {serializer.data["first_name"]}, thank you for contacting DoneXit Services we will reach out to you soon.'
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [serializer.data['email']]
            send_mail( subject, message, email_from, recipient_list )

            subject = 'Someone contacted us'
            message = f'''first_name: {serializer.data['first_name']}\nlast_name: {serializer.data['last_name']}\nemail: {serializer.data['email']}\nphone number: {serializer.data['phone']}\ncompany: {serializer.data['company']}\nmessage: {serializer.data['message']}\n'''
            email_from = settings.EMAIL_HOST_USER
            recipient_list = ['donexinfotech@gmail.com']
            send_mail( subject, message, email_from, recipient_list )
            return Response(serializer.data)
        
        return Response({
            'status': False,
            'error' : serializer.errors
        })