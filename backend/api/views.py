from rest_framework import viewsets, mixins
from .models import MenuItem, Reservation
from .serializers import MenuItemSerializer, ReservationSerializer


class MenuItemViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer


class ReservationViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
