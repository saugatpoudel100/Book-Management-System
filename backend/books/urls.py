from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, RegisterUser

router = DefaultRouter()
router.register('books', BookViewSet)

urlpatterns = [
    path('register/', RegisterUser.as_view()),
    path('', include(router.urls)),
]
